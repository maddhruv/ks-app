auth = firebase.auth();

$("#loginBtn").on('click', function(e) {
  e.preventDefault();
  var email = $("#email").val();
  var password = $("#password").val();
  var promise = auth.signInWithEmailAndPassword(email, password);
  promise.catch(function (e) {
    switch (e.code) {
      case 'auth/invalid-email':
        message = 'Invalid Email';
        alert(message);
        break;
      case 'auth/wrong-password':
        message = 'Wrong Password';
        alert(message);
        break;
      case 'auth/user-not-found':
        message = 'User not found';
        alert(message);
        break;
      default:
        message = 'Some Error occured. Retry!';
        alert(message);
    }
  });
});

$("#signupBtn").on('click', function(e) {
  e.preventDefault();
  var email = $("#emailS").val();
  var password = $("#passwordS").val();
  var promise = auth.createUserWithEmailAndPassword(email, password);
  promise.catch(function (e) {
    switch (e.code) {
      case 'auth/invalid-email':
        message = 'The email address is badly formatted.';
        alert(message);
        break;
      case 'auth/weak-password':
        message = 'The password must be 6 characters long or more.';
        alert(message);
        break;
      default:
        message = 'Some Error occured. Retry!';
        alert(message);
    }
  });
});

auth.onAuthStateChanged(function (user) {
  if(user){
    window.location = 'user-home.html';
  } else{
    $(".mdl-spinner").hide();
    $("#buttons").show();
  }
})
