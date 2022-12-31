import {Button} from "../../components/shared/Button";
import {Divider} from "../../components/shared/Divider";
import styles from './Login.module.css';

const LoginPage = () => {
  return (
    <div className={styles.loginForm}>
      <Divider/>
      <h3>Login</h3>
      <p>
        Welcome back, buddy. Sign in to join conversations & explore some more tools.
      </p>
      <div className={'login-form pb-4'}>
        <div className={styles.loginField}>
          <div className={styles.formLabel}>
            Username:
          </div>
          <input/>
        </div>
        <div className={styles.loginField}>
          <div className={styles.formLabel}>
            Password:
          </div>
          <input type={'password'}/>
        </div>
        <div className={'mt-4'}>
          <Button>Login</Button>
        </div>
        <div className={'form-extra mt-4'}>
          Don't have account? <a href={'/register'}>Create one</a>. Or you can <a href={'/recover'}>reset your password</a> if having trouble while logging in.
        </div>
      </div>
      <Divider/>
    </div>
  )
}

export default LoginPage;
