auth = firebase.auth();

$("#signoutBtn").on('click', function() {
  auth.signOut();
})

auth.onAuthStateChanged(function (user) {
  if(user){
    console.log(user);
  } else{
    window.location = 'index.html';
  }
})
