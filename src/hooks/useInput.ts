import { useCallback, useState } from 'react';

type useInputHoock<T> = [T, (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void];

const useInput = (initialInput: string = ''): useInputHoock<string> => {
    const [input, setInput] = useState(initialInput);

    const onChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setInput(e.target.value);
    }, []);

    return [input, onChange];
};

export default useInput;
