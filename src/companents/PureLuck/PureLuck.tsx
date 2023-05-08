import luck from '@/assets/image/luck.svg';

import styles from './PureLuck.module.scss';

const PureLuck = () => {
  return (
    <div className={styles.pureLuck}>
      <div className={styles.col}>
        <div>
          <p>
            Easier than the trading floor. <br /> Harder than pure luck.
          </p>
          <p>
            <span>ExpertOption Online</span> trading doesn’t require the trader to analyze
            the <br /> financial market in depth. That said, a trader can’t rely on pure
            luck either.
          </p>
          <p>
            For trading more effectively and understanding the tone of the market, it is
            advisable for a novice trader to explore the possibilities of the trading
            platform and acquaint themselves with several popular trading strategies.
          </p>
        </div>
        <img src={luck} alt="" />
      </div>
    </div>
  );
};

export default PureLuck;
