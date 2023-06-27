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

/***/ "./src/js/components/additional-components/browse-button.js":
/*!******************************************************************!*\
  !*** ./src/js/components/additional-components/browse-button.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addBrowseButton)\n/* harmony export */ });\n/* harmony import */ var _js_register_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/register.js */ \"./src/js/register.js\");\n/* harmony import */ var _js_register_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_register_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/helpers.js */ \"./src/js/helpers.js\");\n/* harmony import */ var _js_components_additional_components_dropdown_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/js/components/additional-components/dropdown-list.js */ \"./src/js/components/additional-components/dropdown-list.js\");\n\n\n\nfunction addBrowseButton(browseList) {\n  var buttonWrapper = (0,_js_helpers_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', {\n    style: 'position: relative; display: inline-block;'\n  });\n  var button = (0,_js_helpers_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('button', {\n    className: 'button button_secondary_default button_icon item__browse-button'\n  });\n  button.insertAdjacentHTML('beforeend', \"<div class=\\\"svg-icon__wrapper\\\" style=\\\"pointer-events: none;\\\">\\n    <svg class=\\\"svg-icon\\\">\\n      <use xlink:href=\\\"#browse\\\"/>\\n    </svg>\\n  </div>\");\n  button.setAttribute('data-browse', 'browse-item');\n  buttonWrapper.appendChild(button);\n  buttonWrapper.appendChild((0,_js_components_additional_components_dropdown_list_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(browseList));\n  return buttonWrapper;\n}\n\n//# sourceURL=webpack://dig-des-webpack/./src/js/components/additional-components/browse-button.js?");

/***/ }),

/***/ "./src/js/components/additional-components/current-avatar.js":
/*!*******************************************************************!*\
  !*** ./src/js/components/additional-components/current-avatar.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addCurrentAvatar)\n/* harmony export */ });\n/* harmony import */ var _js_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/helpers.js */ \"./src/js/helpers.js\");\n/* harmony import */ var _assets_images_travolta_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/images/travolta.jpg */ \"./src/assets/images/travolta.jpg\");\n\n\nfunction addCurrentAvatar() {\n  var avatarWrapper = (0,_js_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {\n    className: 'avatar'\n  });\n  var avatarImage = (0,_js_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('img', {\n    src: _assets_images_travolta_jpg__WEBPACK_IMPORTED_MODULE_1__,\n    className: 'avatar__image',\n    alt: 'Аватар пользователя'\n  });\n  avatarWrapper.appendChild(avatarImage);\n  return avatarWrapper;\n}\n\n//# sourceURL=webpack://dig-des-webpack/./src/js/components/additional-components/current-avatar.js?");

/***/ }),

/***/ "./src/js/components/additional-components/dropdown-list.js":
/*!******************************************************************!*\
  !*** ./src/js/components/additional-components/dropdown-list.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addDropdownList)\n/* harmony export */ });\n/* harmony import */ var _js_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/helpers.js */ \"./src/js/helpers.js\");\n\nfunction addDropdownList(listItems) {\n  var wrapper = (0,_js_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", {\n    className: 'dropdown-list'\n  });\n  var ulList = (0,_js_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('ul', {\n    className: 'dropdown-list__wrapper'\n  });\n  listItems.map(function (name) {\n    var liItem = (0,_js_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('li');\n    var aLink = (0,_js_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('a', {\n      className: 'dropdown-list__item',\n      textContent: name,\n      name: name\n    });\n    liItem.appendChild(aLink);\n    return ulList.appendChild(liItem);\n  });\n  wrapper.appendChild(ulList);\n  return wrapper;\n}\n\n//# sourceURL=webpack://dig-des-webpack/./src/js/components/additional-components/dropdown-list.js?");

/***/ }),

/***/ "./src/js/components/navigation-panel/index.js":
/*!*****************************************************!*\
  !*** ./src/js/components/navigation-panel/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addNavigationPanel)\n/* harmony export */ });\n/* harmony import */ var _js_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/helpers.js */ \"./src/js/helpers.js\");\n/* harmony import */ var _js_components_navigation_panel_sub_components_menu_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/components/navigation-panel/sub-components/menu-list.js */ \"./src/js/components/navigation-panel/sub-components/menu-list.js\");\n/* harmony import */ var _js_components_navigation_panel_sub_components_profile_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/js/components/navigation-panel/sub-components/profile-button.js */ \"./src/js/components/navigation-panel/sub-components/profile-button.js\");\n\n\n\nfunction addNavigationPanel(menuItems) {\n  var navigationPanel = (0,_js_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('header', {\n    className: 'navigation-panel'\n  });\n  var navWrapper = (0,_js_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('nav');\n  navigationPanel.appendChild(navWrapper);\n  navWrapper.appendChild((0,_js_components_navigation_panel_sub_components_menu_list_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(menuItems));\n  navigationPanel.appendChild((0,_js_components_navigation_panel_sub_components_profile_button_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n  return navigationPanel;\n}\n\n//# sourceURL=webpack://dig-des-webpack/./src/js/components/navigation-panel/index.js?");

/***/ }),

/***/ "./src/js/components/navigation-panel/sub-components/menu-list.js":
/*!************************************************************************!*\
  !*** ./src/js/components/navigation-panel/sub-components/menu-list.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addMenuList)\n/* harmony export */ });\n/* harmony import */ var _js_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/helpers.js */ \"./src/js/helpers.js\");\n\nfunction addMenuList(menuItems) {\n  var ulList = (0,_js_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('ul', {\n    className: 'navigation-panel__menu'\n  });\n  menuItems.map(function (item) {\n    var liItem = (0,_js_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('li');\n    var aLink = (0,_js_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('a', {\n      className: 'navigation-panel__menu-item navigation-panel__menu-item_default',\n      textContent: item.name,\n      href: item.href\n    });\n    liItem.appendChild(aLink);\n    return ulList.appendChild(liItem);\n  });\n  return ulList;\n}\n\n//# sourceURL=webpack://dig-des-webpack/./src/js/components/navigation-panel/sub-components/menu-list.js?");

/***/ }),

/***/ "./src/js/components/navigation-panel/sub-components/profile-button.js":
/*!*****************************************************************************!*\
  !*** ./src/js/components/navigation-panel/sub-components/profile-button.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addProfileButton)\n/* harmony export */ });\n/* harmony import */ var _js_register_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/register.js */ \"./src/js/register.js\");\n/* harmony import */ var _js_register_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_register_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/helpers.js */ \"./src/js/helpers.js\");\n/* harmony import */ var _js_components_additional_components_current_avatar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/js/components/additional-components/current-avatar.js */ \"./src/js/components/additional-components/current-avatar.js\");\n/* harmony import */ var _js_components_additional_components_dropdown_list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/js/components/additional-components/dropdown-list.js */ \"./src/js/components/additional-components/dropdown-list.js\");\n\n\n\n\nfunction addProfileButton() {\n  var buttonWrapper = (0,_js_helpers_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', {\n    className: 'navigation-panel__profile-button-wrapper'\n  });\n  var button = (0,_js_helpers_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('button', {\n    className: 'profile-button profile-button_default'\n  });\n  var buttonContent = (0,_js_helpers_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', {\n    className: 'profile-button__content'\n  });\n  var dropdownList = ['Профиль', 'Выход'];\n  button.setAttribute('data-browse', 'browse-profile');\n  buttonWrapper.appendChild(button);\n  button.appendChild(buttonContent);\n  buttonContent.appendChild((0,_js_components_additional_components_current_avatar_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n  buttonContent.insertAdjacentHTML('beforeend', \"<div class=\\\"svg-icon__wrapper\\\">\\n      <svg class=\\\"svg-icon\\\">\\n        <use xlink:href=\\\"#arrow-down\\\"  />\\n      </svg>\\n    </div>\");\n  buttonWrapper.appendChild((0,_js_components_additional_components_dropdown_list_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(dropdownList));\n  return buttonWrapper;\n}\n\n//# sourceURL=webpack://dig-des-webpack/./src/js/components/navigation-panel/sub-components/profile-button.js?");

/***/ }),

/***/ "./src/js/components/none-item/index.js":
/*!**********************************************!*\
  !*** ./src/js/components/none-item/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addNoneItem)\n/* harmony export */ });\n/* harmony import */ var _js_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/helpers.js */ \"./src/js/helpers.js\");\n/* harmony import */ var _js_register_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/register.js */ \"./src/js/register.js\");\n/* harmony import */ var _js_register_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_register_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction addNoneItem(typeItem) {\n  var noneItem = (0,_js_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {\n    className: 'none-item'\n  });\n  var noneItemTitle = (0,_js_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', {\n    className: 'none-item__title',\n    textContent: typeItem.title\n  });\n  noneItem.appendChild(noneItemTitle);\n  if (typeItem.button === true) {\n    var button = (0,_js_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('button', {\n      className: 'button  button_primary_default',\n      textContent: 'Добавить'\n    });\n    noneItem.appendChild(button);\n  }\n  return noneItem;\n}\n\n//# sourceURL=webpack://dig-des-webpack/./src/js/components/none-item/index.js?");

