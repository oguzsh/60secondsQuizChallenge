import {
  FETCH_CATEGORIES_SUCCESS,
  FETCH_ERROR,
  FETCH_SUCCESS,
  GAME_OVER,
  START_GAME,
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
      choices: ['Adi&oacute;s', 'Hola', 'Au Revoir', 'Salir'],
    },
    {
      category: 'General Knowledge',
      type: 'multiple',
      difficulty: 'easy',
      question:
        'What does the &#039;S&#039; stand for in the abbreviation SIM, as in SIM card? ',
      correct_answer: 'Subscriber',
      incorrect_answers: ['Single', 'Secure', 'Solid'],
      choices: ['Subscriber', 'Single', 'Secure', 'Solid'],
    },
  ],
  currentQuestionIndex: 0,
  totalScore: 0,
  time: 60,
  loading: true,
  categories: [],
  error: false,
  errorMessage: '',
  selectedDifficulty: 'easy',
  selectedCategoryId: 0,
  amountQuestions: 50,
  totalQuestionsSize: 0,
  gameOver: false,
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
        errorMessage: action.payload,
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
        time: action.payload.time,
      };
    case START_GAME:
      return {
        ...state,
        selectedCategoryId: action.payload.categoryId
          ? action.payload.categoryId
          : state.selectedCategoryId,
        selectedDifficulty: action.payload.difficulty
          ? action.payload.difficulty
          : state.selectedDifficulty,
        currentQuestionIndex: 0,
        totalScore: 0,
        loading: true,
      };
    case GAME_OVER:
      return {
        ...state,
        totalScore: action.payload,
        gameOver: true,
      };
    default:
      return state;
  }
};
