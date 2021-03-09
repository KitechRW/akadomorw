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
	document.querySelector('#company-title').innerHTML = 'AGRIMAX CONSULTING ';
	document.querySelector('#company-desc').innerHTML = `
	BUILDING, OPTIMIZING AND DEVELOPING COMPETITIVE AGRI-FOOD CHAIN.`;

	// In who we are section
	document.querySelector(
		'#x'
	).innerHTML = `Agrimax is a specialized consultancy firm offering knowledge and expertise for sustainable agri-food chain. We provide targeted agribusiness solutions and expert advise in Rwanda and Africa.`
	// Abous us section
	// left section in about us
	document.querySelector(
		'#mission'
	).innerHTML = `Provide a premier standards services in agribusinesses and technical excellence for success. We value honesty, committing to the highest standards of professionalism, trust and diligence.`;

	// middle section in about us
	
	// right section in about us
	document.querySelector(
		'#visions'
	).innerHTML = `We are committed to support agribusinesses realize their full potential along the value chain and to be a global partner in development of agri-food industry.`;

	// In team section
	document.firstimg.src = './images/avatar.jpg';
	document.querySelector('#first-name').innerHTML = 'Emmanuel Gasigwa';
	document.querySelector('#first-position').innerHTML = 'Founder & CEO ';

	// In contact us section
	document.querySelector('#address').innerHTML = 'Kigali';
	document.querySelector('#street').innerHTML = 'KN857';
	document.querySelector('#email').innerHTML = 'info@agrimax.rw';
	document.querySelector('#phone').innerHTML = '+250788225525';

	// Link to social media
	document.querySelector('#facebook').href = 'http://www.facebook.com';
	document.querySelector('#twitter').href = 'http://www.twitter.com';
	document.querySelector('#instagram').href = 'http://www.instagram.com';
	document.querySelector('#whatsapp').href = 'https://wa.me/+250788384757';
	document.querySelector('#youtube').href = 'http://www.youtube.com';
	document.querySelector('#linkedin').href = 'http://www.linkedin.com';
}

// images sliding
let i = 0;
let j = 0;

const images = [
	'./images/gfood.png',
		
];

const serviceImages = [
	{
		image: '../images/pm.png',
		title: 'Title 1',
		text: 'Outside view',
	},
	{ image: './images/gfood.png', title: 'Title 2', text: 'Swimming pool' },
	{ image: './images/gfood.png', title: 'Title 3', text: 'For lunch' },
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

	setTimeout('changeImages()', 500);
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