/***/ }),

/***/ "./src/js/components/pages/add-page.js":
/*!*********************************************!*\
  !*** ./src/js/components/pages/add-page.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addPage)\n/* harmony export */ });\n/* harmony import */ var _js_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/helpers.js */ \"./src/js/helpers.js\");\n/* harmony import */ var _js_components_none_item_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/components/none-item/index.js */ \"./src/js/components/none-item/index.js\");\n/* harmony import */ var _js_components_navigation_panel_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/js/components/navigation-panel/index.js */ \"./src/js/components/navigation-panel/index.js\");\n/* harmony import */ var _js_components_project_item_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/js/components/project-item/index.js */ \"./src/js/components/project-item/index.js\");\n/* harmony import */ var _js_components_task_item_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/js/components/task-item/index.js */ \"./src/js/components/task-item/index.js\");\n/* harmony import */ var _js_test_variables_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/js/test-variables.js */ \"./src/js/test-variables.js\");\n/* harmony import */ var _js_events_events_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/js/events/events.js */ \"./src/js/events/events.js\");\n//helper\n\n//components\n\n\n\n\n//variables for test\n\n//event functions\n\nfunction addPage() {\n  var app = document.querySelector('#app');\n  var page = (0,_js_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {\n    className: 'page'\n  });\n  var sectionItmes = (0,_js_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {\n    className: 'page__section-items'\n  });\n  page.appendChild((0,_js_components_navigation_panel_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_js_test_variables_js__WEBPACK_IMPORTED_MODULE_5__.menuItems));\n  page.appendChild(sectionItmes);\n  sectionItmes.appendChild((0,_js_components_project_item_index_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_js_test_variables_js__WEBPACK_IMPORTED_MODULE_5__.itemInfo));\n  sectionItmes.appendChild((0,_js_components_task_item_index_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_js_test_variables_js__WEBPACK_IMPORTED_MODULE_5__.itemInfo));\n  sectionItmes.appendChild((0,_js_components_none_item_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    title: 'Не создан ни один проект',\n    button: true\n  }));\n  app.appendChild(page);\n  (0,_js_events_events_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n}\n\n//# sourceURL=webpack://dig-des-webpack/./src/js/components/pages/add-page.js?");

/***/ }),

/***/ "./src/js/components/project-item/index.js":
/*!*************************************************!*\
  !*** ./src/js/components/project-item/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addProjectItem)\n/* harmony export */ });\n/* harmony import */ var _js_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/helpers.js */ \"./src/js/helpers.js\");\n/* harmony import */ var _js_register_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/register.js */ \"./src/js/register.js\");\n/* harmony import */ var _js_register_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_register_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_components_project_item_sub_components_item_title_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/js/components/project-item/sub-components/item-title.js */ \"./src/js/components/project-item/sub-components/item-title.js\");\n/* harmony import */ var _js_components_project_item_sub_components_item_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/js/components/project-item/sub-components/item-description.js */ \"./src/js/components/project-item/sub-components/item-description.js\");\n/* harmony import */ var _js_components_additional_components_browse_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/js/components/additional-components/browse-button.js */ \"./src/js/components/additional-components/browse-button.js\");\n\n\n\n\n\nfunction addProjectItem(itemInfo) {\n  var projectItem = (0,_js_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {\n    className: 'item'\n  });\n  var info = (0,_js_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {\n    className: 'item__info'\n  });\n  var browseList = ['Редактировать', 'Удалить'];\n  projectItem.appendChild(info);\n  info.appendChild((0,_js_components_project_item_sub_components_item_title_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(itemInfo));\n  info.appendChild((0,_js_components_project_item_sub_components_item_description_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(itemInfo));\n  projectItem.appendChild((0,_js_components_additional_components_browse_button_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(browseList));\n  projectItem.querySelector('.dropdown-list__item[name=\"Удалить\"]').classList.add('dropdown-list__item_error');\n  return projectItem;\n}\n\n//# sourceURL=webpack://dig-des-webpack/./src/js/components/project-item/index.js?");

/***/ }),

/***/ "./src/js/components/project-item/sub-components/item-description.js":
/*!***************************************************************************!*\
  !*** ./src/js/components/project-item/sub-components/item-description.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addItemDescription)\n/* harmony export */ });\n/* harmony import */ var _js_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/helpers.js */ \"./src/js/helpers.js\");\n\nfunction addItemDescription(itemInfo) {\n  var description = (0,_js_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {\n    className: 'item__description'\n  });\n  var descriptionWrapper = (0,_js_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {\n    className: 'item__description-wrapper'\n  });\n  var number = (0,_js_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', {\n    className: 'item__number',\n    textContent: \"#\".concat(itemInfo.number)\n  });\n  var stateChange = (0,_js_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', {\n    className: 'item__state',\n    textContent: \"\".concat(itemInfo.name.creater, \" \\u0441\\u043E\\u0437\\u0434\\u0430\\u043B(\\u0430) \").concat(itemInfo.time.create, \" \\u043D\\u0430\\u0437\\u0430\\u0434\")\n  });\n  var stateCreate = (0,_js_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', {\n    className: 'item__state',\n    textContent: \"\".concat(itemInfo.name.changer, \" \\u0441\\u043E\\u0437\\u0434\\u0430\\u043B(\\u0430) \").concat(itemInfo.time.change, \" \\u043D\\u0430\\u0437\\u0430\\u0434\")\n  });\n  description.appendChild(descriptionWrapper);\n  descriptionWrapper.appendChild(number);\n  descriptionWrapper.appendChild(stateChange);\n  description.appendChild(stateCreate);\n  return description;\n}\n\n//# sourceURL=webpack://dig-des-webpack/./src/js/components/project-item/sub-components/item-description.js?");

/***/ }),

/***/ "./src/js/components/project-item/sub-components/item-title.js":
/*!*********************************************************************!*\
  !*** ./src/js/components/project-item/sub-components/item-title.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addItemTitle)\n/* harmony export */ });\n/* harmony import */ var _js_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/helpers.js */ \"./src/js/helpers.js\");\n\nfunction addItemTitle(itemInfo) {\n  var nameWrapper = (0,_js_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {\n    className: 'item__name-wrapper'\n  });\n  var name = (0,_js_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', {\n    className: 'item__name',\n    textContent: itemInfo.title,\n    title: itemInfo.title\n  });\n  nameWrapper.appendChild(name);\n  return nameWrapper;\n}\n\n//# sourceURL=webpack://dig-des-webpack/./src/js/components/project-item/sub-components/item-title.js?");

/***/ }),

/***/ "./src/js/components/task-item/index.js":
/*!**********************************************!*\
  !*** ./src/js/components/task-item/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addTaskItem)\n/* harmony export */ });\n/* harmony import */ var _js_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/helpers.js */ \"./src/js/helpers.js\");\n/* harmony import */ var _js_register_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/register.js */ \"./src/js/register.js\");\n/* harmony import */ var _js_register_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_register_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_components_project_item_sub_components_item_title_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/js/components/project-item/sub-components/item-title.js */ \"./src/js/components/project-item/sub-components/item-title.js\");\n/* harmony import */ var _js_components_project_item_sub_components_item_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/js/components/project-item/sub-components/item-description.js */ \"./src/js/components/project-item/sub-components/item-description.js\");\n/* harmony import */ var _js_components_additional_components_current_avatar_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/js/components/additional-components/current-avatar.js */ \"./src/js/components/additional-components/current-avatar.js\");\n/* harmony import */ var _js_components_additional_components_browse_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/js/components/additional-components/browse-button.js */ \"./src/js/components/additional-components/browse-button.js\");\n\n\n\n\n\n\nfunction addTaskItem(itemInfo) {\n  var taskItem = (0,_js_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {\n    className: 'item'\n  });\n  var info = (0,_js_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', {\n    className: 'item__info'\n  });\n  var state = (0,_js_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', {\n    className: 'status status_bronze',\n    textContent: 'Черновик'\n  });\n  var browseList = ['Редактировать', 'Удалить'];\n  taskItem.appendChild(info);\n  info.appendChild((0,_js_components_project_item_sub_components_item_title_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(itemInfo));\n  info.appendChild((0,_js_components_project_item_sub_components_item_description_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(itemInfo));\n  info.querySelector('.item__name-wrapper').appendChild((0,_js_components_additional_components_current_avatar_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n  info.querySelector('.item__description-wrapper').appendChild(state);\n  taskItem.appendChild((0,_js_components_additional_components_browse_button_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(browseList));\n  taskItem.querySelector('.dropdown-list__item[name=\"Удалить\"]').classList.add('dropdown-list__item_error');\n  return taskItem;\n}\n\n//# sourceURL=webpack://dig-des-webpack/./src/js/components/task-item/index.js?");

