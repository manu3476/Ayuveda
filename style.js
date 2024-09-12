document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === 'admin' && password === '123') {
        errorMessage.textContent = 'Login successful!';
        errorMessage.style.color = 'green';
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});


$(document).ready(function () {
	var sections      = $('section');
	var navbar        =	$('#nav');
	var navbarHeight  = navbar.height();

	var sectionOffset = [];

	sections.each(function() {
		var section = $(this);

        var position = section.offset().top - navbarHeight;
        var backgroundColor = section.css("background-color");

        sectionOffset.push({'postion': position,'color': backgroundColor});
       
    });

	$(window).on('scroll', function(){
		var scrollPos = $(document).scrollTop();

		$.each(sectionOffset, function(index, section){
			if (scrollPos >= section.postion) {
				navbar.css("background-color", section.color);
			}
		}) 
	});

});



  