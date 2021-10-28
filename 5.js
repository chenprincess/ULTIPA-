Array.prototype.forEach = function(callbackfn,thisArg){
  if(typeof callbackfn !== 'function'){
    throw new Error(callbackfn + ' is not a function')
  }
  const len = this.length
  let arr = Array.prototype.slice.call(this)
  for(let i=0;i<len;i++){
    callbackfn.call(thisArg, this[i], i, this)
  }
  return this
}