/***/ }),

/***/ "./src/js/data-requests/add-data-requests.js":
/*!***************************************************!*\
  !*** ./src/js/data-requests/add-data-requests.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dataRequests)\n/* harmony export */ });\nfunction dataRequests() {\n  return new Promise(function (resolve, reject) {\n    var requestUrl = \"http://45.12.239.156:8081/api/login\";\n    var authorizationData = {\n      login: 'rozhdestvensky.d',\n      password: 'jc63fk'\n    };\n    var xhr = new XMLHttpRequest();\n    xhr.open('POST', requestUrl);\n    xhr.responseType = 'json';\n    xhr.setRequestHeader('Content-Type', 'application/json');\n    xhr.send(JSON.stringify(authorizationData));\n    xhr.onload = function () {\n      if (xhr.status === 200) {\n        resolve(xhr.response);\n      } else {\n        reject(xhr.response);\n      }\n    };\n  });\n}\n\n//# sourceURL=webpack://dig-des-webpack/./src/js/data-requests/add-data-requests.js?");

/***/ }),

/***/ "./src/js/events/add-dropdown.js":
/*!***************************************!*\
  !*** ./src/js/events/add-dropdown.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addDropdown)\n/* harmony export */ });\n/* harmony import */ var _js_events_toggle_browse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/events/toggle-browse */ \"./src/js/events/toggle-browse.js\");\n\nfunction addDropdown(element) {\n  var elementAtrubute = element.getAttribute('data-browse');\n  var buttonDropdown = '';\n  if (document.querySelector('.dropdown-list_active') !== null && !element.closest('.dropdown-list')) {\n    buttonDropdown = document.querySelector('.dropdown-list_active').previousSibling;\n    (0,_js_events_toggle_browse__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(buttonDropdown);\n  } else if (elementAtrubute !== null) {\n    buttonDropdown = element;\n    (0,_js_events_toggle_browse__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(buttonDropdown);\n  }\n}\n\n//# sourceURL=webpack://dig-des-webpack/./src/js/events/add-dropdown.js?");

/***/ }),

/***/ "./src/js/events/add-switch-menu.js":
/*!******************************************!*\
  !*** ./src/js/events/add-switch-menu.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addSwitchMenu)\n/* harmony export */ });\n/* harmony import */ var _js_events_toggle_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/events/toggle-menu */ \"./src/js/events/toggle-menu.js\");\n\nfunction addSwitchMenu(element) {\n  if (element.closest('.navigation-panel__menu-item') && !element.closest('.navigation-panel__menu-item_active')) {\n    var active = document.querySelector('.navigation-panel__menu-item_active');\n    if (active !== null) {\n      (0,_js_events_toggle_menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(active);\n    }\n    (0,_js_events_toggle_menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element);\n  }\n}\n\n//# sourceURL=webpack://dig-des-webpack/./src/js/events/add-switch-menu.js?");

/***/ }),

/***/ "./src/js/events/events.js":
/*!*********************************!*\
  !*** ./src/js/events/events.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addEvents)\n/* harmony export */ });\n/* harmony import */ var _js_events_add_dropdown_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/events/add-dropdown.js */ \"./src/js/events/add-dropdown.js\");\n/* harmony import */ var _js_events_add_switch_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/events/add-switch-menu.js */ \"./src/js/events/add-switch-menu.js\");\n\n\nfunction addEvents() {\n  var app = document.querySelector('#app');\n  app.addEventListener('click', function (event) {\n    var element = event.target;\n    (0,_js_events_add_dropdown_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element);\n    (0,_js_events_add_switch_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(element);\n  });\n}\n\n//# sourceURL=webpack://dig-des-webpack/./src/js/events/events.js?");

/***/ }),

/***/ "./src/js/events/toggle-browse.js":
/*!****************************************!*\
  !*** ./src/js/events/toggle-browse.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toggleBrowse)\n/* harmony export */ });\nfunction toggleBrowse(buttonDropdown) {\n  var dataBrowse = buttonDropdown.getAttribute('data-browse');\n  if (dataBrowse === 'browse-profile') {\n    buttonDropdown.classList.toggle('profile-button_default');\n    buttonDropdown.classList.toggle('profile-button_active');\n  } else if (dataBrowse === 'browse-item') {\n    buttonDropdown.classList.toggle('button_secondary_active');\n    buttonDropdown.classList.toggle('button_secondary_default');\n    buttonDropdown.classList.toggle('item__browse-button');\n  }\n  buttonDropdown.nextSibling.classList.toggle('dropdown-list_active');\n}\n\n//# sourceURL=webpack://dig-des-webpack/./src/js/events/toggle-browse.js?");

/***/ }),

/***/ "./src/js/events/toggle-menu.js":
/*!**************************************!*\
  !*** ./src/js/events/toggle-menu.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toggleMenu)\n/* harmony export */ });\nfunction toggleMenu(element) {\n  element.classList.toggle('navigation-panel__menu-item_default');\n  element.classList.toggle('navigation-panel__menu-item_active');\n}\n\n//# sourceURL=webpack://dig-des-webpack/./src/js/events/toggle-menu.js?");

/***/ }),

/***/ "./src/js/helpers.js":
/*!***************************!*\
  !*** ./src/js/helpers.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction createElement(tag, options) {\n  if (_typeof(options) !== 'object') {\n    options = {};\n  }\n  var elem = document.createElement(tag);\n  Object.keys(options).forEach(function (key) {\n    elem[key] = options[key];\n  });\n  return elem;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createElement);\n\n//# sourceURL=webpack://dig-des-webpack/./src/js/helpers.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_components_pages_add_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/components/pages/add-page.js */ \"./src/js/components/pages/add-page.js\");\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/scss/index.scss */ \"./src/scss/index.scss\");\n/* harmony import */ var _js_data_requests_add_data_requests_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/js/data-requests/add-data-requests.js */ \"./src/js/data-requests/add-data-requests.js\");\n\n\n\n(0,_js_components_pages_add_page_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_js_data_requests_add_data_requests_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])().then(function (response) {\n  token = response.token;\n  console.log(token);\n});\n\n//# sourceURL=webpack://dig-des-webpack/./src/js/index.js?");

/***/ }),

/***/ "./src/js/register.js":
/*!****************************!*\
  !*** ./src/js/register.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var requireAll = function requireAll(r) {\n  return r.keys().forEach(r);\n};\nvar requireContext = __webpack_require__(\"./src/assets/icons sync recursive \\\\.svg$\");\nrequireAll(requireContext);\n\n//# sourceURL=webpack://dig-des-webpack/./src/js/register.js?");

/***/ }),

/***/ "./src/js/test-variables.js":
/*!**********************************!*\
  !*** ./src/js/test-variables.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   itemInfo: () => (/* binding */ itemInfo),\n/* harmony export */   menuItems: () => (/* binding */ menuItems)\n/* harmony export */ });\nvar menuItems = [{\n  name: 'Проекты',\n  href: '#'\n}, {\n  name: 'Задачи',\n  href: '#'\n}, {\n  name: 'Пользователи',\n  href: '#'\n}];\nvar itemInfo = {\n  title: 'Test is too long. Очень длинное название проекта, создано специального для того чтоб не вместилось в одну строку, что позволит проверить не ломается ли верстка. Test is too long. И еще раз очень длинное название проекта, создано специально чтоб проверить... Test is too long. Очень длинное название проекта, создано специального для того чтоб не вместилось в одну строку, что позволит проверить не ломается ли верстка. Test is too long. И еще раз очень длинное название проекта, создано специально чтоб проверить',\n  number: '1',\n  time: {\n    create: '1 час',\n    change: '1 минуту'\n  },\n  name: {\n    creater: 'Иванов И.И.',\n    changer: 'Баранов В.В.'\n  }\n};\n\n\n//# sourceURL=webpack://dig-des-webpack/./src/js/test-variables.js?");

/***/ }),

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://dig-des-webpack/./src/scss/index.scss?");

/***/ }),

