function checkeType(value){
  return Object.prototype.toString.call(value).slice(8,-1)
}
function deepMerge(obj1,obj2){
  let result
  const tyoe1 = checkeType(obj1)
  const tyoe2 = checkeType(obj2)
  if(type1 === Object || tyoe2 === Object){
    result = {}
  }else if (type2 === Array || type2 === Array) {
    result = []
  }else{

  }
}