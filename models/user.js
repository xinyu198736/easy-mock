'use strict'

const mongoose = require('mongoose')

const Schema = mongoose.Schema
const schema = new Schema({
  nick_name: String,
  head_img: String,
  name: String,
  password: String,
  // 0 是 普通用户，1 是付费用户，2 是管理员
  level: {
    type: Number,
    default: 0
  },
  create_at: {
    type: Date,
    default: Date.now
  }
})

schema.index({ name: 1 }, { unique: true })

module.exports = mongoose.model('User', schema)
