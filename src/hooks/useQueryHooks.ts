import { useQuery } from '@tanstack/react-query';
import { fetchFarms, fetchEnvironmentalData } from '../services/api';

export const useFarms = () => {
  return useQuery(['farms'], fetchFarms);
};

export const useEnvironmentalData = (farmId: string) => {
  return useQuery(['environmentalData', farmId], () => fetchEnvironmentalData(farmId), {
    enabled: !!farmId,
  });
};