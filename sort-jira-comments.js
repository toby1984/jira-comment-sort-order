// ==UserScript==
// @name         Enforce JIRA comment sort order.
// @namespace    git@github.com:toby1984/jira-comment-sort-order.git
// @version      1.0
// @description  Force on-premise JIRA comments to be 'most recent comment at bottom of page'
// @author       @toby1984 (Tobias Gierke)
// @match        https://issues/browse/*
// @grant        none
// ==/UserScript==

setTimeout( function() {
  'use strict';
  
  var success = false;
  const btn = document.getElementById("sort-button");
  if ( btn ) {
    const order = btn.getAttribute("data-order");
    if ( order ) {
      success = true;
      if ( order !== 'desc' ) {
        btn.click();
      }         
    }
  }
    
  if ( ! success ) {
    alert("GreaseMonkey script to fix comment sort order failed");      
  }
}, 1000 );
