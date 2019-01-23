
const KEY = 'user';

const userApi = {
    save(user) {
        localStorage[KEY] = JSON.stringify(user);
    },

    get() {
        const json = localStorage[KEY];
        return json ? JSON.parse(json) : null;
    },

    safeGet() {
        const user = userApi.get();
        if(!user) {
            window.location = './';
        }
        else {
            return user;
        }
    }
};

export default userApi;