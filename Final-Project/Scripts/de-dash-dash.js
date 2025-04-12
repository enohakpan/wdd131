// Product data - Array of objects
const products = [
  {
    id: 1,
    name: "Elegant Navy Suit",
    description: "A sophisticated navy suit perfect for formal occasions and business meetings.",
    price: 55500,
    image: "Images/navy-suit.jpg",
    category: "suits"
  },
  {
    id: 2,
    name: "Smart White Shirt",
    description: "A crisp white shirt that pairs well with any outfit for a clean, professional look.",
    price: 18000,
    image: "Images/white-shirt.jpg", // Fixed typo: was white-shhirt.jpg
    category: "shirts"
  },
  {
    id: 3,
    name: "Smart Navy Trouser",
    description: "Comfortable yet stylish navy trousers that are perfect for both casual and formal settings.",
    price: 23000,
    image: "Images/navy-trouser.jpg",
    category: "trousers"
  },
  {
    id: 4,
    name: "Indian Suit",
    description: "An elegant Indian-inspired suit that combines traditional elements with modern styling.",
    price: 65000,
    image: "Images/indian-suit.jpg",
    category: "suits"
  },
  {
    id: 5,
    name: "Elegant Grey Suit",
    description: "A versatile grey suit that offers sophistication for any formal occasion.",
    price: 58000,
    image: "Images/gray-suit.jpg", // Matching the actual file name
    category: "suits"
  },
  {
    id: 6,
    name: "Smart Ash Trouser",
    description: "Premium ash trousers that provide both comfort and style for everyday wear.",
    price: 21500,
    image: "Images/ash-pants.webp", // Matching the actual file name
    category: "trousers"
  },
  {
    id: 7,
    name: "Smart Spotted Shirt",
    description: "A stylish spotted shirt that adds character to any outfit.",
    price: 19500,
    image: "Images/spotted-shirt.jpg",
    category: "shirts"
  },
  {
    id: 8,
    name: "Classic Black Suit",
    description: "A timeless black suit essential for every gentleman's wardrobe.",
    price: 62000,
    image: "Images/black-suit.webp", // Matching the actual file name
    category: "suits"
  }
];

// Gallery items
const galleryItems = [
  {
    id: 1,
    name: "Elegant Navy Suit",
    image: "Images/navy-suit.jpg",
    category: "suits"
  },
  {
    id: 2,
    name: "Smart White Shirt",
    image: "Images/white-shirt.jpg", // Fixed typo
    category: "shirts"
  },
  {
    id: 3,
    name: "Smart Navy Trouser",
    image: "Images/navy-trouser.jpg",
    category: "trousers"
  },
  {
    id: 4,
    name: "Indian Suit",
    image: "Images/indian-suit.jpg",
    category: "suits"
  },
  {
    id: 5,
    name: "Elegant Grey Suit",
    image: "Images/gray-suit.jpg", // Matching the actual file name
    category: "suits"
  },
  {
    id: 6,
    name: "Smart Ash Trouser",
    image: "Images/ash-pants.webp", // Matching the actual file name
    category: "trousers"
  },
  {
    id: 7,
    name: "Smart Spotted Shirt",
    image: "Images/spotted-shirt.jpg",
    category: "shirts"
  },
  {
    id: 8,
    name: "Classic Black Suit",
    image: "Images/black-suit.webp", // Matching the actual file name
    category: "suits"
  },
  {
    id: 9,
    name: "Blue Checkered Shirt",
    image: "Images/blue-shirt.jpg",
    category: "shirts"
  }
];

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    text: "De Dash Dash has completely transformed my wardrobe. Their attention to detail and quality fabrics make their pieces stand out from anything else I've worn.",
    image: "Images/enoh-suitable.jpg" // Matching the actual file name
  },
  {
    id: 2,
    name: "Michael Smith",
    text: "I've been a loyal customer for years. Their designs are timeless yet modern, and the fit is always perfect. Couldn't recommend them more highly!",
    image: "Images/enoh-suitable.jpg" // Matching the actual file name
  },
  {
    id: 3,
    name: "David Johnson",
    text: "The customer service at De Dash Dash is exceptional. They went above and beyond to ensure my custom suit was exactly what I wanted for my wedding day.",
    image: "Images/enoh-suitable.jpg" // Matching the actual file name
  }
];

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded - script running');
  
  // Initialize slideshow
  initSlideshow();
  
  // Initialize hamburger menu
  initMobileMenu();
  
  // Initialize shopping cart
  initShoppingCart();
  
  // Initialize featured products on home page
  if (document.getElementById('featuredProductsContainer')) {
    displayFeaturedProducts();
  }
  
  // Initialize product grid on shop page
  if (document.getElementById('productGrid')) {
    displayProducts();
    initShopControls();
  }
  
  // Initialize gallery on gallery page
  if (document.getElementById('galleryGrid')) {
    displayGalleryItems();
    initGalleryFilter();
    initLightbox();
  }
  
  // Initialize contact form
  if (document.getElementById('contactForm')) {
    initContactForm();
    initAccordion();
  }
  
  // Initialize newsletter form
  if (document.getElementById('newsletterForm')) {
    initNewsletterForm();
  }
});

