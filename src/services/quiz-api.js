import quizzes from './quizzes/quizzes.js';

export default {
    getAll() {
        return quizzes;
    },

    get(category) {
        for(let i = 0; i < quizzes.length; i++) {
            const quiz = quizzes[i];
            if(quiz.category === category) {
                return quiz;
            }
        }
    }
};