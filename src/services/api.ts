import { createClient } from '@supabase/supabase-js';

const supabase = createClient('YOUR_SUPABASE_URL', 'YOUR_SUPABASE_ANON_KEY');

// Mock data
const mockFarms = [
  { id: '1', name: 'Farm A' },
  { id: '2', name: 'Farm B' },
  { id: '3', name: 'Farm C' },
];

const mockEnvironmentalData = {
  temperature: 22.5,
  salinity: 35,
};

export const fetchFarms = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockFarms;
};

export const fetchEnvironmentalData = async (farmId: string) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return { ...mockEnvironmentalData, farmId };
};