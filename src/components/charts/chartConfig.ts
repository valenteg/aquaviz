import { type ChartConfig } from "@/components/ui/chart";

export const chartConfig: ChartConfig = {
  temperature: {
    label: "Temperature",
    color: "#ff4d4f", // Use a hex color instead of CSS variable
  },
  salinity: {
    label: "Salinity",
    color: "hsl(var(--chart-2))",
  },
  currentSpeed: {
    label: "Current Speed",
    color: "hsl(var(--chart-3))",
  },
  lightIntensity: {
    label: "Light Intensity",
    color: "hsl(var(--chart-4))",
  },
  nutrients: {
    label: "Nutrients",
    color: "hsl(var(--chart-5))",
  },
  growthRate: {
    label: "Growth Rate",
    color: "#4CAF50", // Added for HarvestYieldPredictor
  },
};
