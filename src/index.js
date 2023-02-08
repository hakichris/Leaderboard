import './style.css';
import LocalStorage from './Localstorage.js';
import score from './Score.js'
import UI from './UI';
import { Console } from 'console';

let Data;
if (LocalStorage.getData() === null) {
  Data = [];
} else {
  Data = LocalStorage.getData();
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
    Data = LocalStorage.getData();
    Data.push(input);
    LocalStorage.saveData(Data);
    // UI.showAllTasks(input);
  };

const addNewinput = document.querySelector('#submit');
Console.log()
addNewinput.addEventListener('click', () => {
   const newinput = getInput();
    addscore(newinput);
    UI.showAllTasks(newInput);
  });


  window.onload = () => {
    Data.load();
  };
