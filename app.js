var headerNav = document.querySelector("#headerNav");
var headerNavSearch = document.querySelector("#headerSearchNav");
var searchBtn = document.querySelector("#searchBtn");
var cancelBtn = document.querySelector("#cancelBtn");
var searchInput = document.querySelector("#searchInput");

var elementVar = document.getElementById('hero__content-wrapper');


const toggleSearchNavbar = () => {
  if (headerNavSearch.style.display === "flex"){
    headerNavSearch.style.display = "none";
    headerNav.style.display = "flex";
  }
  else {
    headerNavSearch.style.display = 'flex';
    headerNav.style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  console.log('Search button clicked');
  toggleSearchNavbar();
})

cancelBtn.addEventListener("click", () => {
  console.log("Cancel button clicked");
  searchInput.value = "";
  toggleSearchNavbar();
})


window.addEventListener("scroll", setScrollVar)
window.addEventListener("resize", setScrollVar)

// Make the Hero Image move into the Featured Product Section
function setScrollVar() {
  const htmlElement = document.documentElement
  const percentOfScreenHeightScrolled =
  htmlElement.scrollTop / htmlElement.clientHeight;

  console.log(Math.min(percentOfScreenHeightScrolled * 100, 100));

  var scrollPercentage = Math.min(percentOfScreenHeightScrolled * 100, 100)
  var heroBackgroundOpacity = Math.round(85 - (1 * Math.min(scrollPercentage, 30) * 85 / 30));

  // var browserWidth = htmlElement.clientWidth;
  // alert(browserWidth);

  var heroCanvasMovement = Math.min(scrollPercentage, 100)

  var minimumWidth = 50;  // Minimum width the canvas can have
  var initialWidthPercentage = 50;  // Initial width as a percentage of the container width
  var containerWidth = 100;  // Actual width of the container
  var scalingFactor = 0.5;  // Scaling factor to control the speed of reduction
  var maxScrollPosition = 200;  // Maximum scroll position at which the final width is reached
  
  // Calculate the normalized scroll position between 0 and 1
  var normalizedScroll = scrollPercentage / maxScrollPosition;
  
  // Apply cubic easing function to the normalized scroll position
  var cubicEasing = Math.pow(normalizedScroll, 3);
  
  // Ensure the eased value is between 0 and 1
  var easedValue = Math.min(cubicEasing, 1);
  
  // Calculate the decreasing factor based on the scaling factor and eased value
  var decreasingFactor = 1 - scalingFactor * easedValue;
  
  // Calculate the final canvas width, ensuring it's not less than the minimum width
  var finalCanvasWidth = Math.max(minimumWidth, (initialWidthPercentage / 100) * containerWidth * decreasingFactor);
  
  // Assign the result to the heroCanvasWidth variable
  var heroCanvasWidth = finalCanvasWidth;
  
  // var heroCanvasWidth = Math.max(50, (100 / 100) * 100 * (1 - 0.4 * Math.min(Math.pow(scrollPercentage / 100, 3), 2)));


  var heroCanvasHeight = Math.max(50, (100 / 100) * 100 * (1 - 0.4 * Math.min(Math.pow(scrollPercentage / 100, 3), 2)));



  htmlElement.style.setProperty( 
    "--background-opacity",
    heroBackgroundOpacity / 100
  );

  htmlElement.style.setProperty(
    "--canvas-movement",
    heroCanvasMovement
  );

  htmlElement.style.setProperty(
    "--canvas-width",
    heroCanvasWidth
  );

  htmlElement.style.setProperty(
    "--canvas-height",
    heroCanvasHeight
  );

  console.log(heroHeightLength)
}

setScrollVar()
