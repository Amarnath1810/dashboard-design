import React from 'react';
import styles from './sidebar.module.scss';
import Header from '../../components/header/Header';

/** Icons */
import {ReactComponent as HomeIcon } from '../../assets/icons/home.svg'
import {ReactComponent as StatsIcon } from '../../assets/icons/stats.svg'
import {ReactComponent as ClipPadIcon } from '../../assets/icons/clipboard-check (1).svg'
import {ReactComponent as BagIcon } from '../../assets/icons/bag-tick-2-svgrepo-com (1).svg'
import {ReactComponent as BookIcon } from '../../assets/icons/diary-clasp.svg'
import {ReactComponent as LogoutIcon}  from '../../assets/icons/logout.svg'

const SideBar = ({ children }) => {
    return (
        <>
            <Header/>
            <div className={styles.main}>
                <div className={styles.container}>
                    <div>
                        {SideBarList.map((item) => {
                            const IconData = item.Icon;
                            return (
                                <div key={item.id} className={styles.icons}>
                                    <IconData height={"20px"} width={"20px"} fill={"#7295fe"} />
                                </div>
                            );
                        })}
                    </div>
                    <div className={styles.log_out_btn}>
                        <LogoutIcon height={"20px"} width={"20px"} fill={"#7295fe"} />
                    </div>
                </div>
                <main className={styles.left}>
                    {children}
                </main>
            </div>
        </>
    );
}

export default SideBar;


const SideBarList = [
    {
        id:1,
        Icon:HomeIcon
    },
    {
        id:2,
        Icon:StatsIcon
    },
    {
        id:3,
        Icon:ClipPadIcon
    },
    {
        id:4,
        Icon:BookIcon,
    },
    {
        id:3,
        Icon:BagIcon
    }
]