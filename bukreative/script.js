function _(id) {return document.getElementById(id); }
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
	document.logo.src = './images/image.png';

	// In menu section, the first section below navbar
	document.querySelector('#company-title').innerHTML = 'Bukreative';
	document.querySelector('#company-desc').innerHTML = `We are specialized in fashion, we ensure that you look good and feel good for every occasion!`;

	// In who we are section
	document.querySelector(
		'#status'
	).innerHTML = `
	We all have something things we are passionate about. But Pursuing those things isn't all rainbows and colours because let’s be real! <br />We already are busy with life itself,crowding our minds with our needs at the moment and finding survival, making the idea of working on personal projects is more of a luxury we can not afford. Reasons like" it’s just not the right time"or "I don't have enough capital or investment"…if you are looking for reasons, you will lose count.
	<br />I personally went through all of it until my will  to suppress the optimistic side of me worn out and I couldn’t help not doing what I like, what I do effortlessly, what I love to see others do, which is making sure people look good.`;

	// Abous us section
	// left section in about us
	document.querySelector(
		'#mission'
	).innerHTML = `At Bukreative, we are aware of the differences in people's personalities,the diversity of their mentalities about fashion and we are ready to yet explore these choices keeping our own touch upon each of them.`;

	// middle section in about us
	document.aboutimg.src = './images/logo1.jpg';
	document.querySelector(
		'#img-caption'
	).innerHTML = `Bukreative exists for the love of fashion. We believe in empowering individuality`;

	// right section in about us
	document.querySelector(
		'#visions'
	).innerHTML = `Ensure people look good fashion wise`;

	// In team section
	document.firstimg.src = './images/avatar.jpg';
	document.querySelector('#first-name').innerHTML = 'Uwase Christiane';
	document.querySelector('#first-position').innerHTML = 'Founder & CEO';

	/* document.secondimg.src = './images/avatar.jpg';
	document.querySelector('#second-name').innerHTML = 'William Haven';
	document.querySelector('#second-position').innerHTML = 'Senior Engineer';

	document.thirdimg.src = './images/avatar.jpg';
	document.querySelector('#third-name').innerHTML = 'Marceline Dalosa';
	document.querySelector('#third-position').innerHTML = 'Business Analyst';

	document.fouthimg.src = './images/avatar.jpg';
	document.querySelector('#fouth-name').innerHTML = 'Alicia Wes';
	document.querySelector('#fouth-position').innerHTML = 'Sales Manager'; */

	// In contact us section
	document.querySelector('#address').innerHTML = 'Kigali Rwanda';
	// document.querySelector('#street').innerHTML = 'KN 2 Avenue';
	document.querySelector('#email').innerHTML = 'bukreative@gmail.com';
	document.querySelector('#phone').innerHTML = '+250788801095';

	// Link to social media
	document.querySelector('#facebook').href = 'http://www.facebook.com';
	document.querySelector('#twitter').href = 'http://www.twitter.com';
	document.querySelector('#instagram').href = 'https://www.instagram.com/bukreative/';
	document.querySelector('#whatsapp').href = 'https://wa.me/+250788801095';
	document.querySelector('#youtube').href = 'http://www.youtube.com';
	document.querySelector('#linkedin').href = 'http://www.linkedin.com';
}

// images sliding
let i = 0;
let j = 0;

const images = [
	'./images/logo1.jpg',
	/* './images/cover.jpg',
	'./images/s1.jpeg',
	'./images/s2.jpeg',
	'./images/s3.jpeg',
	'./images/slide1.jpg',
	'./images/slide2.jpg',
	'./images/slide3.jpg',
	'./images/slide4.jpg', */
];

const serviceImages = [
	{ image: './images/dress_1.jpg', title: 'LOOK GOOD, FEEL GOOD', text: 'If you like looking great and you struggle with your outfit choices, I would like to help you bring out the best of your wardrobe while letting you express yourself in the best way' },
	{
		image: './images/earrings_1.jpg',
		title: 'ICONIC EARRINGS',
		text: 'We have a wide range of creatively designed earrings made from Rwanda',
	},
	{ image: './images/earrings_2.jpg', title: 'GREAT EARRINGS', text: 'A wide range of creatively designed earrings made from Rwanda' },
	{ image: './images/earrings_3.jpg', title: 'MORE EARRINGS', text: 'Good quality earrings designed and made from Rwanda' },
	{ image: './images/skirt_1.jpg', title: 'FASHIONABLE DRESS', text: 'Hire me and I’ll spend a significant time with you helping you discover what goes with your body type and the vast range of styles you would certainly rock' },
	{ image: './images/dress_2.jpg', title: 'MORE DRESSES', text: 'A perfect fit' },
];

function changeImages() {
	document.slide.src = images[i];
	document.imgservice.src = serviceImages[j].image;
	document.querySelector('#title-service').innerHTML = serviceImages[j].title;
	document.querySelector('#text-service').innerHTML = serviceImages[j].text;

	if (i < images.length - 1) {
		i++;
	} else if (j < serviceImages.length - 1) {
		j++;
	} else {
		i = 0;
		j = 0;
	}
	setTimeout('changeImages()', 10000);
}
window.onload = changeImages;

function submitForm() {
	var status = _("response_status");
	status.innerHTML = "Please wait ...";
	var formdata = new FormData();
	formdata.append("email", _("email_from").value );
	formdata.append("message", _("contact_message").value );
	var ajax = new XMLHttpRequest();
	ajax.open("POST", "send_email.php");
	ajax.onreadystatechange = function () {
		if(ajax.readyState == 4 && ajax.status == 200) {
			if(ajax.responseText == "success") {
				_("email_from").value = "";
				_("contact_message").value = "";
				_("response_status").innerHTML = 'Thank you! your message is sent';
				setTimeout(function(){ _("response_status").innerHTML = ""; }, 3000);
			} else {
				_("response_status").innerHTML = ajax.responseText;
				_("my_btn").disabled = false;
				setTimeout(function(){ _("response_status").innerHTML = ""; }, 3000);
			}
		}
	}
	ajax.send(formdata);
}
