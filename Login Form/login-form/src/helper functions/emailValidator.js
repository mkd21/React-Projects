

let emailValidator = (userEmail) =>{

    let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;

    return regex.test(userEmail);
}

export default emailValidator;