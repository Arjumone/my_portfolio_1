// --------------scroll section active links------------- 
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = ()=>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >=offset && top <offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +id +']').classList.add('active');
            });
        }
    });

    //------------------- sticky navbar------------------
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);
}

// contact section

document.getElementById('contact-form').addEventListener('submit', function(event) {
    
    event.preventDefault();
    
    let fullName = document.getElementById('full-name').value;
    let email = document.getElementById('email').value;
    let mobileNumber = document.getElementById('mobile-number').value;
    let emailSubject = document.getElementById('email-subject').value;
    let message = document.getElementById('message').value;
    let mailtoLink = 'mailto:arjutuhin777@gmail.com' +
                    '?subject=' + encodeURIComponent(emailSubject) +
                    '&body=' + encodeURIComponent('Name: ' + fullName + '\n' +
                                                 'Email: ' + email + '\n' +
                                                 'Mobile Number: ' + mobileNumber + '\n\n' +
                                                 'Message: ' + message);
  
    window.location.href = mailtoLink;
});