import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useTypedSelector } from './hooks/useTypeSelector';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';

const Router = () => {
    const user = useTypedSelector((state) => state.authReducer.user);

    return (
        <Routes>
            {!!user ? (
                <>
                    <Route path="*" element={<Navigate to="/" />} />
                    <Route path="/" element={<Main />} />
                </>
            ) : (
                <>
                    <Route path="*" element={<Navigate to="/login" />} />
                    <Route path="/login" element={<Login />} />
                </>
            )}
        </Routes>
    );
};

export default Router;
