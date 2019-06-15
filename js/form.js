document.getElementById('form').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();
  let name = getInput('name');
  let email = getInput('email');
  let phone = getInput('phone');
  let comments = getInput('comments');
  // save message
  saveMessage(name, email, phone, comments);
  // show alert
  document.querySelector('.alert').style.display = 'block';
  // hide alert
  setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);
  // clear form
  document.getElementById('form').reset();
}

function getInput(id) {
  return document.getElementById(id).value;
}

function saveMessage(name, email, phone, comments) {
  let newMessageRef = messagesRef.push();
  newMessageRef.set({
    name,
    email,
    phone,
    comments,
  });
}
