/** React Imports */
import React from 'react';

/** Components */
import DashBoardCards from '../../components/dashboard-cards/DashBoardCards';
import Orders from '../../components/orders/Orders';

/** Images */
import Imageone from '../../assets/images/pi-1.avif'
import Imagetwo from '../../assets/images/pi-2.webp'
import Imagethree from '../../assets/images/pi-3.jpeg'
import Imagefour from '../../assets/images/pi-4.jpeg'
import Imagefive from '../../assets/images/pi-6.avif'

/** Icons */
import { ReactComponent as AddIcon } from '../../assets/icons/shopping-bag-add.svg'
import { ReactComponent as TickIcon } from '../../assets/icons/bag-tick-2-svgrepo-com (1).svg'
import { ReactComponent as CrossIcon } from '../../assets/icons/bag-cross-svgrepo-com.svg'
import { ReactComponent as DollarIcon } from '../../assets/icons/dollar-circle-svgrepo-com.svg'
import { ReactComponent as FocusIcon } from '../../assets/icons/target.svg'
import { ReactComponent as BurgerIcon } from '../../assets/icons/hamburger.svg'
import { ReactComponent as DishIcon } from '../../assets/icons/room-service.svg'
import { ReactComponent as CaretUpIcon } from '../../assets/icons/caret-up.svg'
import { ReactComponent as CaretDownIcon } from '../../assets/icons/caret-down.svg'
import { ReactComponent as StarIcon } from '../../assets/icons/star.svg'

