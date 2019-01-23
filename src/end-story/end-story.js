import userApi from '../services/user-api.js';
import quizApi from '../services/quiz-api.js';
import htmlToDOM from '../html-to-dom.js';

const user = userApi.safeGet();

const userName = document.getElementById('user-name');
userName.textContent = user.name;

const main = document.querySelector('main');
const answers = user.answers;
const categories = Object.keys(answers);

for(let i = 0; i < categories.length; i++) {
    const category = categories[i];
    const answer = answers[category];
    const quiz = quizApi.get(category);

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