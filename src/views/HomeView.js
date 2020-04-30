import React, {useState, useLayoutEffect} from 'react';
import {SafeAreaView} from 'react-native';

import {connect} from 'react-redux';

import * as actions from '../redux/actions';

import Column from '../components/base/Column';
import Text from '../components/base/Text';
import WelcomeLogo from '../components/WelcomeLogo';
import Background from '../components/Background';
import ActionButton, {ActionButtonTitle} from '../components/ActionButton';
import ModalView from '../components/ModalView';

import theme from '../utils/theme';

const HomeView = ({
  categories,
  fetchAllCategories,
  fetchQuestions,
  loading,
  navigation,
}) => {
  const [visible, setVisible] = useState(false);

  useLayoutEffect(() => {
    fetchAllCategories();
  }, [fetchAllCategories]);

  return (
    <Column as={SafeAreaView} flex={1} bg="white">
      <Column flex={1} mt={20}>
        <WelcomeLogo />
      </Column>

      <Column flex={1}>
        <Text fontFamily={theme.fontFamily.bold} color="white" fontSize={32}>
          WELCOME
        </Text>
        <Text fontFamily={theme.fontFamily.medium} color="white" fontSize={18}>
          TRIVIA GAME
        </Text>

        <ActionButton mt={20} onPress={() => setVisible(!visible)} bg="white">
          <ActionButtonTitle color="purple">GET STARTED</ActionButtonTitle>
        </ActionButton>
      </Column>

      <ModalView
        visible={visible}
        loading={loading}
        setVisible={setVisible}
        categories={categories}
      />
      <Background />
    </Column>
  );
};

const mapStateToProps = ({questionsReducer}) => {
  const {categories, loading} = questionsReducer;
  return {
    categories,
    loading,
  };
};

export default connect(mapStateToProps, actions)(HomeView);
