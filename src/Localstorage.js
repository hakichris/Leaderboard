export default class LocalStorage {
    static getData() {
      return JSON.parse(localStorage.getItem('ScoreData'));
    }
  
    static saveData(ScoreData) {
      localStorage.setItem('ScoreData', JSON.stringify(ScoreData));
    }
  }