import React, { useEffect, useState} from 'react';
import {ActivityIndicator, StatusBar} from 'react-native'
import { useSelector } from "react-redux";

import {
    Container,
    ListApartments,
    Apartment,
    TextGroup,
    TextApartmentGroup,
    ApartmentText,
    QtdMeters,
    MeterImg,
    Separator,
    Text,
    Refresh
} from './styles'

import api from "../../services/api";
import logo from "../../assets/logo-login.png";
import auth from "../../utils/auth";

import OptionButton from "../../components/OptionButton";

export default function Index({ navigation }) {
    const [apartments, setApartments] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [loading, setLoading] = useState(true);
    const [info, setInfo] = useState('Carregando...');

    const token = useSelector(state => state.user.token);


    navigation.setOptions({
        headerRight: () => <OptionButton navigation={navigation}/>
    });

    async function getApartments() {
        const response = await api.get(`/app/apartments`, auth(token));

        setApartments(response.data.apartments);
        setInfo('Selecione um Imóvel');
        setLoading(false);
    }

    useEffect(() => {
        setInfo('Carregando...');
        getApartments();
    }, []);

    const handleRefresh = async () => {
        setInfo('Atualizando...');
        setRefreshing(true);
        await getApartments();
        setRefreshing(false);
    };

    const renderItem = ({ item }) => (
        <Apartment onPress={() => navigation.navigate('MeterModal', { apartment_id: item.id })}>
            <TextGroup>
                <ApartmentText>Condomínio: { item.name }</ApartmentText>
                <TextApartmentGroup>
                    <ApartmentText>Apartamento: {item.number}</ApartmentText>
                    <ApartmentText>Bloco: { item.block }</ApartmentText>
                </TextApartmentGroup>
                <QtdMeters>Medidores: { item.qtdMeters }</QtdMeters>
            </TextGroup>
            <MeterImg source={logo}/>
        </Apartment>
    );

    return (
        <Container>
            <Text>{ info }</Text>
            { loading ?
                <ActivityIndicator size="large" color="#59B538"/>
                :
                <ListApartments
                    data={apartments}
                    keyExtractor={apartment => String(apartment.id)}
                    ItemSeparatorComponent={() => <Separator/>}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    // refreshing={refreshing}
                    // onRefresh={handleRefresh}
                    refreshControl={
                        <Refresh
                            refreshing={refreshing}
                            onRefresh={handleRefresh}
                        />
                    }
                />
            }

        </Container>
    );
}