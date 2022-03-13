import { Dispatch } from 'react';
import { ActionType } from '..';
import { addContact, changeContact, deleteContact } from './reducer';

export const addContactRequest = (login: string, tell: string, userId: number) => {
    return async (dispatch: Dispatch<ActionType>) => {
        const id = Math.floor(Math.random() * 100) + Date.now();
        dispatch(addContact({ login, tell, id, userId }));
        await fetch(`http://localhost:3000/contacns`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ login, tell, id, userId }),
        });
    };
};

export const changeContactRequest = (name: string, tell: string, id: number) => {
    return async (dispatch: Dispatch<ActionType>) => {
        dispatch(changeContact({ name, tell, id }));
        await fetch(`http://localhost:3000/contacns/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ login: name, tell }),
        });
    };
};

export const deleteContactRequest = (id: number) => {
    return async (dispatch: Dispatch<ActionType>) => {
        dispatch(deleteContact(id));
        await fetch(`http://localhost:3000/contacns/${id}`, {
            method: 'DELETE',
        });
    };
};
