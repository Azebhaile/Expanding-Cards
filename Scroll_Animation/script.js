const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)
//eventListener takes the event scroll and does the checkboxes function.
checkBoxes()

function checkBoxes(){
 const triggerBottom = window.innerHeight /5 *4
    // console.log (window.innerHeight) to see the height and set the trigger point

 boxes.forEach(box => {
// getBoundClientRect to set the rectangle position as per the top
     const boxTop = box.getBoundingClientRect().top

     if(boxTop < triggerBottom){

         box.classList.add('show')

     }else {
         box.classList.remove('show')
     }

 })
}