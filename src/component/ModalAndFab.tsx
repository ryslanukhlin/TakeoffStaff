import { Fab, Dialog, DialogTitle, DialogContent, Grid, TextField, Button } from '@mui/material';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import useInput from '../hooks/useInput';
import { useTypedSelector } from '../hooks/useTypeSelector';
import { useTypeDispatch } from '../hooks/useTypeDispatch';

const ModalAndFab = () => {
    const [modal, setModal] = useState(false);

    const closeModal = () => setModal(false);
    const openModal = () => setModal(true);

    const [name, setName] = useInput();
    const [tell, setTell] = useInput();

    const myId = useTypedSelector((state) => state.authReducer.user?.id);
    const { addContactRequest } = useTypeDispatch();

    const onClickAddConcacn = () => {
        addContactRequest(name, tell, myId!);
    };

    return (
        <>
            <Fab onClick={openModal} className="fab" color="primary">
                <AddIcon />
            </Fab>
            <Dialog open={modal} onClose={closeModal}>
                <DialogTitle>Новый контакт</DialogTitle>
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                value={name}
                                onChange={setName}
                                fullWidth
                                label="Имя"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                value={tell}
                                onChange={setTell}
                                fullWidth
                                label="Телефон"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                onClick={onClickAddConcacn}
                                size="large"
                                fullWidth
                                variant="contained">
                                Добавить
                            </Button>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default ModalAndFab;
