import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import styles from './src/Styles';
import Category from './src/Pages/Category'
import Question from './src/Pages/Question'
import Result from './src/Pages/Result'
import About from './src/Pages/About'

class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <View style={styles.hpContainerView}>
        <View style={styles.hpTopView}>
          <Image source={require("./src/img/questionicon.png")} style={styles.hpTopImage} />
          <Text style={styles.hpTopText}>Trivia Game</Text>
        </View>
        <View style={styles.hpBodyView}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Category')} style={styles.hpBodyButtonView}>
              <Text style={styles.hpBodyButtonText}>Start</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('About')} style={styles.hpBodyButtonView}>
              <Text style={styles.hpBodyButtonText}>About</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }


}

const TopLevelNav = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
  Category: {
    screen: Category,
    navigationOptions: {
      header: null
    }
  },
  Question: {
    screen: Question,
    navigationOptions: {
      header: null
    }
  },
  Result: {
    screen: Result,
    navigationOptions: {
      header: null
    }
  },
  About: {
    screen: About,
    navigationOptions: {
      header: null
    }
  },
}
);

export default TopLevelNav;
