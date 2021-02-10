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
  document.logo.src = './images/amutradefxlogo.png';

  // In menu section, the first section below navbar
  document.querySelector('#company-title').innerHTML = 'UM GROUP LTD';
  document.querySelector('#company-desc').innerHTML = `
	We are company based on all all about construction industry,
  and research-driven team offinancial market practitioners providing you
  with lifetime opportunity to start your career.`;

  // In who we are section
  document.querySelector(
    '#status'
  ).innerHTML = `We are designers to execution of works to all related with construction,
  and we are research-driven team of financial market and practitioners providing
  you with lifetime opportunity to start your carrer immediately, through providing
  signals to the market and training to foreign exchange market.`;

  // Abous us section
  // left section in about us
  document.querySelector(
    '#mission'
  ).innerHTML = `To help Rwanda and African countries to creates opportunities for development through digital market.`;

  // middle section in about us
  document.aboutimg.src = './images/amutradefxlogo.png';
  document.querySelector('#img-caption').innerHTML = `UM GROUP LTD`;

  // right section in about us
  document.querySelector(
    '#visions'
  ).innerHTML = `Be the industry leader provide of information and resources for investment
  in construction industry, digital trading and for forex traders providing an objective view of the market.g`;

  // In contact us section
  document.querySelector('#address').innerHTML = 'Kigali';
  document.querySelector('#street').innerHTML = 'Kk 30 av Gikondo.';
  document.querySelector('#email').innerHTML = 'Tracybraver@gmail.com';
  document.querySelector('#phone').innerHTML = '+250784629242/+250781673746';

  // Link to social media
  document.querySelector('#instagram').href =
    'https://www.instagram.com/kigali_trade_forex?r=nametag';
  document.querySelector('#whatsapp').href = 'https://wa.me/+250784629242';
}

// images sliding
let i = 0;
let j = 0;

const images = ['./images/photo1.png', './images/photo2.jpg'];

const serviceImages = [
  {
    image: './images/photo1.png',
    title: 'Construction services',
    text: 'Design and execute construction works'
  },
  {
    image: './images/photo2.jpg',
    title: 'Foreign exchange trainings',
    text: 'We provide market and training to foreign exchange market.'
  }
];

function changeImages() {
	function _(id) {
		return document.getElementById(id);
	}

	if (_('slider_image') !== null) {
    console.log('slider');
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