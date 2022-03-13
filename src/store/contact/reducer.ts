import {
    AddContact,
    ChangeContact,
    ContactAction,
    ContactActionEnum,
    ContactState,
    DeleteContact,
    DownloadContact,
    frend,
} from './type';

const defaultState: ContactState = {
    frends: [],
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
        case ContactActionEnum.DELETE_CONTACT:
            return { frends: state.frends.filter((frend) => frend.id !== action.payload) };
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
    tell: string;
    id: number;
}): ChangeContact => ({
    type: ContactActionEnum.CHANGE_CONTACT,
    payload,
});

export const deleteContact = (id: number): DeleteContact => ({
    type: ContactActionEnum.DELETE_CONTACT,
    payload: id,
});
