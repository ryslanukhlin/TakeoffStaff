export type AuthStore = {
    user?: User;
    download: boolean;
    error: boolean;
};

type frend = {
    id: number;
    login: string;
    tell: number;
};

export type User = {
    id: number;
    login: string;
    password: string;
    tell: number;
    contacns: frend[];
};

export enum AuthActionEnum {
    AUTH_DOWNLOAD = 'AUTH_DOWNLOAD',
    AUTH_LOGIN = 'AUTH_LOGIN',
    AUTH_ERROR = 'AUTH_ERROR',
    AUTH_LOGOUT = 'AUTH_LOGOUT',
}

export type AuthDownload = {
    type: AuthActionEnum.AUTH_DOWNLOAD;
};

export type AuthLogin = {
    type: AuthActionEnum.AUTH_LOGIN;
    payload: User;
};

export type AuthError = {
    type: AuthActionEnum.AUTH_ERROR;
};

export type AuthLogout = {
    type: AuthActionEnum.AUTH_LOGOUT;
};

export type AuthAction = AuthDownload | AuthLogin | AuthError | AuthLogout;
