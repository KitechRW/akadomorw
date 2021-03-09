function _(id) {
	return document.getElementById(id);
}
// Include a file
function includeHTML() {
	let z, i, elmnt, file, xhttp;
	/*loop through a collection of all HTML elements:*/
	z = document.getElementsByTagName('*');
	for (i = 0; i < z.length; i++) {
		elmnt = z[i];
		/*search for elements with a certain atrribute:*/
		file = elmnt.getAttribute('w3-include-html');
		if (file) {
			/*make an HTTP request using the attribute value as the file name:*/
			xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					if (this.status == 200) {
						elmnt.innerHTML = this.responseText;
					}
					if (this.status == 404) {
						elmnt.innerHTML = 'Page not found.';
					}
					/*remove the attribute, and call this function once more:*/
					elmnt.removeAttribute('w3-include-html');
					includeHTML();
				}
			};
			xhttp.open('GET', file, true);
			xhttp.send();
			/*exit the function:*/
			return;
		}
	}

	/**
	 * Here you will be setting information according to the company
	 */

	// In NavBar section add logo image
	document.logo.src = './images/logo.png';

	// In menu section, the first section below navbar
	document.querySelector('#company-title').innerHTML = 'GmastersLTD ';
	document.querySelector('#company-desc').innerHTML = `
	 OUR CORE VALUES are what drive our company.`;

	// In who we are section
	document.querySelector(
		'#status'
	).innerHTML = `OUR MISSION is to provide Distinguished Hospitality through the four key components of our Mission Statement: Service, Relationships, Careers, and Results. OUR COMMON VISION is to be recognized as a highly respected industry leader in hotel development and hotel management. OUR CORE VALUES are what drive our company.`;

	// Abous us section
	// left section in about us
	document.querySelector(
		'#mission'
	).innerHTML = `OUR MISSION is to provide Distinguished Hospitality through the four key components of 
	our Mission Statement: Service, Relationships, Careers, and Results.`;

	// middle section in about us
	document.aboutimg.src = './images/city_tour.jpg';
	// document.querySelector(
	// 	'#img-caption'
	// ).innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero magni asperiores velit!`;

	// right section in about us
	document.querySelector(
		'#visions'
	).innerHTML = `OUR COMMON VISION is to be recognized as a highly respected industry leader in hotel development and hotel management.`;

	// In team section	
	document.thirdimg.src = './images/avatar.jpg';
	document.querySelector('#third-name').innerHTML = 'Opacha George William';
	document.querySelector('#third-position').innerHTML = 'Co founder & CEO';
	// In contact us section
	document.querySelector('#address').innerHTML = 'Kigali-Remera - gisementi';
	// document.querySelector('#street').innerHTML = 'KN857';
	document.querySelector('#email').innerHTML = 'gwmrwanda@gmail.com';
	document.querySelector('#phone').innerHTML = '+250782871129';

	// Link to social media
	document.querySelector('#twitter').href = 'https://twitter.com/Gmaters2';
	document.querySelector('#linkedin').href = 'https://linkedin.com/in/g-maters-098b74207';
	document.querySelector('#facebook').href = 'https://web.facebook.com/GmastersLTD';
	document.querySelector('#instagram').href = 'https://www.instagram.com/gmastersltd';
	document.querySelector('#whatsapp').href = 'https://wa.me/+250735051561';
	
}

// images sliding
let i = 0;
let j = 0;

const images = [
	'./images/city_tour.jpg',
	'./images/Car_Hire_(1).jpg',
	'./images/safari1.jpg',
	'./images/safari.jpg',
	'./images/chuttersnap-OB7ol699Iww-unsplash.jpg'
];


function changeImages() {
	function _(id) {
		return document.getElementById(id);
	}

	if (_('slider_image') !== null) {
		_('slider_image').setAttribute('src', images[i]);
		_('imgservice').setAttribute('src', serviceImages[j].image);

		document.querySelector('#title-service').innerHTML = serviceImages[j].title;
		document.querySelector('#text-service').innerHTML = serviceImages[j].text;

		if (i < images.length - 1) {
			i++;
		} else {
			i = 0;
		}

		if (j < serviceImages.length - 1) {
			j++;
		} else {
			j = 0;
		}
	}

	setTimeout('changeImages()', 5000);
}

function click_hamburger() {
	document.getElementById('hamburger_btn').click();
}

function send_email() {
	function _(id) {
		return document.getElementById(id);
	}
	var status = _('response_status');
	if (
		_('email_from').value !== '' &&
		_('email_from').value.includes('@') &&
		_('contact_message').value !== ''
	) {
		status.innerHTML = 'Sending message ...';
		var formdata = new FormData();
		formdata.append('email', _('email_from').value);
		formdata.append('message', _('contact_message').value);
		var ajax = new XMLHttpRequest();
		ajax.open('POST', 'send_email.php');
		ajax.onreadystatechange = function () {
			if (ajax.readyState == 4 && ajax.status == 200) {
				if (ajax.responseText == 'success') {
					_('email_from').value = '';
					_('contact_message').value = '';
					status.innerHTML = 'Thanks your message is sent';
					setTimeout(function () {
						status.innerHTML = '';
					}, 5000);
				} else {
					status.innerHTML = ajax.responseText;
					_('my_btn').disabled = false;
					setTimeout(function () {
						status.innerHTML = '';
					}, 5000);
				}
			}
		};
		ajax.send(formdata);
	}
}
