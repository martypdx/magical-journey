import userApi from '../services/user-api.js';
import quizApi from '../services/quiz-api.js';
import htmlToDOM from '../html-to-dom.js';
import toTitleCase from './to-title-case.js';

if(!userApi.hasUser()) {
    window.location = './';
}

const user = userApi.get();

const params = new URLSearchParams(window.location.search);
const category = params.get('category');

const quiz = quizApi.get(category);
if(!quiz) {
    window.location = 'map.html';
}

document.title = toTitleCase(category) + ' ' + document.title;
const header = document.getElementById('quiz-header');
header.textContent = quiz.title;

const container = document.getElementById('answers-container');
const answers = quiz.answers;
for(let i = 0; i < answers.length; i++) {
    const answer = makeAnswer(answers[i]);
    container.appendChild(answer);
}

const form = document.getElementById('quiz-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const answer = form.elements.answer.value;
    user.answers[category] = answer;
    userApi.save(user);

    window.location = 'map.html';
});

function makeAnswer(answer) {
    const html = /*html*/`
        <label>
            <input 
                type="radio" 
                name="answer" 
                value="${answer.value}" 
                required>
            ${answer.value.toUpperCase()}.  ${answer.prompt} 
        </label>
    `;

    return htmlToDOM(html);
}