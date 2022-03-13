import { Alert, Button, TextField, Typography } from '@mui/material';
import useInput from '../../hooks/useInput';
import { useTypeDispatch } from '../../hooks/useTypeDispatch';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import './Login.scss';

const Login = () => {
    const [login, setLogin] = useInput();
    const [password, setPassword] = useInput();

    const { userRequset } = useTypeDispatch();

    const signIn = () => {
        userRequset(login, password);
    };

    const error = useTypedSelector((state) => state.authReducer.error);

    return (
        <div className="form">
            <Typography variant="h2" gutterBottom>
                Вход в Контакты
            </Typography>
            {error && (
                <Alert sx={{ mb: '30px' }} severity="error">
                    Неправильный логин или пароль
                </Alert>
            )}
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
