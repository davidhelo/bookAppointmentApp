import servicesBank from '../../servicesDataBank';

import styles from '../styles/styles.module.css';

import ServiceCard from './ServiceCard';

export default function ServicesCardsArray() {
const allServicesCardCategory1 = servicesBank.facialServices.map(serviceItem => <ServiceCard serviceItem={serviceItem} />);
const allServicesCardCategory2 = servicesBank.depilationServices.map(serviceItem => <ServiceCard serviceItem={serviceItem} />);

 return (<div>
   <h2 className='cursiveSubtitle'>Facial</h2>
   <div className={styles.servicesContainer}>
         {allServicesCardCategory1}
      </div>
      <h2 className='cursiveTitle cursiveSubtitle'>Depilación</h2>
      <div className={styles.servicesContainer}>
         {allServicesCardCategory2}
      </div>
   </div>
    
 );
}