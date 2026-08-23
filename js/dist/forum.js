/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/common/extend.ts"
/*!******************************!*\
  !*** ./src/common/extend.ts ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extenders */ "flarum/common/extenders");
/* harmony import */ var flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_CreatorDeclaration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/CreatorDeclaration */ "./src/common/models/CreatorDeclaration.ts");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([new (flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0___default().Store)().add('creator-declarations', _models_CreatorDeclaration__WEBPACK_IMPORTED_MODULE_1__["default"])]);

/***/ },

/***/ "./src/common/models/CreatorDeclaration.ts"
/*!*************************************************!*\
  !*** ./src/common/models/CreatorDeclaration.ts ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreatorDeclaration)
/* harmony export */ });
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_0__);

class CreatorDeclaration extends (flarum_common_Model__WEBPACK_IMPORTED_MODULE_0___default()) {
  key = (() => flarum_common_Model__WEBPACK_IMPORTED_MODULE_0___default().attribute('key'))();
  source = (() => flarum_common_Model__WEBPACK_IMPORTED_MODULE_0___default().attribute('source'))();
  metadata = (() => flarum_common_Model__WEBPACK_IMPORTED_MODULE_0___default().attribute('metadata'))();
  createdAt = (() => flarum_common_Model__WEBPACK_IMPORTED_MODULE_0___default().attribute('createdAt', (flarum_common_Model__WEBPACK_IMPORTED_MODULE_0___default().transformDate)))();
}
flarum.reg.add('ffans-creator-declarations', 'common/models/CreatorDeclaration', CreatorDeclaration);

/***/ },

/***/ "./src/forum/components/DeclarationList.tsx"
/*!**************************************************!*\
  !*** ./src/forum/components/DeclarationList.tsx ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeclarationList)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Icon */ "flarum/common/components/Icon");
/* harmony import */ var flarum_common_components_Icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_declarations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/declarations */ "./src/forum/utils/declarations.ts");




class DeclarationList extends (flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()) {
  view(vnode) {
    const showOriginalInPostHeader = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('creatorDeclarationShowOriginalInPostHeader');
    const validDeclarations = (0,_utils_declarations__WEBPACK_IMPORTED_MODULE_3__.sortDeclarations)(vnode.attrs.declarations.filter(declaration => (0,_utils_declarations__WEBPACK_IMPORTED_MODULE_3__.definitionFor)(declaration.key())));
    const declarations = validDeclarations.filter(declaration => !(showOriginalInPostHeader && ['original', 'repost'].includes(declaration.key())));
    if (!declarations.length) return null;
    const labels = declarations.map(declaration => flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(`ffans-creator-declarations.lib.declarations.${declaration.key()}.label`, {}, true));
    return m("section", {
      className: "CreatorDeclarations"
    }, m("button", {
      type: "button",
      className: "CreatorDeclarations-summary",
      "aria-label": flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('ffans-creator-declarations.forum.display.open_details', {}, true),
      onclick: () => {
        flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().modal.show(() => __webpack_require__.e(/*! import() | forum/components/DeclarationInfoModal */ "forum/components/DeclarationInfoModal").then(__webpack_require__.bind(__webpack_require__, /*! ./DeclarationInfoModal */ "./src/forum/components/DeclarationInfoModal.tsx")), {
          declarations: validDeclarations
        });
      }
    }, m((flarum_common_components_Icon__WEBPACK_IMPORTED_MODULE_2___default()), {
      name: "fas fa-bullhorn",
      className: "CreatorDeclarations-icon"
    }), m("span", {
      className: "CreatorDeclarations-prefix"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('ffans-creator-declarations.forum.display.prefix')), m("span", {
      className: "CreatorDeclarations-labels"
    }, labels.join(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('ffans-creator-declarations.forum.display.declaration_separator', {}, true))), m("span", {
      className: "CreatorDeclarations-more",
      "aria-hidden": "true"
    }, m((flarum_common_components_Icon__WEBPACK_IMPORTED_MODULE_2___default()), {
      name: "fas fa-chevron-right"
    }))));
  }
}
flarum.reg.add('ffans-creator-declarations', 'forum/components/DeclarationList', DeclarationList);flarum.reg.addChunkModule('forum/components/DeclarationInfoModal', './src/forum/components/DeclarationInfoModal.tsx', 'ffans-creator-declarations', 'forum/components/DeclarationInfoModal');

/***/ },

