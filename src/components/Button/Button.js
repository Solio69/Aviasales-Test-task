

import styles from './Button.module.scss';

const Button=()=>{

    return (
        <div className={styles['button-show-more__wrapper']}>
            <button type='button' >
                Показать еще 5 билетов!
            </button>
        </div>
        
    )
}

export default Button