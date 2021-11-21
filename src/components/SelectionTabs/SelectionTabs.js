import styles from './SelectionTabs.module.scss'


const SelectionTabs =()=> {

    return(
        <div className={styles.tabs}>
            <div className={styles.active}>Самый дешевый</div>
            <div>Самый быстрый</div>
            <div>Оптимальный</div>
        </div>
    )
}

export default SelectionTabs