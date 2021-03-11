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
	document.logo.src = './images/s6.jpg';

	// In menu section, the first section below navbar
	document.querySelector('#company-title').innerHTML = 'B to B Import and Export Ltd';
	document.querySelector('#company-desc').innerHTML = `
	Import and export food items to Rwanda market, also export fruits, coffee, honey, and tea from Rwanda to other countries.`;

	// In who we are section
	document.querySelector(
		'#status'
	).innerHTML = `We Import and export food items.`;

	// Abous us section
	// left section in about us
	document.querySelector(
		'#mission'
	).innerHTML = `Bring and distribute healthy and high quality food for friendly price.`;

	// middle section in about us
	document.aboutimg.src = './images/s5.jpg';
	document.querySelector(
		'#img-caption'
	).innerHTML = `<b>Your wish is our command anytime!</b>`;

	// right section in about us
	document.querySelector(
		'#visions'
	).innerHTML = `To lead the Rwanda market in food supplying sector.`;

	// In team section

	// In contact us section
	document.querySelector('#address').innerHTML = 'Downtown, bus station, B-18';
	//document.querySelector('#street').innerHTML = 'KN857';
	document.querySelector('#email').innerHTML = 'yasirbayayan2@gmail.com';
	document.querySelector('#phone').innerHTML = '+250783133352';

	// Link to social media
	document.querySelector('#instagram').href = 'https://www.instagram.com/invites/contact/?i=jenthoxujmba&utm_content=knq9pbg';
	document.querySelector('#whatsapp').href = 'https://wa.me/+250783133325';
	
}

// images sliding
let i = 0;
let j = 0;

const images = [
	'./images/view.jpg',
];

const serviceImages = [
	{
		image: './images/cover.jpg',
		title: 'Braided Cheese',
		text: 'We bring you the best cheese across the globe.',
	},
	{ image: './images/s4.jpg', title: 'White Cheese', text: 'We deliver well packed cheese.' },
	{ image: './images/s7.jpg', title: 'Mozzarella Cheese', text: 'For easy deals with us you can reach out to our offices as described in the contact.' },
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
