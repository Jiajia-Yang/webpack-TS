var Mock = require('mockjs');

module.exports = {
  getComment: {
    ccc: 23234
  },
  addComment: Mock.mock({
    "error": 0,
    "message": "success",
    "result": []
  })
};