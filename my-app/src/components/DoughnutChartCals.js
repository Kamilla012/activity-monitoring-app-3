import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto"; // Import chart.js/auto
import styles from "../style";

const DoughnutChartSteps = (props) => {
  const data = {
    labels: ["orange"],
    datasets: [
      {
        label: "Dataset 1",
        data: [props.props[0]],
        backgroundColor: "#CC0066",
      },
    ],
  };

  const options = {
    
      cutout: "70%",
      
    
  };

  return (
    <div className={`${styles.sectionXY} flex`}>
      <div className={`${styles.doughnutParent} `}>
        <div className={`${styles.doughnut}`}>
          <h4 className="text-[18px]">{props.props[0]}</h4>
          <p className="text-[10px]">
            Calories <br></br>consumed
          </p>
        </div>
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default DoughnutChartSteps;
