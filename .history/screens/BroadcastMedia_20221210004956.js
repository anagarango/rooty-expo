import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { useState } from 'react';
import { FlexBox } from '../components/flexbox';
import TextBox from '../components/text';
import CategoryCard from '../components/categoryCard';
import { useNavigation } from '@react-navigation/native'

export default function BroadcastMedia() {
    const  navigation = useNavigation()


  return ( <FlexBox border="0px" width="100%" padding="20px" height="100%">
          <Text>Hello</Text>
          <Button></Button>
      </FlexBox>
  );
}
