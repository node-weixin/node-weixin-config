module.exports = {
  id: {
    type: 'string',
    maxLength: 64,
    required: true
  },
  secret: {
    type: 'string',
    maxLength: 64,
    required: true
  },
  token: {
    type: 'string',
    maxLength: 64,
    required: true
  }
};
