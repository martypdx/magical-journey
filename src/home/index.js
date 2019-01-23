import userApi from '../services/user-api.js';

const form = document.getElementById('sign-in');

form.addEventListener('submit', event => {
    event.preventDefault();

    const user = { 
        name: form.elements.name.value,
        answers: {}
    };

    userApi.save(user);

    window.location = 'map.html';
});