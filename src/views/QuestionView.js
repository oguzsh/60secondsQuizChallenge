import React, {useState, useLayoutEffect} from 'react';
import {SafeAreaView, Dimensions, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../redux/actions';

import Row from '../components/base/Row';
import Column from '../components/base/Column';

import ProgressBar from '../components/ProgressBar';
import Score from '../components/Score';
import QuestionTracker from '../components/QuestionTracker';
import Question from '../components/Question';

const QuestionView = ({
  currentQuestionNumber,
  currentQuestion,
  currentQuestionIndex,
  questions,
  totalQuestionsSize,
  totalScore,
  fetchQuestions,
  loading,
  gameOver,
  nextQuestion,
  selectedCategoryId,
  selectedDifficulty,
  time,
  navigation,
}) => {
  const {width} = Dimensions.get('window');
  const [state, setState] = useState({
    type: '',
  });

  const handleAnswerSelection = (questionChoice) => {
    const type =
      questionChoice === null
        ? 'timeout'
        : questionChoice === currentQuestion.correct_answer
        ? 'correct'
        : 'incorrect';

    setState({type: type});

    setTimeout(() => {
      nextQuestion(
        questionChoice,
        currentQuestionIndex,
        questions,
        type,
        navigation,
        totalScore + 100,
      );
    }, 500);
  };

  useLayoutEffect(() => {
    fetchQuestions(selectedDifficulty, selectedCategoryId.value);
  }, [fetchQuestions, selectedCategoryId.value, selectedDifficulty]);

  return (
    <Column flex={1} bg="white" as={SafeAreaView}>
      {gameOver ? navigation.navigate('WrongAnswer') : null}

      {loading ? (
        <ActivityIndicator />
      ) : (
        <Column>
          <Row justifyContent="space-around" width={width}>
            <QuestionTracker
              currentQuestion={currentQuestionNumber}
              amountQuestions={totalQuestionsSize}
            />
            <ProgressBar time={time} navigation={navigation} />
            <Score score={totalScore} />
          </Row>

          <Question
            question={currentQuestion.question}
            choices={currentQuestion.choices}
            onItemSelected={handleAnswerSelection}
            status={state.type}
          />
        </Column>
      )}
    </Column>
  );
};

const mapStateToProps = ({questionsReducer}) => {
  const {
    currentQuestionIndex,
    error,
    loading,
    selectedCategoryId,
    questions,
    totalScore,
    amountQuestions,
    selectedDifficulty,
    gameOver,
    time,
  } = questionsReducer;

  return {
    currentQuestion: questions[currentQuestionIndex],
    currentQuestionNumber: currentQuestionIndex + 1,
    totalQuestionsSize: questions.length,
    currentQuestionIndex,
    error,
    time,
    selectedCategoryId,
    loading,
    selectedDifficulty,
    gameOver,
    amountQuestions,
    questions,
    totalScore,
  };
};

export default connect(mapStateToProps, actions)(QuestionView);