/***/ "./node_modules/svg-baker-runtime/browser-symbol.js":
/*!**********************************************************!*\
  !*** ./node_modules/svg-baker-runtime/browser-symbol.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("(function (global, factory) {\n\t true ? module.exports = factory() :\n\t0;\n}(this, (function () { 'use strict';\n\nvar SpriteSymbol = function SpriteSymbol(ref) {\n  var id = ref.id;\n  var viewBox = ref.viewBox;\n  var content = ref.content;\n\n  this.id = id;\n  this.viewBox = viewBox;\n  this.content = content;\n};\n\n/**\n * @return {string}\n */\nSpriteSymbol.prototype.stringify = function stringify () {\n  return this.content;\n};\n\n/**\n * @return {string}\n */\nSpriteSymbol.prototype.toString = function toString () {\n  return this.stringify();\n};\n\nSpriteSymbol.prototype.destroy = function destroy () {\n    var this$1 = this;\n\n  ['id', 'viewBox', 'content'].forEach(function (prop) { return delete this$1[prop]; });\n};\n\n/**\n * @param {string} content\n * @return {Element}\n */\nvar parse = function (content) {\n  var hasImportNode = !!document.importNode;\n  var doc = new DOMParser().parseFromString(content, 'image/svg+xml').documentElement;\n\n  /**\n   * Fix for browser which are throwing WrongDocumentError\n   * if you insert an element which is not part of the document\n   * @see http://stackoverflow.com/a/7986519/4624403\n   */\n  if (hasImportNode) {\n    return document.importNode(doc, true);\n  }\n\n  return doc;\n};\n\nvar commonjsGlobal = typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : typeof self !== 'undefined' ? self : {};\n\n\n\n\n\nfunction createCommonjsModule(fn, module) {\n\treturn module = { exports: {} }, fn(module, module.exports), module.exports;\n}\n\nvar deepmerge = createCommonjsModule(function (module, exports) {\n(function (root, factory) {\n    if (false) {} else {\n        module.exports = factory();\n    }\n}(commonjsGlobal, function () {\n\nfunction isMergeableObject(val) {\n    var nonNullObject = val && typeof val === 'object';\n\n    return nonNullObject\n        && Object.prototype.toString.call(val) !== '[object RegExp]'\n        && Object.prototype.toString.call(val) !== '[object Date]'\n}\n\nfunction emptyTarget(val) {\n    return Array.isArray(val) ? [] : {}\n}\n\nfunction cloneIfNecessary(value, optionsArgument) {\n    var clone = optionsArgument && optionsArgument.clone === true;\n    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value\n}\n\nfunction defaultArrayMerge(target, source, optionsArgument) {\n    var destination = target.slice();\n    source.forEach(function(e, i) {\n        if (typeof destination[i] === 'undefined') {\n            destination[i] = cloneIfNecessary(e, optionsArgument);\n        } else if (isMergeableObject(e)) {\n            destination[i] = deepmerge(target[i], e, optionsArgument);\n        } else if (target.indexOf(e) === -1) {\n            destination.push(cloneIfNecessary(e, optionsArgument));\n        }\n    });\n    return destination\n}\n\nfunction mergeObject(target, source, optionsArgument) {\n    var destination = {};\n    if (isMergeableObject(target)) {\n        Object.keys(target).forEach(function (key) {\n            destination[key] = cloneIfNecessary(target[key], optionsArgument);\n        });\n    }\n    Object.keys(source).forEach(function (key) {\n        if (!isMergeableObject(source[key]) || !target[key]) {\n            destination[key] = cloneIfNecessary(source[key], optionsArgument);\n        } else {\n            destination[key] = deepmerge(target[key], source[key], optionsArgument);\n        }\n    });\n    return destination\n}\n\nfunction deepmerge(target, source, optionsArgument) {\n    var array = Array.isArray(source);\n    var options = optionsArgument || { arrayMerge: defaultArrayMerge };\n    var arrayMerge = options.arrayMerge || defaultArrayMerge;\n\n    if (array) {\n        return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument)\n    } else {\n        return mergeObject(target, source, optionsArgument)\n    }\n}\n\ndeepmerge.all = function deepmergeAll(array, optionsArgument) {\n    if (!Array.isArray(array) || array.length < 2) {\n        throw new Error('first argument should be an array with at least two elements')\n    }\n\n    // we are sure there are at least 2 values, so it is safe to have no initial value\n    return array.reduce(function(prev, next) {\n        return deepmerge(prev, next, optionsArgument)\n    })\n};\n\nreturn deepmerge\n\n}));\n});\n\nvar namespaces_1 = createCommonjsModule(function (module, exports) {\nvar namespaces = {\n  svg: {\n    name: 'xmlns',\n    uri: 'http://www.w3.org/2000/svg'\n  },\n  xlink: {\n    name: 'xmlns:xlink',\n    uri: 'http://www.w3.org/1999/xlink'\n  }\n};\n\nexports.default = namespaces;\nmodule.exports = exports.default;\n});\n\n/**\n * @param {Object} attrs\n * @return {string}\n */\nvar objectToAttrsString = function (attrs) {\n  return Object.keys(attrs).map(function (attr) {\n    var value = attrs[attr].toString().replace(/\"/g, '&quot;');\n    return (attr + \"=\\\"\" + value + \"\\\"\");\n  }).join(' ');\n};\n\nvar svg = namespaces_1.svg;\nvar xlink = namespaces_1.xlink;\n\nvar defaultAttrs = {};\ndefaultAttrs[svg.name] = svg.uri;\ndefaultAttrs[xlink.name] = xlink.uri;\n\n/**\n * @param {string} [content]\n * @param {Object} [attributes]\n * @return {string}\n */\nvar wrapInSvgString = function (content, attributes) {\n  if ( content === void 0 ) content = '';\n\n  var attrs = deepmerge(defaultAttrs, attributes || {});\n  var attrsRendered = objectToAttrsString(attrs);\n  return (\"<svg \" + attrsRendered + \">\" + content + \"</svg>\");\n};\n\nvar BrowserSpriteSymbol = (function (SpriteSymbol$$1) {\n  function BrowserSpriteSymbol () {\n    SpriteSymbol$$1.apply(this, arguments);\n  }\n\n  if ( SpriteSymbol$$1 ) BrowserSpriteSymbol.__proto__ = SpriteSymbol$$1;\n  BrowserSpriteSymbol.prototype = Object.create( SpriteSymbol$$1 && SpriteSymbol$$1.prototype );\n  BrowserSpriteSymbol.prototype.constructor = BrowserSpriteSymbol;\n\n  var prototypeAccessors = { isMounted: {} };\n\n  prototypeAccessors.isMounted.get = function () {\n    return !!this.node;\n  };\n\n  /**\n   * @param {Element} node\n   * @return {BrowserSpriteSymbol}\n   */\n  BrowserSpriteSymbol.createFromExistingNode = function createFromExistingNode (node) {\n    return new BrowserSpriteSymbol({\n      id: node.getAttribute('id'),\n      viewBox: node.getAttribute('viewBox'),\n      content: node.outerHTML\n    });\n  };\n\n  BrowserSpriteSymbol.prototype.destroy = function destroy () {\n    if (this.isMounted) {\n      this.unmount();\n    }\n    SpriteSymbol$$1.prototype.destroy.call(this);\n  };\n\n  /**\n   * @param {Element|string} target\n   * @return {Element}\n   */\n  BrowserSpriteSymbol.prototype.mount = function mount (target) {\n    if (this.isMounted) {\n      return this.node;\n    }\n\n    var mountTarget = typeof target === 'string' ? document.querySelector(target) : target;\n    var node = this.render();\n    this.node = node;\n\n    mountTarget.appendChild(node);\n\n    return node;\n  };\n\n  /**\n   * @return {Element}\n   */\n  BrowserSpriteSymbol.prototype.render = function render () {\n    var content = this.stringify();\n    return parse(wrapInSvgString(content)).childNodes[0];\n  };\n\n  BrowserSpriteSymbol.prototype.unmount = function unmount () {\n    this.node.parentNode.removeChild(this.node);\n  };\n\n  Object.defineProperties( BrowserSpriteSymbol.prototype, prototypeAccessors );\n\n  return BrowserSpriteSymbol;\n}(SpriteSymbol));\n\nreturn BrowserSpriteSymbol;\n\n})));\n\n\n//# sourceURL=webpack://dig-des-webpack/./node_modules/svg-baker-runtime/browser-symbol.js?");

/***/ }),

/***/ "./src/assets/icons/arrow-down.svg":
/*!*****************************************!*\
  !*** ./src/assets/icons/arrow-down.svg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/svg-baker-runtime/browser-symbol.js */ \"./node_modules/svg-baker-runtime/browser-symbol.js\");\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ \"./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js\");\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({\n  \"id\": \"arrow-down\",\n  \"use\": \"arrow-down-usage\",\n  \"viewBox\": \"0 0 24 24\",\n  \"content\": \"<symbol viewBox=\\\"0 0 24 24\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" id=\\\"arrow-down\\\">\\r\\n<path d=\\\"M12 13.95L7.04999 9L5.63599 10.414L12 16.778L18.364 10.414L16.95 9L12 13.95Z\\\" fill=\\\"currentColor\\\" />\\r\\n</symbol>\"\n});\nvar result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (symbol);\n\n//# sourceURL=webpack://dig-des-webpack/./src/assets/icons/arrow-down.svg?");

/***/ }),

