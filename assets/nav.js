
  function toggleMenu(){
    document.getElementById("navLinks").classList.toggle("show");
  }
    const navLinks = document.getElementById("navLinks");
    const navToggle = document.querySelector(".navToggle");
    const mainNav  = document.querySelector(".mainNav");
    
    function toggleMenu(){
      navLinks.classList.toggle("show");
    }
    
    /*Close menu when clicking outside */
    document.addEventListener("click", function(e){
      const clickedInsideNav = mainNav.contains(e.target);
    
      if (!clickedInsideNav) {
        navLinks.classList.remove("show");
      }
    });
    
    /* Close menu when clicking any menu link */
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("show");
      });
    });