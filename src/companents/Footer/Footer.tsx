import facebook from '@/assets/image/facebook.svg';
import instagram from '@/assets/image/instagram.svg';
import lock from '@/assets/image/lock.svg';
import logo from '@/assets/image/logo.svg';
import world from '@/assets/image/world.svg';
import youTube from '@/assets/image/youTube.svg';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footers}>
      <div className={styles.col}>
        <div>
          <img src={logo} alt="" />
          <p>18+</p>
          <p>
            Trading and investing involves significant level of risk and is not suitable
            and/or appropriate for all clients. Please make sure you carefully consider
            your investment objectives, level of experience and risk appetite before
            buying or selling. Buying or selling entails financial risks and could result
            in a partial or complete loss of your funds, therefore, you should not invest
            funds you cannot afford to lose. You should be aware of and fully understand
            all the risks associated with trading and investing, and seek advice from an
            independent financial advisor if you have any doubts. You are granted limited
            non-exclusive rights to use the IP contained in this site for personal,
            non-commercial, non-transferable use only in relation to the services offered
            on the site.
          </p>
          <div>
            <img src={facebook} alt="" />
            <img src={youTube} alt="" />
            <img src={instagram} alt="" />
          </div>
        </div>
        <div>
          <p>
            <img src={world} alt="" />
            Deposits are kept in a European and Asian banks
          </p>
          <p>
            <img src={lock} alt="" />
            The connection is protected by SSL certified 256 bit Secure Processing
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
