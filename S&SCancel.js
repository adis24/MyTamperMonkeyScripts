// ==UserScript==
// @name        S&S Cancel
// @version     1
// @author      Aditya Shrivastava
// @description Auto cancel
// @include https://www.amazon.com/auto-deliveries/cancelSubscription?subscriptionId=*
// @include https://www.amazon.in/auto-deliveries/cancelSubscription?subscriptionId=*
// @include https://smile.amazon.com/auto-deliveries/cancelSubscription?subscriptionId=*
// @include https://smile.amazon.in/auto-deliveries/cancelSubscription?subscriptionId=*
// @include https://www.amazon.com/auto-deliveries/cancelSubscription?sourcePage=myd&subscriptionId=*
// @include https://www.amazon.in/auto-deliveries/cancelSubscription?sourcePage=myd&subscriptionId=*
// @include https://smile.amazon.com/auto-deliveries/cancelSubscription?sourcePage=myd&subscriptionId=*
// @include https://smile.amazon.in/auto-deliveries/cancelSubscription?sourcePage=myd&subscriptionId=*
// ==/UserScript==

(function() {
    'use strict';
    document.getElementById("sns-cancellation-dropdown").selectedIndex = 8;
    document.getElementById("confirmCancelLink").getElementsByTagName("input")[0].click();

})();
