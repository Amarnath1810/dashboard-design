import React from 'react'
import {ReactComponent as CaretUpIcon} from '../../assets/icons/caret-up.svg'
import {ReactComponent as CaretDownIcon} from '../../assets/icons/caret-down.svg'

const DashBoardCards = ({item, styles}) => {

    const Icon = item.Icon

  return (
    <>
        <div className={`${styles.counter_logo}`} style={{backgroundColor:item.color}}>
            <Icon  height={'25px'} width={"25px"}  fill={item.iconcolor}/>
        </div>
        <p className={styles.counter_title}>{item.title}</p>
         <div  className={styles.counter_text_wrap}>
            <p className={styles.counter_text}>{item.count}</p>
            <div className={styles.counter_percent_wrap}>
                <div>
                    {
                       item.id % 2 === 0 ? 
                       <CaretDownIcon  height={"15px"}  width={"15px"}  fill={'#893e42'}  />
                            :
                       <CaretUpIcon height={"15px"}  width={"15px"}   fill={'#146351'}/>
                    }
                </div>
                <p className={styles.counter_percenatge_text} style={{color:item.id%2===0?"#c9585b":"#269374"}}>
                    {item.value}
                </p>
            </div>
         </div>
    </>
  )
}

export default DashBoardCards