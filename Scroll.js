import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const Items = [
    ' Chocolate Cake \n Chocolate Brownie \n Chocolate cookies \n Walnut Brownie \n Choco-Chipies \n Banana Bread \n Marble Cake \n Oreo Delight \n Doughnuts \n Cold Cake \n Mango Delight \n Strawberry Delight \n Cupcakes \n Diet \n '
];

const MenuItems = () => {
    return (
        <View style={{ flex: 0.72}}>
            <ScrollView
                indicatorStyle={"white"}
                style={{
                   
          //paddingHorizontal: 40,
          paddingVertical: 40,
          backgroundColor: '#495E57',
        }}>
                <Text style={{ color: 'white', fontSize: 27, flexWrap: 'wrap'}}>MnM's Kitchenette Menu</Text>
                <Text style={{ color: '#F4CE14', fontSize: 35 }}>
          {Items[0]}
        </Text>
            </ScrollView>
        </View>
    );
    
}
export default MenuItems;   
