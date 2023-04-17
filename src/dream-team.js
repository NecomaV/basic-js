const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {

  if (!Array.isArray(members)) {
    return false;
  }

  let cont = '';

  for(let i = 0; i < members.length; i++ ){
    const member = members[i];
    if( typeof member === 'string'){
      cont += member.trim()[0];
    }
    else {
      continue;
    }
  }
  return (sortAlphabets(cont));
}
var sortAlphabets = function(text) {
  return text.toUpperCase().split('').sort().join('');
};


createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max'])

module.exports = {
  createDreamTeam
};
