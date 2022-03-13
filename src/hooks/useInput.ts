import { useCallback, useState } from 'react';

type useInputHoock<T> = [T, (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void];

const useInput = (): useInputHoock<string> => {
    const [input, setInput] = useState('');

    const onChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setInput(e.target.value);
    }, []);

    return [input, onChange];
};

export default useInput;
