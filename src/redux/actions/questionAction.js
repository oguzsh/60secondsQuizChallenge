import {
  FETCH_ERROR,
  FETCH_SUCCESS,
  NEXT_QUESTION,
  FETCH_CATEGORIES_SUCCESS,
  GAME_OVER,
  START_GAME,
} from './types';

import {getAllCategories, getData} from '../../api/apiService';
import {shuffleArray} from '../../utils/helperFunctions';
import {AllHtmlEntities as entities} from 'html-entities';

export const fetchAllCategories = () => {
  return (dispatch) => {
    getAllCategories()
      .then(({trivia_categories}) => {
        trivia_categories = trivia_categories.map((category) => {
          return {
            label: category.name,
            value: category.id,
          };
        });
        dispatch({type: FETCH_CATEGORIES_SUCCESS, payload: trivia_categories});
      })
      .catch((error) => {
        dispatch({type: FETCH_ERROR, payload: error});
      });
  };
};

export const fetchQuestions = (selectedDifficulty, selectedCategoryId) => {
  return (dispatch) => {
    getData(10, selectedDifficulty, selectedCategoryId)
      .then(({results}) => {
        const editedQuestions = results.map((result) => {
          let choices = result.incorrect_answers;
          choices.push(result.correct_answer);
          choices = shuffleArray(choices);

          return {
            choices: choices.map((choice) => entities.decode(choice)),
            category: result.category,
            difficulty: result.difficulty,
            type: result.type,
            correct_answer: entities.decode(result.correct_answer),
            question: result,
          };
        });
        dispatch({type: FETCH_SUCCESS, payload: editedQuestions});
      })
      .catch((error) => {
        console.log('error', error);
        dispatch({type: FETCH_ERROR});
      });
  };
};

export const nextQuestion = (
  selectedAnswer,
  currentQuestionIndex,
  questions,
  type,
  navigation,
  totalScore,
  nav,
) => {
  return (dispatch) => {
    const nextIndex = currentQuestionIndex + 1;
    let totalQuestionsSize = questions.length;

    if (type === 'correct') {
      navigation.navigate('CorrectAnswer');
    } else if (type === 'incorrect' || type === 'timeout') {
      navigation.navigate('WrongAnswer');
    }

    if (nextIndex < totalQuestionsSize) {
      dispatch({
        type: NEXT_QUESTION,
        payload: {currentQuestionIndex: nextIndex, totalScore, time: 60},
      });
    } else {
      dispatch({type: GAME_OVER, payload: totalScore});
    }
  };
};

export const startGame = (difficulty, categoryId) => {
  return (dispatch) => {
    dispatch({type: START_GAME, payload: {categoryId, difficulty}});
  };
};
