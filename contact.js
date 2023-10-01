

Email.send({
    Host : "smtp.elasticemail.com",
    SecureToken : "c9233cac-d4a9-4ce7-8024-163c8f8f0c8a",
    To : 'dskitchenerode@gmail.com',
    From : "dskitchenerode@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);