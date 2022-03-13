import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userRequset } from '../store/auth/action';
import { addContactRequest, changeContactRequest } from '../store/contact/action';

const actionCreater = {
    userRequset,
    addContactRequest,
    changeContactRequest,
};

export const useTypeDispatch = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actionCreater, dispatch);
};
