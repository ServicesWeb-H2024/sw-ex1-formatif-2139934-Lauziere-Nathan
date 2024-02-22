const db = require("../.src/config/database");

const Netflix_titles = {
    getAll: () => {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM netflix_titles';
            db.query(query, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    },
    getALLParType: (show_type) => {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM netflix_titles WHERE show_type = ?`;
            db.query(query, [show_type], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }
};


module.exports = Netflix_titles;