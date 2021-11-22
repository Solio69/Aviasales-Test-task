import styles from './Filters.module.scss'

const Filters =()=>{

    return(
        <div className={styles['filters']}>
            <div>Количество пересадок</div>
            <ul>
                <li>
                    <label className={styles['checkbox-label']}>
                        <input type="checkbox" className={styles['checkbox-input']}/>
                        <span className={styles['check-box']}></span>
                        Все
                    </label>
                </li>
                <li>
                    <label className={styles['checkbox-label']}>
                        <input type="checkbox" className={styles['checkbox-input']}/>
                        <span className={styles['check-box']}></span>
                        Без пересадок
                    </label>
                </li>
                <li>
                    <label className={styles['checkbox-label']}>
                        <input type="checkbox" className={styles['checkbox-input']}/>
                        <span className={styles['check-box']}></span>
                        1 пересадка
                    </label>
                </li>
                <li>
                    <label className={styles['checkbox-label']}>
                        <input type="checkbox" className={styles['checkbox-input']}/>
                        <span className={styles['check-box']}></span>
                        2 пересадки
                    </label>
                </li>
                <li>
                    <label className={styles['checkbox-label']}>
                        <input type="checkbox" className={styles['checkbox-input']}/>
                        <span className={styles['check-box']}></span>
                        3 пересадки
                    </label>
                </li>
            </ul>
        </div>
    )
}

export default Filters