const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  posts: [
    {
      post: {
        type: Schema.Types.ObjectId,
        ref: "post"
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now()
  },
})

module.exports = User = mongoose.model("user", UserSchema)
