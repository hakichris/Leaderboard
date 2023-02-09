export default class API {
  static saveData = async (user, userScore) => {
    const url =
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
    const id = '0oB7cziYAqgRf6ROSq4e';
    const identifierUrl = `${url}games/${id}/scores/`;

    const response = await fetch(identifierUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: `${user}`,
        score: userScore,
      }),
    });
    const res = await response.json();
    console.log('check the data here:', res);
    return res.result;
  };

  static getScore = async () => {
    const url =
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
    const id = '0oB7cziYAqgRf6ROSq4e';
    const identifierUrl = `${url}games/${id}/scores/`;

    const response = await fetch(identifierUrl, {});
    const res = await response.json();
    return res.result;
  };
}
