import React, {FC} from 'react';

import styles from './Login.module.scss'
import googleIcon from '../../assets/img/login/google-icon.svg'
import Input from "../../components/UI/Input";

const Login: FC = () => {
    return (
       <div className={styles.loginPage}>
           <h1 className={styles.title}>Авторизация</h1>
           <p className={styles.googleDescription}>Вы можете авторизоваться с данными своего аккаунта или войти через Google</p>
           <button className={`${styles.loginButton} ${styles.googleAuthButton}`}>
               <img src={googleIcon} alt="img"/>
               <span>Войти через Google</span>
           </button>
           <span className={`${styles.orSeparator} ${styles.loginSubtitle}`}>или</span>
           <div className={styles.loginForm}>
               <span className={styles.loginSubtitle}>Email</span>
               <Input type="text" placeholder='email'/>
               <span className={styles.loginSubtitle}>Пароль</span>
               <Input type="password" placeholder='password'/>
               <button className={`${styles.loginButton} ${styles.loginFormButton}`}>Войти</button>
           </div>
       </div>
    );
};

export default Login;