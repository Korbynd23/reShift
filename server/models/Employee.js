const mongoose = require('mongoose');

const { Schema } = mongoose;
// const bcrypt = require('bcrypt');

const employeeSchema = new Schema({
  employeeId: {
    type: Number,
    required: true,
    unique: true,
  },
  employeeName: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: Number,
    required: true,
    minlength: 4,
  }
});


// employeeSchema.pre('save', async function (next) {
//   if (this.isNew || this.isModified('password')) {
//     const saltRounds = 10;
//     this.password = await bcrypt.hash(this.password, saltRounds);
//   }

//   next();
// });


// employeeSchema.methods.isCorrectPassword = async function (password) {
//   await bcrypt.compare(password, this.password);
// };

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
