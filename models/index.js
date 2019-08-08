const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
  logging:false
});

const Page = db.define('page', {
  title: {
      type: Sequelize.STRING,
      // allowNull: false
    },
  slug: {
      type: Sequelize.STRING,
      // unique: true
  },
  content: {
    type: Sequelize.TEXT
  },
  status: {
    type: Sequelize.ENUM('open', 'closed')
  }
});

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    // allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    // unique: true
  }
});

module.exports = {
  db,
  Page,
  User
}
