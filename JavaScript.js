window.onload = function () {
    let T = document.getElementsByClassName("hidden-content");
    for (const element of T) {
        element.style.display = "none";
        console.log(element.style.display);
    }

    let head = document.getElementById("navigation-header");
    let img = document.createElement("img");
    img.src = "images/wp2068895.jpg";
    img.classList.add("img-header");
    head.appendChild(img);
}

function displayContent(initiator) {
    initiator.style.display = "none";
    initiator.parentElement.getElementsByClassName("hidden-content")[0].style.display = "";
    let others = initiator.parentElement.parentElement.getElementsByClassName("content-section");
    for (const element of others) {
        if (element.id !== initiator.parentElement.id) {
            element.getElementsByClassName("hidden-content")[0].style.display = "none";
            element.getElementsByClassName("showmorebutton")[0].style.display = "";
        }
    }
}

function hideContent(initiator) {
    initiator.parentElement.style.display = "none";
    initiator.parentElement.parentElement.getElementsByClassName("showmorebutton")[0].style.display = "";
}


/**
 * Button for scrolling to the top of the page once you've scrolled past a certain point.
 * Hidden when they are already there.
 */
let topButton = document.getElementById("toTopButton");

window.onscroll = function () {
    if (window.pageYOffset > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};

function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/*function to fade effect on scrolling*/
function fadeContent() {
    //variable to get the pixel a document has scrolled from top website
    const currentPoint = window.pageYOffset;
    const displayPoint = 600; // The pixel location where the content will be fully displayed
    let tempOpacity; //temporary variable of content's opacity

    if (currentPoint <= displayPoint) {
        tempOpacity = 0 + currentPoint / displayPoint;
    } else {
        tempOpacity = 1;
    }
    document.querySelector("#content").style.opacity = tempOpacity;
}
window.addEventListener("scroll", fadeContent)

/*Display the slideshow*/
let numSlide = 1; //Use to assign the address of the image
//Show image 1 first
displaySlide(numSlide);
//Change the slide after click button
function changeSlide(num) {
    displaySlide(numSlide += num);
}
//Change images in slide show
function displaySlide(num) {
    let slide = document.getElementsByClassName("slides");
    if (num > slide.length) {
        numSlide = 1;
    }
    if (num < 1) {
        numSlide = slide.length;
    }
    //Make sure all slides are in an undisplayed mode
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    slide[numSlide - 1].style.display = "block";
}

/**
 * Post page 
 */

const form = document.querySelector('#post-page-form');
const titleInput = document.querySelector('#title');
const tagsInput = document.querySelector('#tags');
const contentInput = document.querySelector('#content');
const titleError = document.querySelector('#title-error');
const tagsError = document.querySelector('#tags-error');
const contentError = document.querySelector('#content-error');

form.addEventListener('submit', (event) => {
  // Prevent form submission
  event.preventDefault();

  // Reset error messages and styles
  titleError.textContent = '';
  titleInput.classList.remove('error');
  tagsError.textContent = '';
  tagsInput.classList.remove('error');
  contentError.textContent = '';
  contentInput.classList.remove('error');

  // Validate form fields

  let isValid = true;
  if (titleInput.value.trim() === '') {
    titleError.innerHTML = 'Title is required.';


    isValid = false;
  } else if (titleInput.value.trim().length > 70) {
    titleError.textContent = 'Title cannot exceed 70 characters.';
    isValid = false;
  } 
  
  if (tagsInput.value.trim() === '') {
    tagsError.textContent = 'Keywords/Tags is required.';

    isValid = false;
  }

  if (contentInput.value.trim() === '') {
    contentError.textContent = 'Content is required.';
    isValid = false;
  }

  // Submit the form and redirect to home page if valid
  if (isValid) {
    alert("Form submitted successfully!");
    window.location.href = 'index.html';
  }
});

// Reset form fields and styles
form.addEventListener('reset', () => {
  titleInput.value = '';
  tagsInput.value = '';
  contentInput.value = '';
  titleError.textContent = '';
  titleInput.classList.remove('error');
  tagsError.textContent = '';
  tagsInput.classList.remove('error');
  contentError.textContent = '';
  contentInput.classList.remove('error');
});


mapboxgl.accessToken = 'pk.eyJ1IjoiamRvZTM3IiwiYSI6ImNsbGhldXV6NjB6emgzbHFoaXE4Z2dkYjgifQ.hVsdMdE7J_5hNiG2qp57hA';
var map = new mapboxgl.Map({
    container: 'map', // Container ID
    style: 'mapbox://styles/mapbox/streets-v11', // Map style URL
    center: [-74.5, 40], // Initial map center
    zoom: 9 // Initial map zoom level
});
