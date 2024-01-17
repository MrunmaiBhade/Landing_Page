document.addEventListener('DOMContentLoaded', function () {
    // Get all pizza images
    const pizzaImages = document.querySelectorAll('.pizza');

    // Set the initial main pizza image
    const mainPizzaImage = document.querySelector('.main-body img');
    mainPizzaImage.src = "/images/pizza1.png";

    // Add event listeners to each pizza image
    pizzaImages.forEach(pizzaImage => {
        pizzaImage.addEventListener('mouseenter', function () {
            // Change the main pizza image on hover
            mainPizzaImage.src = this.src;
        });

        pizzaImage.addEventListener('click', function () {
            // Remove the 'selected' class from all pizza images
            pizzaImages.forEach(image => image.classList.remove('selected'));

            // Add the 'selected' class to the clicked pizza image
            this.classList.add('selected');

            // Set the width and height of the main pizza image
            mainPizzaImage.style.width = 'auto';
            mainPizzaImage.style.height = 'auto';
            mainPizzaImage.style.minWidth = '200px';
            mainPizzaImage.style.minHeight = '200px';
        });
    });
});