export const commonDispatch=(dispatch,data,action)=>{
  dispatch({
	type:`${action}`,
	status:status,
	payload:data
  })
}

export const REGEX = {
  NAME_VALIDATE(STRING) {
    return STRING.toString().match(/^[A-Z,a-z, ]*$/gm);
  },
  EMAIL_VALIDATE(STRING) {
   return STRING.toString().match(/^([a-z,A-Z,0-9,\.]+)@([\da-z\.-]{0,30})\.([a-z\.]{0,6})$/);
  },
  NUMBER_VALIDATE(STRING) {
	return STRING.toString().match(/^[0-9,\-, ]*$/);
  }
}


