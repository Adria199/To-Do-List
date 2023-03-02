import styles from './EmptyTasks.module.css'


import clipBoard from '../assets/clipboard.svg'



interface emptyTask {
    id?: number,
    tasks: {createdTaskTitle: string;
    concluded: string;
    createdCount: number;
    concludedCount: number;
    clipboardSvg?: string;
    defaultMessage1?: string;
    defaultMessage2?: string;
 }
}




export function EmptyTasks(props:emptyTask) {

    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainHeader}>
                <p className={styles.created}>{props.tasks.createdTaskTitle}<span>{props.tasks.createdCount}</span></p>
                <p className={styles.concluded}>{props.tasks.concluded}<span>{props.tasks.concludedCount}</span></p>
                <hr />
            </div>
            <div className={styles.mainBody}>
            <img src={clipBoard} alt={props.tasks.clipboardSvg} />
                <p>
                   {props.tasks.defaultMessage1}<br/> 
                   {props.tasks.defaultMessage2}
                </p> 
            </div>
        </div>
    )
}

