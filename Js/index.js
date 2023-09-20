const children = document.querySelectorAll('.card');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); 
        }
    });
}, {
    threshold: .6 
});

children.forEach(child => {
    observer.observe(child);
});
