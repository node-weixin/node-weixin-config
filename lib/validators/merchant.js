module.exports = {
  id: {
    type: 'string',
    maxLength: 64,
    required: true
  },
  key: {
    type: 'string',
    maxLength: 64,
    required: true
  },
  pfx: {
    type: "text",
    required: true
  },
  pfxKey: {
    type: "string",
    required: true
  }
};
