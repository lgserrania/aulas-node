"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users = [
    {
        id: '1',
        name: "Luis Gustavo",
        email: "gusouza980@gmail.com"
    },
    {
        id: '2',
        name: "Kauanna",
        email: "kakauhp@outlook.com"
    }
];
class User {
    static findAll() {
        return Promise.resolve(users);
    }
    static findById(id) {
        const filtered = users.filter(user => user.id === id);
        let user = undefined;
        if (filtered.length > 0) {
            user = filtered[0];
        }
        return Promise.resolve(user);
    }
}
exports.User = User;
