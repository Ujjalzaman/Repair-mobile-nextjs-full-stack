import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from './store'
import { useEffect, useState } from 'react'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

interface IDebounced {
    searchQuery: string;
    delay: number
}

export const useDebounced = ({ searchQuery, delay }: IDebounced) => {
    const [debouncedValue, setDebouncedValue] = useState<string>(searchQuery);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(searchQuery);
        }, delay);

        return () => {
            clearTimeout(handler);
        }
    }, [searchQuery, delay]);

    return debouncedValue;
}