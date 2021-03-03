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
	// document.logo.src = './images/white_transparent.png';

	// In menu section, the first section below navbar
	document.querySelector('#company-title').innerHTML = 'Inkingi modern farmers';
	document.querySelector('#company-desc').innerHTML = `
	                                            Its about farming , agri-business We achieve climate-smart agriculture objectives
											    including improve food security through innovative policies.We improve farm productivity.`;

	// In who we are section
	document.querySelector(
		'#status'
	).innerHTML = `We achieve climate-smart agriculture objectives including improve food security 
	               through innovative policies.We improve farm productivity.`;

	// Abous us section
	// left section in about us
	document.querySelector(
		'#mission'
	).innerHTML = `It’s a tech innovation that ensure global food security able to create relevant strategic market access and linkage to services`;

	// middle section in about us
	document.aboutimg.src = './images/chxfrr1.jpg';
	document.querySelector(
		'#img-caption'
	).innerHTML = `Its about farming , agri-business We achieve climate-smart agriculture objectives
	               including improve food security through innovative policies.We improve farm productivity.`;

	// right section in about us
	document.querySelector(
		'#visions'
	).innerHTML = `Climate-smart agriculture is the only way to forward Producing more food to feed the world’s growing population`;

	// In team section
	// document.firstimg.src = './images/avatar.jpg';
	// document.querySelector('#first-name').innerHTML = 'Uwase Faida Zoubeda';
	// document.querySelector('#first-position').innerHTML = 'CEO';

	//document.secondimg.src = './images/avatar.jpg';
	//document.querySelector('#second-name').innerHTML = 'William Haven';
	//document.querySelector('#second-position').innerHTML = 'Senior Engineer';

	//document.thirdimg.src = './images/avatar.jpg';
	//document.querySelector('#third-name').innerHTML = 'Marceline Dalosa';
	//document.querySelector('#third-position').innerHTML = 'Business Analyst';

	//document.fouthimg.src = './images/avatar.jpg';
	//document.querySelector('#fouth-name').innerHTML = 'Alicia Wes';
	//document.querySelector('#fouth-position').innerHTML = 'Sales Manager';

	// In contact us section
	document.querySelector('#address').innerHTML = 'Kigali, Kicukiro, Nyarugunga, Kamashashi';
	//document.querySelector('#street').innerHTML = 'KN857';
	document.querySelector('#email').innerHTML = 'inkingimodernfarmers@gmail.com';
	document.querySelector('#phone').innerHTML = '+250785284378';

	// Link to social media
	document.querySelector('#whatsapp').href = 'https://wa.me/+250785284378';
}

// images sliding
let i = 0;
let j = 0;

const images = [
	'./images/chxfrr1.jpg',
	'./images/chxfrr2.jpg',
	'./images/inyanya.jpg',
	'./images/urusenda.jpg',
	
	
];

const serviceImages = [
	{
		image: './images/chxfrr1.jpg',
		title: 'Broccoli',
		text: 'Broccoli is an edible green plant in the cabbage family whose large flowering head, stalk and small associated leaves are eaten as a vegetable. Broccoli is classified in the Italica cultivar group of the species Brassica oleracea.',
	},
	{ image: './images/chxfrr2.jpg', title: 'Cauliflower', text: 'Cauliflower is one of several vegetables in the species Brassica oleracea in the genus Brassica, which is in the Brassicaceae family. It is an annual plant that reproduces by seed. Typically, only the head is eaten – the edible white flesh sometimes called "curd".' },
	{ image: './images/inyanya.jpg', title: 'Tomatoes', text: 'Tomatoes are loaded with a substance called lycopene. It gives them their bright red color and helps protect them from the ultraviolet rays of the sun. In much the same way, it can help protect your cells from damage. Tomatoes also have potassium, vitamins B and E, and other nutrients.' },
	{ image: './images/urusenda.jpg', title: 'pepper', text: 'Peppers have a lot going for them. They are low in calories and are loaded with good nutrition. All varieties are excellent sources of vitamins A and C, potassium, folic acid, and fiber. Plus, the spicy ones liven up bland food, making it more satisfying.' },
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
