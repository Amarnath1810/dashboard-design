import React from 'react'

const FeedBack = ({ item, styles }) => {
    return (
        <div className={styles.customer_details}>
            <div className={styles.customer_space}>
                <div className={styles.customer_details_wrap}>
                    <div className={styles.customer_img_block}>
                        <img src={item.imgs} className={styles.customer_img} />
                    </div>
                    <p className={styles.customer_name}>{item.name}</p>
                </div>
                    <div  className={styles.customer_rate_icon}>
                        {
                            item?.stars?.map((n)=>{
                                const StarIcons =n.star
                                console.log(n)
                                return(
                                    <div className={styles.customer_rate}>
                                        <StarIcons  height={"20px"}  width={"20px"}  fill={"yellow"}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                <div>
                    <p className={styles.customer_content}>{item.text}</p>
                </div>
            </div>
            <div className={styles.border}>

            </div>
        </div>
    )
}

export default FeedBack