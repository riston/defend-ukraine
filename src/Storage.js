
var Storage = {

    isSupported: function () {

        try {
            return 'localStorage' in window &&
                window.localStorage !== null;
        } catch (e) {

            return false;
        }
    },

    get: function (key) {

        return localStorage.getItem(key);
    },

    set: function (key, value) {

        return localStorage.setItem(key, value);
    }

};

module.exports = Storage;
