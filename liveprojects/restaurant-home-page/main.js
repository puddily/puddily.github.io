/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/about.js":
/*!*********************************!*\
  !*** ./src/components/about.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildAbout: () => (/* binding */ buildAbout),\n/* harmony export */   buildHero: () => (/* binding */ buildHero),\n/* harmony export */   buildMenuAction: () => (/* binding */ buildMenuAction)\n/* harmony export */ });\nfunction buildHero(){\r\n    let section = document.createElement('section')\r\n    section.id = \"hero\"\r\n    let img = document.createElement('img')\r\n    img.id= \"hero-img\"\r\n    img.setAttribute('src', 'images/coffee.jpg')\r\n    let heroContentOverlay = document.createElement('div')\r\n    heroContentOverlay.id = \"hero-content-overlay\"\r\n\r\n    //Create hero section header\r\n    let h2 = document.createElement('h2')\r\n    let altTextSpan1 = document.createElement('span')\r\n    altTextSpan1.className = 'alt-color';\r\n    altTextSpan1.textContent = 'Amazing';\r\n    let altTextSpan2 = document.createElement('span')\r\n    altTextSpan2.className = 'alt-color';\r\n    altTextSpan2.textContent = 'warmly';\r\n\r\n    h2.appendChild(altTextSpan1);\r\n    h2.appendChild(document.createTextNode(' coffee '));\r\n    h2.appendChild(altTextSpan2);\r\n    h2.appendChild(document.createTextNode(' enjoyed'));\r\n\r\n    //Put everything back together\r\n    heroContentOverlay.appendChild(h2)\r\n    section.appendChild(img)\r\n    section.appendChild(heroContentOverlay)\r\n    return section;\r\n}\r\n\r\n\r\n\r\n{/* <section id=\"hero\">\r\n    <img id=\"hero-img\" src=\"images/coffee.jpg\">\r\n    <div id=\"hero-content-overlay\">\r\n        <h2><span class=\"alt-color\">Amazing</span> coffee <span class=\"alt-color\">warmly</span> enjoyed</h2>\r\n    </div>\r\n</section> */}\r\n\r\n\r\nfunction buildAbout(){\r\n    let section = document.createElement('section')\r\n    section.id = \"about\"\r\n    let contentWrapper = document.createElement('div')\r\n    contentWrapper.classList.add('content-wrapper')\r\n\r\n    let h1 = document.createElement('h1')\r\n        h1.textContent = \"Cozy Bean Café\"\r\n    let h2 = document.createElement('h2')\r\n        h2.textContent = \"Simple, Homely, Coffee\"\r\n    let p1 = document.createElement('p')\r\n        p1.textContent = \"Cozy Bean Café is your go-to destination for a delightful coffee experience in a warm and inviting atmosphere. Our cozy café is designed to be your home away from home, where you can relax, connect, and savor the perfect cup of coffee.\"\r\n    let p2 = document.createElement('p')\r\n        p2.textContent = \"Our dedicated baristas take pride in crafting each coffee with precision and care. From classic espresso to creamy cappuccinos and refreshing cold brews, our menu offers a wide range of options to cater to all coffee lovers.\"\r\n\r\n    contentWrapper.appendChild(h1)\r\n    contentWrapper.appendChild(h2)\r\n    contentWrapper.appendChild(p1)\r\n    contentWrapper.appendChild(p2)\r\n    section.appendChild(contentWrapper)\r\n    return section\r\n}\r\n\r\n{/* <section id=\"about\">\r\n    <div class=\"content-wrapper\"> \r\n        <h1>Cozy Bean Café</h1>\r\n        <h2>Simple, Homely, Coffee</h2>\r\n        <p>Cozy Bean Café is your go-to destination for a delightful coffee experience in a warm and inviting atmosphere. Our cozy café is designed to be your home away from home, where you can relax, connect, and savor the perfect cup of coffee.</p>\r\n        <p>Our dedicated baristas take pride in crafting each coffee with precision and care. From classic espresso to creamy cappuccinos and refreshing cold brews, our menu offers a wide range of options to cater to all coffee lovers.</p>\r\n    </div>\r\n</section> */}\r\n\r\nfunction buildMenuAction(){\r\n    let section = document.createElement('section')\r\n    section.id = \"menu-action\"\r\n    let overlay = document.createElement('div')\r\n    overlay.id = \"menu-action-overlay\";\r\n    let container1 = buildMenuActionContainer(\"Wide Assortment\", \"No matter what you like - strong, smooth, or something special - we've got a cup with your name on it!\")\r\n    let container2 = buildMenuActionContainer(\"High Quality Beans\", \"We use 100% Arabica beans, sourced ethically from small farms around the globe.\")\r\n    let container3 = buildMenuActionContainer(\"Help the globe\", \"Our coffee cups are made from 100% recycled materials. We also using biodegradable straws and composting our coffee grounds.\")\r\n\r\n    let menuLink = document.createElement('div')\r\n    menuLink.id = (\"menu-link\");\r\n    let menuLinkA = document.createElement('a')\r\n    menuLinkA.textContent = \"Visit our menu\"\r\n    menuLink.appendChild(menuLinkA)\r\n\r\n    overlay.appendChild(container1)\r\n    overlay.appendChild(container2)\r\n    overlay.appendChild(container3)\r\n    section.appendChild(overlay)\r\n    section.appendChild(menuLink)\r\n    return section\r\n    \r\n}\r\nfunction buildMenuActionContainer(headerText, text){\r\n    let container = document.createElement('div');\r\n    container.classList.add('container');\r\n    let header = document.createElement('h3');\r\n    header.textContent = headerText;\r\n    let p = document.createElement('p');\r\n    p.textContent = text;\r\n    container.appendChild(header)\r\n    container.appendChild(p)\r\n    return container\r\n}\r\n\r\n{/* <section id=\"menu-action\">\r\n    <div id=\"menu-action-overlay\">\r\n        <div class=\"container\">\r\n            <h3>Wide Assortment</h3>\r\n            <p>No matter what you like - strong, smooth, or something special - we've got a cup with your name on it!</p>\r\n        </div>\r\n        <div class=\"container\">\r\n            <h3>High Quality Beans</h3>\r\n            <p>We use 100% Arabica beans, sourced ethically from small farms around the globe.</p>\r\n        </div>\r\n        <div class=\"container\">\r\n            <h3>Help the globe</h3>\r\n            <p>Our coffee cups are made from 100% recycled materials. We also using biodegradable straws and composting our coffee grounds.</p>\r\n        </div>\r\n    </div>\r\n    <div id=\"menu-link\">\r\n        <a>Visit our menu</a>\r\n    </div>\r\n</section> */}\n\n//# sourceURL=webpack://restaurant-page/./src/components/about.js?");

