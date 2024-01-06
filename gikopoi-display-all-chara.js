// ==UserScript==
// @name         gikopoi-display-all-chara
// @namespace    http://tampermonkey.net/
// @version      2024-01-06
// @description  try to take over the world!
// @author       ebetsu-software
// @match        https://gikopoipoi.net/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  const characterSelectionEl = document.getElementById("character-selection");
  const child = characterSelectionEl.children;

  for (let i = 0; i < child.length; i++) {
    if (child[i].style.display === "none") {
      child[i].style.display = "";
      Array.from(child[i].childNodes).forEach((node) => {
        if (node.nodeType === 3) {
          node.textContent = "";
        }
      });
    }
  }
})();
