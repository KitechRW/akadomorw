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
	document.logo.src = './images/medpluslogo.jpg';

	// In menu section, the first section below navbar
	document.querySelector('#company-title').innerHTML = 'Medplus';
	document.querySelector('#company-desc').innerHTML = `
					Medplus is online healthh cate services assistancy agency we provide a wide ranges 
					of assistance to  services Offered by hospitals and health canters in rwanda.`;

	// In who we are section
	document.querySelector(
		'#status'
	).innerHTML = `Medplus is online health care services assistancy agency we provide a wide ranges 
	               of assistance to  services  Offered by hospitals and health canters in rwanda With
	               aim of reducing time spend at the hospital throought normal treathment process.
	               By requesting those services by just using  your cell phone.`;

	// Abous us section
	// left section in about us
	document.querySelector(
		'#mission'
	).innerHTML = `Our mision is to  deliver 100% Access to healthcare and nedical services to Rwanda, africa and the world`;

	// middle section in about us
	document.aboutimg.src = './images/download.png';
	document.querySelector(
		'#img-caption'
	).innerHTML = `We aim  reducing time spend at the hospital throought normal treathment process
	             By requesting those services by just using  your cell phone`;

	// right section in about us
	document.querySelector(
		'#visions'
	).innerHTML = `Our vision is to shampion the use of technology in provision  health care services and mantain the effieciency and effective customer service delivery`;

	// In team section
	document.firstimg.src = './images/avatar.jpg';
	document.querySelector('#first-name').innerHTML = 'Mugisha Eric';
	document.querySelector('#first-position').innerHTML = 'CEO';

	document.secondimg.src = './images/avatar.jpg';
	document.querySelector('#second-name').innerHTML = 'Karagwa Nadia';
	document.querySelector('#second-position').innerHTML = 'Marketing Manager';

	document.thirdimg.src = './images/avatar.jpg';
	document.querySelector('#third-name').innerHTML = 'Nyirigira Didier';
	document.querySelector('#third-position').innerHTML = 'Field Officer';

	document.fouthimg.src = './images/avatar.jpg';
	document.querySelector('#fouth-name').innerHTML = 'Cyuzuzo Bertho';
	document.querySelector('#fouth-position').innerHTML = 'Field Agent';

	// document.fouthimg.src = './images/avatar.jpg';
	// document.querySelector('#five-name').innerHTML = 'Mbabazi Jane ';
	// document.querySelector('#five-position').innerHTML = 'Accountant';

	// In contact us section
	document.querySelector('#address').innerHTML = 'Kigali-Kimihurura';
	document.querySelector('#street').innerHTML = 'KN857';
	document.querySelector('#email').innerHTML = 'mugishaeric64@gmail.com';
	document.querySelector('#phone').innerHTML = '+250781512842';

	// Link to social media
	document.querySelector('#facebook').href = 'http://www.facebook.com/Eryckmugishabless';
	document.querySelector('#twitter').href = 'http://www.twitter.com/MugishaEric';
	document.querySelector('#instagram').href = 'http://www.instagram.com/Camex_official';
	document.querySelector('#whatsapp').href = 'https://wa.me/+250781512842';
	// document.querySelector('#youtube').href = 'http://www.youtube.com';
	document.querySelector('#linkedin').href = 'http://www.linkedin.com/MugishaEric';
}

// images sliding
let i = 0;
let j = 0;

const images = [
	
	'./images/ambulance2.jpg',
	'./images/onlinet.png',
	'./images/Medical-Center.jpg'
	
	
];

const serviceImages = [
	{
		image: './images/hospital_assistance.jpg',
		title: 'Hospital admition assistance',
		text: 'We help you to register and get admitted to the hospital  with no need to line up.',
	},
	{ image: './images/ambulance2.jpg', 
	  title: 'Private ambulance', 
	  text: 'We offer private ambulance  to transport your pantient to or from the hospital.'
	 },
	{ image: './images/drugsdelivery3.png',
	  title: 'Pharmacy services',
	  text: 'We offer delivery services of your priscriptions to your door steps' },

	  { image: './images/vip_treatment.png',
	  title: 'VIP services',
	  text: 'We offer vip or private hospital on call away we bring to your  homes as well vip appointment with doctors' },

	  { image: './images/download.png',
	  title: 'Emergency service',
	  text: 'Emergency and first aid support and treatments' },

	  { image: './images/audiovisual.jpg',
	  title: 'Audiovirtual consulting',
	  text: 'We offer virtual consultancy and  treatnent for less complicated or minor  treatments via whatsapp video call.' },

	  { image: './images/drugsdelivery.png',
	    title: 'Transfer and documentations',
	    text: ' we provide transfer request assistance and medical certificate and other related documents ' }
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
