import API from './APIrequest';

export default class UI {
static displayScore = async () => {
  const res = await API.getScore();
  const scorelist = document.querySelector('.displayscore');
  scorelist.innerHTML = '';
  res.forEach((score) => {
    scorelist.innerHTML += `<li>
    ${score.user}:${score.score}
   </li>`;
  });
};
}



