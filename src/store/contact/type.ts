export type ContactState = {
    frends: frend[];
};

export type frend = {
    id: number;
    userId: number;
    login: string;
    tell: number;
};

export enum ContactActionEnum {
    DOWNLOAD_CONTACT = 'DOWNLOAD_CONTACT',
    ADD_CONTACT = 'ADD_CONTACT',
}

export type DownloadContact = {
    type: ContactActionEnum.DOWNLOAD_CONTACT;
    payload: frend[];
};

export type AddContact = {
    type: ContactActionEnum.ADD_CONTACT;
    payload: frend;
};

export type ContactAction = DownloadContact | AddContact;
