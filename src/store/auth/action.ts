import { Dispatch } from 'react';
import { ActionType } from '..';
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
        else dispatch(authLogin(data![0]));
    };
};
