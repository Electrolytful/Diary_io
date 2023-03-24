const db = require('../database/connect.js');

class Entry {
    constructor(entry) {
        this.entry_id = entry.entry_id;
        this.title = entry.title;
        this.content = entry.content;
        this.date = entry.date;
        this.category = entry.category;
        this.user_id = entry.user_id;
    }

    static async getAll() {
        
    }
}