// Slideshow functionality
let slideIndex = 1;
let slideInterval;

function initSlideshow() {
  const slides = document.getElementsByClassName("slide-show");
  if (slides.length === 0) return;
  
  showSlides(slideIndex);
  startAutoSlide();
  
  const slider = document.querySelector('.collections-slide');
  if (slider) {
    slider.addEventListener('mouseenter', stopAutoSlide);
    slider.addEventListener('mouseleave', startAutoSlide);
  }
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slide-show");
  if (slides.length === 0) return;
  
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex - 1].style.display = "block";
}

function startAutoSlide() {
  slideInterval = setInterval(() => {
    plusSlides(1);
  }, 5000); // 5 seconds
}

function stopAutoSlide() {
  clearInterval(slideInterval);
}

// Mobile Menu functionality
function initMobileMenu() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  const body = document.body;
  
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function() {
      // Toggle active class on menu button
      this.classList.toggle('active');
      
      // Toggle active class on navigation
      mainNav.classList.toggle('active');
      
      // Prevent scrolling when menu is open
      body.classList.toggle('menu-open');
    });
    
    // Close menu when clicking on a link
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        mainNav.classList.remove('active');
        body.classList.remove('menu-open');
      });
    });
  }
}

// Shopping Cart functionality
function initShoppingCart() {
  // Get cart from localStorage or initialize empty array
  updateCartCount();
  
  // Cart button click event
  const cartButton = document.getElementById('cartButton');
  const cartModal = document.getElementById('cartModal');
  const closeCart = document.querySelector('.close-cart');
  
  if (cartButton && cartModal) {
    cartButton.addEventListener('click', function() {
      displayCartItems();
      cartModal.style.display = 'block';
    });
    
    closeCart.addEventListener('click', function() {
      cartModal.style.display = 'none';
    });
    
    window.addEventListener('click', function(event) {
      if (event.target === cartModal) {
        cartModal.style.display = 'none';
      }
    });
    
    // Checkout button
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', function() {
        checkout();
      });
    }
    
    // Clear cart button
    const clearCartBtn = document.getElementById('clearCartBtn');
    if (clearCartBtn) {
      clearCartBtn.addEventListener('click', function() {
        clearCart();
      });
    }
  }
}

function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const cart = getCart();
  
  // Check if product already in cart
  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  }
  
  saveCart(cart);
  updateCartCount();
  
  // Show confirmation message
  const message = `${product.name} added to cart!`;
  showToast(message);
}

function updateCartCount() {
  const cart = getCart();
  const cartCount = document.querySelector('.cart-count');
  
  if (cartCount) {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
  }
}

function displayCartItems() {
  const cartItems = document.getElementById('cartItems');
  const cartTotal = document.getElementById('cartTotal');
  const cart = getCart();
  
  if (cartItems) {
    // Clear previous items
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
      cartItems.innerHTML = '<p>Your cart is empty.</p>';
      cartTotal.textContent = '₦0';
      return;
    }
    
    // Calculate total
    let total = 0;
    
    // Add each item to the cart display
    cart.forEach(item => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;
      
      const cartItemHTML = `
        <div class="cart-item" data-id="${item.id}">
          <img src="${item.image}" alt="${item.name}" class="cart-item-image">
          <div class="cart-item-details">
            <p class="cart-item-name">${item.name}</p>
            <p class="cart-item-price">₦${item.price.toLocaleString()}</p>
            <div class="cart-item-quantity">
              <button class="quantity-btn decrease" onclick="decreaseQuantity(${item.id})">-</button>
              <span class="quantity-value">${item.quantity}</span>
              <button class="quantity-btn increase" onclick="increaseQuantity(${item.id})">+</button>
              <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
          </div>
        </div>
      `;
      
      cartItems.innerHTML += cartItemHTML;
    });
    
    // Update total
    cartTotal.textContent = `₦${total.toLocaleString()}`;
  }
}

