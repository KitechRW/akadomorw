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
	document.logo.src = './images/logo.jpg';

	// In menu section, the first section below navbar
	document.querySelector('#company-title').innerHTML = 'Lets Tour Rwanda Ltd';
	document.querySelector('#company-desc').innerHTML = `
	We Encourage tourists to visit Rwanda, by providing the following services: guiding them, connecting them to hotels, facilitating transport in urban and rural areas, providing information to facilitate their stay in Rwanda and other services to make their stay memorable and joyful.`;

	// In who we are section
	document.querySelector(
		'#status'
	).innerHTML = `We do Facilitate tourists in accomodation, transport, restauration and related services`;

	// Abous us section
	// left section in about us
	document.querySelector(
		'#mission'
	).innerHTML = `Contributing to Visit Rwanda project, in raising the tourism sector.`;

	// middle section in about us
	document.aboutimg.src = './images/logo.jpg';
	document.querySelector(
		'#img-caption'
	).innerHTML = `<b> We serve you the best experience in the land of 1000 Hills.</b>`;

	// right section in about us
	document.querySelector(
		'#visions'
	).innerHTML = `Promoting tourism sector in Rwanda.`;

	// In team section
	
	// In contact us section
	document.querySelector('#address').innerHTML = 'Nyarugenge, Kigali';
	//document.querySelector('#street').innerHTML = 'KN857';
	document.querySelector('#email').innerHTML = 'rodrikam001@yahoo.fr';
	document.querySelector('#phone').innerHTML = '+250788770007';

	// Link to social media
	
	document.querySelector('#whatsapp').href = 'https://wa.me/+250788592533';
	
}

// images sliding
let i = 0;
let j = 0;

const images = [
	'./images/s1.jpg',
	'./images/view.jpg',
	'./images/s1.jpg',
	
];

const serviceImages = [
	{
		image: './images/s2.jpg',
		title: 'Tourist attraction Recommendation & Travels',
		text: 'We recommend, guide, and provide tourism services to our clients.',
	},
	{ image: './images/s5.jpg', title: 'Toursits Accomodations', text: 'We help you to find an afforbable and well equiped accomodation' },
	{ image: './images/s4.jpg', title: 'Restaurant Services', text: 'We help our clients find their favorite dishes with good restaurant services while having their time in Rwanda.' },
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

	setTimeout('changeImages()', 3000);
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
