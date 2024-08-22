import { globalObj } from "../global";
import {
  createNode,
  addClass,
  addClassPm,
  setAttribute,
  addEvent,
  appendChild,
  getModalFocusableData,
  fireEvent,
  handleFocusTrap,
  debug,
} from "../../utils/general";

import { guiManager } from "../../utils/gui-manager";
import {
  PREFERENCES_MODAL_NAME,
  DIV_TAG,
  ARIA_HIDDEN,
  BUTTON_TAG,
  CLICK_EVENT,
} from "../../utils/constants";
import QRCode from "qrcode";

const BASE_URL = "https://66c62633134eb8f43496e796.mockapi.io/api/mentoring";

/**
 * @callback CreateMainContainer
 */

/**
 * Generates preferences modal and appends it to "cc-main" el.
 * @param {import("../global").Api} api
 * @param {CreateMainContainer} createMainContainer
 */
export const createPreferencesModal = (api, createMainContainer) => {
  const state = globalObj._state;
  const dom = globalObj._dom;
  const { hidePreferences } = api;

  /**
   * @type {import("../global").PreferencesModalOptions}
   */
  const modalData =
    state._currentTranslation && state._currentTranslation.preferencesModal;

  if (!modalData) return;

  if (!dom._pmContainer) {
    dom._pmContainer = createNode(DIV_TAG);
    addClass(dom._pmContainer, "pm-wrapper");

    const pmOverlay = createNode("div");
    addClass(pmOverlay, "pm-overlay");
    appendChild(dom._pmContainer, pmOverlay);

    /**
     * Hide modal when overlay is clicked
     */
    addEvent(pmOverlay, CLICK_EVENT, hidePreferences);

    // Preferences modal
    dom._pm = createNode(DIV_TAG);

    addClass(dom._pm, "pm");
    setAttribute(dom._pm, "role", "dialog");
    setAttribute(dom._pm, ARIA_HIDDEN, true);
    setAttribute(dom._pm, "aria-modal", true);
    setAttribute(dom._pm, "aria-labelledby", "pm__title");

    // Hide preferences on 'esc' key press
    addEvent(
      dom._htmlDom,
      "keydown",
      (event) => {
        if (event.keyCode === 27) hidePreferences();
      },
      true
    );

    dom._pmCloseBtn = createNode(BUTTON_TAG);
    addClassPm(dom._pmCloseBtn, "close-btn");
    setAttribute(dom._pmCloseBtn, "aria-label", modalData.closeIconLabel || "");
    addEvent(dom._pmCloseBtn, CLICK_EVENT, hidePreferences);

    dom._pmBody = createNode(DIV_TAG);
    dom._pmBody.style.display = "flex";
    dom._pmBody.style.alignItems = "center";
    dom._pmBody.style.justifyContent = "center";

    addClassPm(dom._pmBody, "body");

    dom._code = createNode("canvas");
    dom._code.id = "QR_CODE";
    appendChild(dom._pmBody, dom._code);

    const queries = [
      fetch(`${BASE_URL}/me`).then((res) => res.json()),
      fetch(`${BASE_URL}/teams`).then((res) => res.json()),
    ];

    Promise.all(queries)
      .then((responses) => {
        const [meQuery, teamsQuery] = responses;

        const queryName = meQuery[0].name;
        const queryTeam = teamsQuery[0].name;

        QRCode.toCanvas(
          dom._code,
          `My name is ${queryName} and my favorite team is ${queryTeam}`,
          {
            width: 400,
            height: 400,
          }
        );
      })
      .catch(console.error);

    // HERE CUSTOMIZE ---------------------------

    appendChild(dom._pm, dom._pmBody);

    appendChild(dom._pmContainer, dom._pm);
  } else {
    dom._pmNewBody = createNode(DIV_TAG);
    addClassPm(dom._pmNewBody, "body");
  }

  guiManager(1);

  if (!state._preferencesModalExists) {
    state._preferencesModalExists = true;

    debug("CookieConsent [HTML] created", PREFERENCES_MODAL_NAME);

    fireEvent(
      globalObj._customEvents._onModalReady,
      PREFERENCES_MODAL_NAME,
      dom._pm
    );
    createMainContainer(api);
    appendChild(dom._ccMain, dom._pmContainer);
    handleFocusTrap(dom._pm);

    /**
     * Enable transition
     */
    setTimeout(() => addClass(dom._pmContainer, "cc--anim"), 100);
  }

  getModalFocusableData(2);
};
