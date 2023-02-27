import styles from './Tasks.module.css'

import clipBoard from '../assets/clipboard.svg'

export function Tasks() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainHeader}>
                <p className={styles.created}>Created tasks <span>0</span></p>
                <p className={styles.concluded}>Concluded <span>0</span></p>
                <hr />
            </div>
            <div className={styles.mainBody}>
                <img src={clipBoard} alt="clipboard" />
                   <p>
                      You still dont have any registered tasks<br/> 
                      Create tasks and organize your day
                   </p>
            </div>
        </div>
    )
}