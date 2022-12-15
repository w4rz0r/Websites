const userValidationClassName = 'validation-user-exists';
let index = {};

//checks if the username already exists
function validateUsernameInput(element) {
    // index = model.data.users.findIndex(user => {
    //     return user.username.toLowerCase() === element.value.toLowerCase();
    // });

    let index = model.data.users.findIndex(
        user => {
            user.username.toLowerCase() == model.inputs.userSignup.username.toLowerCase()
        });

    if(index < 0) setRedBorder(element);
    return index > 0 ? true : false;
}

//checks if the email already exists
function validateEmailInput(element) {
    index = model.data.users.findIndex(user => {
        return user.email.toLowerCase() === element.value.toLowerCase();
    });
    setRedBorder(element);
}

//puts a red border on functions returning false
function setRedBorder(element) {
    if (index < 0) {
        element.classList.remove(userValidationClassName);
        return;
    }
    element.classList.add(userValidationClassName);
}


//checks if both passwords match and returns a true or false
function validatePasswordInput() {
    //sjekke at passord for eksempel er så så langt og har ett tall
}

function comparePassword() {
    //sjekke at gjentagende passord er identisk til forrige passord
}

//creates a new user and pushes it to users
function createNewUser() {
    if(!validateUsernameInput()) alert('user exists');
    // 1 plastre sammen alle funksjonene til å sjekke alt
    // 2 hvis alt over stemmer, push new user til users array
    let newUser = {
            username: model.inputs.userSignup.username,
            email: model.inputs.userSignup.email,
            password: model.inputs.userSignup.password,
        }
        model.data.users.push(newUser);
        render('loginPage');
}