const form = document.querySelector(".form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");

function showError(input, massage) {
    // console.log(input)
    let small = input.nextSibling.nextSibling;
    small.innerText = massage;
    small.className = "show";
    input.className = "error";

}

function showSuccess(input){
    let small = input.nextSibling.nextSibling;
    small.innerText = "错误信息"
    small.className = "hide";
    input.className = "success";
}

/**
 *  判断输入框是否为空
 * @param  {...any} inputArr  
 */
function isBlank(...inputArr) {
    let blank = false;
    var message;
    for (let i = 0; i < inputArr.length; i++) {
        if (!inputArr[i].value) {
            if (inputArr[i].id == "username") {
                message = `用户名不能为空`;
            } else if (inputArr[i].id == "email") {
                message = `邮箱不能为空`;
            } else if (inputArr[i].id == "password1") {
                message = `密码不能为空`;
            } else if (inputArr[i].id == "password2") {
                message = `密码不能为空`;
            }
            showError(inputArr[i], message);
            blank = true;
        }else{
            showSuccess(inputArr[i]);
        }
    }
    return blank;
}

function checkUsername(){
    let reg = /^\w[\w\W]{2,14}/g;
    let message;
    if(reg.test(username.value)){
        showSuccess(username);
    }else{
        message = `用户名必须由3-15位字符组成，必须由数字、字母、_开头，`;
        showError(username,message);
    }
}


function checkEmail(){
    let reg = /^\w\w{6,12}@qq.com$/g;
    let message;
    if(reg.test(email.value)){
        showSuccess(email);
    }else{
        message = `邮箱必须由7-13位字符组成，只支持qq邮箱和阿里云邮箱格式`
        showError(email,message);
    }
}

function checkPassword(){
    let reg = /^[\w\W][\w\W]{5,14}/g;
    let message;
    let info;
    if(reg.test(password1.value)){
        showSuccess(password1);
    }else{
        message = `密码长度必须为6-15位字符`;
        showError(password1,message);
    }
    if(password2.value != "" && password1.value === password2.value){
        showSuccess(password2);
    }else{
        info = `密码输入错误，请重新输入`;
        showError(password2,info);
    }
}

/*
*
*规则： 用户名长度 3-11 数字 字母 下划线
*       邮箱长度   6 - 11  数字 字母 - .
*       密码      6 - 15   不限
*/
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const inputArr = [username, email, password1, password2];
        isBlank(...inputArr);
        checkUsername();
        checkEmail();
        checkPassword();

})