import expertOptionImg from '@/assets/image/expertOptionsImg.svg';
import world from '@/assets/image/world.svg';

import styles from './ExpertOption.module.scss';

const ExpertOption = () => {
  return (
    <div className={styles.expertOption}>
      <p>Trade Safely with ExpertOption – Guaranteed</p>
      <p>
        The broker’s activity is certified and insured by the international fintech
        company EOLabs LLC.
      </p>
      <div>
        <img src={expertOptionImg} alt="" />
        <div>
          <div>
            <p>Clients worldwide</p>
            <p>70 000 000</p>
          </div>
          <div>
            <p>Number of active traderss</p>
            <p>370 000</p>
          </div>
          <p>
            <img src={world} alt="" />
            Deposits are kept in a European and Asian banks
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpertOption;