/***/ "./src/assets/icons/browse.svg":
/*!*************************************!*\
  !*** ./src/assets/icons/browse.svg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/svg-baker-runtime/browser-symbol.js */ \"./node_modules/svg-baker-runtime/browser-symbol.js\");\n/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ \"./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js\");\n/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({\n  \"id\": \"browse\",\n  \"use\": \"browse-usage\",\n  \"viewBox\": \"0 0 24 25\",\n  \"content\": \"<symbol viewBox=\\\"0 0 24 25\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" id=\\\"browse\\\">\\r\\n<path d=\\\"M13.5 17.5C13.5 17.8978 13.342 18.2794 13.0607 18.5607C12.7794 18.842 12.3978 19 12 19C11.6022 19 11.2206 18.842 10.9393 18.5607C10.658 18.2794 10.5 17.8978 10.5 17.5C10.5 17.1022 10.658 16.7206 10.9393 16.4393C11.2206 16.158 11.6022 16 12 16C12.3978 16 12.7794 16.158 13.0607 16.4393C13.342 16.7206 13.5 17.1022 13.5 17.5ZM13.5 12.5C13.5 12.8978 13.342 13.2794 13.0607 13.5607C12.7794 13.842 12.3978 14 12 14C11.6022 14 11.2206 13.842 10.9393 13.5607C10.658 13.2794 10.5 12.8978 10.5 12.5C10.5 12.1022 10.658 11.7206 10.9393 11.4393C11.2206 11.158 11.6022 11 12 11C12.3978 11 12.7794 11.158 13.0607 11.4393C13.342 11.7206 13.5 12.1022 13.5 12.5ZM13.5 7.5C13.5 7.89782 13.342 8.27936 13.0607 8.56066C12.7794 8.84196 12.3978 9 12 9C11.6022 9 11.2206 8.84196 10.9393 8.56066C10.658 8.27936 10.5 7.89782 10.5 7.5C10.5 7.10218 10.658 6.72064 10.9393 6.43934C11.2206 6.15804 11.6022 6 12 6C12.3978 6 12.7794 6.15804 13.0607 6.43934C13.342 6.72064 13.5 7.10218 13.5 7.5Z\\\" fill=\\\"currentColor\\\" />\\r\\n</symbol>\"\n});\nvar result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (symbol);\n\n//# sourceURL=webpack://dig-des-webpack/./src/assets/icons/browse.svg?");

/***/ }),

