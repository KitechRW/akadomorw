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
	document.logo.src = './images/kids_logo.png';

	// In menu section, the first section below navbar
	document.querySelector('#company-title').innerHTML = 'LITTLE ME';
	document.querySelector('#company-desc').innerHTML = `
	Littleme hair salon is a company that provides quality products and services to parents with Children.`;

	// In who we are section
	document.querySelector(
		'#status'
	).innerHTML = `Littleme hair salon is a company that provides quality products and services to parents with Children; by keeping in mind their needs, it opening was a journey driven by the thought of creating a brand that will not only personally excite us but also become a fun experience for everyone, right from our tiny customers to their parents, littleme hair salon is dedicated to providing the safest environment for kids of all ages, and makes the haircuts experience enjoyable gentle and relaxed.littleme hair salon was started by a mum after she took her two years old daughter to an adult’s salon for braiding. the experience was unsuccessful and stressful, and they left in tears with the style unfurnished the idea was born when the mum realized better way for kids to get their hairstyle that made it easy for parent too.`;

	// Abous us section
	// left section in about us
	document.querySelector(
		'#mission'
	).innerHTML = `Our mission is to provide a high quality service in a fun, safe and comfortable environment, we want every child to have a great exp-hair-ience by keeping them entertained and engage while they get a haircut.`;

	// middle section in about us
	document.aboutimg.src = './images/cover.jpg';
	document.querySelector(
		'#img-caption'
	).innerHTML = `<b>Let us keep us child's smile active</b>`;

	// right section in about us
	document.querySelector(
		'#visions'
	).innerHTML = `Our Visionn is to offer quality children hair care in an environment that celebrates kids, make haircut fun for kids, relaxing for parents and rewarding for stylists and to provide assurance for little ones who are not quite sure about this whole haircut thing yet.`;

	// In team section
	

	// In contact us section
	document.querySelector('#address').innerHTML = 'Giporoso-Remera, Kigali';
	//document.querySelector('#street').innerHTML = 'KN857';
	document.querySelector('#email').innerHTML = 'jxdiane@gmail.com';
	document.querySelector('#phone').innerHTML = '+250788351163';

	// Link to social media
	document.querySelector('#facebook').href = 'https://web.facebook.com/Littleme-100116008569965';
	document.querySelector('#instagram').href = 'https://www.instagram.com/kidssalon/';
	document.querySelector('#whatsapp').href = 'https://wa.me/+250788522909';
	
}

// images sliding
let i = 0;
let j = 0;

const images = [
	'./images/s2.jpg',
	'./images/s3.jpg',
	'./images/s1.jpg',
	
];

const serviceImages = [
	{
		image: './images/s6.jpg',
		title: 'Kids Hair',
		text: '',
	},
	{ image: './images/s5.jpg', title: 'Hair Styling', text: 'Swimming pool' },
	{ image: './images/s1.jpg', title: 'Hair washing', text: 'For lunch' },
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
