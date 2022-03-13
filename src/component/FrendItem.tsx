import { Grid, Card, CardHeader, IconButton, TextField } from '@mui/material';
import { frend } from '../store/contact/type';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { FC, useState } from 'react';
import useInput from '../hooks/useInput';
import { useTypeDispatch } from '../hooks/useTypeDispatch';

const FrendItem: FC<{ frend: frend }> = ({ frend }) => {
    const [edit, setEdit] = useState(false);
    const [tell, setTell] = useInput(String(frend.tell));
    const [login, setLogin] = useInput(frend.login);

    const editContact = () => {
        setEdit(true);
    };

    const closeEditContact = () => {
        setEdit(false);
    };

    const isChangeContact =
        (String(frend.tell) === tell && frend.login === login) || tell === '' || login === '';

    const { changeContactRequest } = useTypeDispatch();
    const changeContact = () => {
        closeEditContact();
        changeContactRequest(login, +tell, frend.id);
    };

    return (
        <Grid item xs={12}>
            <Card>
                <CardHeader
                    title={
                        edit ? (
                            <TextField
                                sx={{ mb: '10px' }}
                                label="Телефон"
                                value={tell}
                                onChange={setTell}
                            />
                        ) : (
                            frend.tell
                        )
                    }
                    subheader={
                        edit ? (
                            <TextField label="Логин" value={login} onChange={setLogin} />
                        ) : (
                            frend.login
                        )
                    }
                    action={
                        edit ? (
                            <>
                                <IconButton
                                    onClick={changeContact}
                                    disabled={isChangeContact}
                                    size="large">
                                    <CheckIcon />
                                </IconButton>
                                <IconButton onClick={closeEditContact} size="large">
                                    <CloseIcon />
                                </IconButton>
                            </>
                        ) : (
                            <>
                                <IconButton onClick={editContact} size="large">
                                    <EditIcon />
                                </IconButton>
                                <IconButton size="large">
                                    <DeleteIcon />
                                </IconButton>
                            </>
                        )
                    }
                />
            </Card>
        </Grid>
    );
};

export default FrendItem;
