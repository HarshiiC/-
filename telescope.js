document.querySelectorAll('.gallery-grid img').forEach(img => {
    img.addEventListener('click', () => {
        const expandedImg = document.createElement('div');
        expandedImg.classList.add('expanded-img');
        expandedImg.innerHTML = `<img src="${img.src}" alt="${img.alt}"><span>&times;</span>`;
        document.body.appendChild(expandedImg);
        expandedImg.querySelector('span').addEventListener('click', () => {
            document.body.removeChild(expandedImg);
        });
    });
});