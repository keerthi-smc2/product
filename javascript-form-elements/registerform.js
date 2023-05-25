function signup() {
    var Fname = $('#firstname').val();
    var Lname = $('#lastname').val();
    var Gender = $('input[id="gender"]:checked').val();
    var hobbies = [];
    $('input[name="hobbies"]:checked').each(function () {
      hobbies.push($(this).val());
    });
    var Country = $('#register_country').val();
    var Email = $('#email').val();
    var userPwd = $('#password').val();
  
  
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
  
    let formdataexist = formData.length && JSON.parse(localStorage.getItem('formData')).some(data =>
      data.Email.toLowerCase() == Email.toLowerCase() && data.userPwd.toLowerCase() == userPwd.toLowerCase());;
    if (!formdataexist) {
      formData.push({ Fname, Lname, Gender, Country, Email, hobbies, userPwd });
      localStorage.setItem('formData', JSON.stringify(formData));
      $('#register').reset();
      alert("Account created Successfully");
    }
    else {
      alert("User  exists already");
    }
    e.preventDefault();
  }