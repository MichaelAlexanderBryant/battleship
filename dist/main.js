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

eval("const ship = __webpack_require__(/*! ./ship */ \"./src/factory-functions/ship.js\");\n\nconst gameboard = () => {\n    let shipsOnGameboard = [];\n    let shipCoordinates = [];\n    let checkCoordinates = {};\n    let squaresHit = [];\n    let squaresMissed = [];\n    const setShip = (shipLength, orientation, coordinate) => {\n        let newShip = ship(shipLength);\n        shipsOnGameboard.push(newShip);\n        let newShipCoordinates = [];\n        if (orientation == \"vertical\") {\n            if (coordinate[0] + shipLength-1 < 10) {\n                for (let i = 0; i < shipLength; i++) {\n                    if (!(Object.keys(checkCoordinates).includes([coordinate[0] + i,coordinate[1]].toString()))){\n                        newShipCoordinates.push([coordinate[0] + i,coordinate[1]]);\n                    } else {\n                        return false;\n                    };\n                };\n                shipCoordinates.push(newShipCoordinates);\n                for (let j = 0; j < newShipCoordinates.length; j++) {\n                    checkCoordinates[newShipCoordinates[j].toString()] = true;\n                };\n                return true;  \n            } else {\n                return false;\n            };\n        } else if (orientation == \"horizontal\") {\n            if (coordinate[1] + shipLength-1 < 10){\n                for (let i = 0; i < shipLength; i++) {\n                    if (!(Object.keys(checkCoordinates).includes([coordinate[0],coordinate[1]+i].toString()))){\n                        newShipCoordinates.push([coordinate[0],coordinate[1] + 1]);\n                    } else {\n                        return false;\n                    }\n                };\n                shipCoordinates.push(newShipCoordinates);\n                for (let j = 0; j < newShipCoordinates.length; j++) {\n                    checkCoordinates[newShipCoordinates[j].toString()] = true;\n                };\n                return true; \n            } else {\n                return false;\n            };\n        }; \n    };\n    const receiveAttack = (coordinate) => {\n        for (let i = 0; i < shipCoordinates.length; i++){\n            for (let j = 0; j < shipCoordinates[i].length; j++) {\n                if (shipCoordinates[i][j].toString() === coordinate.toString()){\n                    squaresHit.push(coordinate);\n                    shipsOnGameboard[i].hit();\n                    return true;\n                };\n            };\n        };\n        squaresMissed.push(coordinate);\n        return false;\n    };\n    const allShipsDestroyed = () => {\n        for (let i = 0; i < shipsOnGameboard.length; i++){\n            if (shipsOnGameboard[i].isSunk() == false) {\n                return false;\n            };\n        };\n        return true;\n    }\n    return { setShip, receiveAttack, allShipsDestroyed, squaresHit, squaresMissed };\n};\n\nmodule.exports = gameboard;\n\n//# sourceURL=webpack://battleship/./src/factory-functions/gameboard.js?");

/***/ }),

/***/ "./src/factory-functions/player.js":
/*!*****************************************!*\
  !*** ./src/factory-functions/player.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const gameboard = __webpack_require__(/*! ./gameboard */ \"./src/factory-functions/gameboard.js\");\n\nconst player = (playerType) => {\n    let playerGameboard = gameboard();\n    let squaresNotAttacked= [];\n    if (playerType == \"cpu\") {\n        for (let i = 0; i < 7; i++) {\n            for (let j = 0; j < 7; j++) {\n                squaresNotAttacked.push([i,j]);\n            };\n        };\n    };\n    const attackEnemy = (otherPlayer, coordinate=null) => {\n        if (playerType == \"human\") {\n            return otherPlayer.playerGameboard.receiveAttack(coordinate);\n        } else if (playerType == \"cpu\") {\n            let randomCoordinateIndex = Math.floor(Math.random() * squaresNotAttacked.length);\n            let attackCoordinate = squaresNotAttacked.splice(randomCoordinateIndex, 1); \n            return otherPlayer.playerGameboard.receiveAttack(...attackCoordinate);\n        }\n    };\n    return { squaresNotAttacked, playerGameboard, attackEnemy}\n};\n\nmodule.exports = player;\n\n//# sourceURL=webpack://battleship/./src/factory-functions/player.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_display_empty_gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/display-empty-gameboard */ \"./src/modules/display-empty-gameboard.js\");\n/* harmony import */ var _modules_add_ships_to_gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/add-ships-to-gameboard */ \"./src/modules/add-ships-to-gameboard.js\");\n/* harmony import */ var _modules_add_attack_to_gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/add-attack-to-gameboard */ \"./src/modules/add-attack-to-gameboard.js\");\nconst player = __webpack_require__(/*! ./factory-functions/player */ \"./src/factory-functions/player.js\");\n\n\n\n\nconst playerOne = player(\"human\");\nconst playerTwo = player(\"cpu\");\n\n(0,_modules_display_empty_gameboard__WEBPACK_IMPORTED_MODULE_0__.displayEmptyGameboard)(\"player-one\");\n(0,_modules_display_empty_gameboard__WEBPACK_IMPORTED_MODULE_0__.displayEmptyGameboard)(\"player-two\");\n\nlet shipLengths = [5,4,3,3,2];\nlet shipCoordinates = [\n    [0,0],\n    [0,2],\n    [0,4],\n    [0,6],\n    [0,8]\n];\n\n(0,_modules_add_ships_to_gameboard__WEBPACK_IMPORTED_MODULE_1__.addShipsToGameboard)(playerOne, shipLengths, shipCoordinates);\n(0,_modules_add_ships_to_gameboard__WEBPACK_IMPORTED_MODULE_1__.addShipsToGameboard)(playerTwo, shipLengths, shipCoordinates);\n\nlet gameboardRows = document.getElementById('player-two')[\"childNodes\"][0][\"childNodes\"];\nfor (let row = 0; row < 10; row++) {\n    for (let column = 0; column < 10; column++) {\n        gameboardRows[row][\"childNodes\"][column].addEventListener(\"click\", () => {\n            playerOne.attackEnemy(playerTwo, [row,column])\n            ;(0,_modules_add_attack_to_gameboard__WEBPACK_IMPORTED_MODULE_2__.addAttackToGameboard)(playerTwo, \"player-two\");\n            playerTwo.attackEnemy(playerOne);\n            (0,_modules_add_attack_to_gameboard__WEBPACK_IMPORTED_MODULE_2__.addAttackToGameboard)(playerOne, \"player-one\");\n            // if (playerOne.playerGameboard.allShipsDestroyed()) {\n            //     alert('You lost!')\n            // } else if (playerTwo.playerGameboard.allShipsDestroyed()) {\n            //     alert('You won!')\n            // }\n        })\n    };\n};\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/modules/add-attack-to-gameboard.js":