/***/ }),

/***/ "./src/components/contact.js":
/*!***********************************!*\
  !*** ./src/components/contact.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildContact: () => (/* binding */ buildContact)\n/* harmony export */ });\nfunction buildContact(){\r\n    let contactSection = document.createElement('section')\r\n    contactSection.id = \"contact\"\r\n    let contactHeader = document.createElement('h2')\r\n    contactHeader.textContent = \"Contact Us\"\r\n    contactHeader.id = \"contact-header\";\r\n    let contactBlurb = document.createElement('p')\r\n    contactBlurb.textContent = \"We would love to hear from you! If you have any questions, feedback, or inquiries, please don't hesitate to reach out to us. Here are the ways you can get in touch!\"\r\n    contactBlurb.id = \"contact-blurb\";\r\n    let contactMap = document.createElement('img');\r\n    contactMap.setAttribute('src', 'images/map.png')    \r\n    let email = document.createElement('p')\r\n    email.textContent = \"Email: contact@cozybeancafe.com\"\r\n    let phone = document.createElement('p')\r\n    phone.textContent = \"+1 (123) 456-7890\";\r\n\r\n    contactSection.appendChild(contactHeader)\r\n    contactSection.appendChild(contactBlurb)\r\n    contactSection.appendChild(contactMap)\r\n    contactSection.appendChild(email)\r\n    contactSection.appendChild(phone)\r\n    return contactSection;\r\n}\r\n\r\n{/* \r\n<section id=\"contact\">\r\n    <h2 id=\"contact-header\">Contact Us</h2>\r\n    <p id=\"contact-blurb\">We would love to hear from you! If you have any questions, feedback, or inquiries, please don't hesitate to reach out to us. Here are the ways you can get in touch!</p>\r\n    <img id=\"contact-map\" src=\"images/map.png\"></img>\r\n    <p>Email: contact@cozybeancafe.com</p>\r\n    <p>Phone: +1 (123) 456-7890</p>\r\n</section> */}\n\n//# sourceURL=webpack://restaurant-page/./src/components/contact.js?");

