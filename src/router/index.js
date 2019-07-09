import React from 'react';
import {Image} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import Home from '../pages/home';
import Activity from '../pages/activity';
import Share from '../pages/share';
import Me from '../pages/me';

//首页界面的底部栏
const HomeStack = createStackNavigator(
    {
        Home
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none',
        defaultNavigationOptions: {
            gesturesEnabled: false
        }
    }
);

HomeStack.navigationOptions = ({navigation}) => {
    return {
        tabBarVisible: navigation.state.index === 0,
        tabBarLabel: '首页',
        tabBarIcon: ({tintColor, focused}) => {
            return <Image source={focused ? require('./img/home_active.png') : require('./img/home.png')} style={{width: 28, height: 28}} />;
        }
    };
};

//活动界面的底部栏
const ActivityStack = createStackNavigator(
    {
        Activity
    },
    {
        initialRouteName: 'Activity',
        headerMode: 'none',
        defaultNavigationOptions: {
            gesturesEnabled: false
        }
    }
);

ActivityStack.navigationOptions = ({navigation}) => {
    return {
        tabBarVisible: navigation.state.index === 0,
        tabBarLabel: '活动',
        tabBarIcon: ({tintColor, focused}) => {
            return <Image source={focused ? require('./img/sponsor_active.png') : require('./img/sponsor.png')} style={{width: 28, height: 28}} />;
        }
    };
};

//教程界面的底部栏
const ShareStack = createStackNavigator(
    {
        Share
    },
    {
        initialRouteName: 'Share',
        headerMode: 'none',
        defaultNavigationOptions: {
            gesturesEnabled: false
        }
    }
);

ShareStack.navigationOptions = ({navigation}) => {
    return {
        tabBarVisible: navigation.state.index === 0,
        tabBarLabel: '分享',
        tabBarIcon: ({tintColor, focused}) => {
            return <Image source={focused ? require('./img/share_active.png') : require('./img/share.png')} style={{width: 28, height: 28}} />;
        }
    };
};

//我的界面的底部栏
const MineStack = createStackNavigator(
    {
        Me
    },
    {
        initialRouteName: 'Me',
        headerMode: 'none',
        defaultNavigationOptions: {
            gesturesEnabled: false
        }
    }
);

//实现推出子页面时隐藏底部TabBar栏
MineStack.navigationOptions = ({navigation}) => {
    return {
        tabBarVisible: navigation.state.index === 0,
        tabBarLabel: '我的',
        tabBarIcon: ({tintColor, focused}) => {
            return <Image source={focused ? require('./img/profile_active.png') : require('./img/profile.png')} style={{width: 28, height: 28}} />;
        }
    };
};

const TabBarStack = createBottomTabNavigator(
    {
        Home: HomeStack,
        Activity: ActivityStack,
        Share: ShareStack,
        Mine: MineStack
    },
    {
        tabBarOptions: {
            activeTintColor: '#6c4932',
            labelStyle: {fontSize: 12},
            allowFontScaling: false,
            inactiveBackgroundColor: 'rgba(255,255,255,0.5)',
            activeBackgroundColor: 'rgba(255,255,255,0.5)'
        }
    }
);

//创建统一的导航栏子视图
const RootStack = createStackNavigator(
    {
        mainTab: {screen: TabBarStack}
    },
    {
        initialRouteName: 'mainTab',
        headerMode: 'none',
        defaultNavigationOptions: {
            gesturesEnabled: false
        }
    }
);

export default RootStack;
