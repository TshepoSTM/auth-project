export const emailValidate = (text) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      console.log("Email is Not Correct");
      //this.setState({ email: text })
      return false;
    }
    else {
      //this.setState({ email: text })
      console.log("Email is Correct");
    }
};

export const cellphoneValidate = (text:string) => {

  if(text.length === 10)
  {
    return true;
  }else{
    return false;
  }
}
