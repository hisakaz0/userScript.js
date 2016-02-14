// ==UserScript==
// @name         improveUIForKancolleYPS
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  show date on html title area
// @author       pinkienort
// @match        http://www.dmm.com/netgame/social/-/gadgets/=/app_id=854854/
// @grant        none
// ==/UserScript==
/* jshint -W097 */
// 'use strict';

// Your code here...
// dispace no cllapsed btn with any window
var yps_btns = document.getElementById('YPS_allclose')
yps_btns.style.whiteSpace = 'nowrap'
