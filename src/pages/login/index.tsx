import {Button} from "../../components/shared/Button";
import {Divider} from "../../components/shared/Divider";

const LoginPage = () => {
  return (
    <div>
      <Divider/>
      <h3>Login</h3>
      <p>
        Welcome back, buddy. Sign in to join conversations & explore some more tools.
      </p>
      <div className={'login-form pb-4'}>
        <div className={'form-field'}>
          <div>
            Username:
          </div>
          <input/>
        </div>
        <div className={'form-field'}>
          <div>
            Password:
          </div>
          <input/>
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
