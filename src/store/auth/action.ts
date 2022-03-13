import { Dispatch } from 'react';
import { ActionType } from '..';
import { downloadContact } from '../contact/reducer';
import { frend } from '../contact/type';
import { authDownload, authError, authLogin } from './reducer';
import { User } from './type';

export const userRequset = (login: string, password: string) => {
    return async (dispatch: Dispatch<ActionType>) => {
        dispatch(authDownload());
        const request = await fetch(
            `http://localhost:3000/users?login=${login}&password=${password}`,
        );
        const data: User[] | undefined = await request.json();
        if (data![0] === undefined) dispatch(authError());
        else {
            dispatch(authLogin({ ...data![0] }));
            const requestContact = await fetch(
                `http://localhost:3000/contacns?userId=${data![0].id}`,
            );
            const dataContact: frend[] = await requestContact.json();
            dispatch(downloadContact(dataContact));
        }
    };
};
