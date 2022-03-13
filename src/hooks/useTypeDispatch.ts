import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userRequset } from '../store/auth/action';

const actionCreater = {
    userRequset,
};

export const useTypeDispatch = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actionCreater, dispatch);
};
