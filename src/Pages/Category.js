import React from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity, AsyncStorage, Dimensions } from 'react-native';
import styles from '../Styles';
import CategoryItem from '../Components/CategoryItem';

class Category extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.cpContainerView}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                    <View style={styles.topView}>
                        <Image source={require("../img/leftarrow.png")} style={{ width: 25, height: 25 }} />
                        <Text style={styles.topText}>Return to Home Page</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.cpMainContainer}>
                    <Text style={styles.cpMainTopText}>CATEGORIES</Text>
                    <View style={styles.cpCategoriesContainer}>
                        <View style={styles.cpCategoryItemsContainer}>
                            <CategoryItem navigation={this.props.navigation} comesFrom={'Mixed'} itemWidth={320} iconSize={{ height: 70.75, width: 63.75 }} icon={require('../img/brain.png')} />
                        </View>
                        <View style={styles.cpCategoryItemsContainer}>
                            <CategoryItem navigation={this.props.navigation} comesFrom={'Entertainment'} itemWidth={150} iconSize={{ height: 50, width: 50 }} icon={require('../img/movie.png')} />
                            <CategoryItem navigation={this.props.navigation} comesFrom={'Art'} itemWidth={150} iconSize={{ height: 50, width: 50 }} icon={require('../img/art.png')} />
                        </View>
                        <View style={styles.cpCategoryItemsContainer}>
                            <CategoryItem navigation={this.props.navigation} comesFrom={'History'} itemWidth={150} iconSize={{ height: 50, width: 50 }} icon={require('../img/history.png')} />
                            <CategoryItem navigation={this.props.navigation} comesFrom={'Geography'} itemWidth={150} iconSize={{ height: 50, width: 50 }} icon={require('../img/geography.png')} />
                        </View>
                        <View style={styles.cpCategoryItemsContainer}>
                            <CategoryItem navigation={this.props.navigation} comesFrom={'Science'} itemWidth={150} iconSize={{ height: 50, width: 50 }} icon={require('../img/science.png')} />
                            <CategoryItem navigation={this.props.navigation} comesFrom={'Sports'} itemWidth={150} iconSize={{ height: 50, width: 50 }} icon={require('../img/sports.png')} />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

export default Category;