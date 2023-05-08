import platform1 from '@/assets/image/platform1.svg';
import platform2 from '@/assets/image/platform2.svg';
import platform3 from '@/assets/image/platform3.svg';

import styles from './Platform.module.scss';

const Platform = () => {
  return (
    <div className={styles.platform}>
      <p>Educational Possibilities of the Platform</p>
      <div>
        <div>
          <img src={platform3} alt="" />
          <p>Economic News Overviews</p>
        </div>
        <div>
          <img src={platform1} alt="" />
          <p>Ready-to-go Trading Strategies</p>
        </div>
        <div>
          <img src={platform2} alt="" />
          <p>Webinars and Video Tutorials</p>
        </div>
      </div>
    </div>
  );
};

export default Platform;
