const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
    },
    {
      name: "Rome Italy Temple",
      location: "Rome, Italy",
      dedicated: "2019-03-10",
      area: 41010,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-3545.jpg",
    },
    {
      name: "Aba Nigerian Temple",
      location: "Aba, Abia, Nigeria",
      dedicated: "2005-August-7",
      area: 11500,
      imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5088.jpg",
    },
    {
      name: "Accra Ghana Temple",
      location: "Accra, Ghana",
      dedicated: "2004-01-11",
      area: 17500,
      imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-5154.jpg",
    },
  ]
  
  const picturesContainer = document.querySelector(".pictures")
  const navLinks = document.querySelectorAll("nav a")
  
  function displayTemples(templesArray) {
    const picturesContainer = document.querySelector(".pictures")
    picturesContainer.innerHTML = ""
  
    templesArray.forEach((temple) => {
      const figure = document.createElement("figure")
      figure.classList.add("temple-card")
  
      const templeName = temple.templeName || temple.name
  
      // Create temple info container
      const infoContainer = document.createElement("div")
      infoContainer.classList.add("temple-info")
  
      // Create temple name as h2
      const nameElement = document.createElement("h2")
      nameElement.textContent = templeName
      nameElement.classList.add("temple-name")
  
      // Create location element
      const locationElement = document.createElement("p")
      locationElement.textContent = `Location: ${temple.location}`
      locationElement.classList.add("temple-location")
  
      // Create dedicated element
      const dedicatedElement = document.createElement("p")
      dedicatedElement.textContent = `Dedicated: ${temple.dedicated}`
      dedicatedElement.classList.add("temple-dedicated")
  
      // Create area element
      const areaElement = document.createElement("p")
      areaElement.textContent = `Area: ${temple.area.toLocaleString()} sq ft`
      areaElement.classList.add("temple-area")
  
      // Append all elements to the info container
      infoContainer.appendChild(nameElement)
      infoContainer.appendChild(locationElement)
      infoContainer.appendChild(dedicatedElement)
      infoContainer.appendChild(areaElement)
  
      // Create image element
      const img = document.createElement("img")
      img.src = temple.imageUrl
      img.alt = templeName
      img.loading = "lazy"
  
      // Append info container and then image to figure (info first, then image)
      figure.appendChild(infoContainer)
      figure.appendChild(img)
  
      // Append figure to pictures container
      picturesContainer.appendChild(figure)
    })
  }
  
  // Filtering Functions
  function filterOldTemples() {
    displayTemples(temples.filter((t) => t.dedicated < 1900))
  }
  
  function filterNewTemples() {
    displayTemples(temples.filter((t) => t.dedicated > 2000))
  }
  
  function filterLargeTemples() {
    displayTemples(temples.filter((t) => t.area > 90000))
  }
  
  function filterSmallTemples() {
    displayTemples(temples.filter((t) => t.area < 10000))
  }
  
  function showAllTemples() {
    displayTemples(temples)
  }
  
  // Event Listeners for Filters
  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const linkText = this.textContent.toLowerCase()
  
      // Update the h2 to show which filter is active
      document.querySelector("h2").textContent = this.textContent
  
      // Apply the appropriate filter based on the link text
      if (linkText === "home") {
        showAllTemples()
      } else if (linkText === "old") {
        filterOldTemples()
      } else if (linkText === "new") {
        filterNewTemples()
      } else if (linkText === "large") {
        filterLargeTemples()
      } else if (linkText === "small") {
        filterSmallTemples()
      }
    })
  })
  
  // Initial display
  displayTemples(temples)
  
  