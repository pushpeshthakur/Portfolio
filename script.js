document.addEventListener('DOMContentLoaded', function() {
  (function() {
    emailjs.init('wYt5DFthcw2WjEm63');
  })();

  const form = document.getElementById('contact-form');
  if (!form) {
    console.warn('contact-form element not found in the DOM.');
    return;
  }

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    // fixed template id typo: 'templete' -> 'template'
    emailjs.sendForm('service_drwrblp', 'template_vta967q', this)
      .then(function(response) {
        console.log('Email sent!', response.status, response.text);
        alert('Email sent successfully!');
      }, function(error) {
        console.error('Error sending email:', error);
        alert('Oops! Something went wrong.');
      });
  });
});
  
