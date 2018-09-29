import { StyleSheet, Dimensions, Platform } from 'react-native';
const BACKGROUND_COLOR = '#30638E';
const DEVICE_WIDTH = Dimensions.get('window').width;

module.exports = StyleSheet.create({
    //GENERAL
    topView: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },
    topText: {
        fontSize: 16,
        color: 'white',
        marginLeft: 5
    },

    //COMPONENTS
    //Category Item
    categoryItemContainer: {
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 5,
    },
    categoryItemText: {
        fontSize: 15,
        color: 'black',
        marginTop: 5,
        marginBottom: 5
    },

    //PAGES
    //Home Page
    hpContainerView: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: BACKGROUND_COLOR
    },
    hpTopView: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 10
    },
    hpTopText: {
        fontSize: 28,
        color: 'white'
    },
    hpTopImage: {
        width: 128,
        height: 128,
        marginBottom: 10
    },
    hpBodyView: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20
    },
    hpBodyButtonView: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: '80%',
        height: '18%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 1,
        shadowRadius: 10,
        shadowOffset: { width: 1, height: 10 },
    },
    hpBodyButtonText: {
        fontSize: 16
    },

    //Category Page
    cpContainerView: {
        flex: 1,
        backgroundColor: BACKGROUND_COLOR,
        flexDirection: 'column',
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    cpMainContainer: {
        flexDirection: 'column',
        paddingTop: 10,
        alignItems: 'center'
    },
    cpMainTopText: {
        color: 'white',
        fontSize: 26,
        marginTop: 10
    },
    cpCategoriesContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 10
    },
    cpCategoryItemsContainer: {
        flexDirection: 'row',
        marginTop: 20
    },

    //Question Page
    qpContainerView: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: BACKGROUND_COLOR,
        alignItems: 'center',
        justifyContent: 'center'
    },
    qpQuestionTopView: {
        width: DEVICE_WIDTH - 50,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    qpQuestionHelpersView: {
        flexDirection: 'row',
    },
    qpQuestionNumberText: {
        color: 'white',
        fontSize: 16,
        alignSelf: 'flex-end',
    },
    qpRightAnswersNumberText: {
        color: 'white',
        fontSize: 16,
        alignSelf: 'flex-start',
    },
    qpQuestionBoxContainerView: {
        backgroundColor: '#f4bc42',
        justifyContent: 'center',
        alignItems: 'center',
        width: DEVICE_WIDTH - 50,
        height: 300,
        borderRadius: 8,
        marginBottom: 15,
        marginTop: 10
    },
    qpQuestionBoxView: {
        width: '95%',
        height: '90%',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        paddingRight: 10,
        paddingLeft: 10
    },
    qpQuestionText: {
        fontSize: 16
    },
    qpQuestionChoice: {
        backgroundColor: 'white',
        width: DEVICE_WIDTH - 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        height: 50,
        borderColor: '#f4bc42'
    },
    qpEmptyQuestionChoice: {
        width: DEVICE_WIDTH - 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        height: 50,
    },
    qpChoiceText: {
        fontSize: 15,
    },
    qpJokerView: {
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: '#f4bc42',
        paddingLeft: 10,
        paddingRight: 10,
        height: 35,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 1,
        shadowRadius: 10,
        shadowOffset: { width: 1, height: 10 }
    },
    qpJokerText: {
        fontSize: 14
    },

    //Result Page
    rpContainerView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: BACKGROUND_COLOR
    },
    rpIcon: {
        width: 128,
        height: 128,
        marginBottom: 25
    },
    rpText: {
        color: 'white',
        fontSize: 18
    },
    rpButton: {
        height: 50,
        width: 200,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 35,
        borderRadius: 5
    },
    rpButtonText: {
        fontSize: 16
    },

    //About Page
    apContainerView: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 5,
        backgroundColor: BACKGROUND_COLOR,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    mainPartContainer: {
        padding: 20,
        flexDirection: 'column'
    },
    apPageTitleText: {
        fontSize: 48,
        color: 'white'
    },
    apDescText: {
        color: 'white',
        marginTop: 15
    }

});
