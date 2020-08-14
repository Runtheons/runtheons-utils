module.exports = function(result, s = true, m = ""){
  let ret = {};
  ret['status'] = s ? "Success" : "Failed";
  ret['msg'] = m;
  ret['data'] = result;
  return ret;
};
