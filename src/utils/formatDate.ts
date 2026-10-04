import { format, parseISO, isValid } from 'date-fns';

/**
 * Safari-safe date formatter.
 *
 * Safari's Date constructor rejects several date-string formats that
 * Chrome / Firefox accept (e.g. `"2025-03-14 12:00:00"`). When
 * `date-fns`'s `format()` receives an `Invalid Date`, it throws an
 * unhandled `RangeError` that can crash React without an ErrorBoundary.
 *
 * This helper:
 * 1. Tries `parseISO` first (strict ISO 8601 parser, no Safari quirks).
 * 2. Falls back to `new Date()`.
 * 3. Returns a fallback string instead of throwing on invalid input.
 */
export function formatDateSafe(
  dateInput: string | Date | null | undefined,
  pattern: string = 'MMM dd, yyyy',
  fallback: string = '',
): string {
  if (!dateInput) return fallback;

  let date: Date;
  if (dateInput instanceof Date) {
    date = dateInput;
  } else {
    // Normalize space-separated SQL timestamp strings ("2025-03-14 12:00:00") to ISO format for Safari
    const normalized = typeof dateInput === 'string' ? dateInput.trim().replace(' ', 'T') : dateInput;
    date = parseISO(normalized);
    if (!isValid(date)) {
      // Last resort — constructor can still handle some formats
      date = new Date(normalized);
    }
  }

  if (!isValid(date)) return fallback;

  try {
    return format(date, pattern);
  } catch {
    return fallback;
  }
}
