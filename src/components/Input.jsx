import React from 'react';
import { InputStyle } from './style/Input.Style';

const Input = ({ type, placeholder}) => {
    return (
        <InputStyle type={type} placeholder={placeholder} />
    );
};

export default Input;