/*!************************************************!*\
  !*** ./src/modules/add-attack-to-gameboard.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addAttackToGameboard\": () => (/* binding */ addAttackToGameboard)\n/* harmony export */ });\nfunction addAttackToGameboard(player, playerNumber) {\n    let gameboardRows = document.getElementById(playerNumber)[\"childNodes\"][0][\"childNodes\"];\n    let playerHits = player.playerGameboard.squaresHit;\n    for (let i = 0; i < playerHits.length; i++) {\n        gameboardRows[playerHits[i][0]][\"childNodes\"][playerHits[i][1]].style.backgroundColor = \"red\";\n    }\n    let playerMisses = player.playerGameboard.squaresMissed;\n    for (let j = 0; j < playerMisses.length; j++) {\n        gameboardRows[playerMisses[j][0]][\"childNodes\"][playerMisses[j][1]].style.backgroundColor = \"blue\";\n    }\n};\n\n\n\n//# sourceURL=webpack://battleship/./src/modules/add-attack-to-gameboard.js?");

/***/ }),

/***/ "./src/modules/add-ships-to-gameboard.js":
/*!***********************************************!*\
  !*** ./src/modules/add-ships-to-gameboard.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addShipsToGameboard\": () => (/* binding */ addShipsToGameboard)\n/* harmony export */ });\nfunction addShipsToGameboard(player, lengths, ships) {\n    let gameboardRows = document.getElementById('player-one')[\"childNodes\"][0][\"childNodes\"];\n    for (let ship = 0; ship < ships.length; ship++) {\n        player.playerGameboard.setShip(lengths[ship], \"vertical\", ships[ship]);\n        for (let length = 0; length < lengths[ship]; length++) {\n            gameboardRows[length+ships[ship][0]][\"childNodes\"][ships[ship][1]].style.backgroundColor = \"grey\";\n        };\n    };\n};\n\n\n\n//# sourceURL=webpack://battleship/./src/modules/add-ships-to-gameboard.js?");

/***/ }),

/***/ "./src/modules/display-empty-gameboard.js":
/*!************************************************!*\
  !*** ./src/modules/display-empty-gameboard.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayEmptyGameboard\": () => (/* binding */ displayEmptyGameboard)\n/* harmony export */ });\nfunction displayEmptyGameboard(playerNumber) {\n    let containerDiv = document.getElementById(playerNumber);\n    let boardDiv = document.createElement('div');\n    boardDiv.className = \"gameboard\";\n    for (let row = 0; row < 10; row++) {\n        let rowDiv = document.createElement('div');\n        rowDiv.id = `row-${row}`\n        rowDiv.className = \"row\"\n        for (let column = 0; column < 10; column++) {\n            let squareDiv = document.createElement('div');\n            squareDiv.className = `square`;\n            rowDiv.appendChild(squareDiv);\n        }\n        boardDiv.appendChild(rowDiv);\n    };\n    containerDiv.appendChild(boardDiv);\n};\n\n\n\n//# sourceURL=webpack://battleship/./src/modules/display-empty-gameboard.js?");

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