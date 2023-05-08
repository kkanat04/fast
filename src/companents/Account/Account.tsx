import styles from './Account.module.scss';

const Account = () => {
  return (
    <div className={styles.account}>
      <div className={styles.col}>
        <p>
          Set Up a <span>Free Account</span> Right Now
        </p>
        <p>Trade Risk-free Using a Demo Account</p>
        <button>Try free $10000 DEMO account</button>
      </div>
    </div>
  );
};

export default Account;
