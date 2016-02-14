// ==UserScript==
// @name         Display Toggle Btn for Kancolle YPS Information Area
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       pinkienort 
// @match        http://www.dmm.com/netgame/social/-/gadgets/=/app_id=854854/
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js
// @source       https://gist.github.com/pinkienort/a302e31a658226648b2e
// ==/UserScript==
/* jshint -W097 */
// 'use strict';

// Your code here...
function attachDisplayToggleBtn() {
  var info_panel = document.getElementById('YPS_allclose').parentElement.nextElementSibling;
  info_panel.style.display = "block";
  var btn = document.createElement("button");
  btn.innerText        = "Display Toggle";
  btn.id               = "display-toggle"
  btn.style.position   = "absolute";
  btn.style.whiteSpace = 'nowrap'
  btn.style.top        = "50px";
  btn.style.left       = "1024px";

  var yps_btn_wrapper    = document.getElementById("YPS_allclose").parentElement;
  var body_wrapper       = yps_btn_wrapper.parentElement;
  body_wrapper.insertBefore(btn,yps_btn_wrapper);

  btn.addEventListener('click', function() {
  var info_panel = document.getElementById('YPS_allclose').parentElement.nextElementSibling;
    if (info_panel.style.display == "block") {
      info_panel.style.display = "none";
    } else {
      info_panel.style.display = "block";
    }
  });
  document.removeEventListener("DOMNodeInserted", detectLunchYps);
}

var init = _.once(attachDisplayToggleBtn);

function detectLunchYps() {
  if(document.getElementById('YPS_allclose')){
    init();
  }
}

document.addEventListener("DOMNodeInserted", detectLunchYps);
