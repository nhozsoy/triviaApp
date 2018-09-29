import React from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import styles from '../Styles';
import * as QuestionsData from '../Questions';


class Question extends React.Component {
    constructor() {
        super();
        this.state = {
            questions: [],
            currentQuestion: {},
            questionCount: 0,
            correctAnswerCount: 0,
            wrongAnswer: '',
            firstChoiceToDelete: '',
            secondChoiceToDelete: '',
            renderFifty: true,
            renderAudience: true
        }
    }

    componentWillMount() {
        const { params } = this.props.navigation.state;
        let questions;

        switch (params.comesFrom) {
            case 'Mixed':
                let questionArrays = [QuestionsData.EntertainmentQuestions, QuestionsData.ArtQuestions, QuestionsData.HistoryQuestions,
                QuestionsData.GeographyQuestions, QuestionsData.ScienceQuestions, QuestionsData.SportQuestions];
                questions = [].concat(...questionArrays);
                break;
            case 'Entertainment':
                questions = QuestionsData.EntertainmentQuestions;
                break;
            case 'Art':
                questions = QuestionsData.ArtQuestions;
                break;
            case 'History':
                questions = QuestionsData.HistoryQuestions;
                break;
            case 'Geography':
                questions = QuestionsData.GeographyQuestions;
                break;
            case 'Science':
                questions = QuestionsData.ScienceQuestions;
                break;
            case 'Sports':
                questions = QuestionsData.SportQuestions;
                break;
        }

        this.generateQuestions(questions);
    }

    generateQuestions(questions) {
        let shuffled = questions.sort(function () { return .5 - Math.random() });
        let randomQuestions = shuffled.slice(0, 5);
        this.setState({ questions: randomQuestions });
        this.setState({ currentQuestion: randomQuestions[0] })
        this.setState({ questionCount: 0 })
    } 

    answerQuestion(choice) {
        this.setState({ 'correctAnswer': this.state.currentQuestion.Answer });
        if (choice === this.state.currentQuestion.Answer) {
            let correctAnswerCount = this.state.correctAnswerCount;
            let newCorrectAnswerCount = correctAnswerCount + 1;
            this.setState({ 'correctAnswerCount': newCorrectAnswerCount });
        } else {
            this.setState({ 'wrongAnswer': choice });
        }
        let questionCount = this.state.questionCount;
        if (questionCount + 1 === 5) {
            const { params } = this.props.navigation.state;
            setTimeout(() => {
                params.navigation.navigate('Result', { correctAnswerCount: this.state.correctAnswerCount });
            }, 1500)
        } else {
            questionCount++;
            this.setState({ 'questionCount': questionCount });
            setTimeout(() => {
                this.setState({ 'currentQuestion': this.state.questions[questionCount] });
                this.setState({ 'wrongAnswer': '' });
                this.setState({ 'correctAnswer': '' });
                this.setState({ 'firstChoiceToDelete': '' });
                this.setState({ 'secondChoiceToDelete': '' });
            }, 1000);
        }
    }

    fiftyJoker() {
        let allChoices = ['A', 'B', 'C', 'D'];
        let correctAnswer = this.state.currentQuestion.Answer;
        //we delete the right answer from array
        let index = allChoices.indexOf(correctAnswer);
        allChoices.splice(index, 1);
        // we delete one of the wrong answers, so there will be 2 wrong answers in array
        let indexToDelete = Math.random() * (3 - 0);
        allChoices.splice(indexToDelete, 1);
        //we set answers to delete
        this.setState({ firstChoiceToDelete: allChoices[0] });
        this.setState({ secondChoiceToDelete: allChoices[1] });
        this.setState({ renderFifty: false });
    }

    audienceJoker() {
        let correctAnswer = this.state.currentQuestion.Answer;
        let percentOfCorrectAnswer = (Math.random() * (85 - 55) + 55).toFixed(1);
        let otherTotalPercentages = 100 - percentOfCorrectAnswer;
        let percentage = otherTotalPercentages / 7;
        let firstWrongAnswer = (percentage * 4).toFixed(1);
        let secondWrongAnswer = (percentage * 2).toFixed(1);
        let thirdWrongAnswer = (percentage).toFixed(1);

        Alert.alert(
            'Audience Votes',
            'A: %' + (correctAnswer === 'A' ? percentOfCorrectAnswer : firstWrongAnswer) + '\n' +
            'B: %' + (correctAnswer === 'B' ? percentOfCorrectAnswer : correctAnswer === 'A' ? firstWrongAnswer : secondWrongAnswer) + '\n' +
            'C: %' + (correctAnswer === 'C' ? percentOfCorrectAnswer : correctAnswer === 'B' ? secondWrongAnswer : thirdWrongAnswer) + '\n' +
            'D: %' + (correctAnswer === 'D' ? percentOfCorrectAnswer : correctAnswer === 'C' ? thirdWrongAnswer : firstWrongAnswer),
            [
                { text: 'OK' },
            ],
            { cancelable: false }
        )
        this.setState({ renderAudience: false });
    }

    renderFifty() {
        if (this.state.renderFifty) {
            return (
                <TouchableOpacity style={[styles.qpJokerView, { marginRight: 10 }]} onPress={() => this.fiftyJoker()}>
                    <Text style={styles.qpJokerText}>%50</Text>
                </TouchableOpacity>
            );
        }
    }

    renderAudience() {
        if (this.state.renderAudience) {
            return (
                <TouchableOpacity style={styles.qpJokerView} onPress={() => this.audienceJoker()}>
                    <Text style={styles.qpJokerText}>Ask Audience</Text>
                </TouchableOpacity>
            );
        } 
    }

    renderChoices(choice) {
        if (this.state.firstChoiceToDelete !== choice && this.state.secondChoiceToDelete !== choice) {
            return (
                <TouchableOpacity onPress={() => this.answerQuestion(choice)} style={[styles.qpQuestionChoice, { backgroundColor: (this.state.correctAnswer === choice ? '#56c12e' : this.state.wrongAnswer === choice ? '#c9331a' : 'white') }]}>
                    <Text style={styles.qpChoiceText}>{this.state.currentQuestion[choice]}</Text>
                </TouchableOpacity>
            );
        } else {
            return <View style={styles.qpEmptyQuestionChoice}></View>
        }
    }

    render() {
        return (
            <View style={styles.qpContainerView}>
                <View style={styles.qpQuestionTopView}>
                    <View style={styles.qpQuestionHelpersView}>
                        {this.renderFifty()}
                        {this.renderAudience()}
                    </View>
                    <Text style={styles.qpQuestionNumberText}>Question: {this.state.questionCount + 1}/5</Text>
                </View>
                <View style={styles.qpQuestionBoxContainerView}>
                    <View style={styles.qpQuestionBoxView}>
                        <Text style={styles.qpQuestionText}>{this.state.currentQuestion.Question}</Text>
                    </View>
                </View>
                {this.renderChoices("A")}
                {this.renderChoices("B")}
                {this.renderChoices("C")}
                {this.renderChoices("D")}
            </View>
        );
    }
}

export default Question;