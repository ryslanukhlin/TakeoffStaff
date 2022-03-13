import { Button, TextField, Typography } from '@mui/material';
import useInput from '../../hooks/useInput';
import { useTypeDispatch } from '../../hooks/useTypeDispatch';
import './Login.scss';

const Login = () => {
    const [login, setLogin] = useInput();
    const [password, setPassword] = useInput();

    const { userRequset } = useTypeDispatch();

    const signIn = () => {
        userRequset(login, password);
    };

    return (
        <div className="form">
            <Typography variant="h2" gutterBottom>
                Вход в Контакты
            </Typography>
            <TextField
                value={login}
                onChange={setLogin}
                required
                className="form_elem"
                label="Логин"
                type="text"
            />
            <TextField
                value={password}
                onChange={setPassword}
                required
                className="form_elem"
                label="Пароль"
                type="password"
            />
            <Button
                onClick={signIn}
                size="large"
                className="form_elem"
                variant="contained"
                fullWidth>
                Войти
            </Button>
        </div>
    );
};

export default Login;
