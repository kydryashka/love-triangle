/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var loveTriangles=0;
  for(var i=0; i<preferences.length;i++){
  	if (preferences[i]==i+1) continue;
  	var first=i+1;
  	var second=preferences[i];
  	var third=preferences[second-1];
  	if (preferences[third-1]==first) loveTriangles++;
  }
  return loveTriangles/3;
};
