import { useCallback, useState } from 'react';

type useInputHoock<T> = [
    T,
    (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void,
    () => void,
];

const useInput = (initialInput: string = ''): useInputHoock<string> => {
    const [input, setInput] = useState(initialInput);

    const onChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setInput(e.target.value);
    }, []);

    const setDefaultValue = useCallback(() => setInput(initialInput), []);

    return [input, onChange, setDefaultValue];
};

export default useInput;
