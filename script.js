document.addEventListener('DOMContentLoaded', function () {
    const counters = document.querySelectorAll('.counter');
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const counter = entry.target;
  
          if (entry.isIntersecting) {
            const target = +counter.getAttribute('data-target');
            const startValue = 0;
            const duration = 2000;
            const step = target / (duration / 16);
  
            const updateCounter = () => {
              const currentValue = +counter.innerText;
  
              if (currentValue < target) {
                const nextValue = Math.min(currentValue + step, target);
                counter.innerText = Math.floor(nextValue);
  
                requestAnimationFrame(updateCounter);
              } else {
                counter.innerText = target;
              }
            };
  
            counter.innerText = startValue;
            updateCounter();
          } else {
            // Reset the counter text when it leaves the viewport
            counter.innerText = '0';
          }
        });
      },
      {
        threshold: 0.1, // Adjust threshold as needed
      }
    );
  
    counters.forEach((counter) => {
      observer.observe(counter);
    });
  });
  
  
  
  document.addEventListener('DOMContentLoaded', function() {
      const sections = document.querySelectorAll('div'); // Selecting by ID
    
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      }, {
        threshold: 0.1
      });
    
      sections.forEach(section => {
        observer.observe(section);
      });
    });
    
  
document.addEventListener("DOMContentLoaded", function() {
    var targetDiv = document.getElementById("targetDiv");
    document.querySelector("a").addEventListener("click", function(event) {
        event.preventDefault();
        targetDiv.scrollIntoView({
            behavior: "smooth"
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var targetDiv = document.getElementById("targetDiv1");
    document.querySelector("a").addEventListener("click", function(event) {
        event.preventDefault();
        targetDiv.scrollIntoView({
            behavior: "smooth"
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var targetDiv = document.getElementById("portfolio");
    document.querySelector("a").addEventListener("click", function(event) {
        event.preventDefault();
        targetDiv.scrollIntoView({
            behavior: "smooth"
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var targetDiv = document.getElementById("targetDiv3");
    document.querySelector("a").addEventListener("click", function(event) {
        event.preventDefault();
        targetDiv.scrollIntoView({
            behavior: "smooth"
        });
    });
});



function myFunction(x) {
    x.classList.toggle("change");
  }

  var open = false;

  function openNav() {
    var sideNav = document.getElementById("mySidenav");

    if (sideNav.style.width === "0px" || sideNav.style.width === "") {
        sideNav.style.width = "250px";
        open = true;
    } else {
        sideNav.style.width = "0";
        open = false;
    }
}


document.querySelectorAll("#mySidenav a").forEach(function(link) {
    link.addEventListener("click", function(event) {
   
        event.stopPropagation();

        var sideNav = document.getElementById("mySidenav");
        sideNav.style.width = "0";
        open = false;
    });
});

function toggleFAQ(id) {
  var div = document.getElementById('div' + id);
  div.classList.toggle('show');
}

  // Show the button when the user scrolls down 100px
  window.onscroll = function() {
    const button = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  };

  // Scroll to top function
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    let currentIndex = 0;
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    setInterval(nextSlide, 5000); // Auto-slide every 3 seconds
});
document.addEventListener("DOMContentLoaded", () => {
  const slides2 = document.querySelectorAll("#slider2 .slide2");
  let currentIndex2 = 0;
  const prevBtn2 = document.querySelector(".prevBtn2");
  const nextBtn2 = document.querySelector(".nextBtn2");

  function showSlide2(index) {
      slides2.forEach((slide, i) => {
          slide.classList.toggle("active", i === index);
      });
  }

  function nextSlide2() {
      currentIndex2 = (currentIndex2 + 1) % slides2.length;
      showSlide2(currentIndex2);
  }

  function prevSlide2() {
      currentIndex2 = (currentIndex2 - 1 + slides2.length) % slides2.length;
      showSlide2(currentIndex2);
  }

  nextBtn2.addEventListener("click", nextSlide2);
  prevBtn2.addEventListener("click", prevSlide2);

  setInterval(nextSlide2, 7000); // Auto-slide every 3 seconds
});
