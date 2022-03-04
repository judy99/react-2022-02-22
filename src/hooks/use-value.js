import { useCallback, useState } from "react";

export function useValue(defaultValue) {
    const [value, setValue] = useState(defaultValue);

    const addValue = useCallback(() => {
        setValue(value + 1)
    }, [value]);

    const removeValue = useCallback(() => {
        if (value > 0) {
            setValue(value - 1)
        }
    }, [value]);

    return { value, addValue, removeValue };
}