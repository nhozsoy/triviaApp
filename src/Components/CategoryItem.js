import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../Styles';

export default class CategoryItem extends React.Component {
    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Question', { comesFrom: this.props.comesFrom, navigation: this.props.navigation })} style={[styles.categoryItemContainer, { width: this.props.itemWidth }]}>
                    <Image style={{ width: this.props.iconSize.width, height: this.props.iconSize.height }} source={this.props.icon} />
                    <Text style={styles.categoryItemText}>{this.props.comesFrom}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}