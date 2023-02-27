import styles from './SearchBar.module.css'

import Plus from '../assets/plus.svg'

export function SearchBar() {
    return (
        <div className={styles.searchContainer}>
            <input className={styles.searchBar} type="text" placeholder='Add a new task'/>
            <button 
                 className={styles.createBtn}>
                 Create <img src={Plus}/> 
            </button>
        </div>
    )
}