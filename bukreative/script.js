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
	document.logo.src = './images/logo1.jpg';

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
	).innerHTML = `At Bukreative, we are aware of the differences in people's personalities,
	the diversity of their mentalities about fashion and we are ready to yet explore these choices keeping our own touch upon each of them.

	`;

	// middle section in about us
	

	// right section in about us
	document.querySelector(
		'#visions'
	).innerHTML = `Look good whenever and wherever.`;

	// In team section
	document.firstimg.src = './images/avatar.jpg';
	document.querySelector('#first-name').innerHTML = 'Uwase Christiane';
	document.querySelector('#first-position').innerHTML = 'Founder & CEO';


	// In contact us section
	document.querySelector('#address').innerHTML = 'Kigali Rwanda';
	// document.querySelector('#street').innerHTML = 'KN 2 Avenue';
	document.querySelector('#email').innerHTML = 'bukreative@gmail.com';
	document.querySelector('#phone').innerHTML = '+250788801095';

	// Link to social media

	document.querySelector('#instagram').href = 'https://www.instagram.com/bukreative/';
	document.querySelector('#whatsapp').href = 'https://wa.me/+250788801095';

}

// images sliding
let i = 0;
let j = 0;

const images = [
	'./images/dress_2.jpeg',
];

const serviceImages = [
	{
		image: './images/earrings_1.jpg',
		
		title: 'ICONIC EARINGS',
		text: 'We have a wide range of creatively designed earrings made from Rwanda',
		footer: 'FRW 2000'
	},

	{
		image: './images/earrings_2.jpg',
		title: 'GREAT EARRINGS',
		text: 'A wide range of creatively designed earrings made from Rwanda',
		footer: 'FRW 5000'
	},
	{ image: './images/earrings_3.jpg', title: 'SPECIAL EARRRINGS', text: 'We have other special earring for you on better price!! ',footer: 'FRW 3500' },
];

function changeImages() {
	document.slide.src = images[i];
	document.imgservice.src = serviceImages[j].image;
	document.querySelector('#title-service').innerHTML = serviceImages[j].title;
	document.querySelector('#text-service').innerHTML = serviceImages[j].text;
	document.querySelector('#text-footer').innerHTML = serviceImages[j].footer;

	if (i < images.length - 1) {
		i++;
	} else if (j < serviceImages.length - 1) {
		j++;
	} else {
		i = 0;
		j = 0;
	}
	setTimeout('changeImages()', 2000);
}

function click_hamburger() {
	function _(id) {return document.getElementById(id); }
	_("hamburger_btn").click();
}

function send_email() {
	function _(id) {return document.getElementById(id); }
	const x = _("slider_image");
	console.log('change image function', x);
	var status = _("response_status");
	if(_("email_from").value !== "" && _("email_from").value.includes("@") && _("contact_message").value !== ""){
		status.innerHTML = "Sending message ...";
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
					status.innerHTML = 'Thanks your message is sent';
					setTimeout(function(){ status.innerHTML = ""; }, 5000);
				} else {
					status.innerHTML = ajax.responseText;
					_("my_btn").disabled = false;
					setTimeout(function(){ status.innerHTML = ""; }, 5000);
				}
			}
		}
		ajax.send(formdata);
	}
}

let navbar = document.getElementById('navbar');
if(navbar !== null) {
	let heightNav = navbar.height();
	let section = getElementById('intro-section');
	section.css({marginTop: heightNav + 'px'});
}
