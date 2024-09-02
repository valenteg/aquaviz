import { type ChartConfig } from "@/components/ui/chart";

export const chartConfig: ChartConfig = {
  temperature: {
    label: "Temperature",
    color: "#ff4d4f", // Use a hex color instead of CSS variable
  },
  salinity: {
    label: "Salinity",
    color: "var(--chart-2)",
  },
  currentSpeed: {
    label: "Current Speed",
    color: "var(--chart-3)",
  },
  lightIntensity: {
    label: "Light Intensity",
    color: "var(--chart-4)",
  },
  nutrients: {
    label: "Nutrients",
    color: "var(--chart-5)",
  },
};
