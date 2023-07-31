window.onload = function() {
    window.scrollTo(0, 1);
};

window.addEventListener('scroll', handleScroll);

function isElementVisible(e){
    /* Returns whether or not the element is in view of client window */
    var bound = e.getBoundingClientRect();
    return (
        bound.top >= 0 &&
        bound.left >= 0 &&
        bound.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bound.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScroll(){
    var title = document.querySelector('.riseTrigger')
    var element = document.querySelector('.textrise');
    if(isElementVisible(title)){
        title.classList.remove('riseTrigger');
        element.classList.add('lineUp');
        element.classList.remove('textrise');
    }
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});

function sendEmail(event){
    event.preventDefault(); 

    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    
    const templateID = "template_o7ft8iu";
    const serviceID = "service_6e6ajea";
    
    emailjs.send(serviceID, templateID, params)
        .then(function(response) {
           console.log('SUCCESS', response.status, response.text);
           alert("Message sent! I'll get back to you as soon as I can.");
        }, function(error) {
           console.log('FAILED', error);
           alert("Something went wrong. Please try again later.");
        });

}