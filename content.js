/** Conner Ardman
 *  Replace all instances of Informatics course numbers with
 *  the old versions of the numbers
 */

// TODO title doesn't always update - due to it not being loaded yet
// TODO allow user to turn it on or off for page
// TODO revert button

 // Conversions in form: [new number, old number]
const CONVERSIONS = [
    [/INFO 300/, 'INFO 470'],
    [/INFO 340/, 'INFO 343'],
    [/INFO 330/, 'INFO 340'],
    [/INFO 331/, 'INFO 330'],
    [/INFO 350/, 'INFO 450'],
    [/INFO 314/, 'INFO 341'],
    [/INFO 430/, 'INFO 445'],
    [/INFO 441/, 'INFO 344'],
    [/INFO 464/, 'INFO 444'],
    [/INFO 442/, 'INFO 461']
];

init();
// Load in JQuery Library, update the page, its title, and set the
// page to update whenever the DOM changes
function init() {
   loadJquery();
   update();
   $(document).bind("DOMNodeInserted", function() {
      update();
   });
}

function loadJquery() {
   var script = document.createElement('script');
   script.src = '//code.jquery.com/jquery-1.11.0.min.js';
   document.getElementsByTagName('head')[0].appendChild(script);
}

// Update the page title if it contains an old Informatics course number
function updateTitle() {
   for (var x = 0; x < CONVERSIONS.length; x++) {
      document.title = document.title.replace(CONVERSIONS[x][0], CONVERSIONS[x][1]);
   }
}

function update() {
   console.log("update");
   var elements = document.querySelectorAll('*');
   // Parse the entire page replacing course numbers
   outer:
   for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      for (var j = 0; j < element.childNodes.length; j++) {
         var node = element.childNodes[j];
         if (node.nodeType === 3 && !node.parentNode.classList.contains("info_changed")) { // If it is a text node
            var text = node.nodeValue;
            var parent = node.parentNode;
            for (var x = 0; x < CONVERSIONS.length; x++) {
               replacedText = text.replace(CONVERSIONS[x][0], CONVERSIONS[x][1]);
               if (replacedText != text) {
                  parent.classList.add("info_changed");
                  element.replaceChild(document.createTextNode(replacedText), node);
                  continue outer;
               }
            }
         }
      }
   }
}
