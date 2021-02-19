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
	document.logo.src = './images/nyurwe.png';

	// In menu section, the first section below navbar
	document.querySelector('#company-title').innerHTML = 'Nyurwe Mart';
	document.querySelector('#company-desc').innerHTML = `
	We make it easy to manage your monthly food budget through our unique package deliveries. You can subscribe for our weekly deliveries of fruits and/or vegetables, and a monthly package of food store that includes unperishable items in large quantity.`;

	// In who we are section
	document.querySelector(
		'#status'
	).innerHTML = `
	Nyurwe Mart is a retail company that distributes grocery and household essentials in Kigali. We deliver fresh produce, dry goods, cleaning materials, and household essentials to homes and businesses in Kigali.  
 `;

	// Abous us section
	// left section in about us
	document.querySelector(
		'#mission'
	).innerHTML = `To satisfy our partners and customers with a unique shopping experience offering quality, variety, price and service, based on the attention and commitment of our employees. “Committed workers, satisfied customers.`;

	// middle section in about us
	document.aboutimg.src = './images/7.jpg';
	document.querySelector(
		'#img-caption'
	).innerHTML = ` We are working constantly to go above and beyond customer expectations!`;

	// right section in about us
	document.querySelector(
		'#visions'
	).innerHTML = `Our Vision. A vibrant and healthy community with access to healthy food through an affordable, member-owned, grocery store`;

	// In team section
	document.firstimg.src = './images/avatar.jpg';
	document.querySelector('#first-name').innerHTML = 'Granit Frank';
	document.querySelector('#first-position').innerHTML = 'Co founder & CEO';

	document.secondimg.src = './images/avatar.jpg';
	document.querySelector('#second-name').innerHTML = 'William Haven';
	document.querySelector('#second-position').innerHTML = 'Senior Engineer';

	document.thirdimg.src = './images/avatar.jpg';
	document.querySelector('#third-name').innerHTML = 'Marceline Dalosa';
	document.querySelector('#third-position').innerHTML = 'Business Analyst';

	document.fouthimg.src = './images/avatar.jpg';
	document.querySelector('#fouth-name').innerHTML = 'Alicia Wes';
	document.querySelector('#fouth-position').innerHTML = 'Sales Manager';

	// In contact us section
	document.querySelector('#address').innerHTML = 'Kigali';
	document.querySelector('#street').innerHTML = 'KG 213 ST';
	document.querySelector('#email').innerHTML = 'nyurwemart@gmail.com';
	document.querySelector('#phone').innerHTML = '+250788748272';

	// Link to social media
	document.querySelector('#facebook').href = 'https://www.facebook.com/105796641400126/posts/121394863173637/?substory_index=0&app=fbl';
	document.querySelector('#twitter').href = 'http://www.twitter.com';
	document.querySelector('#instagram').href = 'https://www.instagram.com/p/CKZaXr9Hi8v/?igshid=18563hzvho3xr';
	document.querySelector('#whatsapp').href = 'https://wa.me/+250782877770';
	document.querySelector('#youtube').href = 'http://www.youtube.com';
	document.querySelector('#linkedin').href = 'http://www.linkedin.com';
}

// images sliding
let i = 0;
let j = 0;

const images = [
	'./images/1.jpg',
	'./images/2.jpg',
	'./images/3.jpg',
	'./images/4.jpg',
	'./images/5.jpg',
	'./images/6.jpg',
	'./images/8.jpg',
	'./images/9.jpg',
	'./images/7.jpg',
];

const serviceImages = [
	{
		image: './images/7.jpg',
		title: 'Fresh fruits',
		text: 'Mangos, watermellon, pineapples, lemons, ripe banana (small and big), apples, tomato tree, passion fruits, grapes, strawberries, oranges, papaya, mandarin oranges,avocados, etc...',
	},
	{ image: './images/3.jpg', title: 'Fresh fruits', text: 'Mangos, watermellon, pineapples, lemons' },
	{ image: './images/8.jpg', title: 'Sprays', text: 'For home use' },
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
