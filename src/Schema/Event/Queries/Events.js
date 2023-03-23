const db = require("../../../Models/index");
exports.EVENT_LIST = {
    async events(parent, args, context, info) {
        return await db.event.findAll();
    },
    async findEvent(parent, {id}, info) {
        return await db.event.findByPk(id);
    },
}
