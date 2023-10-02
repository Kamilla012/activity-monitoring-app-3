import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import WaterFormModal from "./WaterFormModal";
import styles from "../style";

const BarChart = (props) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [range, setRange] = useState();

  const openModal = () => {
    setIsPopupOpen(true);
  };

  console.log(props.props);

  const closeModal = () => {
    setIsPopupOpen(false);
  };
  const chartData = {
    labels: [],
    datasets: [],
  };

  props.props.forEach((item) => {
    const date = Object.keys(item)[0];
    const items = item[date];

    if (Array.isArray(items) && items.length > 0) {
      const totalCalories = items.reduce(
        (total, item) => total + (item.calories_consumed || 0),
        0
      );

      chartData.labels.push(date);

      chartData.datasets.push({
        label: `Total Calories Consumed (${date})`,
        data: [totalCalories],
        backgroundColor: ["rgba(254, 151, 27, 255)"], // Use an array for backgroundColor
        borderColor: "rgba(134, 69, 37, 255)",
        borderWidth: 2,
        barThickness: 30,
      });
    }
  });

  const options = {
    maintainAspectRatio: false, // Zapobiega domyślnej responsywności wykresu
    plugins: {
      legend: {
        display: false, // Ukrycie legendy
      },
    },
    scales: {
      x: {
        stacked: true,
        categoryPercentage: 0.2, // Zmniejsza szerokość słupków w jednym zbiorze danych
        barPercentage: 0.8,
        grid: {
          display: false, // Usunięcie siatki dla osi X
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false, // Usunięcie siatki dla osi Y
        },
      },
    },
  };

  return (
    <div className={`${styles.sectionXY} flex`}>
      <div className="flex flex-col relative">
        <div
          className="vertical-line-chart"
          style={{ width: "400px", height: "280px" }}
        >
          <Bar data={chartData} options={options} />
        </div>

        <div>
          {isPopupOpen ? (
            <div>
              <button onClick={closeModal} className="text-[30px] white">
                Zamknij Popup
              </button>
              <WaterFormModal onClose={closeModal} />{" "}
              {/* Przekazujemy funkcję onClose */}
            </div>
          ) : (
            <button
              onClick={openModal}
              className="text-[30px] text-white absolute bottom-60 right-2 border border-white border-3 rounded-full px-3 text-center align-middle bg-[rgba(99,32,80,255)]"
            >
              +
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BarChart;
