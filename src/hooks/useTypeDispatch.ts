import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userRequset } from '../store/auth/action';
import { addContactRequest } from '../store/contact/action';

const actionCreater = {
    userRequset,
    addContactRequest,
};

export const useTypeDispatch = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actionCreater, dispatch);
};
