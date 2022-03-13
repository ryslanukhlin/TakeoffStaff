import { Card, CardHeader, Container, Grid, Typography } from '@mui/material';
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
                        <Grid item xs={12} key={frend.id}>
                            <Card>
                                <CardHeader title={frend.tell} subheader={frend.login} />
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <ModalAndFab />
        </>
    );
};

export default Main;