/***/ "./src/forum/index.tsx"
/*!*****************************!*\
  !*** ./src/forum/index.tsx ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extend: () => (/* binding */ extend)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Tooltip */ "flarum/common/components/Tooltip");
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_extenders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/extenders */ "flarum/common/extenders");
/* harmony import */ var flarum_common_extenders__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extenders__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_models_Post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/models/Post */ "flarum/common/models/Post");
/* harmony import */ var flarum_common_models_Post__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_Post__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_forum_components_PostsUserPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/forum/components/PostsUserPage */ "flarum/forum/components/PostsUserPage");
/* harmony import */ var flarum_forum_components_PostsUserPage__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_PostsUserPage__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_forum_utils_PostControls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/forum/utils/PostControls */ "flarum/forum/utils/PostControls");
/* harmony import */ var flarum_forum_utils_PostControls__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_utils_PostControls__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_extend__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/extend */ "./src/common/extend.ts");
/* harmony import */ var _components_DeclarationList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/DeclarationList */ "./src/forum/components/DeclarationList.tsx");
/* harmony import */ var _utils_declarations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/declarations */ "./src/forum/utils/declarations.ts");











const extend = [..._common_extend__WEBPACK_IMPORTED_MODULE_8__["default"], new (flarum_common_extenders__WEBPACK_IMPORTED_MODULE_3___default().Model)((flarum_common_models_Post__WEBPACK_IMPORTED_MODULE_5___default())).hasMany('creatorDeclarations').attribute('canEditCreatorDeclarations')];
function initializeDeclarationComposer(composerBody) {
  composerBody.composer.fields.creatorDeclarations = composerBody.composer.fields.creatorDeclarations || [];
  composerBody.chooseCreatorDeclarations = function () {
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().modal.show(() => __webpack_require__.e(/*! import() | forum/components/DeclarationModal */ "forum/components/DeclarationModal").then(__webpack_require__.bind(__webpack_require__, /*! ./components/DeclarationModal */ "./src/forum/components/DeclarationModal.tsx")), {
      selected: this.composer.fields.creatorDeclarations.map(item => ({
        ...item
      })),
      onsave: selected => {
        this.composer.fields.creatorDeclarations = selected;
        m.redraw();
      }
    });
  };
}
function addComposerDeclarationButton(composerBody, items) {
  const selected = composerBody.composer.fields.creatorDeclarations || [];
  items.add('creatorDeclarations', m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default()), {
    className: "Button Button--link Composer-creatorDeclarations",
    icon: "fas fa-file-signature",
    onclick: composerBody.chooseCreatorDeclarations.bind(composerBody)
  }, selected.length ? flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('ffans-creator-declarations.forum.composer.selected', {
    count: selected.length
  }) : flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('ffans-creator-declarations.forum.composer.choose')), 5);
}
function getCreatorDeclarations(post) {
  const declarations = post.creatorDeclarations();
  return Array.isArray(declarations) ? declarations : [];
}
async function loadCreatorDeclarations(post) {
  if (!Array.isArray(post.creatorDeclarations())) {
    await flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().store.find('posts', post.id(), {
      include: 'creatorDeclarations'
    });
  }
  return getCreatorDeclarations(post);
}
function shouldShowCreatorDeclarations() {
  return !flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().current.matches((flarum_forum_components_PostsUserPage__WEBPACK_IMPORTED_MODULE_6___default())) || flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('creatorDeclarationShowInUserPostLists') === true;
}
flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('ffans-creator-declarations', () => {
  ;(0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_4__.extend)('flarum/forum/states/PostListState', 'requestParams', function (params) {
    if (params.filter?.author && !flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('creatorDeclarationShowInUserPostLists')) {
      return;
    }
    params.include ||= [];
    if (!params.include.includes('creatorDeclarations')) {
      params.include.push('creatorDeclarations');
    }
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_4__.extend)('flarum/forum/components/DiscussionComposer', 'oninit', function () {
    initializeDeclarationComposer(this);
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_4__.extend)('flarum/forum/components/ReplyComposer', 'oninit', function () {
    initializeDeclarationComposer(this);
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_4__.extend)('flarum/forum/components/DiscussionComposer', 'headerItems', function (items) {
    addComposerDeclarationButton(this, items);
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_4__.extend)('flarum/forum/components/ReplyComposer', 'headerItems', function (items) {
    addComposerDeclarationButton(this, items);
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_4__.extend)('flarum/forum/components/DiscussionComposer', 'data', function (data) {
    data.creatorDeclarationData = this.composer.fields.creatorDeclarations || [];
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_4__.extend)('flarum/forum/components/ReplyComposer', 'data', function (data) {
    data.creatorDeclarationData = this.composer.fields.creatorDeclarations || [];
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_4__.override)('flarum/forum/components/DiscussionComposer', 'onsubmit', function (original) {
    const selected = this.composer.fields.creatorDeclarations || [];
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('creatorDeclarationsRequiredForDiscussion') && !selected.length) {
      this.chooseCreatorDeclarations();
      return;
    }
    original();
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_4__.override)('flarum/forum/components/ReplyComposer', 'onsubmit', function (original) {
    const selected = this.composer.fields.creatorDeclarations || [];
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('creatorDeclarationsRequiredForReply') && !selected.length) {
      this.chooseCreatorDeclarations();
      return;
    }
    original();
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_4__.extend)('flarum/forum/components/CommentPost', 'headerItems', function (items) {
    if (!shouldShowCreatorDeclarations() || !flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('creatorDeclarationShowOriginalInPostHeader')) {
      return;
    }
    const declarations = getCreatorDeclarations(this.attrs.post);
    const headerDeclarations = [{
      key: 'original',
      itemName: 'creatorDeclarationOriginal'
    }, {
      key: 'repost',
      itemName: 'creatorDeclarationRepost'
    }];
    headerDeclarations.forEach((_ref, index) => {
      let {
        key,
        itemName
      } = _ref;
      if (!declarations?.some(declaration => declaration.key() === key)) {
        return;
      }
      items.add(itemName, m((flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_2___default()), {
        text: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(`ffans-creator-declarations.forum.display.${key}_tooltip`, {}, true)
      }, m("button", {
        type: "button",
        className: `CreatorDeclarationHeaderTag CreatorDeclarationHeaderTag--${key}`,
        "aria-label": flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('ffans-creator-declarations.forum.display.open_details'),
        onclick: () => {
          flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().modal.show(() => __webpack_require__.e(/*! import() | forum/components/DeclarationInfoModal */ "forum/components/DeclarationInfoModal").then(__webpack_require__.bind(__webpack_require__, /*! ./components/DeclarationInfoModal */ "./src/forum/components/DeclarationInfoModal.tsx")), {
            declarations
          });
        }
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(`ffans-creator-declarations.forum.display.${key}_tag`))), 5 - index);
    });
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_4__.extend)('flarum/forum/components/CommentPost', 'content', function (content) {
    if (!shouldShowCreatorDeclarations()) {
      return;
    }
    const declarations = getCreatorDeclarations(this.attrs.post);
    const comment = content.find(item => item?.attrs?.contentHtml !== undefined);
    if (declarations?.length && comment) {
      comment.attrs.creatorDeclarations = declarations;
    }
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_4__.extend)('flarum/forum/components/Comment', 'view', function (content) {
    const declarations = this.attrs.creatorDeclarations;
    const bodyIndex = content.findIndex(item => item?.attrs?.className === 'Post-body');
    if (declarations?.length && bodyIndex !== -1) {
      content.splice(bodyIndex, 0, m(_components_DeclarationList__WEBPACK_IMPORTED_MODULE_9__["default"], {
        declarations: declarations
      }));
    }
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_4__.extend)((flarum_forum_utils_PostControls__WEBPACK_IMPORTED_MODULE_7___default()), 'moderationControls', function (items, post) {
    if (post.contentType() !== 'comment' || !post.canEditCreatorDeclarations()) return;
    items.add('creatorDeclarations', m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_1___default()), {
      icon: "fas fa-bullhorn",
      onclick: async () => {
        const selected = (0,_utils_declarations__WEBPACK_IMPORTED_MODULE_10__.selectionsFromModels)(await loadCreatorDeclarations(post));
        flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().modal.show(() => __webpack_require__.e(/*! import() | forum/components/DeclarationModal */ "forum/components/DeclarationModal").then(__webpack_require__.bind(__webpack_require__, /*! ./components/DeclarationModal */ "./src/forum/components/DeclarationModal.tsx")), {
          selected,
          showDisabled: !!flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().session.user?.isAdmin(),
          onsave: next => post.save({
            creatorDeclarationData: next
          })
        });
      }
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('ffans-creator-declarations.forum.controls.edit')));
  });
});flarum.reg.addChunkModule('forum/components/DeclarationModal', './src/forum/components/DeclarationModal.tsx', 'ffans-creator-declarations', 'forum/components/DeclarationModal');

/***/ },

/***/ "./src/forum/utils/declarations.ts"
/*!*****************************************!*\
  !*** ./src/forum/utils/declarations.ts ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   definitionFor: () => (/* binding */ definitionFor),
/* harmony export */   definitions: () => (/* binding */ definitions),
/* harmony export */   enabledDefinitions: () => (/* binding */ enabledDefinitions),
/* harmony export */   labelFor: () => (/* binding */ labelFor),
/* harmony export */   selectionsFromModels: () => (/* binding */ selectionsFromModels),
/* harmony export */   sortDeclarations: () => (/* binding */ sortDeclarations)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);

const definitions = [{
  key: 'original',
  icon: 'fas fa-certificate',
  color: '#2f855a',
  category: 'source',
  attribute: 'creatorDeclarationOriginalEnabled'
}, {
  key: 'repost',
  icon: 'fas fa-link',
  color: '#64748b',
  category: 'source',
  attribute: 'creatorDeclarationRepostEnabled',
  detailsType: 'url'
}, {
  key: 'ai_generated',
  icon: 'fas fa-wand-magic-sparkles',
  color: '#6557d2',
  category: 'authenticity',
  attribute: 'creatorDeclarationAiGeneratedEnabled',
  detailsType: 'text'
}, {
  key: 'fictional',
  icon: 'fas fa-masks-theater',
  color: '#7c3aed',
  category: 'authenticity',
  attribute: 'creatorDeclarationFictionalEnabled'
}, {
  key: 'personal_opinion',
  icon: 'fas fa-comment-dots',
  color: '#2563eb',
  category: 'authenticity',
  attribute: 'creatorDeclarationPersonalOpinionEnabled'
}, {
  key: 'professional',
  icon: 'fas fa-triangle-exclamation',
  color: '#d97706',
  category: 'safety',
  attribute: 'creatorDeclarationProfessionalEnabled',
  detailsType: 'text'
}, {
  key: 'sensitive',
  icon: 'fas fa-eye-slash',
  color: '#ea580c',
  category: 'safety',
  attribute: 'creatorDeclarationSensitiveEnabled',
  detailsType: 'text'
}, {
  key: 'self_promotion',
  icon: 'fas fa-bullhorn',
  color: '#0891b2',
  category: 'commercial',
  attribute: 'creatorDeclarationSelfPromotionEnabled'
}, {
  key: 'sponsored',
  icon: 'fas fa-handshake',
  color: '#0f766e',
  category: 'commercial',
  attribute: 'creatorDeclarationSponsoredEnabled',
  detailsType: 'text'
}];
function configuredOrder() {
  return String(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('creatorDeclarationOrder') || '').split(',').map(key => key.trim());
}
function orderIndex(key, order) {
  const configuredIndex = order.indexOf(key);
  if (configuredIndex !== -1) return configuredIndex;
  const definitionIndex = definitions.findIndex(definition => definition.key === key);
  return order.length + (definitionIndex === -1 ? definitions.length : definitionIndex);
}
function enabledDefinitions(preservedKeys) {
  if (preservedKeys === void 0) {
    preservedKeys = [];
  }
  const order = configuredOrder();
  return definitions.filter(definition => flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute(definition.attribute) !== false || preservedKeys.includes(definition.key)).sort((a, b) => orderIndex(a.key, order) - orderIndex(b.key, order));
}
function sortDeclarations(models) {
  const order = configuredOrder();
  return [...models].sort((a, b) => orderIndex(a.key(), order) - orderIndex(b.key(), order));
}
function definitionFor(key) {
  return definitions.find(definition => definition.key === key);
}
function labelFor(key) {
  return flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(`ffans-creator-declarations.lib.declarations.${key}.label`);
}
function selectionsFromModels(models) {
  return models.map(model => ({
    key: model.key(),
    details: model.metadata()?.details || ''
  }));
}
flarum.reg.add('ffans-creator-declarations', 'forum/utils/declarations', { definitions: definitions,enabledDefinitions: enabledDefinitions,sortDeclarations: sortDeclarations,definitionFor: definitionFor,labelFor: labelFor,selectionsFromModels: selectionsFromModels, });

/***/ },

/***/ "flarum/common/Component"
/*!*************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/Component')" ***!
  \*************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/Component');

/***/ },

/***/ "flarum/common/Model"
/*!*********************************************************!*\
  !*** external "flarum.reg.get('core', 'common/Model')" ***!
  \*********************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/Model');

/***/ },

/***/ "flarum/common/components/Button"
/*!*********************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/Button')" ***!
  \*********************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/Button');

/***/ },

/***/ "flarum/common/components/Form"
/*!*******************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/Form')" ***!
  \*******************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/Form');

/***/ },

/***/ "flarum/common/components/FormModal"
/*!************************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/FormModal')" ***!
  \************************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/FormModal');

/***/ },

/***/ "flarum/common/components/Icon"
/*!*******************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/Icon')" ***!
  \*******************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/Icon');

/***/ },

