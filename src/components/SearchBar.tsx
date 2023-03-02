import styles from './SearchBar.module.css'

import Plus from '../assets/plus.svg'

interface searchBar {
    type: string,
    placeHolder: string,
    btnDescription: string
}

export function SearchBar(props:searchBar) {
    return (
        <div className={styles.searchContainer}>
            <input className={styles.searchBar} type={props.type} placeholder={props.placeHolder}/>
            <button 
                 className={styles.createBtn}>
                 {props.btnDescription} <img src={Plus}/> 
            </button>
        </div>
    )
}