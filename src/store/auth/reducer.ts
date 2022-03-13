import {
    AuthAction,
    AuthActionEnum,
    AuthDownload,
    AuthError,
    AuthLogin,
    AuthLogout,
    AuthStore,
    User,
} from './type';

const defaulthStore: AuthStore = {
    download: false,
    error: false,
};

export const authReducer = (store: AuthStore = defaulthStore, action: AuthAction): AuthStore => {
    switch (action.type) {
        case AuthActionEnum.AUTH_DOWNLOAD:
            return { ...store, download: true };
        case AuthActionEnum.AUTH_LOGIN:
            return { ...store, user: action.payload, download: false };
        case AuthActionEnum.AUTH_ERROR:
            return { error: true, download: false };
        case AuthActionEnum.AUTH_LOGOUT:
            return { error: false, download: false };
        default:
            return store;
    }
};

export const authDownload = (): AuthDownload => ({ type: AuthActionEnum.AUTH_DOWNLOAD });
export const authLogin = (user: User): AuthLogin => ({
    type: AuthActionEnum.AUTH_LOGIN,
    payload: user,
});
export const authError = (): AuthError => ({ type: AuthActionEnum.AUTH_ERROR });
export const authLogout = (): AuthLogout => ({ type: AuthActionEnum.AUTH_LOGOUT });