/***/ "flarum/common/components/Modal"
/*!********************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/Modal')" ***!
  \********************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/Modal');

/***/ },

/***/ "flarum/common/components/Tooltip"
/*!**********************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/components/Tooltip')" ***!
  \**********************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/components/Tooltip');

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

/***/ },

/***/ "flarum/common/models/Post"
/*!***************************************************************!*\
  !*** external "flarum.reg.get('core', 'common/models/Post')" ***!
  \***************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'common/models/Post');

/***/ },

/***/ "flarum/forum/app"
/*!******************************************************!*\
  !*** external "flarum.reg.get('core', 'forum/app')" ***!
  \******************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'forum/app');

/***/ },

/***/ "flarum/forum/components/PostsUserPage"
/*!***************************************************************************!*\
  !*** external "flarum.reg.get('core', 'forum/components/PostsUserPage')" ***!
  \***************************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'forum/components/PostsUserPage');

/***/ },

/***/ "flarum/forum/utils/PostControls"
/*!*********************************************************************!*\
  !*** external "flarum.reg.get('core', 'forum/utils/PostControls')" ***!
  \*********************************************************************/
(module) {

"use strict";
module.exports = flarum.reg.get('core', 'forum/utils/PostControls');

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
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
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		const inProgress = {};
/******/ 		const dataWebpackPrefix = "module.exports:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			let script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					const s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			const onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				const doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode?.removeChild(script);
/******/ 				doneFns?.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			const timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		let scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		const document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript?.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					let i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	__webpack_require__.f.compat = (chunkId, promises) => {
/******/ 	
/******/ 		const originalLoadChunk = __webpack_require__.l;
/******/ 		__webpack_require__.l = flarum.reg.loadChunk.bind(flarum.reg, originalLoadChunk);
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		const installedChunks = {
/******/ 			"forum": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				let installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							const promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							const url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							const error = new Error();
/******/ 							const loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										const errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										const realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										error.event = event;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		const webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			let [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		const chunkLoadingGlobal = self["webpackChunkmodule_exports"] = self["webpackChunkmodule_exports"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./forum.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extend: () => (/* reexport safe */ _src_forum__WEBPACK_IMPORTED_MODULE_0__.extend)
/* harmony export */ });
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.tsx");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map