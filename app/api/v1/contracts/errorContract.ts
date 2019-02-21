export default ({location, msg, param, value, nestedErrors}) => {
  return {
    message: msg,
    param: param,
    value: value,
  }
};
