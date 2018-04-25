/** Conner Ardman
 *  Add JQuery to the page and execute content.js
 */
loadJquery();
function loadJquery() {
   var script = document.createElement('script');
   script.src = '//code.jquery.com/jquery-1.11.0.min.js';
   document.getElementsByTagName('head')[0].appendChild(script);
}
chrome.browserAction.onClicked.addListener(function(tab) {
   chrome.tabs.executeScript(null, {file: "content.js"});
});
