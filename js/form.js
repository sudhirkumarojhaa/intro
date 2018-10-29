document.getElementById('form').addEventListener('submit', submitForm);


function submitForm(e) {
  e.preventDefault();
  var name = getInput('name');
  var email = getInput('email');
  var phone = getInput('phone');
  var comments = getInput('comments');
  //save message
  saveMessage(name, email, phone, comments);
  //show alert
  document.querySelector('.alert').style.display = "block";
  //hide alert
  setTimeout(function () {
    document.querySelector('.alert').style.display = "none";
  }, 3000);
  //clear form
  document.getElementById('form').reset();
}

function getInput(id) {
  return document.getElementById(id).value;
}

function saveMessage(name, email, phone, comments) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    phone: phone,
    comments: comments
  })
}
