import React from 'react';
import {Container, BackIcon} from './styles';
import {useNavigation} from '@react-navigation/native';

export default function BackButton() {
  const navigation = useNavigation();
  return (
    <Container onPress={() => navigation.goBack()}>
      <BackIcon name="arrow-back" size={30} color="#eee" />
    </Container>
  );
}
