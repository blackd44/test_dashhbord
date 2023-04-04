import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useRef } from "react";

export default function BarChart({ data, options }) {
  const chartRef = useRef();
  return <Bar
    ref={chartRef} 
    data={data} 
    options={options}
  />
}