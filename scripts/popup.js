/** Conner Ardman
 *  Set the click handlers for the popup buttons
 */
function removeReverts() {
   chrome.tabs.executeScript({
     file: 'scripts/removeReverts.js'
   });
}

function go() {
   removeReverts();
  chrome.tabs.executeScript({
    file: 'scripts/content.js'
  });
}

function revert() {
  chrome.tabs.executeScript({
    file: 'scripts/revert.js'
  });
}

document.getElementById('go').addEventListener('click', go);
document.getElementById('revert').addEventListener('click', revert);
