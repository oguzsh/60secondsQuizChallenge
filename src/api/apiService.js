export const fetchData = async ({amount, difficulty, category}) => {
  const URL = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;

  let response = await fetch(URL);
  let data = await response.json();
  return data;
};

export const fetchAllCategories = async () => {
  const URL = 'https://opentdb.com/api_category.php';

  let response = await fetch(URL);
  let data = await response.json();
  return data;
};
