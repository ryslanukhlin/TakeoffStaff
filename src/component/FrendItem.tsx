import { Grid, Card, CardHeader, IconButton, TextField } from '@mui/material';
import { frend } from '../store/contact/type';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { FC, useEffect, useState } from 'react';
import useInput from '../hooks/useInput';
import { useTypeDispatch } from '../hooks/useTypeDispatch';
import InputMask from 'react-input-mask';

const FrendItem: FC<{ frend: frend }> = ({ frend }) => {
    const [edit, setEdit] = useState(false);
    const [tell, setTell, setDefaultTell] = useInput(frend.tell);
    const [login, setLogin, setDefaultLogin] = useInput(frend.login);

    const editContact = () => setEdit(true);
    const closeEditContact = () => {
        setDefaultTell();
        setDefaultLogin();
        setEdit(false);
    };
    const isChangeContact =
        (String(frend.tell) === tell && frend.login === login) ||
        tell === '' ||
        login === '' ||
        tell.replace(/_/g, '').length !== 18;

    const { changeContactRequest, deleteContactRequest } = useTypeDispatch();

    const changeContact = () => {
        closeEditContact();
        changeContactRequest(login, tell, frend.id);
    };

    return (
        <Grid item xs={12}>
            <Card>
                <CardHeader
                    title={
                        edit ? (
                            <InputMask mask="+7 (999) 999 99-99" value={tell} onChange={setTell}>
                                {() => <TextField sx={{ mb: '10px' }} label="Телефон" />}
                            </InputMask>
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
                                <IconButton
                                    onClick={deleteContactRequest.bind(null, frend.id)}
                                    size="large">
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
