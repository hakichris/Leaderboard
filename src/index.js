import './style.css';
import API from './modules/APIrequest';
import UI from './modules/UI';

const adding = document.getElementById('submit');
const refresh = document.getElementById('refresh');
const score = document.getElementById('score');
const user = document.getElementById('user');

adding.addEventListener('click', async (e) => {
  e.preventDefault();
  await API.saveData(user.value, Number(score.value));
  user.value = '';
  score.value = '';
  UI.displayScore();
});

refresh.addEventListener('click', async () => {
  window.location.reload();
  UI.displayScore();
});

document.addEventListener('DOMContentLoaded', async () => {
  UI.displayScore();
});
