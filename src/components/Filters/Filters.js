import styles from './Filters.module.scss'

const Filters =()=>{

    return(
        <div className={styles.filters}>
            <div>Количество пересадок</div>
            <ul>
                <li>
                    <label><input type="checkbox"/>Все</label>
                </li>
                <li>
                    <label><input type="checkbox"/>Без пересадок</label>
                </li>
                <li>
                    <label><input type="checkbox"/>1 пересадка</label>
                </li>
                <li>
                    <label><input type="checkbox"/>2 пересадки</label>
                </li>
                <li>
                    <label><input type="checkbox"/>3 пересадки</label>
                </li>
            </ul>
        </div>
    )
}

export default Filters