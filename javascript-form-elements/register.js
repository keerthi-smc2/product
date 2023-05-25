
// $(".formvalues").hide();

// $(document).ready(function() {
//    $("#submit").click(function() {
//        $(".formvalues").show();
//       $("#getformvalues").hide();
//       var FirstName = $('#firstname').val();
//       var lastName = $('#lastname').val();
//       var Gender = $('input[name="gender"]:checked').val();
//       var country = $('#register_country :selected').text();
//       var hobbies = [];
//       $('input[name="Hobbies"]:checked').each(function() {
//          hobbies.push($(this).val());
//       });
//      $(".firstnameValue").text(FirstName);
//      $(".lastnameValue").text(lastName);
//      $(".genderValue").text(Gender);
//      $(".hobbiesValue").text(hobbies);
//      $(".countryValue").text(country);
//    });
// });

// $(document).ready(function() {
//    $('.error').css('color','red');
//    $("#register").validate({
//       rules:{
//          Firstname:{
//             minlength: 2
//          },
//          Lastname:{
//             minlength: 1
//          },
//          gender: {
//             required: true
//          },
//          hobbies: {
//             required: true
//          },
//          country: {
//             required: true
//          },
//          email: {
//             required: true
//          },
//          email_again:{
//             required: true,
//             equalTo: "#email"
//          },
//          qualification: {
//             required: true
//          }

//       },
//       messages:{
//          Firstname:{
//             required: "Please Enter Firstname",
//             minlength: "FirstName Should be Atleast 2 Characters"
//          },     
//          Lastname:{
//             required: "Please Enter Lastname",
//             minlength: "LastName Should be Atleast 2 Characters"
//          },
//          gender:{
//             required: "Gender Should be Required"
//          },
//          hobbies:{
//             required: "Please Select Your Hobbies"
//          },
//          country: {
//             required: "Please Select Your Country"
//          },
//          email: {
//             required: "Email Should be Required" 
//          },
//          email_again:{
//             required: "Confirm Email Should be Required" 
//          },
//          qualification: {
//             required: "Please Select Your Qualification"
//          }
//       },


//     submitHandler:function(form) {
//       form.submit();
//       $("#submit").click(function() {
//          $(".formvalues").show();
//          $("#getformvalues").hide();

//          var firstName = $('#firstname').val();
//          var lastName = $('#lastname').val();
//          var Gender = $('input[name="gender"]:checked').val();
//          var country = $('#register_country :selected').text();
//          var hobbies = [];
//          $('input[name="Hobbies"]:checked').each(function() {
//              hobbies.push($(this).val());
//          });
//          $(".firstnameValue").text(firstName);
//          $(".lastnameValue").text(lastName);
//          $(".genderValue").text(Gender);
//          $(".hobbiesValue").text(hobbies);
//          $(".countryValue").text(country);
//       });
//     }
//    });
// });


$('.error').css('color', 'red');
$(document).ready(function () {
  $("#btn").click(function () {
    var validator = $('#register').validate(
      {
        rules:
        {
          email: {
            required: true
          },
          email_again: {
            equalTo: "#email"
          },
          password: {
            minlength: 5,
            required: true
          },
          password_again: {
            minlength: 5,
            equalTo: "#password"
          },
          gender: {
            required: true
          },
          qualification: {
            required: true
          },
          country: {
            required: true
          },
          hobbies: {
            required: true
          }
        },
        messages:
        {
          gender: {
            required: "This Field is Required"
          },
          hobbies: {
            required: "This Field is Required"
          },
          country: {
            required: "This Field is Required"
          },
          //  qualification:{
          //  required: "This Field is Required"
          //  }
        },

        submitHandler: function (form) {
          $("#btn").click(function () {
            var firstName = $('#firstname').val();
            var lastName = $('#lastname').val();
            var Gender = $('input[name="gender"]:checked').val();
            var country = $('#register_country :selected').text();
            var qualification = $('#stu_qualification :selected').text();
            var hobbies = [];
            $('input[name="Hobbies"]:checked').each(function () {
              hobbies.push($(this).val());
            });
            form.submit();
            validator.form();
            $('#register').clear();
          });
        }
      });
  });
});

// let userEmail = $('#email').val();
// let userPwd = $('#password').val();

// let formData = JSON.parse(localStorage.getItem('formData')) || [];

// let formdataexist = formData.length;
//    JSON.parse(localStorage.getItem('formData'))
//     data.userEmail.toLowerCase() == userEmail.toLowerCase() &&        
//     data.userPwd.toLowerCase() == userPwd.toLowerCase()
//  );

//  if(formdataexist) {   
//    formData.push({ userEmail, userPwd });
//    localStorage.setItem('formData', JSON.stringify(formData));
//  $('#register').reset();
//      alert("Account created Successfully");
//    }
//    else{
//     alert("duplicate data already exists");
//    }
//    e.preventDefault();


//1
// localStorage.setItem('userEmail',email);
// localStorage.setItem('userPwd',password);


//2
// localStorage.userEmail = email;
// localStorage.userPwd = password;




// const myKeysValues = window.location.search;
// console.log("Keys & Values", myKeysValues);
// const urlParams = new URLSearchParams(myKeysValues);
// var Fname = urlParams.get('Firstname');
// var Lname = urlParams.get('Lastname');
// var Gender = urlParams.get('gender');
// var Hobbies = urlParams.get('hobbies');
// var Country = urlParams.get('country');
// var Email = urlParams.get('email');
// var Qualification = urlParams.get('qualification');
// $(".firstnameValue").text(Fname);
// $(".lastnameValue").text(Lname);
// $(".genderValue").text(Gender);
// $(".hobbiesValue").text(Hobbies);
// $(".countryValue").text(Country);
// $(".emailValue").text(Email);
// $(".qualificationValue").text(Qualification);
function signup(e) {
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
//  $('#register').reset();

  let formData = JSON.parse(localStorage.getItem('formData')) || [];

  let formdataexist = formData.length && JSON.parse(localStorage.getItem('formData')).some(data =>
    data.Email.toLowerCase() == Email.toLowerCase() && data.userPwd.toLowerCase() == userPwd.toLowerCase());;
  if (!formdataexist) {
    formData.push({ Fname, Lname, Gender, Country, Email, hobbies, userPwd });
    localStorage.setItem('formData', JSON.stringify(formData));
   
    alert("Account created Successfully");
    location.href = "ecommerce.html";
  }
  else {
    alert("User  exists already");
  }
   e.clear();
}


$('#login').submit(function signin(e) {
  var enterEmail = $('#registeredemail').val();
  var enterPwd = $('#password').val();

  //getting data from localstorage
  let formData = JSON.parse(localStorage.getItem('formData')) || [];

  var exist = formData.length && JSON.parse(localStorage.getItem('formData')).some(data =>
    data.Email.toLowerCase() == enterEmail && data.userPwd.toLowerCase() == enterPwd);
  if (!exist) {
    alert('danger');
  } else {
    location.href = "dashboard.html";
  }
  e.preventDefault();
});

$('#contact').click(function contactus(e) {
  var username = $('#username').val();
  var email = $('#contactemail').val();
  var phone = $('#phone').val();

  e.preventDefault();
  $('.usernameValue').text(username);
  $('.emailValue').text(email);
  $('.phoneNumber').text(phone);
});



$(document).ready(function () {
  $('#subscribeform').submit(function () {
    
    var validator = $('#subscribeform').validate(
      {
        rules:
        {
          subscribeemail: 'required'
        },
        messages:
        {
          subscribeemail :"Fill email"
        }
      }
    )
    alert("your email is saved successfully");
  });
});













