document.getElementById('owl').onclick = function(){
        alert("owl clicked")
    }

     // attachEvent()
    // jQuery - on

    // type, timestamp, defaultPrevented
    // target, toElement, srcElement, currentTarget,
    // clientX, clientY, screenX, screenY
    // altkey, ctrlkey, shiftkey, keyCode

    // document.getElementById('images').addEventListener('click', function(e){
    //     console.log("clicked inside the ul");
    // }, false)

    // document.getElementById('owl').addEventListener('click', function(e){
    //     console.log("owl clicked");
    //     e.stopPropagation()
    // }, false)
    
    // document.getElementById('google').addEventListener('click',function(e){
    //     e.preventDefault();
    //     e.stopPropagation()
    //     console.log("google clicked");
    // }, false)
   
    
    // document.querySelector('#images').addEventListener('click', function(e){
    //     console.log(e.target.tagName);
    //     if (e.target.tagName === 'IMG') {
    //         console.log(e.target.id);
    //         let removeIt = e.target.parentNode
    //         removeIt.remove()
    //     }
    // })
    
    //removeIt.parentNode.removeChild(removeIt)
    // document.getElementById('google').setAttribute('target', '_blank')
    // document.getElementById('google').addEventListener('click', function (event) {
    //     // event.preventDefault();
    //     console.log('google, clicked');
        
    // }, false)

    // const img = document.querySelector('#images')
    // console.log(img);

    document.getElementById('images').addEventListener('click', function (event) {
        
        const elementToRemove = event.target.parentNode
        // elementToRemove.remove() 
            // use above or below code
        elementToRemove.parentNode.removeChild(elementToRemove)
        
    })
// <============ above logic, but on clicking li tag it will not remove all images. ============>
//     document.getElementById('images').addEventListener('click', function (event) {
//   // Check if the clicked target is an image
//   if (event.target.tagName.toLowerCase() === 'img') {
//     // Remove the parent <li> of the clicked image
//     event.target.parentNode.remove();
//   }
// });

    