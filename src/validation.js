export default function validation(user) {
    let errors = {};
  
    if (!user.name.trim()) {
      errors.name = "Name is Required";
    } else if (user.name.length < 3) {
      errors.name = "Name needs to be more than 3 Characters";
    }
    let regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!user.email) {
      errors.email = "Email Required";
    } else if (!regex.test(user.email)) {
      errors.email = "Invalid Email Address";
    }
  
    if (!user.password) {
      errors.password = "Password is Required";
    } else if (user.password.length < 4) {
      errors.password = "Password must contain atleast 4 values";
    }
  
    if (!user.contact) {
      errors.contact = "Phone Number is Required";
    } else if (user.contact.length !== 10) {
      errors.contact = "Phone Number must contain 10 Digits";
    }
  
    if (!user.city) {
      errors.city = "City is Required";
    }
  
    if (!user.address) {
      errors.address = "Address is Required";
    }
  
    return errors;
  }
  