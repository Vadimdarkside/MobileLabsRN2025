import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Image } from 'react-native';

const ButtonContainer = styled(TouchableOpacity)`
  margin-right: 10px;
`;

const SettingsButton = (props) => {
  const navigation = useNavigation();

  return (
    <ButtonContainer onPress={() => navigation.navigate('Statistic')}>
      <Image
        source={require('../assets/setting.png')}
        style={{ width: 40, height: 40 }}
        {...props}
      />
    </ButtonContainer>
  );
};

export default SettingsButton;
