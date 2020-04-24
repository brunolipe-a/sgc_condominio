import React, {useState} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View, ScrollView, Button, processColor, StatusBar
} from 'react-native';
import PureChart from 'react-native-pure-chart';


export default function Apartment({ navigation, route }) {
    const chart = [{
        type: 'bar',
        title: 'Barra'
        },
        {
            type: 'line',
            title: 'Linha'
        },
    ];
    const [index, setIndex] = useState(0);

    let data = [];
    for (let i = 1; i <= 60; i++) {
        data.push({x: `${i > 9 ? "" + i: "0" + i}/05`, y: Math.round(Math.random() * 100)})
    }

    let sampleData = [{
        seriesName: 'series1',
        data: data,
        color: '#037EAB'
    }];

    const handleChangeChart = () => {
        setIndex(!index * 1);
    };

    return (
        <ScrollView style={{flex: 1}}>
            <Button title={chart[!index * 1].title} onPress={handleChangeChart}/>
            <View style={{ backgroundColor: '#FFF', borderWidth: 5, borderColor: '#59B538', padding: 5, margin: 7, borderRadius: 5, elevation: 4 }} >
                <PureChart
                    height={175}
                    data={sampleData}
                    gap={25}
                    primaryColor={'#037EAB'}
                    selectedColor={"#59B538"}
                    defaultColumnWidth={10}
                    defaultColumnMargin={15}
                    highlightColor={"#03344b"}
                    xAxisGridLineColor={'#BEBEBE'}
                    type={chart[index * 1].type} />
                <Text style={{ color: "#bbb", fontSize: 11, marginTop: 5}}>*asdasdasdasda sasd asdawda da awdasd ad awda asd asd asd </Text>
            </View>
        </ScrollView>


    )
}