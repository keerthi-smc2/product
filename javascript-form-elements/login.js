$(document).ready(function() {
    $('#login').click(function () {
       var enterEmail = $('#email').val();
       var enterPwd = $('#password').val();
       
       //getting data from localstorage
        var getEmail = localStorage.getItem('userEmail');
        var getPwd = localStorage.getItem('userPwd');

        if(enterEmail == getEmail) {
           if(enterPwd == getPwd) {
            alert("login Succesfull");
           }
           else {
            alert("wrong password");
           }
        }
        else {
            alert("invalid details");
        }
    });
 });