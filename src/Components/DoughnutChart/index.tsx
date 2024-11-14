import React, { useEffect, useRef } from "react";
import {
  Chart,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend,
  ChartConfiguration,
  Plugin,
} from "chart.js";

Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  data: number[];
  type: string[];
  total: number;
  backgroundColors: string[];
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({
  data,
  total,
  backgroundColors,
  type,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const chartData = {
    labels: type,
    datasets: [
      {
        data,
        backgroundColor: backgroundColors,
        hoverBackgroundColor: backgroundColors.map((color) => color + "AA"),
        hoverOffset: 20,
        borderWidth: 0,
      },
    ],
  };

  const config: ChartConfiguration<"doughnut", number[], string> = {
    type: "doughnut",
    data: chartData,
    options: {
      cutout: "85%", // Optional: Adjust cutout to your liking
      plugins: {
        tooltip: { enabled: true }, // Disable tooltips
        legend: { display: false }, // Disable legend
      },
      elements: {
        arc: {
          borderWidth: 0, // Ensure border width is set here as well
        },
      },
    },
  };

  const centerTextPlugin: Plugin<"doughnut"> = {
    id: "centerTextPlugin",
    afterDraw(chart) {
      const { ctx, chartArea } = chart;
      const text = total.toString();

      const fontSize = 32;
      const fontStyle = "normal";
      const fontWeight = 700; // Bold
      const fontFamily = "Inter";
      const color = "#000";

      ctx.save();
      ctx.font = `${fontWeight} ${fontStyle} ${fontSize}px ${fontFamily}`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = color;

      const x = (chartArea.left + chartArea.right) / 2;
      const y = (chartArea.top + chartArea.bottom) / 2;

      ctx.fillText(text, x, y);
      ctx.restore();
    },
  };

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (ctx) {
      const doughnutChart = new Chart(ctx, {
        ...config,
        plugins: [centerTextPlugin],
      });

      return () => {
        doughnutChart.destroy();
      };
    }
  }, [total]);

  return (
    <div style={{ width: "200px", height: "200px" }}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default DoughnutChart;
