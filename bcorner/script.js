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
	document.logo.src = './images/LOGO.jpg';

	// In menu section, the first section below navbar
	document.querySelector('#company-title').innerHTML = `Banana's Corner`;
	document.querySelector('#company-desc').innerHTML = `Banana's Corner is a firm that
	 offers an online service that you can access
	 from your place and products which you can order online to reach you in time.
	 Online services offered by BC include Training on how to make/prepare delicious and healthy desserts/salads with arts for your family and/ or your customers.

When you prefer to order from Banana's Corner, you will enjoy all sorts of fresh fruits found in our country (Bananas, Pineapple, papaya, guava, oranges, passion fruits, lemons,....) and all kinds of fresh vegetables (Tomatoes, garlic, onions, cucumber, peas, carrots, eggplants).

We serve you 24/7 by ordering online your choice or find us at the shop. Follow our social media platforms and share with us your thoughts and feedback. #EatFresh. #FeelFresh`;

	// In who we are section
	document.querySelector(
		'#status'
	).innerHTML = `Banana’s Corner (BC) created a Shop inside that distributes fresh fruits ready for consumption and nutritious vegetables across the city of Kigali. BC is mostly known for the good quality of Long&Large bananas called "Gros Michel" which are sweet and rich in healthy nutrients.

From the year 2012, Banana’s Corner has impacted positively the lives of a lot of people, in various ways, through the provision of nutritious fruits and vegetables and employment opportunities. `;

	// Abous us section
	// left section in about us
	document.querySelector(
		'#mission'
	).innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero magni asperiores velit!`;

	// middle section in about us
	document.aboutimg.src = './images/all.jpg';
	document.querySelector(
		'#img-caption'
	).innerHTML = `Bananas, Pineapple, papaya, guava, oranges, passion fruits, lemons,.... and all kinds of fresh vegetables Tomatoes, garlic, onions, cucumber, peas, carrots, eggplants.`;

	// right section in about us
	document.querySelector(
		'#visions'
	).innerHTML = `Banana's Corner envisions training the community as a whole on the health benefits from consuming fruits and vegetables of all kinds that can help to reduce the risk of many adverse health conditions`;

	// In team section
	document.firstimg.src = './images/avatar.jpg';
	document.querySelector('#first-name').innerHTML = 'Jean Bosco Abayisenga';
	document.querySelector('#first-position').innerHTML = `CEO&Founder of Banana's Corner`;

	document.secondimg.src = './images/avatar.jpg';
	document.querySelector('#second-name').innerHTML = 'Flora Murerwa';
	document.querySelector('#second-position').innerHTML = ' Operation and Production Manager';

	document.thirdimg.src = './images/avatar.jpg';
	document.querySelector('#third-name').innerHTML = 'Marie Josee Mukandayisenga';
	document.querySelector('#third-position').innerHTML = 'Communication Manager';

	document.fouthimg.src = './images/avatar.jpg';
	document.querySelector('#fouth-name').innerHTML = 'Anselme Aheza';
	document.querySelector('#fouth-position').innerHTML = ' Marketing and Branding Manager';

	// In contact us section
	document.querySelector('#address').innerHTML = 'Kigali City ,Gasabo District ,Remera Sector ,Rukiri I Agashyitsi';
	document.querySelector('#street').innerHTML = 'KG 169 St Opposite APAPER Primary School';
	document.querySelector('#email').innerHTML = 'bananacorner1@gmail.com';
	document.querySelector('#phone').innerHTML = '+250783347410';

	// Link to social media
	document.querySelector('#facebook').href = 'https://www.facebook.com/sweetbananascorner';
	document.querySelector('#twitter').href = 'https://twitter.com/BananasCorner1';
	document.querySelector('#instagram').href = 'https://www.instagram.com/bananas_corner';
	document.querySelector('#whatsapp').href = 'https://wa.me/+250783347410';
	document.querySelector('#youtube').href = 'https://www.youtube.com/channel/UCZCsMj_t771Jt5uufh4lcKg';
	document.querySelector('#linkedin').href = 'https://www.linkedin.com/in/banana-s-corner-a28101206/';
}

// images sliding
let i = 0;
let j = 0;

const images = [
	'./images/all.jpg',
	'./images/cover.jpg',
	'./images/s1.jpeg',
	'./images/s2.jpeg',
	'./images/s3.jpeg',
	'./images/slide1.jpg',
	'./images/slide2.jpg',
	'./images/slide3.jpg',
	'./images/slide4.jpg',
];

const serviceImages = [
	{
		image: './images/s1.jpeg',
		title: 'Title 1',
		text: 'Outside view',
	},
	{ image: './images/s2.jpeg', title: 'Title 2', text: 'Swimming pool' },
	{ image: './images/s3.jpeg', title: 'Title 3', text: 'For lunch' },
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
