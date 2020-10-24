const db = require('../database/connection')

module.exports = {
    add,
    find,
    findBy,
    findById,
};

function find() {
    return db("user").select("id", "username").orderBy("id");
}


async function add(user) {
    try {
        const [id] = await db("user").insert(user, "id");

        return findById(id);
    } catch (error) {
        throw error;
    }
}

function findBy(filter) {
    return db("user as u")
        .where(filter)
        .orderBy("u.id");
}

function findById(id) {
    return db("user").where({ id }).first();
}