import card1 from '@/assets/image/card1.svg';
import card2 from '@/assets/image/card2.svg';
import card3 from '@/assets/image/card3.svg';
import card4 from '@/assets/image/card4.svg';
import card5 from '@/assets/image/card5.svg';
import card6 from '@/assets/image/card6.svg';
import card7 from '@/assets/image/card7.svg';

import styles from './Profit.module.scss';

const Profit = () => {
  return (
    <div className={styles.profit}>
      <p>
        Make Deposits and Withdraw Profit <span>Conveniently</span>
      </p>
      <p>No commissions. Use trusted means of payment.</p>
      <div>
        <img src={card6} alt="" />
        <img src={card7} alt="" />
        <img src={card5} alt="" />
        <img src={card4} alt="" />
        <img src={card3} alt="" />
        <img src={card2} alt="" />
        <img src={card1} alt="" />
      </div>
    </div>
  );
};

export default Profit;
