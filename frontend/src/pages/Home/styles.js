import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex: 1;
  padding: 15px;
  flex-direction: column;
`;

export const InputContainer = styled.View`
  height: 50px;
  border-radius: 5px;
  background-color: #e0e0e0;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Input = styled.TextInput``;

export const SearchIcon = styled(Icon)`
  margin: 10px;
`;

export const Header = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #202020;
  margin-top: 10px;
`;

export const PromoBoard = styled.TouchableOpacity`
  width: 160px;
  height: 90px;
  border-radius: 10px;
  justify-content: center;
  margin-top: 10px;
  margin-right: 10px;
  margin-left: 5px;
`;

export const CategoryPanel = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  margin-top: 10px;
`;

export const IconBoard = styled.TouchableOpacity`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  width: 72px;
  height: 100px;
  margin: 5px;
`;

export const IconImage = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 5px;
  background-color: #aaa;
`;

export const IconLabel = styled.Text`
  font-size: 12px;
  text-align: center;
`;
