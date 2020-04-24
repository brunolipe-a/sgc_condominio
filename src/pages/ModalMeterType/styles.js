import styled from "styled-components";


export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  text-align: center;
  font-size: 20px;
`;

export const BackButton = styled.TouchableOpacity`
  flex-direction: row;
  height: 40px;
  padding: 12px 16px;
  border-radius: 4px;
  background-color: #037EAB;
  justify-content: center;
  align-items: center;
`;

export const TypeButton = styled.TouchableOpacity`
  background-color: #FFF;
  border-radius: 88px;
  elevation: 3;
  margin: 15px 0;
`;