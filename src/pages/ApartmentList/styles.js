import styled from 'styled-components';

export const Container = styled.View`
   flex: 1;
   padding: 0 10px;
   justify-content: center;
   align-items: stretch;
`;

export const Text = styled.Text`
  margin: 5px 0 2px;
  font-size: 18px;
  text-align: center;
`;

export const ListApartments = styled.FlatList`
`;

export const Refresh = styled.RefreshControl.attrs({
    tintColor: "#59B538",
    colors: ["#59B538"]
})``;

export const Apartment = styled.TouchableOpacity`
  border-radius: 4px;
  background-color: #fff;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 8px 13px;
  margin: 15px 10px;
  elevation: 3;
`;

export const TextGroup = styled.View`
  max-width: 250px;
`;

export const TextApartmentGroup = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ApartmentText = styled.Text`
  color: #222;
  font-size: 14px;
  margin: 5px 10px 5px 0;
`;

export const QtdMeters = styled.Text`
  margin: 5px 0;
  font-size: 13px;
  color: #999;
`;

export const MeterImg = styled.Image`
  align-self: flex-end;
  height: 48px;
  width: 45px;
  margin: 5px 0;
`;

export const Separator = styled.View`
  height: 1px;
  background-color: #e7e7e7;
`;
