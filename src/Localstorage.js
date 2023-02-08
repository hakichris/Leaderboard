export default class LocalStorage {
  static getData() {
    return JSON.parse(localStorage.getItem('ScoreData'));
  }

  static saveData(data) {
    localStorage.setItem('ScoreData', JSON.stringify(data));
  }
}
