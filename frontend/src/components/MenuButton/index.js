import React from 'react';
import {Container, MenuIcon} from './styles';
import {useNavigation} from '@react-navigation/native';

export default function MenuButton() {
  const navigation = useNavigation();
  return (
    <Container onPress={() => navigation.openDrawer()}>
      <MenuIcon name="menu" size={30} color="#eee" />
    </Container>
  );
}
