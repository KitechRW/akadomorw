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
	//document.logo.src = './images/white_transparent.png';

	// In menu section, the first section below navbar
	document.querySelector('#company-title').innerHTML = 'THE BEST CARS DEALERSHIP Ltd';
	document.querySelector('#company-desc').innerHTML = `
	" We Sale motor vehicles, Go further and experience the beauty of thousands hills "`;

	// In who we are section
	document.querySelector(
		'#status'
	).innerHTML = `We sale new and used motor vehicles  that are reliable and trustful from a variety of Car manufacturin Industries like TOYOTA, HYUNDAI, Volkswagen, Honda, Mercedes Benz and many others. `;

	// Abous us section
	// left section in about us
	document.querySelector(
		'#mission'
	).innerHTML = `Our mission is to sell cars that we ourselves would buy if we were in the shoes of the clients!`;

	// middle section in about us
	document.aboutimg.src = './images/cover.jpg';
	document.querySelector(
		'#img-caption'
	).innerHTML = `CEO, Niyonkuru Serge`;


	// right section in about us
	document.querySelector(
		'#visions'
	).innerHTML = `To be the best car seller company that treats customers like relatives, by selling them affordable, reliable cars!`;

	// In team section
	

	// In contact us section
	document.querySelector('#address').innerHTML = 'Nyarugenge, Kigali';
	//document.querySelector('#street').innerHTML = 'KN857';
	document.querySelector('#email').innerHTML = 'sergeniyonkuru0@gmail.com';
	document.querySelector('#phone').innerHTML = '+250 783632225';

	// Link to social media
	
	document.querySelector('#whatsapp').href = 'https://wa.me/+250 783632225';
	
}

// images sliding
let i = 0;
let j = 0;

const images = [
	'./images/s1.jpg',
	'./images/view.png',
	'./images/s2.png',
	'./images/s3.PNG',
	
];

const serviceImages = [
	{
		image: './images/s2.png',
		title: 'Pickup',
		text: 'It is very affordable on our market.',
	},
	{ image: './images/s1.jpg', title: 'Sedan', text: 'This is an affordable car in this era.' },
	{ image: './images/s3.png', title: 'Land Cruiser', text: 'It is enough to facilitate a large number of people.' },
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
