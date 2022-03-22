import styles from './ServiceCheckbox.module.css';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { IconContext } from 'react-icons';

const ServiceCheckbox = ({ serviceOffer }) => {
	return (
		<div className={styles.checkbox}>
			<IconContext.Provider value={{ color: '#72b39c', className: 'icon' }}>
				<BsFillCheckCircleFill />
			</IconContext.Provider>
			<span>{serviceOffer}</span>
		</div>
	);
};

export default ServiceCheckbox;