/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildFooter: () => (/* binding */ buildFooter)\n/* harmony export */ });\nfunction buildFooter(){\r\n    let section = document.createElement('section')\r\n    section.id = \"footer\"\r\n    let p = document.createElement('p')\r\n    let a = document.createElement('a')\r\n    a.href = \"https://github.com/puddily\"\r\n    a.textContent = \"Made by Puddily - view my github\"\r\n\r\n    p.appendChild(a)\r\n    section.appendChild(p)\r\n    return section\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/components/footer.js?");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildHeader: () => (/* binding */ buildHeader)\n/* harmony export */ });\nfunction buildHeader(swapTab, currentTab){\r\n    const header = document.createElement('header')\r\n    const nav = document.createElement('nav')\r\n    const ul = document.createElement('ul')\r\n    const liHome = document.createElement('li')\r\n    const aHome = document.createElement('a')\r\n    aHome.id = \"header-home\"\r\n    aHome.textContent = \"Home\"\r\n    aHome.addEventListener('click', (e)=>{\r\n        e.preventDefault()\r\n        swapTab('Home')\r\n    })\r\n    const liMenu = document.createElement('li')\r\n    const aMenu = document.createElement('a')\r\n    aMenu.id = \"header-menu\"\r\n    aMenu.textContent = \"Menu\"\r\n    aMenu.addEventListener('click', (e)=>{\r\n        e.preventDefault()\r\n        swapTab('Menu')\r\n    })\r\n    const liContact = document.createElement('li')\r\n    const aContact = document.createElement('a')\r\n    aContact.addEventListener('click', (e)=>{\r\n        e.preventDefault()\r\n        swapTab('Contact')\r\n    })\r\n    aContact.id = \"header-contact\"\r\n    aContact.textContent = \"Contact\"\r\n\r\n    if(currentTab === 'Home'){\r\n        liHome.classList.add('focused')\r\n    }\r\n    else if(currentTab === 'Menu'){\r\n        liMenu.classList.add('focused')\r\n    }\r\n    else if(currentTab === 'Contact'){\r\n        liContact.classList.add('focused')\r\n    }\r\n\r\n    liHome.appendChild(aHome)\r\n    liMenu.appendChild(aMenu)\r\n    liContact.appendChild(aContact)\r\n\r\n    ul.appendChild(liHome)\r\n    ul.appendChild(liMenu)\r\n    ul.appendChild(liContact)\r\n\r\n    nav.appendChild(ul)\r\n    header.appendChild(nav)\r\n    return header\r\n}\r\n\r\n\r\n{/* <header>\r\n    <nav>\r\n        <ul>\r\n            <li>Home</li>\r\n            <li>Menu</li>\r\n            <li>Contact</li>\r\n        </ul>\r\n    </nav>\r\n</header> */}\n\n//# sourceURL=webpack://restaurant-page/./src/components/header.js?");

