import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Paragraph, Menu, Divider, Provider } from 'react-native-paper';
import { View } from 'react-native'
import { Button } from './styles'

export default function OptionButton({ navigation }) {
    const [visible, setVisible] = useState(false);

    const showMenu = () => {
        setVisible(true);
    };

    const hideMenu = () => {
        setVisible(false);
    };

    return (
            <Menu
                visible={visible}
                onDismiss={hideMenu}
                anchor={
                    <Button onPress={showMenu}>
                        <MaterialCommunityIcons name="dots-vertical" size={22} color={"#FFF"}/>
                    </Button>
                }
            >
                <Menu.Item icon="information-outline" onPress={() => {}} title="Sobre" />
                <Menu.Item icon="settings" onPress={() => {}} title="Configuração" />
                <Divider />
                <Menu.Item icon="exit-to-app" onPress={() => {}} title="Sair" />
            </Menu>
    );
}