function increaseQuantity(productId) {
  const cart = getCart();
  const item = cart.find(item => item.id === productId);
  
  if (item) {
    item.quantity += 1;
    saveCart(cart);
    displayCartItems();
    updateCartCount();
  }
}

function decreaseQuantity(productId) {
  const cart = getCart();
  const item = cart.find(item => item.id === productId);
  
  if (item) {
    item.quantity -= 1;
    
    if (item.quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    saveCart(cart);
    displayCartItems();
    updateCartCount();
  }
}

function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== productId);
  saveCart(cart);
  displayCartItems();
  updateCartCount();
}

function clearCart() {
  localStorage.removeItem('cart');
  displayCartItems();
  updateCartCount();
  showToast('Cart cleared!');
}

function checkout() {
  const cart = getCart();
  
  if (cart.length === 0) {
    showToast('Your cart is empty!');
    return;
  }
  
  // In a real application, this would redirect to a checkout page
  showToast('Proceeding to checkout...');
  
  // For demo purposes, clear the cart after "checkout"
  setTimeout(() => {
    clearCart();
    document.getElementById('cartModal').style.display = 'none';
    showToast('Thank you for your purchase!');
  }, 2000);
}

// Toast notification
function showToast(message) {
  // Create toast element if it doesn't exist
  let toast = document.querySelector('.toast-notification');
  
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
    
    // Add styles
    toast.style.position = 'fixed';
    toast.style.bottom = '20px';
    toast.style.right = '20px';
    toast.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    toast.style.color = 'white';
    toast.style.padding = '12px 20px';
    toast.style.borderRadius = '4px';
    toast.style.zIndex = '1000';
    toast.style.transition = 'opacity 0.3s ease';
  }
  
  // Set message and show toast
  toast.textContent = message;
  toast.style.opacity = '1';
  
  // Hide toast after 3 seconds
  setTimeout(() => {
    toast.style.opacity = '0';
  }, 3000);
}

// Featured Products
function displayFeaturedProducts() {
  const featuredContainer = document.getElementById('featuredProductsContainer');
  
  if (featuredContainer) {
    // Get 3 random products
    const featuredProducts = [...products]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    
    featuredContainer.innerHTML = '';
    
    featuredProducts.forEach(product => {
      const productHTML = `
        <div class="product-card">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p class="price">₦${product.price.toLocaleString()}</p>
          <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
      `;
      
      featuredContainer.innerHTML += productHTML;
    });
  }
}