/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildMenu: () => (/* binding */ buildMenu)\n/* harmony export */ });\nfunction buildMenu(){\r\n    let menuSection = document.createElement('section')\r\n    menuSection.id = \"menu\"\r\n\r\n    let menuHeader = document.createElement('h2')\r\n    menuHeader.id = 'menu-header'\r\n    menuHeader.textContent = 'Cozy Bean Café Menu'\r\n\r\n    let menuCardsContainer = document.createElement('div')\r\n    menuCardsContainer.classList.add('menu-cards')\r\n\r\n    let menuCard1 = buildMenuCard(\r\n        'Cozy Bean Signature Blend',\r\n        'Our house specialty, a carefully crafted blend of premium coffee beans, resulting in a smooth and rich flavor profile.',\r\n        '$3.50'\r\n    )\r\n    let menuCard2 = buildMenuCard(\r\n        'Café Latte',\r\n        'Smooth espresso combined with velvety steamed milk, creating a creamy and comforting coffee delight.',\r\n        '$4.50'\r\n    )\r\n    let menuCard3 = buildMenuCard(\r\n        'Classic Espresso',\r\n        'A rich and bold shot of espresso, expertly brewed to perfection.',\r\n        '$3.50'\r\n    )\r\n    let menuCard4 = buildMenuCard(\r\n        'Americano',\r\n        'A strong and robust shot of espresso diluted with hot water, providing a bold and invigorating coffee experience.',\r\n        '$3.50'\r\n    )\r\n    let menuCard5 = buildMenuCard(\r\n        'Cappuccino',\r\n        'Equal parts espresso, steamed milk, and frothed milk, resulting in a perfectly balanced coffee with a fluffy foam topping.',\r\n        '$4.50'\r\n    )\r\n\r\n    menuCardsContainer.append(menuCard1)\r\n    menuCardsContainer.append(menuCard2)\r\n    menuCardsContainer.append(menuCard3)\r\n    menuCardsContainer.append(menuCard4)\r\n    menuCardsContainer.append(menuCard5)\r\n\r\n    menuSection.append(menuHeader)\r\n    menuSection.append(menuCardsContainer)\r\n    return menuSection\r\n\r\n}   \r\n\r\nfunction buildMenuCard(itemName, description, price){\r\n    let menuCard = document.createElement('div')\r\n    menuCard.classList.add('menu-card')\r\n    let menuCardImg = document.createElement('img')\r\n    menuCardImg.setAttribute('src', './images/coffee-4752461.svg')\r\n    menuCardImg.setAttribute('width', '100px')\r\n    menuCardImg.classList.add('menu-img')\r\n\r\n    let menuCardInfoContainer = document.createElement('div')\r\n    menuCardInfoContainer.classList.add('card-info')\r\n    let menuCardInfoHeader = document.createElement('h3')\r\n    menuCardInfoHeader.textContent = itemName\r\n    let menuCardInfoDescription = document.createElement('p')\r\n    menuCardInfoDescription.textContent = description\r\n    let menuCardInfoPrice = document.createElement('p')\r\n    menuCardInfoPrice.textContent = price\r\n\r\n    menuCardInfoContainer.appendChild(menuCardInfoHeader)\r\n    menuCardInfoContainer.appendChild(menuCardInfoDescription)\r\n    menuCardInfoContainer.appendChild(menuCardInfoPrice)\r\n\r\n    menuCard.appendChild(menuCardImg)\r\n    menuCard.appendChild(menuCardInfoContainer)\r\n\r\n    return menuCard;\r\n}\r\n\r\n{/* <h1>Cozy Bean Café</h1>\r\n    <section id=\"menu\">\r\n        <h2 id=\"menu-header\">Cozy Bean Café Menu</h2>\r\n        <div class=\"menu-cards\">\r\n            <div class=\"menu-card\">\r\n                <img width=\"100px\" src=\"./images/coffee-4752461.svg\">\r\n                <div class=\"card-info\">\r\n                    <h3>Cozy Bean Signature Blend</h2>\r\n                    <p>Our house specialty, a carefully crafted blend of premium coffee beans, resulting in a smooth and rich flavor profile.</p>        \r\n                    <p>$3.50</p>\r\n                </div>\r\n            </div>\r\n            \r\n            <div class=\"menu-card\">\r\n                <img width=\"100px\" src=\"./images/coffee-4752461.svg\">\r\n                <div class=\"card-info\">\r\n                    <h3>Café Latte</h2>\r\n                    <p>Smooth espresso combined with velvety steamed milk, creating a creamy and comforting coffee delight.</p>        \r\n                    <p>$4.50</p>\r\n                </div>\r\n            </div>\r\n            \r\n            <div class=\"menu-card\">\r\n                <img width=\"100px\" src=\"./images/coffee-4752461.svg\">\r\n                <div class=\"card-info\">\r\n                    <h3>Classic Espresso</h2>\r\n                    <p>A rich and bold shot of espresso, expertly brewed to perfection.</p>        \r\n                    <p>$3.50</p>\r\n                </div>\r\n            </div>\r\n            \r\n            <div class=\"menu-card\">\r\n                <img width=\"100px\" src=\"./images/coffee-4752461.svg\">\r\n                <div class=\"card-info\">\r\n                    <h3>Americano</h2>\r\n                    <p>A strong and robust shot of espresso diluted with hot water, providing a bold and invigorating coffee experience.</p>        \r\n                    <p>$3.50</p>\r\n                </div>\r\n            </div>\r\n            \r\n            <div class=\"menu-card\">\r\n                <img width=\"100px\" src=\"./images/coffee-4752461.svg\">\r\n                <div class=\"card-info\">\r\n                    <h3>Cappuccino</h2>\r\n                    <p>Equal parts espresso, steamed milk, and frothed milk, resulting in a perfectly balanced coffee with a fluffy foam topping.</p>        \r\n                    <p>$4.50</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section> */\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/components/menu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header */ \"./src/components/header.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/footer */ \"./src/components/footer.js\");\n/* harmony import */ var _components_about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/about */ \"./src/components/about.js\");\n/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/menu */ \"./src/components/menu.js\");\n/* harmony import */ var _components_contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/contact */ \"./src/components/contact.js\");\n\r\n\r\n\r\n\r\n\r\nconsole.log(\"Hello webpack!\")\r\n\r\nfunction buildSite(tab){ //\"Home\", \"Contact\", \"Menu\"\r\n    let currentTab = tab\r\n    let content = document.querySelector('#content')\r\n\r\n    content.replaceChildren(); //Clear content\r\n\r\n    let newMain = document.createElement('main') //Readd \"main\" tag\r\n    content.appendChild(newMain);\r\n    let main = content.querySelector(\"main\");\r\n\r\n\r\n    content.prepend((0,_components_header__WEBPACK_IMPORTED_MODULE_0__.buildHeader)((newTab)=>{\r\n        if(newTab !== currentTab) {\r\n            buildSite(newTab)\r\n        }\r\n    }, currentTab));\r\n    if(currentTab === \"Home\"){\r\n        main.prepend((0,_components_about__WEBPACK_IMPORTED_MODULE_2__.buildMenuAction)());\r\n        main.prepend((0,_components_about__WEBPACK_IMPORTED_MODULE_2__.buildAbout)());\r\n        main.prepend((0,_components_about__WEBPACK_IMPORTED_MODULE_2__.buildHero)());\r\n    }\r\n    if(currentTab === \"Menu\"){\r\n        //TODO: Move topheader to module\r\n        let topHeader = document.createElement('h1');\r\n        topHeader.textContent = \"Cozy Bean Café\" \r\n        main.prepend(topHeader);\r\n        main.prepend((0,_components_menu__WEBPACK_IMPORTED_MODULE_3__.buildMenu)());\r\n    }\r\n    if(currentTab === \"Contact\"){\r\n        //TODO: Move topheader to module\r\n        let topHeader = document.createElement('h1');\r\n        topHeader.textContent = \"Cozy Bean Café\" \r\n        main.prepend(topHeader);\r\n        main.prepend((0,_components_contact__WEBPACK_IMPORTED_MODULE_4__.buildContact)());\r\n    }\r\n    content.appendChild((0,_components_footer__WEBPACK_IMPORTED_MODULE_1__.buildFooter)());\r\n}\r\n\r\nbuildSite(\"Home\");\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;