import Account from '@/companents/Account/Account';
import ExpertOption from '@/companents/ExpertOption/ExpertOption';
import Footer from '@/companents/Footer/Footer';
import GetStarted from '@/companents/GetStarted/GetStarted';
import Header from '@/companents/Header/Header';
import Info from '@/companents/Info/Info';
import Platform from '@/companents/Platform/Platform';
import Profit from '@/companents/Profit/Profit';
import PureLuck from '@/companents/PureLuck/PureLuck';
import Start from '@/companents/Start/Start';

import styles from './Main.module.scss';

const Main = () => {
  return (
    <div className={styles.main}>
      <Header />
      <Info />
      <Start />
      <PureLuck />
      <Platform />
      <GetStarted />
      <ExpertOption />
      <Profit />
      <Account />
      <Footer />
    </div>
  );
};

export default Main;
