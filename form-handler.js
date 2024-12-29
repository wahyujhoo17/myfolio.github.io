    document.querySelector('.php-email-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    const form = e.target;
    const formData = new FormData(form);

    // Select feedback elements
    const loadingDiv = form.querySelector('.loading');
    const sentMessageDiv = form.querySelector('.sent-message');
    const errorMessageDiv = form.querySelector('.error-message');

    // Show the loading indicator
    loadingDiv.style.display = 'block';
    sentMessageDiv.style.display = 'none';
    errorMessageDiv.style.display = 'none';

    // Send AJAX request
    fetch(form.action, {
        method: 'POST',
        body: formData,
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            loadingDiv.style.display = 'none'; // Hide the loading indicator

            if (data.status === 'success') {
                sentMessageDiv.textContent = data.message;
                sentMessageDiv.style.display = 'block';
            } else {
                errorMessageDiv.textContent = data.message;
                errorMessageDiv.style.display = 'block';
            }
        })
        .catch(error => {
            loadingDiv.style.display = 'none'; // Hide the loading indicator
            errorMessageDiv.textContent = 'An error occurred. Please try again.';
            errorMessageDiv.style.display = 'block';
            console.error('Error:', error); // Log for debugging
        });
});