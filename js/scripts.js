window.addEventListener("DOMContentLoaded", function() {
	  // all code goes here
	var x = document.getElementById('btn-submit');
	var enteredBool = false;

		// Form Validation
		x.addEventListener ('click', function () {
			var nameBool = document.getElementById('input-name').value;
			var emailBool = document.getElementById('input-email').value;
			var emailValid = document.getElementById('input-email').value.indexOf('@');
			var emailValidBool = false;

			if (!enteredBool) {
				if (emailValid !== -1) {
					if (nameBool && emailBool) {
				    	alert('Your email has been added to the list!');
				    	document.getElementById('btn-submit').style.background = '#FF6840';
				    	enteredBool = true;
					}
					else {
						alert('Please enter your information :)');
					}
				}
				else {
					alert ('Please enter a valid email address.')
				}
			}
			else {
				alert ("You're already subscribed!");
			}
		});
});