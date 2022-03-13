import { Container, Divider, Grid, TextField, Typography } from '@mui/material';
import FrendItem from '../../component/FrendItem';
import ModalAndFab from '../../component/ModalAndFab';
import useInput from '../../hooks/useInput';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import './Main.scss';

const Main = () => {
    const frends = useTypedSelector((state) => state.contactReducer.frends);
    const [search, setSearch] = useInput();

    const searchFrends = frends.filter(
        (frend) => String(frend.tell).indexOf(search) > -1 || frend.login.indexOf(search) > -1,
    );

    return (
        <>
            <Typography className="title" variant="h1">
                Ваши Контакты
            </Typography>
            <div className="search__wrapper">
                <TextField
                    value={search}
                    onChange={setSearch}
                    fullWidth
                    className="search"
                    variant="outlined"
                    label="Введите имя человека или его номер"
                />
            </div>
            <Divider variant="middle" className="hr" />
            <Container maxWidth="md">
                <Grid container spacing={2}>
                    {searchFrends!.map((frend) => (
                        <FrendItem frend={frend} key={frend.id} />
                    ))}
                </Grid>
            </Container>
            <ModalAndFab />
        </>
    );
};

export default Main;
