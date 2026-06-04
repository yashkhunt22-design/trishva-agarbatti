const tabButtons = document.querySelectorAll('.tab-btn');
const productCategories = document.querySelectorAll('.product-category');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        productCategories.forEach(category => category.classList.remove('active'));
        
        button.classList.add('active');
        const categoryId = button.getAttribute('data-category');
        const category = document.getElementById(categoryId);
        if (category) {
            category.classList.add('active');
        }
    });
});