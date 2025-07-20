require('datejs');

function combineUsers(...args) {
  const combinedObject = {
    users: []
  };

  for (const array of args) {
    combinedObject.users.push(...array);
  }

  const today = new Date().toString("M/d/yyyy");

  combinedObject.merge_date = today;

  return combinedObject;
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};