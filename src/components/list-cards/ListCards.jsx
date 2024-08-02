import React from 'react'
import {ReactComponent as LeftArrowIcon} from '../../assets/icons/angle-small-right.svg'


const ListCards = ({ item, styles }) => {

    const Icon = item.Icon

    return (
        <div className={styles.list_card_content}>
            <div className={styles.list_card_text_wrap}>
                <div className={styles.list_card_icon} style={{backgroundColor:item.iconcolor}}>
                    <Icon   height={'20px'}  width={'20px'}  fill={item.color}/>
                </div>
                <p className={styles.list_card_name}>{item.name}</p>
            </div>
            <div className={styles.left_card_icon}>
                <LeftArrowIcon  height={"18px"} width={"18px"}  fill={'white'}/>
            </div>
        </div>
    )
}

export default ListCards