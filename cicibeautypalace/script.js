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
  document.logo.src = './images/image0.jpeg';

  // In menu section, the first section below navbar
  document.querySelector('#company-title').innerHTML = 'Cici Beauty Palace';
  document.querySelector('#company-desc').innerHTML = `
	Cici beauty palace is a national and international makeup studio that is located in Kigali
	 Rwanda intends to cater to corporate with domestic clients. 
	 We intends to offer makeup services as well as other services in our line of business.
	Our customers are very important to us and so we intend to leave them fully satisfied.`;

  // In who we are section
  document.querySelector(
    '#status'
  ).innerHTML = `Cici beauty palace is a national and international makeup studio that is located in Kigali
	Rwanda intends to cater to corporate with domestic clients. 
	We intends to offer makeup services as well as other services in our line of business.
 Our customers are very important to us and so we intend to leave them fully satisfied.`;

  // Abous us section
  // left section in about us
  document.querySelector(
    '#mission'
  ).innerHTML = `Our mission is to meet all our customers expectations,
	 by boosting the confidence of our consumers for them to have energy they need
	  to bring the success out of their work by promoting innovation,
	 competitiveness by ensuring complete satisfaction and well being of our clients.`;

  // middle section in about us
  document.aboutimg.src = './images/pedicure_manicure.png';
  document.querySelector(
    '#img-caption'
  ).innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero magni asperiores velit!`;

  // right section in about us
  document.querySelector(
    '#visions'
  ).innerHTML = `Our vision is to become the leaders in beauty industry, a brand that promote beauty
	 and self awareness. A brand possesses consistency and quality services to all class of people`;

  // In team section
  document.firstimg.src = './images/ceo.jpg';
  document.querySelector('#first-name').innerHTML = 'Granit Frank';
  document.querySelector('#first-position').innerHTML = 'Co founder & CEO';

  document.secondimg.src = './images/engineer.jpeg';
  document.querySelector('#second-name').innerHTML = 'William Haven';
  document.querySelector('#second-position').innerHTML = 'Senior Engineer';

  document.thirdimg.src = './images/analyst.jpg';
  document.querySelector('#third-name').innerHTML = 'Marceline Dalosa';
  document.querySelector('#third-position').innerHTML = 'Business Analyst';

  document.fouthimg.src = './images/manager.png';
  document.querySelector('#fouth-name').innerHTML = 'Alicia Wes';
  document.querySelector('#fouth-position').innerHTML = 'Sales Manger';

  // In contact us section
  document.querySelector('#address').innerHTML = 'Kigali';
  document.querySelector('#street').innerHTML = 'KN857';
  document.querySelector('#email').innerHTML = 'mucycy@gmail.com';
  document.querySelector('#phone').innerHTML = '+250784987126';

  // Link to social media
  document.querySelector('#facebook').href =
    'https://www.facebook.com/cynthia.munezero.75';
  document.querySelector('#instagram').href =
    'https://www.instagram.com/tv/CFc2oyVAmjH/?igshid=1sexbfmccvdci';
  document.querySelector('#whatsapp').href = 'https://wa.me/+250784987126';
  document.querySelector('#youtube').href = 'https://youtu.be/PlBSEZH3ZrY';
  document.querySelector('#linkedin').href =
    'http://linkedin.com/in/munezero-cynthia-b18646200';
}

// images sliding
let i = 0;
let j = 0;

const images = [
  './images/image1.jpeg',
  './images/image2.jpeg',
  './images/image4.jpeg',
  './images/image5.jpeg',
  './images/image6.jpeg',
];

const serviceImages = [
  { image: './images/image1.jpeg', title: 'Hair', text: 'Hair' },
  { image: './images/image2.jpeg', title: 'Pedicure', text: 'Pedicure' },
  { image: './images/image4.jpeg', title: 'Manicure', text: 'Manicure' },
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
