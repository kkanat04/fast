import Header from '@/companents/Header/Header';

import styles from './Info.module.scss';

const Info = () => {
  return (
    <div className={styles.info}>
      <div className={styles.col}>
        <p className={styles.title}>
          Online<span>Trading Platform:</span> <br /> Short cut into the world of trading
        </p>
        <button>Start trading - it’s free!</button>
      </div>
    </div>
  );
};

export default Info;
