
const KEY = 'user';

const userApi = {
    save(user) {
        localStorage[KEY] = JSON.stringify(user);
    },

    get() {
        const json = localStorage[KEY];
        return json ? JSON.parse(json) : null;
    },

    hasUser() {
        const user = userApi.get();
        return !!user;
    }
};

export default userApi;