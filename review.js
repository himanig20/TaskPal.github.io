document.addEventListener('DOMContentLoaded', function() {
    // Function to calculate and display average rating
    function calculateAverageRating(reviews) {
        let totalRating = 0;
        reviews.forEach(review => {
            totalRating += review.rating;
        });
        const averageRating = totalRating / reviews.length;
        document.getElementById('average-rating').innerText = `Average Rating: ${averageRating.toFixed(1)}`;
    }

    // Function to display reviews
    function displayReviews(reviews) {
        const reviewsList = document.getElementById('reviews-list');
        reviewsList.innerHTML = '';
        reviews.forEach(review => {
            const reviewElement = document.createElement('div');
            reviewElement.classList.add('review');
            reviewElement.innerHTML = `
                <p><strong>User</strong></p>
                <p class="rating">Rating: ${review.rating}</p>
                <p>${review.comment}</p>
            `;
            reviewsList.appendChild(reviewElement);
        });
    }

    // Function to handle form submission
    document.getElementById('review-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form data
        const rating = document.getElementById('rating').value;
        const comment = document.getElementById('comment').value;

        // Create review object
        const review = { rating, comment };

        // Add review to reviews list
        reviews.push(review);

        // Update average rating and display reviews
        calculateAverageRating(reviews);
        displayReviews(reviews);

        // Clear form inputs
        document.getElementById('rating').value = '';
        document.getElementById('comment').value = '';
    });

    // Initial reviews data (empty array)
    const reviews = [];
});
