/** React Imports */
import React from 'react'

/** Icons */
import { ReactComponent as TextIcon } from '../../assets/icons/apps.svg'
import {ReactComponent as SearchIcon } from '../../assets/icons/search.svg'
import {ReactComponent as MailIcon }  from '../../assets/icons/envelope.svg'
import {ReactComponent as BellIcon} from '../../assets/icons/bell.svg'
import {ReactComponent as SettingsIcon} from '../../assets/icons/settings.svg'

/** Images */
import ProfileImage from '../../assets/images/pi-2.webp'

/** styles */
import styles from './header.module.scss'

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header_wrap}>
                <div>
                    <TextIcon height="20px" width="20px" fill={'#7295fe'} />
                </div>
                <div  className={styles.search_wrap}>
                    <div className={styles.search_icon}>
                        <SearchIcon height={"15px"} width={'15px'} fill={'#fefefe'}/>
                    </div>
                    <input  type="text" placeholder='Search' className={styles.header_text_input}/>
                </div>
            </div>
            <div  className={styles.profile_wrap}>
                <div className={styles.header_icon_wrap}>
                    {
                         IconsData.map((item)=>{
                            const HeaderIcon = item.Icon

                            return(
                                <div className={styles.hedaer_left_icon}>
                                    <HeaderIcon  height={"16px"} width={'16px'}  fill={"#ffff"}/>
                                </div>
                            )
                         })
                    }
                </div>
                <div className={styles.user_pf}>
                    <img   src={ProfileImage}  className={styles.user_img}/>
                </div>
            </div>
        </div>
    )
}

export default Header


const IconsData = [
    {

        id:1,
        Icon:MailIcon
    },
    {

        id:2,
        Icon:SettingsIcon
    },
    {

        id:3,
        Icon:BellIcon
    },
    
]