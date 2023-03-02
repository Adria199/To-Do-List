import styles from './FilledTasks.module.css'

interface createdTask {
    id?: number,
    tasks: {
       createdTaskTitle: string,
       concluded: string,
       createdCount: number,
       concludedCount: number,
    },
  }

export function FilledTasks(props:createdTask) {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainHeader}>
                <p className={styles.created}>{props.tasks.createdTaskTitle}<span>{props.tasks.createdCount}</span></p>
                <p className={styles.concluded}>{props.tasks.concluded}<span>{props.tasks.concludedCount}</span></p>
                <hr />
            </div>
            <div className={styles.mainBody}>
            </div>
        </div>
    )
}