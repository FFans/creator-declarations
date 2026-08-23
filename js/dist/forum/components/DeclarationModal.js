"use strict";
(self["webpackChunkmodule_exports"] = self["webpackChunkmodule_exports"] || []).push([["forum/components/DeclarationModal"],{

/***/ "./src/forum/components/DeclarationModal.tsx"
/*!***************************************************!*\
  !*** ./src/forum/components/DeclarationModal.tsx ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeclarationModal)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Form */ "flarum/common/components/Form");
/* harmony import */ var flarum_common_components_Form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_FormModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/FormModal */ "flarum/common/components/FormModal");
/* harmony import */ var flarum_common_components_FormModal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_FormModal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Icon */ "flarum/common/components/Icon");
/* harmony import */ var flarum_common_components_Icon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Icon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_declarations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/declarations */ "./src/forum/utils/declarations.ts");






class DeclarationModal extends (flarum_common_components_FormModal__WEBPACK_IMPORTED_MODULE_3___default()) {
  selected = [];
  preservedKeys = [];
  oninit(vnode) {
    super.oninit(vnode);
    this.selected = this.attrs.selected.map(item => ({
      ...item
    }));
    this.preservedKeys = this.attrs.showDisabled ? this.attrs.selected.map(item => item.key) : [];
  }
  className() {
    return 'CreatorDeclarationsModal';
  }
  title() {
    return flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('ffans-creator-declarations.forum.modal.title');
  }
  onready() {
    const activeElement = document.activeElement;
    if (activeElement instanceof HTMLElement && this.$()[0]?.contains(activeElement)) {
      activeElement.blur();
    }
  }
  content() {
    const groups = ['source', 'authenticity', 'safety', 'commercial'];
    const max = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('creatorDeclarationsMax') || 5;
    return m("div", {
      className: "Modal-body",
      ontouchstart: event => event.stopPropagation(),
      ontouchmove: event => event.stopPropagation()
    }, m((flarum_common_components_Form__WEBPACK_IMPORTED_MODULE_2___default()), null, m("p", {
      className: "helpText"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('ffans-creator-declarations.forum.modal.help')), groups.map(category => {
      const items = (0,_utils_declarations__WEBPACK_IMPORTED_MODULE_5__.enabledDefinitions)(this.preservedKeys).filter(definition => definition.category === category);
      if (!items.length) return null;
      return m("fieldset", {
        className: "CreatorDeclarationsModal-group"
      }, m("legend", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(`ffans-creator-declarations.lib.categories.${category}`)), items.map(definition => this.declarationField(definition)));
    }), m("div", {
      className: "Form-group Form-controls CreatorDeclarationsModal-actions"
    }, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default()), {
      className: "Button Button--primary",
      type: "submit",
      loading: this.loading
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('ffans-creator-declarations.forum.modal.save_button')), m("span", {
      className: "CreatorDeclarationsModal-selectionCount"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('ffans-creator-declarations.forum.modal.selection_count', {
      selected: this.selected.length,
      max
    })))));
  }
  declarationField(definition) {
    const selection = this.selected.find(item => item.key === definition.key);
    const max = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('creatorDeclarationsMax') || 5;
    const disabled = !selection && this.selected.length >= max;
    const fieldClassName = ['CreatorDeclarationsModal-field', selection ? 'is-selected' : '', disabled ? 'is-disabled' : ''].filter(Boolean).join(' ');
    return m("div", {
      className: fieldClassName
    }, m("button", {
      className: "CreatorDeclarationsModal-option",
      type: "button",
      disabled: disabled,
      "aria-pressed": !!selection,
      onclick: () => this.toggle(definition, !selection)
    }, m("span", {
      className: "CreatorDeclarationsModal-label"
    }, m((flarum_common_components_Icon__WEBPACK_IMPORTED_MODULE_4___default()), {
      name: definition.icon,
      style: {
        color: definition.color
      }
    }), m("span", null, m("strong", null, (0,_utils_declarations__WEBPACK_IMPORTED_MODULE_5__.labelFor)(definition.key)), m("small", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(`ffans-creator-declarations.lib.declarations.${definition.key}.help`)))), m("span", {
      className: "CreatorDeclarationsModal-check",
      "aria-hidden": "true"
    }, m((flarum_common_components_Icon__WEBPACK_IMPORTED_MODULE_4___default()), {
      name: "fas fa-check"
    }))), selection && definition.detailsType && m("textarea", {
      className: "FormControl CreatorDeclarationsModal-details",
      rows: 1,
      value: selection.details,
      required: definition.key === 'repost',
      maxlength: 500,
      placeholder: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(`ffans-creator-declarations.lib.declarations.${definition.key}.details_placeholder`, {}, true),
      oninput: event => {
        selection.details = event.target.value;
      }
    }));
  }
  toggle(definition, checked) {
    if (checked) {
      if (definition.key === 'original') this.selected = this.selected.filter(item => item.key !== 'repost');
      if (definition.key === 'repost') this.selected = this.selected.filter(item => item.key !== 'original');
      this.selected.push({
        key: definition.key,
        details: ''
      });
    } else {
      this.selected = this.selected.filter(item => item.key !== definition.key);
    }
  }
  async onsubmit(event) {
    event.preventDefault();
    this.loading = true;
    try {
      await this.attrs.onsave(this.selected.map(item => ({
        ...item
      })));
      this.hide();
    } catch (_) {
      this.loaded();
    }
  }
}
flarum.reg.add('ffans-creator-declarations', 'forum/components/DeclarationModal', DeclarationModal);

/***/ }

}]);
//# sourceMappingURL=DeclarationModal.js.map