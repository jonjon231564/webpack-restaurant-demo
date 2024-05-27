/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const content = document.getElementById('content')\nconst homeButton = document.getElementById('home')\nconst menuButton = document.getElementById('menu')\nconst aboutButton = document.getElementById('about')\n\nconst cafePic = document.createElement('img')\ncafePic.src = '/cafe2.jpg'\n\nconst homeHeader = document.createElement('h1')\nhomeHeader.textContent = \"Jon's Cafe\"\n\nconst homeParagraph = document.createElement('p')\nhomeParagraph.textContent = \"Jon's Cafe is a charming retreat where aroma-laden coffee fills the air, complementing the cozy ambiance. With a menu boasting artisanal blends and delectable pastries, it's a haven for coffee aficionados seeking moments of indulgence and relaxation.\"\n\n\n\nconst aboutHeader = document.createElement('h1')\naboutHeader.textContent = \"About Jon's Cafe\"\n\nconst aboutParagraph = document.createElement('p')\naboutParagraph.textContent = \"Nestled in the heart of the bustling city, Jon’s Cafe beckons with its inviting facade and warm ambiance, drawing patrons into a haven of aromatic delights and culinary indulgence. Stepping through its doors, visitors are greeted by the tantalizing scent of freshly brewed coffee, mingling harmoniously with the comforting aroma of baked goods emanating from the kitchen. The interior exudes a rustic charm, with exposed brick walls adorned with vintage-inspired decor, creating an atmosphere that is both cozy and welcoming. Soft lighting casts a gentle glow over the space, inviting guests to linger and unwind amidst the soothing ambiance. At the heart of Jon’s Cafe lies its dedication to exceptional coffee, sourced from the finest beans and expertly crafted by skilled baristas. From rich and robust espressos to velvety cappuccinos and indulgent lattes, the menu offers a wide array of specialty brews to suit every palate. Complementing the coffee selection is a tempting assortment of freshly baked pastries and artisanal treats, lovingly prepared in-house each day. From flaky croissants to decadent cakes and pastries bursting with seasonal flavors, every bite is a testament to the cafe’s commitment to quality and craftsmanship. Beyond its coffee and pastries, Jon’s Cafe also offers a thoughtfully curated menu of light bites and savory dishes, perfect for breakfast, brunch, or a leisurely lunch. Guests can savor hearty sandwiches, crisp salads, and gourmet paninis, all made with the freshest ingredients sourced from local farmers and producers. But Jon’s Cafe is more than just a place to enjoy great food and coffee; it’s a gathering spot for the community, where friends come together to catch up over a steaming cup of joe, and neighbors gather for lively conversations and laughter. Whether it’s a morning pick-me-up, an afternoon treat, or an evening spent unwinding with friends, Jon’s Cafe offers a welcoming sanctuary where every visit feels like coming home.\"\n\n\n\nconst burger = document.createElement('div')\n\nconst burgerHeader = document.createElement('h1')\nburgerHeader.textContent = 'Burger'\n\nconst burgerParagraph = document.createElement('p')\nburgerParagraph.textContent = 'Juicy, savory, grilled patty nestled between soft, toasted buns, topped with cheese.'\n\nconst fries = document.createElement('div')\n\nconst friesHeader = document.createElement('h1')\nfriesHeader.textContent = 'fries'\n\nconst friesParagraph = document.createElement('p')\nfriesParagraph.textContent = 'Crispy, golden, seasoned potato strips, perfect for savory indulgence.'\n\n\n\n\n\nhomeButton.addEventListener('click', function() {\n    content.innerHTML = ''\n    content.appendChild(cafePic)\n    content.appendChild(homeHeader)\n    content.appendChild(homeParagraph)\n})\n\naboutButton.addEventListener('click', function() {\n    content.innerHTML = ''\n    content.appendChild(aboutHeader)\n    content.appendChild(aboutParagraph)\n    \n})\n\nmenuButton.addEventListener('click', function() {\n    content.innerHTML = ''\n    \n    content.appendChild(burger)\n    burger.appendChild(burgerHeader)\n    burger.appendChild(burgerParagraph)\n    \n\n    content.appendChild(fries)\n    fries.appendChild(friesHeader)\n    fries.appendChild(friesParagraph)\n})\n\n\n\ncontent.appendChild(cafePic)\ncontent.appendChild(homeHeader)\ncontent.appendChild(homeParagraph)\n\n\n\n//# sourceURL=webpack://javascript-restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;