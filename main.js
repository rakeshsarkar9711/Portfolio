var typed = new Typed(".text", {
  strings: ["Frontend Developer", "Web Developer", "Youtuber"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

var submit = document.getElementById('submit');
submit.addEventListener('click', function (e) {
  e.preventDefault()
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;
  var body = 'name: ' + name + '<br/> email: ' + email + '<br/> subject: ' + subject + '<br/> message: ' + message;

  Email.send({
    SecureToken: "99ad8940-e182-428c-8885-063ccf83cf09",
    To: 'rakeshsarkar9711@gmail.com',
    From: "arcadefortune9711@gmail.com",
    Subject: "Contact message",
    Body: body
  }).then(
      message => alert(message)
    );
})