/** Styles */
import styles from './home.module.scss'
import ListCards from '../../components/list-cards/ListCards';
import FeedBack from '../../components/feed-back/FeedBack';
import ActivityChart from '../../components/activity-chart/ActivityChart';
import CustomProgressCircle from '../../components/custom-range-circle/CustomProgressCircle';

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container_wrap}>
                <div>
                    <p className={styles.dashboard_title}>Dashboard</p>
                </div>
                <div className={styles.dashboard_content}>
                    <div className={styles.dashboard_right}>
                        <div className={styles.dashboard_counter_cards}>
                            {
                                CardsData.map((item) => {
                                    return (
                                        <div className={styles.couter_cards}>
                                            <DashBoardCards
                                                {
                                                ...{
                                                    item,
                                                    styles
                                                }
                                                }
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className={styles.activity_catrt_area}>
                            <div className={styles.activity_chart_title_area}>
                                <p className={styles.title}>Activity</p>
                                <div className={styles.activity_select_list}>
                                    <button className={styles.activity_select_btn}>
                                        <span className={styles.btn_text}>
                                            Weekly
                                        </span>
                                        <div>
                                            <CaretDownIcon height={"15px"} width={"15px"} fill={"white"} />
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <ActivityChart />
                        </div>
                        <div className={styles.order_table}>
                            <p className={styles.title}>Recent Orders</p>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Customers</th>
                                        <th>Order No</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        ordersData.map((item) => {
                                            return (
                                                <Orders
                                                    {
                                                    ...{
                                                        item,
                                                        styles
                                                    }
                                                    }
                                                />
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={styles.dashboard_left}>
                        <div>
                            {
                                ProfitCard.map((item) => {
                                    return (
                                        <div className={styles.profit_card}>
                                            <div>
                                                <p className={styles.profit_card_title}>{item.title}</p>
                                                <p className={styles.profit_count_txt}>{item.count}</p>
                                                <p className={styles.profit_value}>{item.value}</p>
                                            </div>
                                            <div className={styles.profit_bar}>
                                                <div>
                                                    <CustomProgressCircle />
                                                </div>
                                                <div>
                                                    <p className={styles.profit_caption}>*The values here has been rounded off</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className={styles.list_cards}>
                            {
                                ListData.map((item) => {
                                    return (
                                        <ListCards
                                            {
                                            ...{
                                                item,
                                                styles
                                            }
                                            }
                                        />
                                    )
                                })
                            }
                        </div>
                        <div className={styles.custmer_feedback_wrap}>
                            <p className={styles.title_text}>Customers Feedback</p>
                            <div className={styles.customer_list}>
                                {
                                    CustomersData.map((item) => {
                                        return (
                                            <FeedBack
                                                {
                                                ...{
                                                    item,
                                                    styles
                                                }
                                                }
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

const CardsData = [
    {
        id: 1,
        title: "Total Orders",
        count: "75",
        value: "3%",
        Icon: AddIcon,
        iconcolor: "#99a4db",
        color: '#3657f2',
        caretIcon: CaretUpIcon
    },
    {
        id: 2,
        title: "Total Delivered",
        count: "70",
        value: "3%",
        Icon: TickIcon,
        color: "#165247",
        iconcolor: "#02c98c",
        caretIcon: CaretDownIcon
    },
    {
        id: 3,
        title: "Total Cancelled",
        count: "05",
        value: "3%",
        Icon: CrossIcon,
        color: "#5e3238",
        iconcolor: "#f45c5b",
        caretIcon: CaretUpIcon
    },
    {
        id: 4,
        title: "Total Revenue",
        count: "$12k",
        value: "3%",
        color: "#712657",
        Icon: DollarIcon,
        iconcolor: "#de4d9e",
        caretIcon: CaretDownIcon
    },

]

const ordersData = [
    {
        customerName: "John Doe",
        orderNo: "12345",
        amount: "$150.00",
        status: "Delivered",
        imgs: Imageone
    },
    {
        customerName: "Jane Smith",
        orderNo: "12346",
        amount: "$200.00",
        status: "Delivered",
        imgs: Imagetwo
    },
    {
        customerName: "Alice Johnson",
        orderNo: "12347",
        amount: "$120.00",
        status: "Delivered",
        imgs: Imagethree
    },
    {
        customerName: "Bob Brown",
        orderNo: "12348",
        amount: "$300.00",
        status: "Pending",
        imgs: Imagefour
    },
    {
        customerName: "Carol White",
        orderNo: "12349",
        amount: "$250.00",
        status: "Pending",
        imgs: Imagefive
    },
    {
        customerName: "Alice Johnson",
        orderNo: "12347",
        amount: "$120.00",
        status: "Delivered",
        imgs: Imagethree
    },

];

const ProfitCard = [
    {
        id: 1,
        title: "Net profit",
        count: "$6579.35",
        value: "3%",
        color: "#525696",
        Icon: AddIcon,
        iconcolor: '#3657f2'
    },
]

const ListData = [
    {
        id: 1,
        name: "Goals",
        Icon: FocusIcon,
        color: "#5e3238",
        iconcolor: "#f45c5b",

    },
    {
        id: 2,
        name: "Popular Dishes",
        Icon: BurgerIcon,
        color: "#99a4db",
        iconcolor: '#3657f2'

    },
    {
        id: 3,
        name: "Menus",
        Icon: DishIcon,
        color: "#165247",
        iconcolor: "#02c98c"

    }
]

const CustomersData = [
    {
        id: 1,
        name: "Jenny Wilson",
        text: `html is short for HyperText Markup Language, which means 
        that it is used to annotate text. In the case of HTML, the annotations are used html is short for HyperText Markup Language, which means 
        that it is used to annotate text.`,
        imgs: Imagethree,
        stars: [
            {
                id: 1,
                star: StarIcon
            },
            {
                id: 2,
                star: StarIcon
            },
            {
                id: 3,
                star: StarIcon
            },
            {
                id: 4,
                star: StarIcon
            },
            {
                id: 5,
                star: StarIcon
            }
        ]

    },
    {
        id: 2,
        name: "Diana usselle",
        text: `html is short for HyperText Markup Language, which means 
        that it is used to annotate text. In the case of HTML html is short for HyperText Markup Language, which means 
        that it is used to annotate text.`,
        imgs: Imageone,
        stars: [
            {
                id: 1,
                star: StarIcon
            },
            {
                id: 2,
                star: StarIcon
            },
            {
                id: 3,
                star: StarIcon
            },
            {
                id: 4,
                star: StarIcon
            },
            {
                id: 5,
                star: StarIcon
            }
        ]
    },
    {
        id: 3,
        name: "Devon lane",
        text: `html is short for HyperText Markup Language, which means 
        that it is used to annotate text. In the case of HTML html is short for HyperText Markup Language, which means 
        that it is used to annotate text.`,
        imgs: Imagetwo,
        stars: [
            {
                id: 1,
                star: StarIcon
            },
            {
                id: 2,
                star: StarIcon
            },
            {
                id: 3,
                star: StarIcon
            },
            {
                id: 4,
                star: StarIcon
            },
            {
                id: 5,
                star: StarIcon
            }
        ]
    }
]