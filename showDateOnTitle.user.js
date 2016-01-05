// ==UserScript==
// @name         showDateOnTitle
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  show date on html title area
// @author       pinkienort
// @match        http://www.dmm.com/netgame/social/-/gadgets/=/app_id=854854/
// @grant        none
// @srouce       https://gist.github.com/pinkienort/4a8c63d9e3bcf1d6d9d8
// ==/UserScript==
/* jshint -W097 */
// 'use strict';

// Your code here...
// Format: DAY MM/DD HH:MM:SS
function showDateOnTitle(){
  var now = new Date();
  var day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  document.title = day[now.getDay()]
    + ' ' + now.getMonth()
    + '/' + now.getDate()
    + ' ' + now.getHours()
    + ':' + now.getMinutes()
    + ':' + now.getSeconds();
  var t = setTimeout(showDateOnTitle, 500);
}

showDateOnTitle();
