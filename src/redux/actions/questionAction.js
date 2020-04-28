import {
  FETCH_ERROR,
  FETCH_SUCCESS,
  NEXT_QUESTION,
  FETCH_CATEGORIES_SUCCESS,
  GAME_OVER,
} from './types';

import {getAllCategories, getData} from '../../api/apiService';
import {shuffleArray} from '../../utils/helperFunctions';

export const fetchAllCategories = () => {
  return (dispatch) => {
    getAllCategories()
      .then((categories) => {
        categories = categories.map((category) => {
          return {
            name: category.name,
            id: category.id,
          };
        });
        dispatch({type: FETCH_CATEGORIES_SUCCESS, payload: categories});
      })
      .catch(() => {
        dispatch({type: FETCH_ERROR});
      });
  };
};

export const fetchQuestions = (selectedCategoryId, selectedDifficulty) => {
  return (dispatch) => {
    getData(10, selectedDifficulty, selectedCategoryId)
      .then((questions) => {
        const editedQuestions = questions.map((question) => {
          let choices = questions.incorrect_answers;
          choices.push(question.correct_answer);
          choices = shuffleArray(choices);

          return {
            choices: choices.map((choice) => choice),
            category: question.category,
            difficulty: question.difficulty,
            type: question.type,
            correct_answer: question.correct_answer,
            question: question,
          };
        });
        dispatch({type: FETCH_SUCCESS, payload: editedQuestions});
      })
      .catch(() => {
        dispatch({type: FETCH_ERROR});
      });
  };
};

export const nextQuestion = (
  selectedAnswer,
  currentQuestionIndex,
  questions,
  totalScore,
) => {
  return (dispatch) => {
    const nextIndex = currentQuestionIndex + 1;
    let totalQuestionsSize = questions.length;

    selectedAnswer === questions[currentQuestionIndex].correct_answer
      ? (totalScore += 1)
      : totalScore;

    if (nextIndex < totalQuestionsSize) {
      dispatch({
        type: NEXT_QUESTION,
        payload: {currentQuestionIndex: nextIndex, totalScore},
      });
    } else {
      dispatch({type: GAME_OVER, payload: totalScore});
    }
  };
};
