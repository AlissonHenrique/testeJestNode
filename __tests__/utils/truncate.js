const { sequelize } = require("../../src/app/models");

module.exports = () => {
  return Promise.all(
    Object.keys(sequelize.models).map(async key => {
      return await sequelize.models[key].destroy({
        truncate: true,
        force: true
      });
    })
  );
};
