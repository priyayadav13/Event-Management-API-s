module.exports = (sequelize, Sequelize) => {

  const Event = sequelize.define("event", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    venue: {
      type: Sequelize.ENUM('SURAT', 'BARODA','AHMEDABAD'),
      allowNull: false,
    },
    startDate: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    endDate: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    createBy: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    
  },
  );
  return Event;
};


