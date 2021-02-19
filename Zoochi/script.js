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
	document.logo.src = './images/logo_new.png';

	// In menu section, the first section below navbar
	document.querySelector('#company-title').innerHTML = 'zoochi ltd';
	document.querySelector('#company-desc').innerHTML = `
	                                                   Zoochi company ltd ni company ikora imashini zirarira zikanaturaga amagi 
                                                    	(automatic eggs incubator) tukaba dukora imashini ziri mukigero gitandukanye hakurukijwe ubushobozi bw' umuntu kuva kumagi 50 
	                                                     kugeza kumagi ibihumbi 5000 dukorana n'amakoperative ndetse nabikorera kugiti cyabo`; 

	// In who we are section
	document.querySelector(
		'#status'
	).innerHTML = `zoochi company ltd ni company ikora imashini zirarira zikanaturaga amagi 
	              (automatic eggs incubator) tukaba dukora imashini ziri mukigero gitandukanye hakurukijwe 
                  ubushobozi bw' umuntu kuva kumagi 50 kugeza kumagi ibihumbi 5000 dukorana n'amakoperative 
                  ndetse nabikorera kugiti cyabo`;

	// middle section in about us
	document.aboutimg.src = './images/imishwi.png';
	document.querySelector(
		'#img-caption'
	).innerHTML = `Dukora imashini zituraga amagi(automatic eggs incubator),Tugurisha imishwi,Dutanga amahugurwa kubijyanye nubworozi bwinkoko,Dufasha abantu gutegura umushinga wubworozi bwinkoko`;

	// In contact us section
	document.querySelector('#address').innerHTML = 'Kamonyi(office ),Atelier Mugakinjiro ka Gisozi';
	//document.querySelector('#street').innerHTML = 'KN857';
	document.querySelector('#email').innerHTML = 'zoochi@gmail.com';
	document.querySelector('#phone').innerHTML = '+250788397570';

	// Link to social media
	
	document.querySelector('#twitter').href = 'https://twitter.com/LtdZoochi/status/1355863863070257154?s=03';
	document.querySelector('#instagram').href = 'https://www.instagram.com/p/CKtM7ZLpiqq/?igshid=13uh51uu7swqq';
	
}

// images sliding
let i = 0;
let j = 0;

const images = [
	'./images/Automatic _eggs_ incubator.png',
	'./images/imishwi.png',
	'./images/poultryfarm1.jpg',
	'./images/poultry-farming.jpg',
];

const serviceImages = [
	{
		image: './images/Automatic _eggs_ incubator.png',
		title: 'Dukora imashini zituraga amagi(automatic eggs incubator)',
		text: 'Dukora imashini ziri mukigero gitandukanye  hakurukijwe ubushobozi umuntu afte kuva kumagi 50 kugeza kumagi ibihumbi 5000 dukorana na amakoperative ndetse nabikorera kugiti cyabo',
	},
	{ image: './images/imishwi.png', title: 'Tugurisha imishwi', text: 'Tubafitiye imishwi yo kugura kandi kugiciro cyiza' },
	{ image: './images/poultryfarm1.jpg', title: 'Dutanga amahugurwa kubijyanye nubworozi bwinkoko', text: 'Kubifuza kumenya ubworozi bwinkoko turabahagura bakunguka ubumenyi mukorora inkoko' },
	{ image: './images/poultry-farming.jpg', title: 'Dufasha abantu gutegura umushinga wo korora inkoko', text: 'Kubashaka gutangira umushinga wo korora inkoko tubafasha mu gutegura umushinga wabo ' },

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