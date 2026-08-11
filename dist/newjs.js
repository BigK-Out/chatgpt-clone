document.addEventListener('DOMContentLoaded', function() {
  const menuItems = document.querySelectorAll('#menu li');
  const contentDiv = document.getElementById('content');

  const content = {
      home: '<h1>Welcome to our Home Page</h1><p>This is the home page content.</p>',
      about: '<h1>About Us</h1><p>This is the about page content.</p>',
      services: '<h1>Our Services</h1><p>This is the services page content.</p>',
      contact: '<h1>Contact Us</h1><p>This is the contact page content.</p>'
  };

  menuItems.forEach(item => {
      item.addEventListener('click', function() {
          const page = this.getAttribute('data-content');
          contentDiv.innerHTML = content[page];
      });
  });

  // Load initial content
  contentDiv.innerHTML = content['home'];
});
