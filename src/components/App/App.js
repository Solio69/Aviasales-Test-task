// import './App.scss';


import styles from './App.module.scss';

import Logo from '../Logo';
import Filters from '../Filters';
import SelectionTabs from '../SelectionTabs';
import TicketsList from '../TicketsList';
import Button from '../Button';
import Burger from '../Burger';

const App =() =>{

  return (
    <div className={styles['app']}>
     
      <header className={styles['header']}>
        <div className={styles['header__logo-wrapper']}>
          <Logo/>
        </div>
        <div className={styles['header__burger-wrapper']}>
              <Burger/>
        </div>
      </header>
      <main className={styles['main']}>
        <section className={styles['main__content']}>
        
          <div>
            <Filters/>
          </div>
          
          <div>
            
            <div>
              
              <SelectionTabs/>
            </div>
            <div>
              <TicketsList/>
              <Button/>
            </div>
          </div>
          
        </section>
               
      </main> 
    
         
    </div>
  );
}

export default App;
