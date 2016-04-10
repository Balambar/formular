function myErrors(){

	var error = [];
	var errorForm = [];

	function emptyBox(){
		if (myName.value === '' || myAge.value === '' || myMail.value === '') {
			error.push('Du måste fylla i alla obligatoriska rutor!');
			alert(error[0]);
		}
	}

	emptyBox();

	function checkName(){

		if (error.length === 0) {
			var mySplit = myName.value.split(" ");

			for (var i = 0; i < mySplit.length; i++) {
				for (var j = 0; j < mySplit[i].length; j++) {
					if (!isNaN(mySplit[i].charAt(j))) {
						error.push('Du kan bara skriva bokstäver i ditt namn!');
					}
			}
			}
			for (var i = 0; i < fel1.length; i++) {
				if (myName.value.indexOf(fel1[i]) >= 0) {
					error.push('Du kan bara skriva bokstäver i ditt namn!');
				}
			}
			if (error.length > 0) {
				alert(error[0]);
				console.log(error);
			}	
		}
	}

	checkName();

	function checkAge(){

		if (error.length === 0) {

			if (parseInt(myAge.value) < 18 || parseInt(myAge.value) > 90) {
				error.push("Din ålder måste vara mellen 18 och 90!");
				alert(error[0]);
			}
		}
	}
	
	checkAge();

	function checkMail(){

		if (error.length === 0) {

			for (var i = 0; i < fel2.length; i++) {
					if (myMail.value.indexOf(fel2[i]) >= 0) {
						error.push('Du kan bara använda tecken som är vanliga i en mailadress!');
					}
				}
			if (error.length > 0) {
				alert(error[0]);
			}
			else if (myMail.value.indexOf("@") < 1) {
				error.push("Du måste använda @ på ett rätt sätt!");
				alert(error[0]);
			}	
			else if (myMail.value.split("@")[1].indexOf(".") < 1) {
				error.push("Du måste skriva en domän!");
				alert(error[0]);
			}
		}
	}

	checkMail();

	function checkForm1(){

		if (error.length === 0) {
			for (var i = 0; i < myForm1; i++) {				
				if (!document.getElementById('item' + i).checked) {
					errorForm.push("Du måste välja ett av alternativen i frågan 'Hur ofta besöker du Fashion butik?'!");
				}
			}
			if (errorForm.length === 3) {
				error.push("ERR!");
				alert(errorForm[2]);

			}		
		}
	}

	checkForm1();

	function checkForm2(){

		if (errorForm.length === 2) {
			errorForm = [];
			for (var i = 0; i < myForm2; i++) {				
				if (!document.getElementById('sak' + i).checked) {
					errorForm.push("Du måste minst välja ett av alternativen i frågan 'Vilka Avdelningar av Fashionmode brukar du besöka?'!");
				}
			}
			if (errorForm.length === 6) {
				alert(errorForm[5]);
			}
		}
	}

	checkForm2();

	function allOk(){

		if (error.length === 0 && errorForm.length < 6) {
			error = [];
			errorForm = [];
			alert("Tack för din besök. Vi återkommer om du vinner!!!");
			myName.value = '';
			myAge.value = '';
			myMail.value = '';
			for (var i = 0; i < myForm1; i++) {
				document.getElementById('item' + i).checked = false;
			}
			for (var i = 0; i < myForm2; i++) {
				document.getElementById('sak' + i).checked = false;
			}
			document.getElementById('extra1').value = '';
			document.getElementById('extra2').value = '';
		}
	}

	allOk();

}

function sendInfo(){

	myErrors();

}