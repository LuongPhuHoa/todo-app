import { todoSlice } from '@/lib/redux';
import React from 'react';
import { useDispatch } from 'react-redux';

export const Task = ({id, title, completed}: any) => {
    const dispatch = useDispatch();
    return (
        <li key={id}>
            <button>{title}</button>
        </li>
    )
}