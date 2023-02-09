export default class API {    
    static saveData = async (data) => {
        const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
        const id = '0oB7cziYAqgRf6ROSq4e';
        const identifierUrl = `${url}games/${id}/score/`;

        const response = await fetch(identifierUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        const res = await response.json();
          return res.result;  
      };

  static getData = async () => {
    const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
    const id = '0oB7cziYAqgRf6ROSq4e';
    const identifierUrl = `${url}games/${id}/score/`;
      const response = await fetch(identifierUrl, {
          });
          const res = await response.json();
          return res.result;
}
}
