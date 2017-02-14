const isRequired = (val) => val && val.length;
const length = (val) => val.length > 8;
const longPasswordEnough = (val) => val && val.length > 6;
const isEmail = (val) =>  function (value) {
  var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(value);
}
