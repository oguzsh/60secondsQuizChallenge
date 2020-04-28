import {
  FETCH_CATEGORIES_SUCCESS,
  FETCH_ERROR,
  FETCH_SUCCESS,
  GAME_OVER,
  NEXT_QUESTION,
} from '../actions/types';

const INITIAL_STATE = {
  questions: [
    {
      category: 'General Knowledge',
      type: 'multiple',
      difficulty: 'easy',
      question: 'How would one say goodbye in Spanish?',
      correct_answer: 'Adi&oacute;s',
      incorrect_answers: [' Hola', 'Au Revoir', 'Salir'],
      choices: [],
    },
    {
      category: 'General Knowledge',
      type: 'multiple',
      difficulty: 'easy',
      question:
        'What does the &#039;S&#039; stand for in the abbreviation SIM, as in SIM card? ',
      correct_answer: 'Subscriber',
      incorrect_answers: ['Single', 'Secure', 'Solid'],
      choices: [],
    },
  ],
  currentQuestionIndex: 0,
  totalScore: 0,
  time: 15,
  loading: true,
  categories: [],
  error: false,
  selectedDifficulty: 'Easy',
  selectedCategoryId: 0,
  amountQuestions: 10,
  totalQuestionsSize: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        questions: action.payload,
        totalQuestionsSize: action.payload.length,
        loading: false,
        error: false,
      };
    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        loading: false,
        error: false,
      };
    case NEXT_QUESTION:
      return {
        ...state,
        currentQuestionIndex: action.payload.currentQuestionIndex,
        totalScore: action.payload.totalScore,
      };
    case GAME_OVER:
      return {
        ...state,
        totalScore: action.payload,
      };
    default:
      return state;
  }
};
