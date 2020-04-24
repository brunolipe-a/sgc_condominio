import styled, { css } from 'styled-components/native'
import { Animated } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'


export const Container = styled(LinearGradient)`
   flex: 1;
   padding: 20px;
   justify-content: space-between;
   align-items: stretch;
`;

export const Button = styled.TouchableOpacity`
    flex-direction: row;
    height: 60px;
    margin-bottom: 15px;
    padding: 12px 16px;
    border-radius: 4px;
    background-color: #037EAB;
    justify-content: center;
    align-items: center;
`;

export const TextButton = styled.Text`
  color: #FFF;
  font-size: 15px;
  font-weight: bold;
`;

export const Logo = styled(Animated.Image)`
  align-self: center;
  margin: 30px 0 25px;
`;

export const FormContainer = styled.View`
  background-color: #FFF;
  border-radius: 4px;
  padding: 50px 20px;
  elevation: 4;
`;

export const Text = styled.Text`
  text-align: center;
  color: #fff;
  font-weight: bold;
`;