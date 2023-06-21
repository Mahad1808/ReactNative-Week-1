import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={{justifyContent : 'center' , alignItems: 'center', flex: 0.18, backgroundColor: '#deb887' }}>
      <Text style={{fontSize: 27 , fontWeight:'bold'}}>MnM's Kitchenette----
      <Text style={{fontWeight:'normal'}}>The name of perfection</Text>
      </Text>
      
        
      </View>
     
    
  );
}




