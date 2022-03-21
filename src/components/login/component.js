import styles from "./styles.module.css";
import { Button } from '../button/component';
import { useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../modules/actions/login-actions'

export const Login = () => {
    const dispatch = useDispatch();

    const loginStatus = useSelector(
        state => state.login.isLogin
    );

    const handleLogin = useCallback(() => dispatch(login(loginStatus)), [loginStatus]);

    return (
        <div className={styles.login}>
            <Button onClick={handleLogin} value={!loginStatus ? 'login' : 'logout'} />
        </div>
    )
}
