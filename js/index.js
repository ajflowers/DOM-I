const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navLinks = document.querySelectorAll("a");

//console.log(navLinks);

for (i = 0; i < 6; i++) {
  navLinks[i].append(siteContent["nav"][`nav-item-${i + 1}`]);
}

const splashTxt = document.querySelector("h1");
splashTxt.append(siteContent["cta"]["h1"]);

const btnTxt = document.querySelector("button");
btnTxt.append(siteContent["cta"]["button"]);
// console.log(btnTxt);

const circle = document.getElementById("cta-img");
circle.setAttribute("src", siteContent["cta"]["img-src"]);

// const featuresHead = document.querySelector(".top-content .text-content h4")



const boxes = document.querySelectorAll("div");
console.log(boxes);

const features = boxes[3];
//console.log(features);

const featuresHead = features.children[0];
//console.log(featuresHead);
featuresHead.append(siteContent["main-content"]["features-h4"]);

const featuresTxt = features.children[1];
featuresTxt.append(siteContent["main-content"]["features-content"]);



const about = boxes[4];

const aboutHead = about.children[0];
//console.log(featuresHead);
aboutHead.append(siteContent["main-content"]["features-h4"]);

const aboutTxt = about.children[1];
aboutTxt.append(siteContent["main-content"]["features-content"]);

//MIDDLE IMAGE

const middleImg = document.querySelector(".middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//BOTTOM CONTENT

const services = boxes[6];

const servicesHead = services.children[0];
servicesHead.append(siteContent["main-content"]["services-h4"]);

const servicesTxt = services.children [1];
servicesTxt.append(siteContent["main-content"]["services-content"]);



const product = boxes[7];

const productHead = product.children[0];
productHead.append(siteContent["main-content"]["product-h4"]);

const productTxt = product.children [1];
productTxt.append(siteContent["main-content"]["product-content"]);



const vision = boxes[8];

const visionHead = vision.children[0];
visionHead.append(siteContent["main-content"]["vision-h4"]);

const visionTxt = vision.children [1];
visionTxt.append(siteContent["main-content"]["vision-content"]);

//CONTACT

const contact = document.querySelectorAll(".contact *");
console.log(contact);

contact[0].textContent = siteContent["contact"]["contact-h4" ];
contact[1].textContent = siteContent["contact"]["address"];
contact[2].textContent = siteContent["contact"]["phone"];
contact[3].textContent = siteContent["contact"]["email"];

//FOOTER

footerTxt = document.querySelector("footer p");
footerTxt.textContent = siteContent["footer"]["copyright"];

const navBar = document.querySelector("nav");

const appendLink = document.createElement("a");
appendLink.textContent = "Log In";
navBar.appendChild(appendLink);

const prependLink = document.createElement("a");
prependLink.textContent = "Home";
navBar.prepend(prependLink);

navLinksNew = document.querySelectorAll("nav a");
for (i = 0; i < navLinksNew.length; i++) {
  navLinksNew[i].style.color = "green";
}