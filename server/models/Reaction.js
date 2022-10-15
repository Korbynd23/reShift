const mongoose = require('mongoose');

const { Schema } = mongoose;

const startTimeSchema = new Schema({
  startTimeValue: {
    type: Number
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  // employee: {
  //   type: Schema.Types.ObjectId,
  // }
})

const endTimeSchema = new Schema({
  endTimeValue: {
    type: Number
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  // employee: {
  //   type: Schema.Types.ObjectId,
  // }
})

const Start = mongoose.model('StartReaction', startTimeSchema);
const End = mongoose.model('EndReaction', endTimeSchema)

module.exports = Start, End;