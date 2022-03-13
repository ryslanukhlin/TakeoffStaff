import { Container, Grid, Typography } from '@mui/material';
import FrendItem from '../../component/FrendItem';
import ModalAndFab from '../../component/ModalAndFab';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import './Main.scss';

const Main = () => {
    const frends = useTypedSelector((state) => state.contactReducer.frends);

    return (
        <>
            <Typography className="title" variant="h1">
                Ваши Контакты
            </Typography>
            <Container maxWidth="md">
                <Grid container spacing={2}>
                    {frends!.map((frend) => (
                        <FrendItem frend={frend} key={frend.id} />
                    ))}
                </Grid>
            </Container>
            <ModalAndFab />
        </>
    );
};

export default Main;
