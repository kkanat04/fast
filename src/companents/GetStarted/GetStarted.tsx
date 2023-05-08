import get1 from '@/assets/image/get1.svg';
import get3 from '@/assets/image/get3.svg';
import get4 from '@/assets/image/get4.svg';
import get5 from '@/assets/image/get5.svg';
import get6 from '@/assets/image/get6.svg';
import VerticalSlider from '@/companents/VerticalSlider/VerticalSlider';

import styles from './GetStarted.module.scss';

const GetStarted = () => {
  return (
    <div className={styles.getStarted}>
      <div className={styles.col}>
        <p>{`It's`} Easy to Get Started</p>
        <div>
          <div>
            <img src={get1} alt="" />
            <p>Register on the platform</p>
          </div>
          <div>
            <img src={get6} alt="" />
            <p>Register on the platform</p>
          </div>
          <div>
            <img src={get4} alt="" />
            <p>Register on the platform</p>
          </div>
          <div>
            <img src={get5} alt="" />
            <p>Register on the platform</p>
          </div>
          <div>
            <img src={get3} alt="" />
            <p>Register on the platform</p>
          </div>
        </div>
        <div>
          <p>The Tested Japanese Standard Strategy</p>
          <p>
            Trading involves using a Japanese candlesticks chart. The price chart is a
            series of alternating candlesticks of various sizes indicating rate changes
            over a certain time interval such as 5 minutes. It works best for currency
            pairs, commodities, and stock indices.
          </p>
          <VerticalSlider />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
