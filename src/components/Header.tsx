import styles from './Header.module.css'
import RocketLogo from '../assets/rocket-logo.svg'

export function Header() {
    return (
        <header className={styles.header}>
           <div className={styles.logo}>
               <img src={RocketLogo} alt="rocket logo"/>
               <p>to<span>do</span>  </p>
           </div>
        </header>
    )
}