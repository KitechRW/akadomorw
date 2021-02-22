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
	document.logo.src = './images/logo_himbaza.png';

	// In menu section, the first section below navbar
	document.querySelector('#company-title').innerHTML = 'Himbaza Club';
	document.querySelector('#company-desc').innerHTML = `Himbaza Club drummers are the young talented men sataterd in 2008 in Burundi but now we are based in Rwanda since 2015`;

	// In who we are section
	document.querySelector(
		'#status'
	).innerHTML = `
	We play traditional sacred drums originally from Burundi,we offer a spectacular experience with strong rythyms,dance ,accrobaties,carrying drums of weight up to 50kgs on heads,and jumping higher than you could ever imagime`;

	// Abous us section
	// left section in about us
	document.querySelector(
		'#mission'
	).innerHTML = `Entertaining using Culture.`;

	// middle section in about us
	document.aboutimg.src = './images/logo_himbaza.png';
	document.querySelector(
		'#img-caption'
	).innerHTML = `<b> Dance like no one is watching! </b>`;

	// right section in about us
	document.querySelector(
		'#visions'
	).innerHTML = ` Bringing happiness to everyone using a strong heritage of cultural dance!`;

	// In team section
	


	// In contact us section
	document.querySelector('#address').innerHTML = 'Kimironko Gasabo, Rwanda';
	// document.querySelector('#street').innerHTML = 'KN 2 Avenue';
	document.querySelector('#email').innerHTML = 'clubhimbaza@gmail.com';
	document.querySelector('#phone').innerHTML = '+2507807500521';

	// Link to social media
    document.querySelector('#facebook').href = 'https://www.facebook.com/Himbaza-Club-1750416818584080';
	document.querySelector('#instagram').href = 'https://www.instagram.com/himbazaclub/';
	document.querySelector('#whatsapp').href = 'https://wa.me/+2507807500521';
	document.querySelector('#youtube').href = 'https://www.youtube.com/channel/UC3LUXCUkP45YCVgskodZkgQ';

}

// images sliding
let i = 0;
let j = 0;

const images = [
	'./images/s3.jpg',
	'./images/s5.jpg',
	'./images/s7.jpg',
];

const serviceImages = [
	{ image: './images/view.jpg', title: 'DRUMMING IN ACTION', text: 'We bring out that strong beat out of the strong drum heritage from Burundi.' },
	{
		image: './images/s1.jpg',
		title: 'SKYING WITH THE DANCE',
		text: 'We conquer your presence, and take you to our world of endless drama.',
	},
	{ image: './images/s2.jpg', title: 'STUNNING MOVES', text: 'Strong men performing what they can do best' },
	{ image: './images/s4.jpg', title: 'FULL TEAM AT COMPETETIONS', text: 'We represented Rwanda at the East Africa Got Talent competitions in Kenya in year 2019.' },
	{ image: './images/s5.jpg', title: 'ENERGY WE DELIVER', text: 'We are the living proof of true cultural dancers' },
	{ image: './images/s7.jpg', title: 'THE PASSION IN OUR DANCE', text: 'We give you full energy results because we do it with full love.' },
];

function changeImages() {
	function _(id) {return document.getElementById(id); }
	if(_("slider_image") !== null) {
		_("slider_image").setAttribute('src', images[i]);
		_("imgservice").setAttribute('src', serviceImages[j].image);
	
		document.querySelector('#title-service').innerHTML = serviceImages[j].title;
		document.querySelector('#text-service').innerHTML = serviceImages[j].text;
	
		if (i < images.length - 1) {
			i++;
		} else {
			i = 0;
		}

		if(j < serviceImages.length - 1) {
			j++
		} else {
			j = 0;
		}
	}

	setTimeout('changeImages()', 3000);
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