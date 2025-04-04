const temples = [
    {
      name: "Salt Lake Temple",
      location: "Salt Lake City, Utah, USA",
      dedicated: "1893-04-06",
      area: 253015,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-lds-252883-wallpaper.jpg"
    },
    {
      name: "Accra Ghana Temple",
      location: "Accra, Ghana",
      dedicated: "2004-01-11",
      area: 17500,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-lds-250475-wallpaper.jpg"
    },
    {
      name: "Kyiv Ukraine Temple",
      location: "Kyiv, Ukraine",
      dedicated: "2010-08-29",
      area: 21863,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/kyiv-ukraine-temple/kyiv-ukraine-temple-lds-251831-wallpaper.jpg"
    },
    // 🔻 Add 3 more temples here
    {
      name: "Rome Italy Temple",
      location: "Rome, Italy",
      dedicated: "2019-03-10",
      area: 41010,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-lds-250793-wallpaper.jpg"
    },
    {
      name: "Laie Hawaii Temple",
      location: "Laie, Hawaii, USA",
      dedicated: "1919-11-27",
      area: 47400,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple/laie-hawaii-temple-lds-252877-wallpaper.jpg"
    },
    {
      name: "Paris France Temple",
      location: "Le Chesnay, France",
      dedicated: "2017-05-21",
      area: 44000,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-lds-249851-wallpaper.jpg"
    }
  ];
  
  const picturesContainer = document.querySelector('.pictures');
  const navLinks = document.querySelectorAll('nav a');
  
  function displayTemples(templesArray) {
    picturesContainer.innerHTML = '';
    templesArray.forEach(temple => {
      const figure = document.createElement('figure');
  
      const img = document.createElement('img');
      img.src = temple.imageUrl;
      img.alt = temple.name;
      img.loading = 'lazy';
  
      const caption = document.createElement('figcaption');
      caption.textContent = `${temple.name} — ${temple.location} — Dedicated: ${temple.dedicated} — Area: ${temple.area.toLocaleString()} sq ft`;
  
      figure.appendChild(img);
      figure.appendChild(caption);
      picturesContainer.appendChild(figure);
    });
  }
  
  function filterTemples(filter) {
    let filtered;
    switch (filter) {
      case 'Old':
        filtered = temples.filter(t => new Date(t.dedicated) < new Date('1900-01-01'));
        break;
      case 'New':
        filtered = temples.filter(t => new Date(t.dedicated) > new Date('2000-01-01'));
        break;
      case 'Large':
        filtered = temples.filter(t => t.area > 90000);
        break;
      case 'Small':
        filtered = temples.filter(t => t.area < 10000);
        break;
      default:
        filtered = temples;
    }
    displayTemples(filtered);
  }
  
  // Initial display
  displayTemples(temples);
  
  // Navigation filtering
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const filter = link.textContent;
      document.querySelector('main h2').textContent = filter;
      filterTemples(filter);
    });
  });
  