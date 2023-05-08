import logo from '@/assets/image/logo.svg';
import user from '@/assets/image/user.svg';
import BasicSelect from '@/companents/BasicSelect/BasicSelect';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.col}>
        <img src={logo} alt="" />
        <div>
          <button>
            <img src={user} alt="" />
            <p>Login</p>
          </button>
          <BasicSelect />
        </div>
      </div>
    </header>
  );
};

export default Header;
