import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, DollarSign, Users, TrendingUp, Share2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { toast } from 'sonner';

const HospitalityCalculators = () => {
  const [revparInputs, setRevparInputs] = useState({
    totalRevenue: '',
    totalRooms: '',
  });
  const [revparResult, setRevparResult] = useState<number | null>(null);

  const [staffingInputs, setStaffingInputs] = useState({
    totalRooms: '',
    occupancyRate: '',
    serviceLevel: 'standard',
  });
  const [staffingResult, setStaffingResult] = useState<any>(null);

  const calculateRevPAR = () => {
    const revenue = parseFloat(revparInputs.totalRevenue);
    const rooms = parseFloat(revparInputs.totalRooms);

    if (isNaN(revenue) || isNaN(rooms) || rooms === 0) {
      toast.error('Please enter valid numbers');
      return;
    }

    const revpar = revenue / rooms;
    setRevparResult(revpar);
  };

  const calculateStaffing = () => {
    const rooms = parseFloat(staffingInputs.totalRooms);
    const occupancy = parseFloat(staffingInputs.occupancyRate);

    if (isNaN(rooms) || isNaN(occupancy)) {
      toast.error('Please enter valid numbers');
      return;
    }

    const occupiedRooms = (rooms * occupancy) / 100;

    // Staffing ratios based on service level
    const ratios: any = {
      budget: { frontOffice: 8, housekeeping: 15, fb: 20, maintenance: 30 },
      standard: { frontOffice: 5, housekeeping: 10, fb: 12, maintenance: 20 },
      luxury: { frontOffice: 3, housekeeping: 6, fb: 8, maintenance: 15 },
    };

    const level = staffingInputs.serviceLevel as keyof typeof ratios;
    const ratio = ratios[level];

    const result = {
      frontOffice: Math.ceil(rooms / ratio.frontOffice),
      housekeeping: Math.ceil(occupiedRooms / ratio.housekeeping),
      fb: Math.ceil(rooms / ratio.fb),
      maintenance: Math.ceil(rooms / ratio.maintenance),
      total: 0,
    };

    result.total = result.frontOffice + result.housekeeping + result.fb + result.maintenance;
    setStaffingResult(result);
  };

  const shareResults = (calculator: string, result: any) => {
    const text = calculator === 'revpar'
      ? `RevPAR Calculator Result: $${result.toFixed(2)} per available room`
      : `Staffing Calculator Result: ${result.total} total staff recommended`;

    if (navigator.share) {
      navigator.share({
        title: 'Hospitality Calculator Results',
        text: text,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(text);
      toast.success('Results copied to clipboard!');
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4"
        >
          <Calculator className="h-8 w-8 text-primary" />
        </motion.div>
        <h2 className="text-3xl font-bold mb-4">Hospitality Calculators</h2>
        <p className="text-muted-foreground">
          Professional tools to optimize your hotel operations
        </p>
      </div>

      <Tabs defaultValue="revpar" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="revpar">RevPAR Calculator</TabsTrigger>
          <TabsTrigger value="staffing">Staff Ratio Optimizer</TabsTrigger>
        </TabsList>

        <TabsContent value="revpar">
          <Card className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-primary" />
                  Revenue Per Available Room (RevPAR)
                </h3>
                <p className="text-sm text-muted-foreground">
                  Calculate your hotel's RevPAR to measure revenue performance
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="revenue">Total Room Revenue ($)</Label>
                  <Input
                    id="revenue"
                    type="number"
                    placeholder="50000"
                    value={revparInputs.totalRevenue}
                    onChange={(e) => setRevparInputs({ ...revparInputs, totalRevenue: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="rooms">Total Available Rooms</Label>
                  <Input
                    id="rooms"
                    type="number"
                    placeholder="100"
                    value={revparInputs.totalRooms}
                    onChange={(e) => setRevparInputs({ ...revparInputs, totalRooms: e.target.value })}
                  />
                </div>

                <Button onClick={calculateRevPAR} className="w-full">
                  Calculate RevPAR
                </Button>
              </div>

              {revparResult !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-primary/5 border border-primary/20 rounded-lg p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Your RevPAR</p>
                      <p className="text-4xl font-bold text-primary">${revparResult.toFixed(2)}</p>
                    </div>
                    <TrendingUp className="h-12 w-12 text-primary/20" />
                  </div>
                  <div className="space-y-2 text-sm">
                    <p className="flex justify-between">
                      <span className="text-muted-foreground">Industry Average (3-star):</span>
                      <span className="font-medium">$70-90</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-muted-foreground">Industry Average (4-star):</span>
                      <span className="font-medium">$100-150</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-muted-foreground">Industry Average (5-star):</span>
                      <span className="font-medium">$200+</span>
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mt-4"
                    onClick={() => shareResults('revpar', revparResult)}
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    Share Results
                  </Button>
                </motion.div>
              )}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="staffing">
          <Card className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Staff-to-Guest Ratio Optimizer
                </h3>
                <p className="text-sm text-muted-foreground">
                  Calculate optimal staffing levels based on your property size and service level
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="total-rooms">Total Rooms</Label>
                  <Input
                    id="total-rooms"
                    type="number"
                    placeholder="150"
                    value={staffingInputs.totalRooms}
                    onChange={(e) => setStaffingInputs({ ...staffingInputs, totalRooms: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="occupancy">Average Occupancy Rate (%)</Label>
                  <Input
                    id="occupancy"
                    type="number"
                    placeholder="75"
                    value={staffingInputs.occupancyRate}
                    onChange={(e) => setStaffingInputs({ ...staffingInputs, occupancyRate: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="service-level">Service Level</Label>
                  <select
                    id="service-level"
                    className="w-full px-3 py-2 border border-input rounded-md bg-background"
                    value={staffingInputs.serviceLevel}
                    onChange={(e) => setStaffingInputs({ ...staffingInputs, serviceLevel: e.target.value })}
                  >
                    <option value="budget">Budget / Economy</option>
                    <option value="standard">Standard / Mid-Scale</option>
                    <option value="luxury">Luxury / High-End</option>
                  </select>
                </div>

                <Button onClick={calculateStaffing} className="w-full">
                  Calculate Staffing
                </Button>
              </div>

              {staffingResult && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-primary/5 border border-primary/20 rounded-lg p-6"
                >
                  <p className="text-sm text-muted-foreground mb-4">Recommended Staff Count</p>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Front Office</span>
                      <span className="text-xl font-bold">{staffingResult.frontOffice}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Housekeeping</span>
                      <span className="text-xl font-bold">{staffingResult.housekeeping}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">F&B Service</span>
                      <span className="text-xl font-bold">{staffingResult.fb}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Maintenance</span>
                      <span className="text-xl font-bold">{staffingResult.maintenance}</span>
                    </div>
                    <div className="border-t pt-3 flex justify-between items-center">
                      <span className="font-semibold">Total Staff</span>
                      <span className="text-3xl font-bold text-primary">{staffingResult.total}</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => shareResults('staffing', staffingResult)}
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    Share Results
                  </Button>
                </motion.div>
              )}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HospitalityCalculators;
