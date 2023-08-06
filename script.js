
function RedirectProfile(){
  // Redirect to the profile page
  window.location.href = "/profile.html";
} 

function toggleProfileOptions() {
  const profileOptions = document.querySelector(".profile-options");
  profileOptions.classList.toggle('show');
}

function generateParagraph() {
 
  document.querySelector(".content").innerHTML = '<p style="margin-left: 30px; margin-top: 30px">We suggest you this videos to take care of your soil</p>    <iframe width="560" height="315" src="https://www.youtube.com/watch?v=np9RbtHX6mA" frameborder="0" allowfullscreen></iframe>   <iframe width="560" height="315" src="https://www.youtube.com/watch?v=XeNA6XdMoF8" frameborder="0" allowfullscreen></iframe>   <iframe width="560" height="315" src="https://www.youtube.com/watch?v=mDUTvopbCho" frameborder="0" allowfullscreen></iframe>   <iframe width="560" height="315" src="https://www.youtube.com/watch?v=Z9HAy9EYKKs" frameborder="0" allowfullscreen></iframe>    <iframe width="560" height="315" src="https://www.youtube.com/watch?v=SoF7Z6sWiEY" frameborder="0" allowfullscreen></iframe>     <iframe width="560" height="315" src="https://www.youtube.com/watch?v=J-ufnMo_7Yw" frameborder="0" allowfullscreen></iframe>  ';
 
}

function ChangeContent(index) {
  const imElement = document.querySelector(".im");
  const textElement = document.querySelector(".text");

  if (index === 0) {
    imElement.innerHTML = '<div class="im"><img src="/Pictures/1.jpg"></div>';
    textElement.innerHTML = '<div class="text"><h1>CropSense+ - </h1> <p>The cutting-edge precision agriculture technology that uses smart sensor networks and AI-powered insights to optimize farming practices for increased yields and sustainability.</p></div>';
  } else if (index === 1) {
    imElement.innerHTML = '<div class="im"><img src="/Pictures/2.jpg"></div>';
    textElement.innerHTML = '<div class="text" style="color:white"><h1 style=" color:white; font-weight: bolder;">AgriTech Pro -</h1> <p>an advanced agriculture technology that boosts crop yield, optimizes irrigation, and offers automated planting and harvesting.</p></div>';
  } else {
    // Handle invalid index values or other cases here, if needed.
    console.log("Invalid index value: " + index);
  }
}

  const circle1 = document.querySelector("#circle1");
  const circle2 = document.querySelector("#circle2");
  const navItems = document.querySelectorAll(".nav-item");

  circle1.addEventListener("click", function () {
    ChangeContent(0);
    circle1.classList.remove("nav-btn-selected");
    circle2.classList.remove("nav-btn-selected");

    navItems.forEach(item => {
      item.classList.remove("nav-itemm");
    });
  });

  circle2.addEventListener("click", function () {
    ChangeContent(1);
    circle1.classList.add("nav-btn-selected");
    circle2.classList.add("nav-btn-selected");

    navItems.forEach(item => {
      item.classList.add("nav-itemm");
    });
  });

  const rectElements = document.querySelectorAll('.rect');
  const originalContent = []; // Store original content for each .rect

  // Save original content for each .rect
  rectElements.forEach((rectElement) => {
    originalContent.push(rectElement.innerHTML);
  });
 
  const originalConten = []; // Array to store original content for all .rect divs

  function toggleContent(element) {
    const replacementText = 'Greenhouse Farming: The government of Algeria  has benn promoting  greenhouse ... ';
    const index = Array.from(element.parentElement.children).indexOf(element); // Get the index of the current .rect element

    if (element.classList.contains('hoverable-rect')) {
      // If it's already the replacement div, toggle back to original
      element.innerHTML = originalConten[index];
      element.classList.remove('hoverable-rect');
    } else {
      // Store the original content
      if (!originalConten[index]) {
        originalConten[index] = element.innerHTML;
      }

      // Create the replacement div
      element.innerHTML = replacementText;
      element.classList.add('hoverable-rect');
    }
  }

 
  function toggleContent(element) {
    const replacementDiv = `
      <div class="replacement-content">
        <div class="green-button">Buy Now</div>
      </div>
    `;

    if (!element.classList.contains('replacement')) {
      // Store the original content only if not already stored
      if (!element.originalContent) {
        element.originalContent = element.innerHTML;
      }

      // Replace the contents with the replacement div
      element.innerHTML = replacementDiv;
      element.classList.add('replacement');
    } else {
      // Restore the original content
      element.innerHTML = element.originalContent;
      element.classList.remove('replacement');
    }
  }






 




  
  





