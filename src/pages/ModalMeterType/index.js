import React, { useState, useEffect } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Container, Text, BackButton, TypeButton } from './styles'
import {TextButton} from "../Login/styles";
import {ActivityIndicator, StatusBar} from "react-native";


export default function ModalMeterType({ navigation, route }) {
    const { apartment_id } = route.params;
    const [loading, setLoading] = useState(true);
    const [meterType, setMeterType] = useState([]);

    async function getMeterType() {
        await setTimeout(() => {
            setLoading(false);
        }, 2000)
    }

    useEffect(() => {
        setMeterType([...meterType,
            {
                name: 'fire',
                color: '#dc3545'
            },
            {
                name: 'water',
                color: 'blue'
            }
        ]);
        getMeterType();
    }, []);


    const handlePress = (meter) => {
        navigation.navigate('Apartamento', { data: meter });
    };

    return (
        <Container>
            <Text>Selecione o tipo do(s) medidor(es) cadastrado(s) no seu Imóvel</Text>
            { loading ?
                <ActivityIndicator size="large" color="#59B538"/>
                :
                [
                    meterType.map((meter) =>
                        <TypeButton key={ meter.name } onPress={() => handlePress(meter)}>
                            <MaterialCommunityIcons name={meter.name} size={176} color={ meter.color } />
                        </TypeButton>
                    ),
                    <BackButton onPress={() => navigation.goBack()}>
                        <TextButton>VOLTAR</TextButton>
                    </BackButton>
                ]
            }
        </Container>
    );
}