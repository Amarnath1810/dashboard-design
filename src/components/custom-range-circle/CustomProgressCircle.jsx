import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styles from './rangecircle.module.scss'

const CustomProgressCircle = () => {
    return (
        <div style={{ position: 'relative', width: 80, height: 80 }}>
            <CircularProgressbar
                value={77}
                text={`${77}%`}
                background
                strokeWidth={10}
                styles={buildStyles({
                    backgroundColor: '#f3f3f3',
                    textColor: '#000',
                    pathColor: '#7593f3',
                    trailColor: '#2b3265',
                })}
            />
        </div>
    );
};

export default CustomProgressCircle;
