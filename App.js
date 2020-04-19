import React from 'react';
import Home from './screens/Home'
import Detail from './screens/Detail'
import Settings from './screens/Settings'
import { Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

const HomeStack = createStackNavigator({

    Home : {
      screen: Home,
      navigationOptions: { title: 'Home' }
    },
    Detail : {
      screen: Detail,
      navigationOptions: { title: 'Detail' }
    },

  })

  const SettingStack = createStackNavigator({
    Setting : {
      screen: Settings,
      navigationOptions: { title: 'Settings' }
    }
  })

  const AppNavigator = createBottomTabNavigator({
    Home: HomeStack,
    Settings: SettingStack},
    {
      initialRouteName: 'Home',
      defaultNavigationOptions: ({navigation }) => ({
        tabBarIcon: ({ tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Home') {
            iconName = `${Platform.OS === 'ios' ? 'ios' : 'md'}-home`;
          } else if (routeName === 'Settings') {
            iconName = `${Platform.OS === 'ios' ? 'ios' : 'md'}-settings`;
          }

          return <Ionicons name={iconName} size={20} color={tintColor} />
        },
        tabBarOptions: {
          activeTintColor: 'blue',
          inactiveTintColor: '#556'
        }
        
      })
    }
    
  )

export default createAppContainer(AppNavigator)