/***/ "./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js":
/*!************************************************************************!*\
  !*** ./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js ***!
  \************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("(function (global, factory) {\n\t true ? module.exports = factory() :\n\t0;\n}(this, (function () { 'use strict';\n\nvar commonjsGlobal = typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : typeof self !== 'undefined' ? self : {};\n\n\n\n\n\nfunction createCommonjsModule(fn, module) {\n\treturn module = { exports: {} }, fn(module, module.exports), module.exports;\n}\n\nvar deepmerge = createCommonjsModule(function (module, exports) {\n(function (root, factory) {\n    if (false) {} else {\n        module.exports = factory();\n    }\n}(commonjsGlobal, function () {\n\nfunction isMergeableObject(val) {\n    var nonNullObject = val && typeof val === 'object';\n\n    return nonNullObject\n        && Object.prototype.toString.call(val) !== '[object RegExp]'\n        && Object.prototype.toString.call(val) !== '[object Date]'\n}\n\nfunction emptyTarget(val) {\n    return Array.isArray(val) ? [] : {}\n}\n\nfunction cloneIfNecessary(value, optionsArgument) {\n    var clone = optionsArgument && optionsArgument.clone === true;\n    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value\n}\n\nfunction defaultArrayMerge(target, source, optionsArgument) {\n    var destination = target.slice();\n    source.forEach(function(e, i) {\n        if (typeof destination[i] === 'undefined') {\n            destination[i] = cloneIfNecessary(e, optionsArgument);\n        } else if (isMergeableObject(e)) {\n            destination[i] = deepmerge(target[i], e, optionsArgument);\n        } else if (target.indexOf(e) === -1) {\n            destination.push(cloneIfNecessary(e, optionsArgument));\n        }\n    });\n    return destination\n}\n\nfunction mergeObject(target, source, optionsArgument) {\n    var destination = {};\n    if (isMergeableObject(target)) {\n        Object.keys(target).forEach(function (key) {\n            destination[key] = cloneIfNecessary(target[key], optionsArgument);\n        });\n    }\n    Object.keys(source).forEach(function (key) {\n        if (!isMergeableObject(source[key]) || !target[key]) {\n            destination[key] = cloneIfNecessary(source[key], optionsArgument);\n        } else {\n            destination[key] = deepmerge(target[key], source[key], optionsArgument);\n        }\n    });\n    return destination\n}\n\nfunction deepmerge(target, source, optionsArgument) {\n    var array = Array.isArray(source);\n    var options = optionsArgument || { arrayMerge: defaultArrayMerge };\n    var arrayMerge = options.arrayMerge || defaultArrayMerge;\n\n    if (array) {\n        return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument)\n    } else {\n        return mergeObject(target, source, optionsArgument)\n    }\n}\n\ndeepmerge.all = function deepmergeAll(array, optionsArgument) {\n    if (!Array.isArray(array) || array.length < 2) {\n        throw new Error('first argument should be an array with at least two elements')\n    }\n\n    // we are sure there are at least 2 values, so it is safe to have no initial value\n    return array.reduce(function(prev, next) {\n        return deepmerge(prev, next, optionsArgument)\n    })\n};\n\nreturn deepmerge\n\n}));\n});\n\n//      \n// An event handler can take an optional event argument\n// and should not return a value\n                                          \n// An array of all currently registered event handlers for a type\n                                            \n// A map of event types and their corresponding event handlers.\n                        \n                                   \n  \n\n/** Mitt: Tiny (~200b) functional event emitter / pubsub.\n *  @name mitt\n *  @returns {Mitt}\n */\nfunction mitt(all                 ) {\n\tall = all || Object.create(null);\n\n\treturn {\n\t\t/**\n\t\t * Register an event handler for the given type.\n\t\t *\n\t\t * @param  {String} type\tType of event to listen for, or `\"*\"` for all events\n\t\t * @param  {Function} handler Function to call in response to given event\n\t\t * @memberOf mitt\n\t\t */\n\t\ton: function on(type        , handler              ) {\n\t\t\t(all[type] || (all[type] = [])).push(handler);\n\t\t},\n\n\t\t/**\n\t\t * Remove an event handler for the given type.\n\t\t *\n\t\t * @param  {String} type\tType of event to unregister `handler` from, or `\"*\"`\n\t\t * @param  {Function} handler Handler function to remove\n\t\t * @memberOf mitt\n\t\t */\n\t\toff: function off(type        , handler              ) {\n\t\t\tif (all[type]) {\n\t\t\t\tall[type].splice(all[type].indexOf(handler) >>> 0, 1);\n\t\t\t}\n\t\t},\n\n\t\t/**\n\t\t * Invoke all handlers for the given type.\n\t\t * If present, `\"*\"` handlers are invoked after type-matched handlers.\n\t\t *\n\t\t * @param {String} type  The event type to invoke\n\t\t * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler\n\t\t * @memberof mitt\n\t\t */\n\t\temit: function emit(type        , evt     ) {\n\t\t\t(all[type] || []).map(function (handler) { handler(evt); });\n\t\t\t(all['*'] || []).map(function (handler) { handler(type, evt); });\n\t\t}\n\t};\n}\n\nvar namespaces_1 = createCommonjsModule(function (module, exports) {\nvar namespaces = {\n  svg: {\n    name: 'xmlns',\n    uri: 'http://www.w3.org/2000/svg'\n  },\n  xlink: {\n    name: 'xmlns:xlink',\n    uri: 'http://www.w3.org/1999/xlink'\n  }\n};\n\nexports.default = namespaces;\nmodule.exports = exports.default;\n});\n\n/**\n * @param {Object} attrs\n * @return {string}\n */\nvar objectToAttrsString = function (attrs) {\n  return Object.keys(attrs).map(function (attr) {\n    var value = attrs[attr].toString().replace(/\"/g, '&quot;');\n    return (attr + \"=\\\"\" + value + \"\\\"\");\n  }).join(' ');\n};\n\nvar svg = namespaces_1.svg;\nvar xlink = namespaces_1.xlink;\n\nvar defaultAttrs = {};\ndefaultAttrs[svg.name] = svg.uri;\ndefaultAttrs[xlink.name] = xlink.uri;\n\n/**\n * @param {string} [content]\n * @param {Object} [attributes]\n * @return {string}\n */\nvar wrapInSvgString = function (content, attributes) {\n  if ( content === void 0 ) content = '';\n\n  var attrs = deepmerge(defaultAttrs, attributes || {});\n  var attrsRendered = objectToAttrsString(attrs);\n  return (\"<svg \" + attrsRendered + \">\" + content + \"</svg>\");\n};\n\nvar svg$1 = namespaces_1.svg;\nvar xlink$1 = namespaces_1.xlink;\n\nvar defaultConfig = {\n  attrs: ( obj = {\n    style: ['position: absolute', 'width: 0', 'height: 0'].join('; '),\n    'aria-hidden': 'true'\n  }, obj[svg$1.name] = svg$1.uri, obj[xlink$1.name] = xlink$1.uri, obj )\n};\nvar obj;\n\nvar Sprite = function Sprite(config) {\n  this.config = deepmerge(defaultConfig, config || {});\n  this.symbols = [];\n};\n\n/**\n * Add new symbol. If symbol with the same id exists it will be replaced.\n * @param {SpriteSymbol} symbol\n * @return {boolean} `true` - symbol was added, `false` - replaced\n */\nSprite.prototype.add = function add (symbol) {\n  var ref = this;\n    var symbols = ref.symbols;\n  var existing = this.find(symbol.id);\n\n  if (existing) {\n    symbols[symbols.indexOf(existing)] = symbol;\n    return false;\n  }\n\n  symbols.push(symbol);\n  return true;\n};\n\n/**\n * Remove symbol & destroy it\n * @param {string} id\n * @return {boolean} `true` - symbol was found & successfully destroyed, `false` - otherwise\n */\nSprite.prototype.remove = function remove (id) {\n  var ref = this;\n    var symbols = ref.symbols;\n  var symbol = this.find(id);\n\n  if (symbol) {\n    symbols.splice(symbols.indexOf(symbol), 1);\n    symbol.destroy();\n    return true;\n  }\n\n  return false;\n};\n\n/**\n * @param {string} id\n * @return {SpriteSymbol|null}\n */\nSprite.prototype.find = function find (id) {\n  return this.symbols.filter(function (s) { return s.id === id; })[0] || null;\n};\n\n/**\n * @param {string} id\n * @return {boolean}\n */\nSprite.prototype.has = function has (id) {\n  return this.find(id) !== null;\n};\n\n/**\n * @return {string}\n */\nSprite.prototype.stringify = function stringify () {\n  var ref = this.config;\n    var attrs = ref.attrs;\n  var stringifiedSymbols = this.symbols.map(function (s) { return s.stringify(); }).join('');\n  return wrapInSvgString(stringifiedSymbols, attrs);\n};\n\n/**\n * @return {string}\n */\nSprite.prototype.toString = function toString () {\n  return this.stringify();\n};\n\nSprite.prototype.destroy = function destroy () {\n  this.symbols.forEach(function (s) { return s.destroy(); });\n};\n\nvar SpriteSymbol = function SpriteSymbol(ref) {\n  var id = ref.id;\n  var viewBox = ref.viewBox;\n  var content = ref.content;\n\n  this.id = id;\n  this.viewBox = viewBox;\n  this.content = content;\n};\n\n/**\n * @return {string}\n */\nSpriteSymbol.prototype.stringify = function stringify () {\n  return this.content;\n};\n\n/**\n * @return {string}\n */\nSpriteSymbol.prototype.toString = function toString () {\n  return this.stringify();\n};\n\nSpriteSymbol.prototype.destroy = function destroy () {\n    var this$1 = this;\n\n  ['id', 'viewBox', 'content'].forEach(function (prop) { return delete this$1[prop]; });\n};\n\n/**\n * @param {string} content\n * @return {Element}\n */\nvar parse = function (content) {\n  var hasImportNode = !!document.importNode;\n  var doc = new DOMParser().parseFromString(content, 'image/svg+xml').documentElement;\n\n  /**\n   * Fix for browser which are throwing WrongDocumentError\n   * if you insert an element which is not part of the document\n   * @see http://stackoverflow.com/a/7986519/4624403\n   */\n  if (hasImportNode) {\n    return document.importNode(doc, true);\n  }\n\n  return doc;\n};\n\nvar BrowserSpriteSymbol = (function (SpriteSymbol$$1) {\n  function BrowserSpriteSymbol () {\n    SpriteSymbol$$1.apply(this, arguments);\n  }\n\n  if ( SpriteSymbol$$1 ) BrowserSpriteSymbol.__proto__ = SpriteSymbol$$1;\n  BrowserSpriteSymbol.prototype = Object.create( SpriteSymbol$$1 && SpriteSymbol$$1.prototype );\n  BrowserSpriteSymbol.prototype.constructor = BrowserSpriteSymbol;\n\n  var prototypeAccessors = { isMounted: {} };\n\n  prototypeAccessors.isMounted.get = function () {\n    return !!this.node;\n  };\n\n  /**\n   * @param {Element} node\n   * @return {BrowserSpriteSymbol}\n   */\n  BrowserSpriteSymbol.createFromExistingNode = function createFromExistingNode (node) {\n    return new BrowserSpriteSymbol({\n      id: node.getAttribute('id'),\n      viewBox: node.getAttribute('viewBox'),\n      content: node.outerHTML\n    });\n  };\n\n  BrowserSpriteSymbol.prototype.destroy = function destroy () {\n    if (this.isMounted) {\n      this.unmount();\n    }\n    SpriteSymbol$$1.prototype.destroy.call(this);\n  };\n\n  /**\n   * @param {Element|string} target\n   * @return {Element}\n   */\n  BrowserSpriteSymbol.prototype.mount = function mount (target) {\n    if (this.isMounted) {\n      return this.node;\n    }\n\n    var mountTarget = typeof target === 'string' ? document.querySelector(target) : target;\n    var node = this.render();\n    this.node = node;\n\n    mountTarget.appendChild(node);\n\n    return node;\n  };\n\n  /**\n   * @return {Element}\n   */\n  BrowserSpriteSymbol.prototype.render = function render () {\n    var content = this.stringify();\n    return parse(wrapInSvgString(content)).childNodes[0];\n  };\n\n  BrowserSpriteSymbol.prototype.unmount = function unmount () {\n    this.node.parentNode.removeChild(this.node);\n  };\n\n  Object.defineProperties( BrowserSpriteSymbol.prototype, prototypeAccessors );\n\n  return BrowserSpriteSymbol;\n}(SpriteSymbol));\n\nvar defaultConfig$1 = {\n  /**\n   * Should following options be automatically configured:\n   * - `syncUrlsWithBaseTag`\n   * - `locationChangeAngularEmitter`\n   * - `moveGradientsOutsideSymbol`\n   * @type {boolean}\n   */\n  autoConfigure: true,\n\n  /**\n   * Default mounting selector\n   * @type {string}\n   */\n  mountTo: 'body',\n\n  /**\n   * Fix disappearing SVG elements when <base href> exists.\n   * Executes when sprite mounted.\n   * @see http://stackoverflow.com/a/18265336/796152\n   * @see https://github.com/everdimension/angular-svg-base-fix\n   * @see https://github.com/angular/angular.js/issues/8934#issuecomment-56568466\n   * @type {boolean}\n   */\n  syncUrlsWithBaseTag: false,\n\n  /**\n   * Should sprite listen custom location change event\n   * @type {boolean}\n   */\n  listenLocationChangeEvent: true,\n\n  /**\n   * Custom window event name which should be emitted to update sprite urls\n   * @type {string}\n   */\n  locationChangeEvent: 'locationChange',\n\n  /**\n   * Emit location change event in Angular automatically\n   * @type {boolean}\n   */\n  locationChangeAngularEmitter: false,\n\n  /**\n   * Selector to find symbols usages when updating sprite urls\n   * @type {string}\n   */\n  usagesToUpdate: 'use[*|href]',\n\n  /**\n   * Fix Firefox bug when gradients and patterns don't work if they are within a symbol.\n   * Executes when sprite is rendered, but not mounted.\n   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=306674\n   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=353575\n   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=1235364\n   * @type {boolean}\n   */\n  moveGradientsOutsideSymbol: false\n};\n\n/**\n * @param {*} arrayLike\n * @return {Array}\n */\nvar arrayFrom = function (arrayLike) {\n  return Array.prototype.slice.call(arrayLike, 0);\n};\n\nvar browser = {\n  isChrome: function () { return /chrome/i.test(navigator.userAgent); },\n  isFirefox: function () { return /firefox/i.test(navigator.userAgent); },\n\n  // https://msdn.microsoft.com/en-us/library/ms537503(v=vs.85).aspx\n  isIE: function () { return /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent); },\n  isEdge: function () { return /edge/i.test(navigator.userAgent); }\n};\n\n/**\n * @param {string} name\n * @param {*} data\n */\nvar dispatchEvent = function (name, data) {\n  var event = document.createEvent('CustomEvent');\n  event.initCustomEvent(name, false, false, data);\n  window.dispatchEvent(event);\n};\n\n/**\n * IE doesn't evaluate <style> tags in SVGs that are dynamically added to the page.\n * This trick will trigger IE to read and use any existing SVG <style> tags.\n * @see https://github.com/iconic/SVGInjector/issues/23\n * @see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10898469/\n *\n * @param {Element} node DOM Element to search <style> tags in\n * @return {Array<HTMLStyleElement>}\n */\nvar evalStylesIEWorkaround = function (node) {\n  var updatedNodes = [];\n\n  arrayFrom(node.querySelectorAll('style'))\n    .forEach(function (style) {\n      style.textContent += '';\n      updatedNodes.push(style);\n    });\n\n  return updatedNodes;\n};\n\n/**\n * @param {string} [url] If not provided - current URL will be used\n * @return {string}\n */\nvar getUrlWithoutFragment = function (url) {\n  return (url || window.location.href).split('#')[0];\n};\n\n/* global angular */\n/**\n * @param {string} eventName\n */\nvar locationChangeAngularEmitter = function (eventName) {\n  angular.module('ng').run(['$rootScope', function ($rootScope) {\n    $rootScope.$on('$locationChangeSuccess', function (e, newUrl, oldUrl) {\n      dispatchEvent(eventName, { oldUrl: oldUrl, newUrl: newUrl });\n    });\n  }]);\n};\n\nvar defaultSelector = 'linearGradient, radialGradient, pattern, mask, clipPath';\n\n/**\n * @param {Element} svg\n * @param {string} [selector]\n * @return {Element}\n */\nvar moveGradientsOutsideSymbol = function (svg, selector) {\n  if ( selector === void 0 ) selector = defaultSelector;\n\n  arrayFrom(svg.querySelectorAll('symbol')).forEach(function (symbol) {\n    arrayFrom(symbol.querySelectorAll(selector)).forEach(function (node) {\n      symbol.parentNode.insertBefore(node, symbol);\n    });\n  });\n  return svg;\n};\n\n/**\n * @param {NodeList} nodes\n * @param {Function} [matcher]\n * @return {Attr[]}\n */\nfunction selectAttributes(nodes, matcher) {\n  var attrs = arrayFrom(nodes).reduce(function (acc, node) {\n    if (!node.attributes) {\n      return acc;\n    }\n\n    var arrayfied = arrayFrom(node.attributes);\n    var matched = matcher ? arrayfied.filter(matcher) : arrayfied;\n    return acc.concat(matched);\n  }, []);\n\n  return attrs;\n}\n\n/**\n * @param {NodeList|Node} nodes\n * @param {boolean} [clone=true]\n * @return {string}\n */\n\nvar xLinkNS = namespaces_1.xlink.uri;\nvar xLinkAttrName = 'xlink:href';\n\n// eslint-disable-next-line no-useless-escape\nvar specialUrlCharsPattern = /[{}|\\\\\\^\\[\\]`\"<>]/g;\n\nfunction encoder(url) {\n  return url.replace(specialUrlCharsPattern, function (match) {\n    return (\"%\" + (match[0].charCodeAt(0).toString(16).toUpperCase()));\n  });\n}\n\nfunction escapeRegExp(str) {\n  return str.replace(/[.*+?^${}()|[\\]\\\\]/g, \"\\\\$&\"); // $& means the whole matched string\n}\n\n/**\n * @param {NodeList} nodes\n * @param {string} startsWith\n * @param {string} replaceWith\n * @return {NodeList}\n */\nfunction updateReferences(nodes, startsWith, replaceWith) {\n  arrayFrom(nodes).forEach(function (node) {\n    var href = node.getAttribute(xLinkAttrName);\n    if (href && href.indexOf(startsWith) === 0) {\n      var newUrl = href.replace(startsWith, replaceWith);\n      node.setAttributeNS(xLinkNS, xLinkAttrName, newUrl);\n    }\n  });\n\n  return nodes;\n}\n\n/**\n * List of SVG attributes to update url() target in them\n */\nvar attList = [\n  'clipPath',\n  'colorProfile',\n  'src',\n  'cursor',\n  'fill',\n  'filter',\n  'marker',\n  'markerStart',\n  'markerMid',\n  'markerEnd',\n  'mask',\n  'stroke',\n  'style'\n];\n\nvar attSelector = attList.map(function (attr) { return (\"[\" + attr + \"]\"); }).join(',');\n\n/**\n * Update URLs in svg image (like `fill=\"url(...)\"`) and update referencing elements\n * @param {Element} svg\n * @param {NodeList} references\n * @param {string|RegExp} startsWith\n * @param {string} replaceWith\n * @return {void}\n *\n * @example\n * const sprite = document.querySelector('svg.sprite');\n * const usages = document.querySelectorAll('use');\n * updateUrls(sprite, usages, '#', 'prefix#');\n */\nvar updateUrls = function (svg, references, startsWith, replaceWith) {\n  var startsWithEncoded = encoder(startsWith);\n  var replaceWithEncoded = encoder(replaceWith);\n\n  var nodes = svg.querySelectorAll(attSelector);\n  var attrs = selectAttributes(nodes, function (ref) {\n    var localName = ref.localName;\n    var value = ref.value;\n\n    return attList.indexOf(localName) !== -1 && value.indexOf((\"url(\" + startsWithEncoded)) !== -1;\n  });\n\n  attrs.forEach(function (attr) { return attr.value = attr.value.replace(new RegExp(escapeRegExp(startsWithEncoded), 'g'), replaceWithEncoded); });\n  updateReferences(references, startsWithEncoded, replaceWithEncoded);\n};\n\n/**\n * Internal emitter events\n * @enum\n * @private\n */\nvar Events = {\n  MOUNT: 'mount',\n  SYMBOL_MOUNT: 'symbol_mount'\n};\n\nvar BrowserSprite = (function (Sprite$$1) {\n  function BrowserSprite(cfg) {\n    var this$1 = this;\n    if ( cfg === void 0 ) cfg = {};\n\n    Sprite$$1.call(this, deepmerge(defaultConfig$1, cfg));\n\n    var emitter = mitt();\n    this._emitter = emitter;\n    this.node = null;\n\n    var ref = this;\n    var config = ref.config;\n\n    if (config.autoConfigure) {\n      this._autoConfigure(cfg);\n    }\n\n    if (config.syncUrlsWithBaseTag) {\n      var baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');\n      emitter.on(Events.MOUNT, function () { return this$1.updateUrls('#', baseUrl); });\n    }\n\n    var handleLocationChange = this._handleLocationChange.bind(this);\n    this._handleLocationChange = handleLocationChange;\n\n    // Provide way to update sprite urls externally via dispatching custom window event\n    if (config.listenLocationChangeEvent) {\n      window.addEventListener(config.locationChangeEvent, handleLocationChange);\n    }\n\n    // Emit location change event in Angular automatically\n    if (config.locationChangeAngularEmitter) {\n      locationChangeAngularEmitter(config.locationChangeEvent);\n    }\n\n    // After sprite mounted\n    emitter.on(Events.MOUNT, function (spriteNode) {\n      if (config.moveGradientsOutsideSymbol) {\n        moveGradientsOutsideSymbol(spriteNode);\n      }\n    });\n\n    // After symbol mounted into sprite\n    emitter.on(Events.SYMBOL_MOUNT, function (symbolNode) {\n      if (config.moveGradientsOutsideSymbol) {\n        moveGradientsOutsideSymbol(symbolNode.parentNode);\n      }\n\n      if (browser.isIE() || browser.isEdge()) {\n        evalStylesIEWorkaround(symbolNode);\n      }\n    });\n  }\n\n  if ( Sprite$$1 ) BrowserSprite.__proto__ = Sprite$$1;\n  BrowserSprite.prototype = Object.create( Sprite$$1 && Sprite$$1.prototype );\n  BrowserSprite.prototype.constructor = BrowserSprite;\n\n  var prototypeAccessors = { isMounted: {} };\n\n  /**\n   * @return {boolean}\n   */\n  prototypeAccessors.isMounted.get = function () {\n    return !!this.node;\n  };\n\n  /**\n   * Automatically configure following options\n   * - `syncUrlsWithBaseTag`\n   * - `locationChangeAngularEmitter`\n   * - `moveGradientsOutsideSymbol`\n   * @param {Object} cfg\n   * @private\n   */\n  BrowserSprite.prototype._autoConfigure = function _autoConfigure (cfg) {\n    var ref = this;\n    var config = ref.config;\n\n    if (typeof cfg.syncUrlsWithBaseTag === 'undefined') {\n      config.syncUrlsWithBaseTag = typeof document.getElementsByTagName('base')[0] !== 'undefined';\n    }\n\n    if (typeof cfg.locationChangeAngularEmitter === 'undefined') {\n        config.locationChangeAngularEmitter = typeof window.angular !== 'undefined';\n    }\n\n    if (typeof cfg.moveGradientsOutsideSymbol === 'undefined') {\n      config.moveGradientsOutsideSymbol = browser.isFirefox();\n    }\n  };\n\n  /**\n   * @param {Event} event\n   * @param {Object} event.detail\n   * @param {string} event.detail.oldUrl\n   * @param {string} event.detail.newUrl\n   * @private\n   */\n  BrowserSprite.prototype._handleLocationChange = function _handleLocationChange (event) {\n    var ref = event.detail;\n    var oldUrl = ref.oldUrl;\n    var newUrl = ref.newUrl;\n    this.updateUrls(oldUrl, newUrl);\n  };\n\n  /**\n   * Add new symbol. If symbol with the same id exists it will be replaced.\n   * If sprite already mounted - `symbol.mount(sprite.node)` will be called.\n   * @fires Events#SYMBOL_MOUNT\n   * @param {BrowserSpriteSymbol} symbol\n   * @return {boolean} `true` - symbol was added, `false` - replaced\n   */\n  BrowserSprite.prototype.add = function add (symbol) {\n    var sprite = this;\n    var isNewSymbol = Sprite$$1.prototype.add.call(this, symbol);\n\n    if (this.isMounted && isNewSymbol) {\n      symbol.mount(sprite.node);\n      this._emitter.emit(Events.SYMBOL_MOUNT, symbol.node);\n    }\n\n    return isNewSymbol;\n  };\n\n  /**\n   * Attach to existing DOM node\n   * @param {string|Element} target\n   * @return {Element|null} attached DOM Element. null if node to attach not found.\n   */\n  BrowserSprite.prototype.attach = function attach (target) {\n    var this$1 = this;\n\n    var sprite = this;\n\n    if (sprite.isMounted) {\n      return sprite.node;\n    }\n\n    /** @type Element */\n    var node = typeof target === 'string' ? document.querySelector(target) : target;\n    sprite.node = node;\n\n    // Already added symbols needs to be mounted\n    this.symbols.forEach(function (symbol) {\n      symbol.mount(sprite.node);\n      this$1._emitter.emit(Events.SYMBOL_MOUNT, symbol.node);\n    });\n\n    // Create symbols from existing DOM nodes, add and mount them\n    arrayFrom(node.querySelectorAll('symbol'))\n      .forEach(function (symbolNode) {\n        var symbol = BrowserSpriteSymbol.createFromExistingNode(symbolNode);\n        symbol.node = symbolNode; // hack to prevent symbol mounting to sprite when adding\n        sprite.add(symbol);\n      });\n\n    this._emitter.emit(Events.MOUNT, node);\n\n    return node;\n  };\n\n  BrowserSprite.prototype.destroy = function destroy () {\n    var ref = this;\n    var config = ref.config;\n    var symbols = ref.symbols;\n    var _emitter = ref._emitter;\n\n    symbols.forEach(function (s) { return s.destroy(); });\n\n    _emitter.off('*');\n    window.removeEventListener(config.locationChangeEvent, this._handleLocationChange);\n\n    if (this.isMounted) {\n      this.unmount();\n    }\n  };\n\n  /**\n   * @fires Events#MOUNT\n   * @param {string|Element} [target]\n   * @param {boolean} [prepend=false]\n   * @return {Element|null} rendered sprite node. null if mount node not found.\n   */\n  BrowserSprite.prototype.mount = function mount (target, prepend) {\n    if ( target === void 0 ) target = this.config.mountTo;\n    if ( prepend === void 0 ) prepend = false;\n\n    var sprite = this;\n\n    if (sprite.isMounted) {\n      return sprite.node;\n    }\n\n    var mountNode = typeof target === 'string' ? document.querySelector(target) : target;\n    var node = sprite.render();\n    this.node = node;\n\n    if (prepend && mountNode.childNodes[0]) {\n      mountNode.insertBefore(node, mountNode.childNodes[0]);\n    } else {\n      mountNode.appendChild(node);\n    }\n\n    this._emitter.emit(Events.MOUNT, node);\n\n    return node;\n  };\n\n  /**\n   * @return {Element}\n   */\n  BrowserSprite.prototype.render = function render () {\n    return parse(this.stringify());\n  };\n\n  /**\n   * Detach sprite from the DOM\n   */\n  BrowserSprite.prototype.unmount = function unmount () {\n    this.node.parentNode.removeChild(this.node);\n  };\n\n  /**\n   * Update URLs in sprite and usage elements\n   * @param {string} oldUrl\n   * @param {string} newUrl\n   * @return {boolean} `true` - URLs was updated, `false` - sprite is not mounted\n   */\n  BrowserSprite.prototype.updateUrls = function updateUrls$1 (oldUrl, newUrl) {\n    if (!this.isMounted) {\n      return false;\n    }\n\n    var usages = document.querySelectorAll(this.config.usagesToUpdate);\n\n    updateUrls(\n      this.node,\n      usages,\n      ((getUrlWithoutFragment(oldUrl)) + \"#\"),\n      ((getUrlWithoutFragment(newUrl)) + \"#\")\n    );\n\n    return true;\n  };\n\n  Object.defineProperties( BrowserSprite.prototype, prototypeAccessors );\n\n  return BrowserSprite;\n}(Sprite));\n\nvar ready$1 = createCommonjsModule(function (module) {\n/*!\n  * domready (c) Dustin Diaz 2014 - License MIT\n  */\n!function (name, definition) {\n\n  { module.exports = definition(); }\n\n}('domready', function () {\n\n  var fns = [], listener\n    , doc = document\n    , hack = doc.documentElement.doScroll\n    , domContentLoaded = 'DOMContentLoaded'\n    , loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState);\n\n\n  if (!loaded)\n  { doc.addEventListener(domContentLoaded, listener = function () {\n    doc.removeEventListener(domContentLoaded, listener);\n    loaded = 1;\n    while (listener = fns.shift()) { listener(); }\n  }); }\n\n  return function (fn) {\n    loaded ? setTimeout(fn, 0) : fns.push(fn);\n  }\n\n});\n});\n\nvar spriteNodeId = '__SVG_SPRITE_NODE__';\nvar spriteGlobalVarName = '__SVG_SPRITE__';\nvar isSpriteExists = !!window[spriteGlobalVarName];\n\n// eslint-disable-next-line import/no-mutable-exports\nvar sprite;\n\nif (isSpriteExists) {\n  sprite = window[spriteGlobalVarName];\n} else {\n  sprite = new BrowserSprite({\n    attrs: {\n      id: spriteNodeId,\n      'aria-hidden': 'true'\n    }\n  });\n  window[spriteGlobalVarName] = sprite;\n}\n\nvar loadSprite = function () {\n  /**\n   * Check for page already contains sprite node\n   * If found - attach to and reuse it's content\n   * If not - render and mount the new sprite\n   */\n  var existing = document.getElementById(spriteNodeId);\n\n  if (existing) {\n    sprite.attach(existing);\n  } else {\n    sprite.mount(document.body, true);\n  }\n};\n\nif (document.body) {\n  loadSprite();\n} else {\n  ready$1(loadSprite);\n}\n\nvar sprite$1 = sprite;\n\nreturn sprite$1;\n\n})));\n\n\n//# sourceURL=webpack://dig-des-webpack/./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js?");

/***/ }),

/***/ "./src/assets/icons sync recursive \\.svg$":
/*!***************************************!*\
  !*** ./src/assets/icons/ sync \.svg$ ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./arrow-down.svg\": \"./src/assets/icons/arrow-down.svg\",\n\t\"./browse.svg\": \"./src/assets/icons/browse.svg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/assets/icons sync recursive \\\\.svg$\";\n\n//# sourceURL=webpack://dig-des-webpack/./src/assets/icons/_sync_\\.svg$?");

/***/ }),

/***/ "./src/assets/images/travolta.jpg":
/*!****************************************!*\
  !*** ./src/assets/images/travolta.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"607473513d5a5243f316.jpg\";\n\n//# sourceURL=webpack://dig-des-webpack/./src/assets/images/travolta.jpg?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;