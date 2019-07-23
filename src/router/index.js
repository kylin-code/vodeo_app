import React from 'react';
import { Image } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import Home from '../pages/home';
import Activity from '../pages/activity';
import Share from '../pages/share';
import Me from '../pages/me';

//创建BottomTab视图
const TabBarStack = createBottomTabNavigator(
  {
    首页: createStackNavigator(
      {
        Home: { screen: Home }
      },
      {
        initialRouteName: 'Home',
        headerMode: 'none',
        defaultNavigationOptions: {
          gesturesEnabled: false
        },
        navigationOptions: ({ navigation }) => {
          return {
            tabBarVisible: navigation.state.index === 0,
            tabBarLabel: '首页',
            tabBarIcon: ({ tintColor, focused }) => {
              return (
                <Image
                  source={
                    focused
                      ? require('./img/home_active.png')
                      : require('./img/home.png')
                  }
                  style={{ width: 28, height: 28 }}
                />
              );
            }
          };
        }
      }
    ),
    活动: createStackNavigator(
      {
        Activity: { screen: Activity }
      },
      {
        initialRouteName: 'Activity',
        headerMode: 'none',
        defaultNavigationOptions: {
          gesturesEnabled: false
        },
        navigationOptions: ({ navigation }) => {
          return {
            tabBarVisible: navigation.state.index === 0,
            tabBarLabel: '活动',
            tabBarIcon: ({ tintColor, focused }) => {
              let active = require('./img/sponsor_active.png');
              let sponsor = require('./img/sponsor.png');
              return (
                <Image
                  source={focused ? active : sponsor}
                  style={{ width: 28, height: 28 }}
                />
              );
            }
          };
        }
      }
    ),
    分享: createStackNavigator(
      {
        Share: { screen: Share }
      },
      {
        initialRouteName: 'Share',
        headerMode: 'none',
        defaultNavigationOptions: {
          gesturesEnabled: false
        },
        navigationOptions: ({ navigation }) => {
          return {
            tabBarVisible: navigation.state.index === 0,
            tabBarLabel: '分享',
            tabBarIcon: ({ tintColor, focused }) => {
              return (
                <Image
                  source={
                    focused
                      ? require('./img/share_active.png')
                      : require('./img/share.png')
                  }
                  style={{ width: 28, height: 28 }}
                />
              );
            }
          };
        }
      }
    ),
    我的: createStackNavigator(
      {
        Me: { screen: Me }
      },
      {
        initialRouteName: 'Me',
        headerMode: 'none',
        defaultNavigationOptions: {
          gesturesEnabled: false
        },
        navigationOptions: ({ navigation }) => {
          return {
            tabBarVisible: navigation.state.index === 0,
            tabBarLabel: '我的',
            tabBarIcon: ({ tintColor, focused }) => {
              return (
                <Image
                  source={
                    focused
                      ? require('./img/profile_active.png')
                      : require('./img/profile.png')
                  }
                  style={{ width: 28, height: 28 }}
                />
              );
            }
          };
        }
      }
    )
  },
  {
    initialRouteName: '首页',
    defaultNavigationOptions: {
      gesturesEnabled: false,
      header: null
    },
    tabBarOptions: {
      activeTintColor: '#6c4932',
      labelStyle: { fontSize: 12 },
      allowFontScaling: false,
      inactiveBackgroundColor: 'rgba(255,255,255,0.5)',
      activeBackgroundColor: 'rgba(255,255,255,0.5)'
    }
  }
);

//创建统一的导航栏子视图
const RootStack = createStackNavigator(
  {
    MainTab: { screen: TabBarStack }
  },
  {
    initialRouteName: 'MainTab',
    defaultNavigationOptions: {
      gesturesEnabled: false,
      header: null
    }
  }
);

export default RootStack;
