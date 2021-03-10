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
	document.querySelector('#company-title').innerHTML = 'Lucky Electronics store';
	document.querySelector('#company-desc').innerHTML = `
	we sell electronic and computer devices for someone who want it , we sell new and second hand items. We also repair those damaged electronics device and we buy it for who want to sell it.`;

	// In who we are section
	document.querySelector(
		'#status'
	).innerHTML = `We buy , sell and repair IT and electronic devices.`;

	// Abous us section
	// left section in about us
	document.querySelector(
		'#mission'
	).innerHTML = `Provide good quality electronic items.`;

	// middle section in about us
	document.aboutimg.src = './images/logo.jpg';
	document.querySelector(
		'#img-caption'
	).innerHTML = `<b>Here to serve you. </b> `;

	// right section in about us
	document.querySelector(
		'#visions'
	).innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero magni asperiores velit!`;

	// In team section
	
	// In contact us section
	document.querySelector('#address').innerHTML = 'Huye, Rwanda';
	//document.querySelector('#street').innerHTML = 'KN857';
	document.querySelector('#email').innerHTML = 'manifelix99@gmail.com';
	document.querySelector('#phone').innerHTML = '+250788839461';

	// Link to social media
	document.querySelector('#facebook').href = 'https://www.facebook.com/imanirakora.felix';
	document.querySelector('#twitter').href = 'https://mobile.twitter.com/Luckyfe43859927';
	document.querySelector('#instagram').href = 'https://www.instagram.com/imanirakora/';
	document.querySelector('#whatsapp').href = 'https://wa.me/+250788839461';
	
}

// images sliding
let i = 0;
let j = 0;

const images = [
	'./images/view.jpg',
	'./images/cover.jpg',
	'./images/s1.jpg',
	
];

const serviceImages = [
	{
		image: './images/s4.jpg',
		title: 'Electronic devices',
		text: 'We sell electronic devices to our clients',
	},
	{ image: './images/cover.jpg', title: 'Repair centre & install apps', text: 'We repair your devices such as computers, phones and radios. We also provide application installation services.' },
	{ image: './images/s2.jpg', title: 'Spare parts', text: 'We provide and sell good quality electronic spare parts.' },
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
