const db = require("../../../Models");
const decodeToken = require("../../../Util/DecodeToken")
const {Op} = require("sequelize")

exports.LIST_EVENTS = {
  async listEvent(parent, { limit, offset, sortBy, sortOrder, startDate, endDate, search }, { token }) {
    try {
      // Check if user is logged in
      if (!token) {
        throw new Error("Unauthorized");
      }

      const { id, email } = decodeToken(token);

      const where = {};
      const order = [[sortBy, sortOrder]];
      const include = [
        {
          model: db.user,
          as:"users"
        }
      ];
      

      if (startDate) {
        where.startDate = { [Op.gte]: startDate };
      }

      if (endDate) {
        where.endDate = { [Op.lte]: endDate };
      }

      if (search) {
        where[Op.or] = [
          { title: { [Op.iLike]: `%${search}%` } },
          { description: { [Op.iLike]: `%${search}%` } },
        ];
      }
      const { count: totalCount, rows: events } = await db.event.findAndCountAll({
        where,
        order,
        limit,
        offset,
        include
      });

      const uu = await db.event.findByPk('8',{
        include:[{
          model:db.user,
          through: { attributes: [] }
        }]
      })

      // console.log(uu.createBy)
      // const u = await db.event.findByPk();
      // console.log(u.getusers)
      // const eat = await db.event.findOne();


      // console.log((await eat.getUsers()).name);

      return { totalCount, events };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
};
