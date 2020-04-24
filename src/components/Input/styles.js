import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'
import { Form } from '@unform/mobile';

export const Container = styled(LinearGradient)`
   flex: 1;
   padding: 25px;
   justify-content: center;
   align-items: center;
`;

export const Text = styled.Text`
  color: #fff;
`;

export const Logo = styled.Image`
  height: 125px;
  width: 125px;
`;

export const FormStyled = styled(Form)`
  background-color: #6c6cff;
  padding: 15px;
`;
