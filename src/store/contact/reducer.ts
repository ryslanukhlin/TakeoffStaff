import {
    AddContact,
    ChangeContact,
    ContactAction,
    ContactActionEnum,
    ContactState,
    DownloadContact,
    frend,
} from './type';

const defaultState: ContactState = {
    frends: [
        { id: 2, userId: 1, login: 'egor', tell: 89433542332 },
        { id: 3, userId: 1, login: 'vova', tell: 89545124311 },
    ],
};

export const contactReducer = (
    state: ContactState = defaultState,
    action: ContactAction,
): ContactState => {
    switch (action.type) {
        case ContactActionEnum.DOWNLOAD_CONTACT:
            return { frends: action.payload };
        case ContactActionEnum.ADD_CONTACT:
            return { frends: [...state.frends, action.payload] };
        case ContactActionEnum.CHANGE_CONTACT:
            return {
                frends: state.frends.map((item) => {
                    const { id, name, tell } = action.payload;
                    if (item.id === id) {
                        return { ...item, login: name, tell: tell };
                    } else return item;
                }),
            };
        default:
            return state;
    }
};

export const downloadContact = (frends: frend[]): DownloadContact => ({
    type: ContactActionEnum.DOWNLOAD_CONTACT,
    payload: frends,
});

export const addContact = (frend: frend): AddContact => ({
    type: ContactActionEnum.ADD_CONTACT,
    payload: frend,
});

export const changeContact = (payload: {
    name: string;
    tell: number;
    id: number;
}): ChangeContact => ({
    type: ContactActionEnum.CHANGE_CONTACT,
    payload,
});
