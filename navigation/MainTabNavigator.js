import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import Colors from '../constants/Colors';
import HomeScreen from '../screens/HomeScreen';
import PartnersScreen from '../screens/PartnersScreen';
import MembersScreen from '../screens/MembersScreen';

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Partners: {
      screen: PartnersScreen,
    },
    Members: {
      screen: MembersScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName = Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle';
            break;
          case 'Partners':
            iconName = Platform.OS === 'ios' ? `ios-people${focused ? '' : '-outline'}` : 'md-people';
            break;
          case 'Members':
            iconName = Platform.OS === 'ios' ? `ios-contacts${focused ? '' : '-outline'}` : 'md-contacts';
        }
        return <Ionicons name={iconName} size={28} style={{ marginBottom: -3 }} color={focused ? Colors.tabIconSelected : Colors.tabIconDefault} />;
      }
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: '#000',
      inactiveTintColor: '#000'
    },
  }
);
