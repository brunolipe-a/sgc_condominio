import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';

import { Input, Label } from './styles'

export default function Index({ name, label, ...rest }) {
    const inputRef = useRef(null);
    const { fieldName, registerField, defaultValue = '', error } = useField(name);
    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'values',
        });
    }, [fieldName, registerField]);
    return (
        <>
            {label && <Label>{label}</Label>}
            <Input ref={inputRef} defaultValue={defaultValue} {...rest} />
        </>
    );
}
