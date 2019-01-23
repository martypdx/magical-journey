import userApi from '../services/user-api.js';
import quizApi from '../services/quiz-api.js';
import htmlToDOM from '../html-to-dom.js';

if(!userApi.hasUser()) {
    window.location = './';
}

const user = userApi.get();

const userName = document.getElementById('user-name');
userName.textContent = user.name;

const main = document.querySelector('main');

const quizzes = quizApi.getAll();
const answers = user.answers;

for(let i = 0; i < quizzes.length; i++) {
    const quiz = quizzes[i];
    const answer = answers[quiz.category];

    const result = makeResult(quiz.story, answer);
    main.appendChild(result);
}

function makeResult(story, answer) {
    const html = /*html*/`
        <p>
            ${story.intro} 
            ${story.choices[answer]}
        </p>
    `;

    return htmlToDOM(html);
}