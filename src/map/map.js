import userApi from '../services/user-api.js';
import quizApi from '../services/quiz-api.js';
import htmlToDOM from '../html-to-dom.js';

if(!userApi.hasUser()) {
    window.location = './';
}

const user = userApi.get();

const answers = user.answers;

const quizzes = quizApi.getAll();
const nav = document.getElementById('quizzes');

for(let i = 0; i < quizzes.length; i++) {
    const quiz = quizzes[0];
    if(answers[quiz.category]) {
        continue;
    }
    const quizLink = makeLink(quiz);
    nav.appendChild(quizLink);
}

if(nav.childElementCount === 0) {
    const doorLink = document.getElementById('secret-door');
    doorLink.classList.remove('hidden');
}

function makeLink(quiz) {
    const html = /*html*/`
        <a href="quiz.html?category=${quiz.category}">
            <img class="quiz-icon"
                src="assets/icons/${quiz.icon.image}" 
                alt="${quiz.icon.text}">
        </a>
    `;
    
    return htmlToDOM(html);
}