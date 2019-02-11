export default function validatePairString(string1, string2, input) {
  let message = '';
  if (string1 && string2){
    if(input=='string1' && string1.length>0){
      if (string1.toLowerCase()!=string2.toLowerCase()){
        message=`String 1 not Match with string 2`;
      }
    } 

    if(input=='string2'  && string2.length>0){
      if (string2.toLowerCase()!=string1.toLowerCase()){
        message=`String 2 not Match with string 1`;
      }
    }
  }
  if (input=='string1' && !string1){
    message=`String 1 can't be empty`;
  }
  if (input=='string2' && !string2){
    message=`String 2 can't be empty`;
  }

  return message;
}