import userApi from '../src/services/user-api.js';
import quizApi from '../src/services/quiz-api.js';

const test = QUnit.test;
const module = QUnit.module;

module('api services');

QUnit.begin(function() {
    window.localStorage.removeItem('user');
});

test('user api', function(assert) {
    const user = {
        name: 'Ginny',
        answers: {}
    };

    assert.notOk(userApi.hasUser());    
    userApi.save(user);
    assert.deepEqual(userApi.get(), user);
    assert.ok(userApi.hasUser());
});

test('quiz api', function(assert) {
    const quizzes = quizApi.getAll();
    assert.ok(quizzes.length);

    const quiz = quizzes[0];
    assert.deepEqual(quizApi.get(quiz.category), quiz);
});