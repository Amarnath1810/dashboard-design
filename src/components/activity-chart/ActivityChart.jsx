import React from "react";
import { VictoryChart, VictoryBar, VictoryTheme, VictoryAxis } from "victory";

const ActivityChart = () => {
    // Define your data points with multiple x values for each y value
    const data = [
        { x: 5, y: 1000 },
        { x: 5, y: 3000 },
        { x: 5, y: 5000 },
        { x: 9, y: 6000 },
        { x: 9, y: 8000 },
        { x: 9, y: 5000 },
        { x: 11, y: 1000 },
        { x: 11, y: 8000 },
        { x: 11, y: 8000 },
        { x: 13, y: 8000 },
        { x: 13, y: 16000 },
        { x: 13, y: 8000 },
        { x: 15, y: 6000 },
        { x: 15, y: 2000 },
        { x: 15, y: 2000 },
        { x: 17, y: 8000 },
        { x: 17, y: 2000 },
        { x: 17, y: 3000 },
        { x: 20, y: 3000 },
        { x: 20, y: 3000 },
        { x: 20, y: 7000 },
        { x: 23, y: 9000 },
        { x: 23, y: 6000 },
        { x: 23, y: 9000 }
    ];

    return (
        <VictoryChart 
            theme={VictoryTheme.material}
            width={600}
            height={180}
        >
            <VictoryAxis
                tickValues={[5, 9, 11, 13, 15, 17, 20, 23]}
                tickFormat={(t) => `${t}`}
                style={{
                    axis: { stroke: "transparent" }, // Make the axis line transparent
                    grid: {
                        stroke: "transparent",
                    }
                }}
            />
            <VictoryAxis
                dependentAxis
                tickValues={[0, 5000, 10000, 15000]}
                tickFormat={(t) => `${t / 1000}k`}
                style={{
                    axis: { stroke: "transparent" }, // Make the axis line transparent
                    grid: {
                        stroke: "#E5E5E5",
                        strokeDasharray: "5,5"
                    }
                }}
            />
            <VictoryBar
                data={data}
                style={{
                    data: {
                        fill: "rgb(115, 148, 255)",
                        borderRadius: 5,
                    }
                }}
                barWidth={16} // Increase bar width
                cornerRadius={{ top: 5, bottom: 5 }}  
                alignment="middle"
            />
        </VictoryChart>
    );
};

export default ActivityChart;
