/** Conner Ardman
 *  Revert the page back to its original state
 */

// Conversions in form: [old number, new number]
var CONVERSIONS = [
  [/INFO 470/, 'INFO 300'],
  [/INFO 343/, 'INFO 340'],
  [/INFO 340/, 'INFO 330'],
  [/INFO 330/, 'INFO 331'],
  [/INFO 450/, 'INFO 350'],
  [/INFO 341/, 'INFO 314'],
  [/INFO 445/, 'INFO 430'],
  [/INFO 344/, 'INFO 441'],
  [/INFO 444/, 'INFO 464'],
  [/INFO 461/, 'INFO 442']
];

revert();

function revert() {
   console.log("revert");
   var elements = document.querySelectorAll('.info_changed');
   // Parse the entire page replacing course numbers
   outer:
   for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      for (var j = 0; j < element.childNodes.length; j++) {
         var node = element.childNodes[j];
         if (node.nodeType === 3 && !node.parentNode.classList.contains("info_reverted") &&
            node.parentNode.classList.contains("info_changed")) { // If it is a text node
            var text = node.nodeValue;
            var parent = node.parentNode;
            for (var x = 0; x < CONVERSIONS.length; x++) {
               replacedText = text.replace(CONVERSIONS[x][0], CONVERSIONS[x][1]);
               if (replacedText != text) {
                  parent.classList.remove("info_changed");
                  parent.classList.add("info_reverted")
                  element.replaceChild(document.createTextNode(replacedText), node);
                  continue outer;
               }
            }
         }
      }
   }
}
