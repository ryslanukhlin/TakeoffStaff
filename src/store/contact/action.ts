import { Dispatch } from 'react';
import { ActionType } from '..';
import { addContact } from './reducer';

export const addContactRequest = (login: string, tell: string, userId: number) => {
    return async (dispatch: Dispatch<ActionType>) => {
        const id = Math.floor(Math.random() * 100) + Date.now();
        dispatch(addContact({ login, tell: +tell, id, userId }));
        const request = await fetch(`http://localhost:3000/contacns`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ login, tell, id, userId }),
        });
        console.log(await request.json());
    };
};
