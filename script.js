function openTab(pageName, elt){
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.textDecoration = "none";
    }

    // Show the specific tab content
    pageName.style.display = "block";
    
    // Add the specific color to the button used to open the tab content
    elt.style.textDecoration = "underline";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// make navbar invisible when page loads
$(document).ready(function(){
    $('.navbar').css({
        opacity: 0
    })
})

// when scroll down, make navbar appear
$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
  
    $('.navbar').css({
      opacity: function() {
        var elementHeight = $(this).height();
        return 1 - (elementHeight - scrollTop + 150) / elementHeight;
      }
    });
  });
