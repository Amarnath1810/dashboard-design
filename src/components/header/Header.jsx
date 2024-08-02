import React from 'react'
import styles from './header.module.scss'
import { ReactComponent as TextIcon } from '../../assets/icons/apps.svg'

const Header = () => {
    return (
        <div className={styles.container}>
            <div>
                <div>
                    <TextIcon height="20px" width="20px" fill={'#7295fe'} />
                </div>

                <div>

                </div>
            </div>
        </div>
    )
}

export default Header