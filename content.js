// Bug if press button after already changed
update();
function update() {
   var elements = document.getElementsByTagName('*');

   var conversions = [
      [/INFO 300/, 'INFO 470'],
      [/INFO 330/, 'INFO 340'],
      [/INFO 340/, 'INFO 343'],
      [/INFO 350/, 'INFO 450'],
      [/INFO 314/, 'INFO 341'],
      [/INFO 340/, 'INFO 331'],
      [/INFO 430/, 'INFO 445'],
      [/INFO 441/, 'INFO 344'],
      [/INFO 464/, 'INFO 444'],
      [/INFO 442/, 'INFO 461']
   ];
   for (var i = 0; i < elements.length; i++) {
      var element = elements[i];

      for (var j = 0; j < element.childNodes.length; j++) {
         var node = element.childNodes[j];

         if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text;
            for (var x = 0; x < conversions.length; x++) {
               var replacedText = text.replace(conversions[x][0], conversions[x][1]);
               if (replacedText !== text) {
                  element.replaceChild(document.createTextNode(replacedText), node);
                  break;
               }
            }
         }
      }
   }
}
