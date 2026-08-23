"use strict";
(self["webpackChunkmodule_exports"] = self["webpackChunkmodule_exports"] || []).push([["forum/components/DeclarationInfoModal"],{

/***/ "./src/forum/components/DeclarationInfoModal.tsx"
/*!*******************************************************!*\
  !*** ./src/forum/components/DeclarationInfoModal.tsx ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeclarationInfoModal)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_components_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Icon */ "flarum/common/components/Icon");
/* harmony import */ var flarum_common_components_Icon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Icon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_declarations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/declarations */ "./src/forum/utils/declarations.ts");




class DeclarationInfoModal extends (flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_2___default()) {
  className() {
    return 'CreatorDeclarationInfoModal';
  }
  title() {
    return flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('ffans-creator-declarations.forum.info_modal.title');
  }
  onready() {
    const activeElement = document.activeElement;
    if (activeElement instanceof HTMLElement && this.$()[0]?.contains(activeElement)) {
      activeElement.blur();
    }
  }
  content() {
    const declarations = this.attrs.declarations.filter(declaration => (0,_utils_declarations__WEBPACK_IMPORTED_MODULE_3__.definitionFor)(declaration.key()));
    const labels = declarations.map(declaration => flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(`ffans-creator-declarations.lib.declarations.${declaration.key()}.label`, {}, true));
    return m("div", {
      className: "Modal-body",
      ontouchstart: event => event.stopPropagation(),
      ontouchmove: event => event.stopPropagation()
    }, m("div", {
      className: "CreatorDeclarationInfoModal-content"
    }, m("div", {
      className: "CreatorDeclarationInfoModal-intro"
    }, m((flarum_common_components_Icon__WEBPACK_IMPORTED_MODULE_1___default()), {
      name: "fas fa-info"
    }), m("h3", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('ffans-creator-declarations.forum.info_modal.heading')), m("p", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('ffans-creator-declarations.forum.info_modal.explanation', {
      declarations: labels.join(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('ffans-creator-declarations.forum.display.declaration_separator', {}, true))
    })), m("p", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('ffans-creator-declarations.forum.info_modal.disclaimer'))), m("div", {
      className: "CreatorDeclarationInfoModal-list"
    }, declarations.map(declaration => {
      const definition = (0,_utils_declarations__WEBPACK_IMPORTED_MODULE_3__.definitionFor)(declaration.key());
      const details = declaration.metadata()?.details;
      return m("div", {
        className: "CreatorDeclarationInfoModal-item",
        key: declaration.id()
      }, m((flarum_common_components_Icon__WEBPACK_IMPORTED_MODULE_1___default()), {
        name: definition.icon,
        style: {
          color: definition.color
        }
      }), m("div", null, m("strong", null, (0,_utils_declarations__WEBPACK_IMPORTED_MODULE_3__.labelFor)(definition.key)), m("p", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(`ffans-creator-declarations.lib.declarations.${definition.key}.help`)), details && m("div", {
        className: "CreatorDeclarationInfoModal-note"
      }, m("span", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('ffans-creator-declarations.forum.info_modal.author_note')), details)));
    }))));
  }
}
flarum.reg.add('ffans-creator-declarations', 'forum/components/DeclarationInfoModal', DeclarationInfoModal);

/***/ }

}]);
//# sourceMappingURL=DeclarationInfoModal.js.map