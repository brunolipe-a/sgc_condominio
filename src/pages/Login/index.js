import React, { useRef, useState, useEffect } from 'react';
import { Scope } from '@unform/core'
import { Form } from '@unform/mobile';
import useKeyboard from '@rnhooks/keyboard';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import {
    TouchableWithoutFeedback,
    Keyboard,
    Animated,
    Easing,
    ActivityIndicator,
    AsyncStorage,
    StatusBar
} from "react-native";

import Input from '../../components/Input';
import Switch from '../../components/Switch';
import logo from '../../assets/logo-login.png'

import { Container, Button, Logo, FormContainer, TextButton, Text } from './styles'
import api from "../../services/api";


export default function Login({ navigation }) {
    const dispatch = useDispatch();
    const [height, setHeight] = useState(new Animated.Value(120));
    const [width, setWidth] = useState(new Animated.Value(110));
    const [loading, setLoading] = useState(false);
    const [visible, _] = useKeyboard();
    const formRef = useRef(null);

    useEffect(() => {
        const valueHeight = visible ? 70 : 120;
        const valueWidth = visible ? 65 : 110;

        Animated.timing(
            height,
            {
                toValue: valueHeight,
                duration: 125,
                easing: Easing.linear
            }
        ).start();
        Animated.timing(
            width,
            {
                toValue: valueWidth,
                duration: 125,
                easing: Easing.linear
            }
        ).start()
    }, [visible]);


    async function handleSubmit(data, { reset }) {
        Keyboard.dismiss();
        setLoading(true);

        const { email, password, keep } = data;

        try {
            formRef.current.setErrors({});
            const schema = Yup.object().shape({
                email: Yup.string().email().required(),
                password: Yup.string().min(6).required(),
            });
            await schema.validate(data, {
                abortEarly: false,
            });

            try {
                const response = await api.post('session', { email, password });
                const { token } = response.data;
                if(keep) {
                    await AsyncStorage.setItem('@SGCCondomino:token', token);
                }
                dispatch({
                    type: 'ADD_USER_TOKEN',
                    token: token
                });
                setLoading(false);
                navigation.navigate('Tab')
            } catch ({ response }) {
                setError(JSON.stringify(response.data));
                setLoading(false);
            }
        } catch (err) {
            const validationErrors = {};
            if (err instanceof Yup.ValidationError) {
                err.inner.forEach(({ path, message }) => {
                    formRef.current.setFieldError(path, message);
                });
            }
            setLoading(false);
        }


    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} touchSoundDisabled={true}>
            <Container
                colors={['#f5f5f5', '#037EAB']}
                locations={[0.3, 0.8]}
            >
                <StatusBar barStyle="dark-content" />
                <Logo source={logo} style={{
                    height,
                    width
                }}/>
                <FormContainer>
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        {/*<Scope path="user">*/}
                            <Input
                                name="email"
                                label="Email"
                                placeholder="example@email.com"
                                autoCapitalize="none"
                                autoCorrect={false}
                                autoCompleteType="off"
                                keyboardType="email-address"
                            />
                            <Input
                                name="password"
                                label="Senha"
                                placeholder="******"
                                autoCapitalize="none"
                                autoCorrect={false}
                                secureTextEntry={true}
                            />
                        {/*</Scope>*/}
                        <Button onPress={() => formRef.current.submitForm()} >
                            <TextButton>ENTRAR</TextButton>
                            { loading && <ActivityIndicator style={{ marginLeft: 10 }} size="large" color="#fff"/>}
                        </Button>
                        <Switch name="keep" label="Manter logado" />
                    </Form>
                </FormContainer>
                <Text>@ Copyright - SagaTech Brasil</Text>
            </Container>
        </TouchableWithoutFeedback>
    );
}
