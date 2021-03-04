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
	document.logo.src = './images/logo.png';

	// In menu section, the first section below navbar
	document.querySelector('#company-title').innerHTML = 'Fresh Open Minds';
	document.querySelector('#company-desc').innerHTML = `
														 Fresh Open Minds provides an integrated health consulting by creating an appropriate approach to advance integrated care and health outcomes. 
														 Community mental health clinics that strengthen services for those who most need them. CMHCs are a new provider type in health sector. Fresh Open Minds’ Trauma-informed, 
														 Resilience-oriented Care (TIROC) training and consulting practice  help organizations in primary care, behavioral health, schools, community services, managed care and government settings 
														 achieve the quadruple aim of enhancing the patient experience, improving population health, reducing costs and enhancing the work life of their staff`; 

	// In who we are section
	document.querySelector(
		'#status'
	).innerHTML = `In addition Fresh Open Minds’ Mobile Crisis Response Team (MRCT) provides professional,
			       same-day intervention for people who are experiencing mental health crises. The team visits clients 
				   and their families to prevent acute psychiatric crises from becoming emergencies that require law enforcement
				   involvement or involuntary hospitalization. MCRT includes licensed mental health clinicians, community and 
				   family support workers and a family nurse practitioner employed by Fresh open Minds (FOM). 
				   The goal is to de-escalate the crisis and safely connect the client with care and mental health resources.
	              Call 078224864
	              If there is immediate danger, call 0788224864 immediately. For example:
	               (In the act of committing suicide, Physically assaulting someone, 
	               Threatening someone with a weapon, Appears to have a medical emergency)`;

	// Abous us section
	// left section in about us
	//document.querySelector(
	//	'#mission'
	//).innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero magni asperiores velit!`;

	// middle section in about us
	document.aboutimg.src = './images/mental_health_education.png';
	document.querySelector(
		'#img-caption'
	).innerHTML = `Our expert team of thought leaders guides organizations as they implement multi-faceted initiatives focused on the foundation of TIROC to apply 
				  complex strategies that impact social needs and access to care. Through a lens of cultural humility, diversity, equity and inclusion, we help organizations 
				  build a data-informed workforce, organizational and community resilience, trauma-informed supervision and leadership and eliminate gaps in implementation of organizational, 
				  systemic culture change. `;

	// right section in about us
	//document.querySelector(
	//	'#visions'
	//).innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero magni asperiores velit!`;

	// In team section
	

	// In contact us section
	document.querySelector('#address').innerHTML ='Gwiza House, Isibo 5,  Norvege, Kigali -Rwanda';
	//document.querySelector('#street').innerHTML = 'KN857';
	document.querySelector('#email').innerHTML = 'gafajepi@gmail.com';
	document.querySelector('#phone').innerHTML = '+250788224864';

	// Link to social media
	
//	document.querySelector('#twitter').href = 'https://twitter.com/LtdZoochi/status/1355863863070257154?s=03';
//document.querySelector('#instagram').href = 'https://www.instagram.com/p/CKtM7ZLpiqq/?igshid=13uh51uu7swqq';
	
}

// images sliding
let i = 0;
let j = 0;

const images = [
	
	
	'./images/phone_consultation.jpg',
	
];

const serviceImages = [
	{
		image: './images/mental_health_education1.png',
		title: 'Integrated health consulting',
		text: 'The Fresh open minds’ wide array of training and consultation fosters effectiveness, efficiency and sustainable integrated services to improve the overall health and wellness of individuals who are at risk for and living with chronic health conditions including mental health concerns and addictions. Our team of consultants have expertise in organizational readiness, integrated care models, workforce and clinical practice, health and wellness, and financing and sustainability. We will partner with you to create a customized approach to advance integrated care and health outcomes',
	},
	{ image: './images/resilience.png', title: 'Community mental health clinics', text: 'Certified Mental Health Clinics (CMHCs)  revolutionize mental health care and strengthen services for those who most need them. CMHCs are a new provider type in health sector – organizations defined not just by the comprehensive array of services they provide' },
	{ image: './images/trauma1.png', title: 'Trauma informed, resilience oriented care',text:'The Fresh Open Minds’ Trauma-informed, Resilience-oriented Care (TIROC) training and consulting practice  help organizations in primary care, behavioral health, schools, community services, managed care and government settings achieve the quadruple aim of enhancing the patient experience, improving population health, reducing costs and enhancing the work life of their staff' },
	

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
	setTimeout('changeImages()', 3000);
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
