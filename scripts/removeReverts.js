/** Conner Ardman
 *  Remove all instances of .info_reverted from the DOM 
 */
var elements = document.querySelectorAll('.info_reverted');

for (var i = 0; i < elements.length; i++) {
   elements[i].classList.remove("info_reverted");
}
