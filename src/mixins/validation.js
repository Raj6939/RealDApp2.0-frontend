export function validText(str){
    if (str.match(/^[a-zA-Z ]*[a-z][a-zA-Z]*$/)) {
        return true;
      } else {
        return false;
      }
}
export function isNum(str){
    if(str.match(/^[1-9]\d*$/)){
      return true
    }
    else{
      return false
    }
  }