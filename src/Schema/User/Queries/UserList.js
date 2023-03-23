const db = require("../../../Models/index");
exports.USER_LIST = {
    async users(parent, args, context, info) {
        return await db.user.findAll({include:{model:db.event}});
    },
    async findUser(parent, {id}, info) {
        return await db.user.findByPk(id);
    },
}
