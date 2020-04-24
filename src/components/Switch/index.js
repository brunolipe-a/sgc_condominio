import React, { useRef, useEffect, useState } from 'react';
import { useField } from '@unform/core';
import { Container, SwitchStyled, Label } from './styles'

export default function Switch({ name, label, ...rest }) {
    const switchRef = useRef(null);
    const [value, setValue] = useState(false);
    const { fieldName, registerField, defaultValue = value, error } = useField(name);
    useEffect(() => {
        registerField({
            name: fieldName,
            ref: switchRef.current,
            path: 'props.value',
            getValue(ref) {
                return ref.props.value || false;
            },
            setValue(ref, value) {
                ref.props.value = value;
            },
            clearValue(ref) {
                ref.props.value = false;
            },
        });
    }, [fieldName, registerField]);
    return (
        <>
            <Container>
                {label && <Label>{label}</Label>}
                <SwitchStyled ref={switchRef} value={defaultValue} onValueChange={val => setValue(val)} {...rest} />
            </Container>
        </>
    );
}
