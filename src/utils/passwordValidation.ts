const passwordValidation = (password:string,confirmPassword:string)=>{
  if(password===confirmPassword) return true
  else return false
}

export default passwordValidation