// Shop Page Products
function displayProducts(category = 'all', sortBy = 'default') {
  const productGrid = document.getElementById('productGrid');
  
  if (!productGrid) return;
  
  // Filter products by category if needed
  let filteredProducts = products;
  if (category !== 'all') {
    filteredProducts = products.filter(product => product.category === category);
  }
  
  // Sort products
  switch (sortBy) {
    case 'price-low':
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case 'name':
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;
    default:
      // Default sorting (by id)
      filteredProducts.sort((a, b) => a.id - b.id);
  }
  
  // Clear previous products
  productGrid.innerHTML = '';
  
  // Display products
  filteredProducts.forEach(product => {
    const productHTML = `
      <div class="product-card" data-category="${product.category}">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p class="price">₦${product.price.toLocaleString()}</p>
        <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
    
    productGrid.innerHTML += productHTML;
  });
}

function initShopControls() {
  const categoryFilter = document.getElementById('categoryFilter');
  const sortProducts = document.getElementById('sortProducts');
  
  if (categoryFilter) {
    categoryFilter.addEventListener('change', function() {
      const category = this.value;
      const sortBy = sortProducts.value;
      displayProducts(category, sortBy);
    });
  }
  
  if (sortProducts) {
    sortProducts.addEventListener('change', function() {
      const sortBy = this.value;
      const category = categoryFilter.value;
      displayProducts(category, sortBy);
    });
  }
}

// Gallery Page
function displayGalleryItems(category = 'all') {
  const galleryGrid = document.getElementById('galleryGrid');
  
  if (!galleryGrid) return;
  
  // Filter gallery items by category if needed
  let filteredItems = galleryItems;
  if (category !== 'all') {
    filteredItems = galleryItems.filter(item => item.category === category);
  }
  
  // Clear previous items
  galleryGrid.innerHTML = '';
  
  // Display gallery items
  filteredItems.forEach(item => {
    const itemHTML = `
      <div class="gallery-item" data-category="${item.category}" data-id="${item.id}">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        <p>${item.name}</p>
      </div>
    `;
    
    galleryGrid.innerHTML += itemHTML;
  });
  
  // Add click event to gallery items
  const items = galleryGrid.querySelectorAll('.gallery-item');
  items.forEach(item => {
    item.addEventListener('click', function() {
      const itemId = parseInt(this.getAttribute('data-id'));
      openLightbox(itemId);
    });
  });
}

function initGalleryFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Get category and filter gallery
      const category = this.getAttribute('data-filter');
      displayGalleryItems(category);
    });
  });
}

function initLightbox() {
  const lightbox = document.getElementById('galleryLightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const closeLightbox = document.querySelector('.close-lightbox');
  const prevButton = document.querySelector('.lightbox-prev');
  const nextButton = document.querySelector('.lightbox-next');
  
  if (!lightbox) return;
  
  // Close lightbox
  closeLightbox.addEventListener('click', function() {
    lightbox.style.display = 'none';
  });
  
  // Close lightbox when clicking outside the image
  lightbox.addEventListener('click', function(event) {
    if (event.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });
  
  // Previous and next buttons
  prevButton.addEventListener('click', function() {
    const currentId = parseInt(lightboxImage.getAttribute('data-id'));
    const prevId = getPrevItemId(currentId);
    openLightbox(prevId);
  });
  
  nextButton.addEventListener('click', function() {
    const currentId = parseInt(lightboxImage.getAttribute('data-id'));
    const nextId = getNextItemId(currentId);
    openLightbox(nextId);
  });
}

function openLightbox(itemId) {
  const lightbox = document.getElementById('galleryLightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxCaption = document.getElementById('lightboxCaption');
  
  const item = galleryItems.find(item => item.id === itemId);
  
  if (item && lightbox) {
    lightboxImage.src = item.image;
    lightboxImage.setAttribute('data-id', item.id);
    lightboxCaption.textContent = item.name;
    lightbox.style.display = 'block';
  }
}

function getPrevItemId(currentId) {
  const currentIndex = galleryItems.findIndex(item => item.id === currentId);
  const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  return galleryItems[prevIndex].id;
}

function getNextItemId(currentId) {
  const currentIndex = galleryItems.findIndex(item => item.id === currentId);
  const nextIndex = (currentIndex + 1) % galleryItems.length;
  return galleryItems[nextIndex].id;
}

// Contact Form
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');
  const saveInfoCheckbox = document.getElementById('saveInfo');
  
  // Load saved form data if available
  loadFormData();
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Get form data
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      const saveInfo = saveInfoCheckbox.checked;
      
      // Save form data if checkbox is checked
      if (saveInfo) {
        const formData = { name, email };
        localStorage.setItem('contactFormData', JSON.stringify(formData));
      } else {
        localStorage.removeItem('contactFormData');
      }
      
      // Simulate form submission
      formMessage.className = 'form-message';
      formMessage.textContent = 'Sending message...';
      
      setTimeout(() => {
        formMessage.className = 'form-message success';
        formMessage.textContent = 'Message sent successfully! We will get back to you soon.';
        contactForm.reset();
        
        // If user chose to save info, restore it after form reset
        if (saveInfo) {
          loadFormData();
        }
      }, 1500);
    });
  }
}

function loadFormData() {
  const savedData = localStorage.getItem('contactFormData');
  
  if (savedData) {
    const { name, email } = JSON.parse(savedData);
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const saveInfoCheckbox = document.getElementById('saveInfo');
    
    if (nameInput) nameInput.value = name;
    if (emailInput) emailInput.value = email;
    if (saveInfoCheckbox) saveInfoCheckbox.checked = true;
  }
}

// Accordion functionality
function initAccordion() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  
  accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  });
}

// Newsletter form
function initNewsletterForm() {
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterMessage = document.getElementById('newsletterMessage');
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const email = document.getElementById('newsletterEmail').value;
      
      // Simulate form submission
      newsletterMessage.textContent = 'Subscribing...';
      
      setTimeout(() => {
        newsletterMessage.textContent = `Thank you for subscribing with ${email}! You'll receive our updates soon.`;
        newsletterForm.reset();
      }, 1500);
    });
  }
}