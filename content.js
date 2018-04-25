/** Conner Ardman
 *  Replace all instances of Informatics course numbers with
 *  the old versions of the numbers
 */

// TODO organize files

// Conversions in form: [new number, old number]
var CONVERSIONS = [
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
   update();
   $(document).bind("DOMNodeInserted", function() {
      update();
   });
}


function update() {
   if (document.querySelectorAll(".info_reverted").length > 0) {
      return;
   }
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
