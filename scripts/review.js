// Count submitted reviews
let count = localStorage.getItem('reviewCount') || 0;
count++;
localStorage.setItem('reviewCount', count);
document.getElementById('reviewCount').textContent = count;

// Footer dates
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;
