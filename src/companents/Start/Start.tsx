import { start } from 'repl';

import star1 from '@/assets/image/star1.svg';
import star2 from '@/assets/image/star2.svg';
import star3 from '@/assets/image/star3.svg';
import star4 from '@/assets/image/star4.svg';
import star5 from '@/assets/image/star5.svg';
import startImg from '@/assets/image/start.svg';

import styles from './Start.module.scss';

const Start = () => {
  return (
    <div className={styles.start}>
      <p className={styles.title}>What is Online trading?</p>
      <p className={styles.desc}>
        Online trading is a mode of trading on the ExpertOption platform enabling you to
        earn money using currency, stocks, indices, ETFs, and other assets’ exchange rate
        differences. The process is called trading, whereas an investor is called the
        trader.
      </p>
      <p>How to start?</p>
      <div className={styles.start_body}>
        <img src={startImg} alt="" />
        <div>
          <p>
            <img src={star5} alt="" />
            Select an Asset
          </p>
          <p>
            <img src={star1} alt="" />
            Analyze Market Movements
          </p>
          <p>
            <img src={star2} alt="" />
            Choose a Trade Amount
          </p>
          <p>
            <img src={star3} alt="" />
            Set a Trade Timeframe
          </p>
          <p>
            <img src={star4} alt="" />
            Open a Trade
          </p>
        </div>
      </div>
    </div>
  );
};

export default Start;
