import './style.css';
import API from './APIrequest';
import score from './Score.js';
import UI from './UI';

let Data = [];
if (API.getData() === null) {
  Data = [];
} else {
  Data = API.getData();
}

const getInput = () => {
  const nameinput = document.getElementById('name');
  const scoreinput = document.getElementById('number');
  const newInput = new score(nameinput.value, scoreinput.value);
  nameinput.value = '';
  scoreinput.value = '';
  return newInput;
};

const addscore = (input) => {
  Data.push(input);
  API.saveData(Data);
};

const addNewinput = document.getElementById('submit');
addNewinput.addEventListener('submit', (e) => {
    // e.preventDefault();
  const newinput = getInput();
  addscore(newinput);
  UI.showAllTasks(newinput);
});

const btnRefresh = document.querySelector('#refresh');
btnRefresh.addEventListener('click', () => {
  window.location.reload();
  UI.reloadPage();
});

const load = () => {
  let datalist = API.getData();
  if (datalist === null) {
    datalist = [];
  }
  datalist.forEach((input) => UI.showAllTasks(input));
};

window.onload = () => {
  load();
};
