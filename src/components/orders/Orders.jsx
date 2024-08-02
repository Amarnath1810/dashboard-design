import React from 'react'

const Orders = ({ item, styles }) => {
    
    return (
        <tr>
            <td className={styles.img_wrap}>
                 <div  className={styles.user_image}>
                    <img src={item.imgs}  alt='profileimg'   className={styles.user_img}/>
                 </div>
                <span  className={styles.user_name}>  {item.customerName}</span>
            </td>
            <td>{item.orderNo}</td>
            <td>{item.amount}</td>
            <td >
                <span className={item.status==="Delivered"?styles.status_success:styles.status_fail}>{item.status}</span>
            </td>
        </tr>
    )
}

export default Orders