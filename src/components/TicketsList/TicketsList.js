
import styles from './TicketsList.module.scss'
import Ticket from '../Ticket';

const TicketsList =()=>{

    return(
        <div className={styles['tickets-list']}>
            <Ticket/>
            <Ticket/>
            <Ticket/>
            <Ticket/>
            <Ticket/>
        </div>
    )

}

export default TicketsList