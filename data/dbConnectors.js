import mongoose from 'mongoose';
import Sequenlize from 'sequelize';
import _ from 'lodash';
import casual from 'casual';

// Mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/friends', {
  useNewUrlParser: true
});

const friendSchema = new mongoose.Schema({
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  gender: {
    type: String
  },
  age: {
    type: Number
  },
  language: {
    type: String
  },
  email: {
    type: String
  },
  contacts: {
    type: Array
  },
});

const Friends = mongoose.model('friends', friendSchema);

// SQL
const sequelize = new Sequenlize('database', null, null, {
  dialect: 'sqlite',
  storage: './aliens.sqlite',
});

const Aliens = sequelize.define('aliens', {
  firstname: { type: Sequenlize.STRING },
  lastname: { type: Sequenlize.STRING },
  planet: { type: Sequenlize.STRING },
});

// Aliens.sync({ force: true }).then(() => {
//   _.times(10, (i) => {
//     Aliens.create({
//       firstname: casual.first_name,
//       lastname: casual.last_name,
//       planet: casual.word,
//     });
//   });
// });

export { Friends, Aliens };