import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SwitchStyled = styled.Switch.attrs({
    trackColor: {false: '#d9d9d9', true: 'rgba(88,179,55,0.5)'},
    thumbColor: "#59B538"
})`
`;

export const Label = styled.Text`
  margin-right: 5px;
`;

