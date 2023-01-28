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

/***/ "./src/factory-functions/gameboard.js":
/*!********************************************!*\
  !*** ./src/factory-functions/gameboard.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const ship = __webpack_require__(/*! ./ship */ \"./src/factory-functions/ship.js\");\n\nconst gameboard = () => {\n    let shipsOnGameboard = [];\n    let shipCoordinates = [];\n    let checkCoordinates = {};\n    let squaresHit = [];\n    let squaresMissed = [];\n    const setShip = (shipLength, orientation, coordinate) => {\n        let newShip = ship(shipLength);\n        shipsOnGameboard.push(newShip);\n        let newShipCoordinates = [];\n        if (orientation == \"vertical\") {\n            if (coordinate[0] + shipLength < 7) {\n                for (let i = 0; i < shipLength; i++) {\n                    if (!(Object.keys(checkCoordinates).includes([coordinate[0] + i,coordinate[1]].toString()))){\n                        newShipCoordinates.push([coordinate[0] + i,coordinate[1]]);\n                    } else {\n                        return false;\n                    };\n                };\n                shipCoordinates.push(newShipCoordinates);\n                for (let j = 0; j < newShipCoordinates.length; j++) {\n                    checkCoordinates[newShipCoordinates[j].toString()] = true;\n                };\n                return true;  \n            } else {\n                return false;\n            };\n        } else if (orientation == \"horizontal\") {\n            if (coordinate[1] + shipLength < 7){\n                for (let i = 0; i < shipLength; i++) {\n                    if (!(Object.keys(checkCoordinates).includes([coordinate[0],coordinate[1]+i].toString()))){\n                        newShipCoordinates.push([coordinate[0],coordinate[1] + 1]);\n                    } else {\n                        return false;\n                    }\n                };\n                shipCoordinates.push(newShipCoordinates);\n                for (let j = 0; j < newShipCoordinates.length; j++) {\n                    checkCoordinates[newShipCoordinates[j].toString()] = true;\n                };\n                return true; \n            } else {\n                return false;\n            };\n        }; \n    };\n    const receiveAttack = (coordinate) => {\n        for (let i = 0; i < shipCoordinates.length; i++){\n            for (let j = 0; j < shipCoordinates[i].length; j++) {\n                if (shipCoordinates[i][j].toString() === coordinate.toString()){\n                    squaresHit.push(coordinate);\n                    shipsOnGameboard[i].hit();\n                    return true;\n                };\n            };\n        };\n        squaresMissed.push(coordinate);\n        return false;\n    };\n    const allShipsDestroyed = () => {\n        for (let i = 0; i < shipsOnGameboard.length; i++){\n            if (shipsOnGameboard[i].isSunk() == false) {\n                return false;\n            };\n        };\n        return true;\n    }\n    return { setShip, receiveAttack, allShipsDestroyed };\n};\n\nmodule.exports = gameboard;\n\n//# sourceURL=webpack://battleship/./src/factory-functions/gameboard.js?");

/***/ }),

/***/ "./src/factory-functions/player.js":
/*!*****************************************!*\
  !*** ./src/factory-functions/player.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const gameboard = __webpack_require__(/*! ./gameboard */ \"./src/factory-functions/gameboard.js\");\n\nconst player = (playerType) => {\n    let playerGameboard = gameboard();\n    let squaresNotAttacked= [];\n    if (playerType == \"cpu\") {\n        for (let i = 0; i < 7; i++) {\n            for (let j = 0; j < 7; j++) {\n                squaresNotAttacked.push([i,j]);\n            };\n        };\n    };\n    const attackEnemy = (otherPlayer, coordinate=null) => {\n        if (playerType == \"human\") {\n            return otherPlayer.playerGameboard.receiveAttack(coordinate);\n        } else if (playerType == \"cpu\") {\n            let randomCoordinateIndex = Math.floor(Math.random() * squaresNotAttacked.length);\n            let attackCoordinate = squaresNotAttacked.splice(randomCoordinateIndex, 1); \n            return otherPlayer.playerGameboard.receiveAttack(attackCoordinate);\n        }\n    };\n    return { squaresNotAttacked, playerGameboard, attackEnemy}\n};\n\nmodule.exports = player;\n\n//# sourceURL=webpack://battleship/./src/factory-functions/player.js?");

/***/ }),

/***/ "./src/factory-functions/ship.js":
/*!***************************************!*\
  !*** ./src/factory-functions/ship.js ***!
  \***************************************/
/***/ ((module) => {

eval("const ship = (length) => {\n    let hits = 0;\n    const hit = () => hits < length ? hits = hits + 1 : hits;\n    const isSunk = () => hits == length ? true : false;\n    return { hit, isSunk };\n};\n\nmodule.exports = ship;\n\n//# sourceURL=webpack://battleship/./src/factory-functions/ship.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_display_gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/display-gameboard */ \"./src/modules/display-gameboard.js\");\n\nconst player = __webpack_require__(/*! ./factory-functions/player */ \"./src/factory-functions/player.js\");\n\n(0,_modules_display_gameboard__WEBPACK_IMPORTED_MODULE_0__.generateGameboard)(\"player-one\");\n(0,_modules_display_gameboard__WEBPACK_IMPORTED_MODULE_0__.generateGameboard)(\"player-two\");\n// playerOne = player(\"human\");\n// console.log(playerOne);\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/modules/display-gameboard.js":
/*!******************************************!*\
  !*** ./src/modules/display-gameboard.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateGameboard\": () => (/* binding */ generateGameboard)\n/* harmony export */ });\nfunction generateGameboard(player) {\n    let containerDiv = document.getElementById(player);\n    let boardDiv = document.createElement('div');\n    boardDiv.className = \"gameboard\";\n    for (let row = 0; row < 7; row++) {\n        let rowDiv = document.createElement('div');\n        rowDiv.id = `row-${row}`\n        rowDiv.className = \"row\"\n        for (let column = 0; column < 7; column++) {\n            let squareDiv = document.createElement('div');\n            squareDiv.className = `square`;\n            if (player == \"player-two\") {\n                squareDiv.addEventListener(\"click\", () => {\n                    console.log(\"(\" + [row,column].toString() + \")\");\n                });\n            }\n            rowDiv.appendChild(squareDiv);\n        }\n        boardDiv.appendChild(rowDiv);\n    };\n    containerDiv.appendChild(boardDiv);\n};\n\n\n\n//# sourceURL=webpack://battleship/./src/modules/display-gameboard.js?");

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