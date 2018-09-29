import React, { Component } from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity } from 'react-native';
import styles from '../Styles';

class AboutUs extends React.Component {
    render(){
        return(
            <SafeAreaView style={styles.apContainerView}>
                    <TouchableOpacity onPress = {() => this.props.navigation.navigate('Home')}>
                        <View style={styles.topView}>
                            <Image source={require("../img/leftarrow.png")} style={{width:25, height:25}} />
                            <Text style={styles.topText}>Return to Home Page</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.mainPartContainer}>
                        <Text style={styles.apPageTitleText}>About</Text>
                        <Text style={styles.apDescText}>This app is developed with React Native and Expo.</Text>
                        <Text style={styles.apDescText}>Creator: github.com/nhozsoy</Text>
                        
                    </View>
            </SafeAreaView> 
        );
    }
}

export default AboutUs;