import LocalStorage from './Localstorage.js';


export default class UI {

static showAllTasks(input){
    let Data = LocalStorage.getData();
    let colorClass = '';
    if (Data.indexOf(input) % 2 !== 0) {
      colorClass = 'light';
    } else {
      colorClass = 'dark';
    }
    const namescorelist = document.querySelector('.displayscore');
    const namescore = document.createElement('li');
    namescore.classList.add('listscore');
    namescore.classList.add(colorClass);
    namescore.setAttribute('id', input.id);
    namescore.innerHTML = `<p><span>"${input.name}"</span>: ${input.score}</p>`;
    namescorelist.appendChild(book);
}
}


