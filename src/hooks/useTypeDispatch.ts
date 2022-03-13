import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userRequset } from '../store/auth/action';
import {
    addContactRequest,
    changeContactRequest,
    deleteContactRequest,
} from '../store/contact/action';

const actionCreater = {
    userRequset,
    addContactRequest,
    changeContactRequest,
    deleteContactRequest,
};

export const useTypeDispatch = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actionCreater, dispatch);
};
