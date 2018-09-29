import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from '../Styles';

class Result extends React.Component {
    render() {
        const { params } = this.props.navigation.state;
        return (
            <View style={styles.rpContainerView}>
                <Image source={require("../img/result.png")} style={styles.rpIcon} />
                <Text style={styles.rpText}>Correct Answers: {params.correctAnswerCount}</Text>
                <Text style={styles.rpText}>Wrong Answers: {5 - params.correctAnswerCount}</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Category')} style={styles.rpButton}>
                    <Text style={styles.rpButtonText}>Play Again</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Result;
