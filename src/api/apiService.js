export const getData = async (
  amount = '10',
  difficulty = 'easy',
  category = '9',
) => {
  const URL = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&category=${category}&type=multiple`;

  let response = await fetch(URL);
  let data = await response.json();
  return data;
};

export const getAllCategories = async () => {
  const URL = 'https://opentdb.com/api_category.php';

  let response = await fetch(URL);
  let data = await response.json();
  return data;
};
