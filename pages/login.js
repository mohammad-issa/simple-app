import Login from '../src/components/Auth/Login/Login';

import style from '../src/styles/Pages/Login.module.scss';

const LoginPage = () => {
  return (
    <div className={style.loginContainer}>
      <div className={style.loginModal}>
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
