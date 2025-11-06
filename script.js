// Step 3: Add Basic Interactivity

// Toggle the navigation menu visibility on click
function toggleMenu() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.toggle('visible');
}

// Implement smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// Step 4: Add Interactivity to Portfolio Sections

// Filter projects based on category
function filterProjects() {
  const filterValue = document.getElementById('project-filter').value;
  const projects = document.querySelectorAll('.project');

  projects.forEach(project => {
    const category = project.getAttribute('data-category');
    if (filterValue === 'all' || category === filterValue) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
}

// Lightbox functionality
function openLightbox(imageSrc) {
  const lightbox = document.createElement('div');
  lightbox.classList.add('lightbox');
  lightbox.innerHTML = `
    <div class="lightbox-content">
      <img src="${imageSrc}" alt="Project Image" />
      <button onclick="closeLightbox()">Close</button>
    </div>
  `;
  document.body.appendChild(lightbox);
}

function closeLightbox() {
  document.querySelector('.lightbox').remove();
}


// Step 5: Add Form Validation

// Form validation for the contact form
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  let isValid = true;

  // Clear previous error messages
  document.querySelectorAll('.error').forEach(error => error.remove());

  // Validate name
  if (!name) {
    isValid = false;
    showError('name', 'Name is required');
  }

  // Validate email
  if (!email || !validateEmail(email)) {
    isValid = false;
    showError('email', 'Please enter a valid email');
  }

  // Validate message
  if (!message) {
    isValid = false;
    showError('message', 'Message cannot be empty');
  }

  // If all fields are valid, submit the form
  if (isValid) {
    alert('Form submitted successfully');
  }
});

// Show error message
function showError(fieldId, message) {
  const field = document.getElementById(fieldId);
  const error = document.createElement('p');
  error.classList.add('error');
  error.textContent = message;
  field.insertAdjacentElement('afterend', error);
}

// Validate email format
function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
}
