/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/admin/extend.tsx"
/*!******************************!*\
  !*** ./src/admin/extend.tsx ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_admin_components_FormSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/components/FormSection */ "flarum/admin/components/FormSection");
/* harmony import */ var flarum_admin_components_FormSection__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_FormSection__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_admin_components_SettingDropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/admin/components/SettingDropdown */ "flarum/admin/components/SettingDropdown");
/* harmony import */ var flarum_admin_components_SettingDropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_SettingDropdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Form */ "flarum/common/components/Form");
/* harmony import */ var flarum_common_components_Form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/LinkButton */ "flarum/common/components/LinkButton");
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_extenders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/extenders */ "flarum/common/extenders");
/* harmony import */ var flarum_common_extenders__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extenders__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_6__);







const declarationCategories = [{
  key: 'source',
  declarations: ['original', 'repost']
}, {
  key: 'authenticity',
  declarations: ['ai_generated', 'fictional', 'personal_opinion']
}, {
  key: 'safety',
  declarations: ['professional', 'sensitive']
}, {
  key: 'commercial',
  declarations: ['self_promotion', 'sponsored']
}];
flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('ffans-creator-declarations-admin-links', () => {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_6__.extend)('flarum/admin/components/ExtensionPage', 'infoItems', function (items) {
    if (this.extension.id !== 'ffans-creator-declarations') return;
    if (!flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().data.locale.startsWith('zh')) return;
    const forumZh = this.extension.links.forumZh;
    if (!forumZh) return;
    let priority = 0;
    if (items.has('discuss')) {
      const itemNames = Object.keys(items.toObject());
      itemNames.forEach((itemName, index) => {
        items.setPriority(itemName, itemNames.length - index);
      });
      priority = items.getPriority('discuss') - 0.5;
    }
    items.add('forumZh', m((flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_4___default()), {
      href: forumZh,
      icon: "fas fa-comments",
      external: true,
      target: "_blank"
    }, "\u4E2D\u6587\u793E\u533A"), priority);
  });
});
const admin = new (flarum_common_extenders__WEBPACK_IMPORTED_MODULE_5___default().Admin)().setting(() => ({
  setting: 'ffans-creator-declarations.required_discussion',
  type: 'boolean',
  label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('ffans-creator-declarations.admin.settings.required_discussion_label'),
  help: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('ffans-creator-declarations.admin.settings.required_discussion_help')
}), 100).setting(() => ({
  setting: 'ffans-creator-declarations.required_reply',
  type: 'boolean',
  label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('ffans-creator-declarations.admin.settings.required_reply_label'),
  help: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('ffans-creator-declarations.admin.settings.required_reply_help')
}), 95).setting(() => ({
  setting: 'ffans-creator-declarations.max',
  type: 'number',
  min: 1,
  max: 9,
  label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('ffans-creator-declarations.admin.settings.max_label')
}), 90).setting(() => ({
  setting: 'ffans-creator-declarations.show_original_in_post_header',
  type: 'boolean',
  label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('ffans-creator-declarations.admin.settings.show_original_in_post_header_label'),
  help: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('ffans-creator-declarations.admin.settings.show_original_in_post_header_help')
}), 85).setting(() => ({
  setting: 'ffans-creator-declarations.show_in_user_post_lists',
  type: 'boolean',
  label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('ffans-creator-declarations.admin.settings.show_in_user_post_lists_label'),
  help: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('ffans-creator-declarations.admin.settings.show_in_user_post_lists_help')
}), 82).setting(() => ({
  setting: 'ffans-creator-declarations.order',
  type: 'text',
  label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('ffans-creator-declarations.admin.settings.order_label'),
  help: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('ffans-creator-declarations.admin.settings.order_help')
}), 80).permission(() => ({
  icon: 'fas fa-user-edit',
  label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('ffans-creator-declarations.admin.permissions.allow_edit_own_label'),
  id: 'ffans-creator-declarations.allow_edit_own',
  setting: () => {
    const minutes = parseInt((flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().data).settings['ffans-creator-declarations.allow_edit_own'], 10);
    return m((flarum_admin_components_SettingDropdown__WEBPACK_IMPORTED_MODULE_2___default()), {
      defaultLabel: minutes ? flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('core.admin.permissions_controls.allow_some_minutes_button', {
        count: minutes
      }) : flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('core.admin.permissions_controls.allow_indefinitely_button'),
      key: "ffans-creator-declarations.allow_edit_own",
      options: [{
        value: '-1',
        label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('core.admin.permissions_controls.allow_indefinitely_button')
      }, {
        value: '10',
        label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('core.admin.permissions_controls.allow_ten_minutes_button')
      }, {
        value: 'reply',
        label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('core.admin.permissions_controls.allow_until_reply_button')
      }]
    });
  }
}), 'reply', 90).permission(() => ({
  icon: 'fas fa-file-signature',
  label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('ffans-creator-declarations.admin.permissions.moderate_label'),
  permission: 'discussion.moderateCreatorDeclarations'
}), 'moderate', 60);
admin.customSetting(function () {
  return m((flarum_admin_components_FormSection__WEBPACK_IMPORTED_MODULE_1___default()), {
    className: "CreatorDeclarationsAdmin-section",
    label: null
  }, m((flarum_common_components_Form__WEBPACK_IMPORTED_MODULE_3___default()), null, declarationCategories.map(category => [m("h3", {
    className: "CreatorDeclarationsAdmin-category"
  }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('ffans-creator-declarations.lib.categories.' + category.key)), ...category.declarations.map(key => this.buildSettingComponent({
    setting: 'ffans-creator-declarations.enabled.' + key,
    type: 'boolean',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('ffans-creator-declarations.lib.declarations.' + key + '.label'),
    help: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('ffans-creator-declarations.lib.declarations.' + key + '.help')
  }))])));
}, 70);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([admin]);

/***/ },

/***/ "./src/admin/index.ts"
/*!****************************!*\
  !*** ./src/admin/index.ts ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extend: () => (/* reexport safe */ _extend__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extend */ "./src/admin/extend.tsx");


/***/ },

/***/ "flarum/admin/app"
/*!******************************************************!*\
  !*** external "flarum.reg.get('core', 'admin/app')" ***!
  \******************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'admin/app');

/***/ },

/***/ "flarum/admin/components/FormSection"
/*!*************************************************************************!*\
  !*** external "flarum.reg.get('core', 'admin/components/FormSection')" ***!
  \*************************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'admin/components/FormSection');

/***/ },

/***/ "flarum/admin/components/SettingDropdown"
/*!*****************************************************************************!*\
  !*** external "flarum.reg.get('core', 'admin/components/SettingDropdown')" ***!
  \*****************************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'admin/components/SettingDropdown');

/***/ },

/***/ "flarum/common/components/Form"
/*!*******************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/Form')" ***!
  \*******************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/Form');

/***/ },

/***/ "flarum/common/components/LinkButton"
/*!*************************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/LinkButton')" ***!
  \*************************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/LinkButton');

/***/ },

/***/ "flarum/common/extend"
/*!**********************************************************!*\
  !*** external "flarum.reg.get('core', 'common/extend')" ***!
  \**********************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/extend');

/***/ },

/***/ "flarum/common/extenders"
/*!*************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/extenders')" ***!
  \*************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/extenders');

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		flarum.reg._webpack_runtimes["ffans-creator-declarations"] ||= __webpack_require__;// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 			const getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
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
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./admin.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extend: () => (/* reexport safe */ _src_admin__WEBPACK_IMPORTED_MODULE_0__.extend)
/* harmony export */ });
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.ts");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=admin.js.map