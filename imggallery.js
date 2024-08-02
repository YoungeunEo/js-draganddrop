// const draggables = document.querySelectorAll(".draggable");
// const containers = document.querySelectorAll(".container");

// draggables.forEach((draggable) => {
//     draggable.addEventListener("dragstart",() => {
//         draggable.classList.add("dragging");
//     });
//     draggable.addEventListener("dragend",() => {
//         draggable.classList.add("dragging");
//     });
// });

// containers.forEach((container) => {
//     container.addEventListener("dragover", (e) =>{
//         e.preventDefault ();
//         const afterElement = getDragAfterElement(container, e.clientX);
//         const draggable = document.querySelector(".dragging");
//         if (afterElement === undefined) {
//             container.appendChild(draggable);
//         }else {
//             container.insertBefore(draggable, afterElement);
//         }
//     });
// });

// //버튼만드는거임 위에거는


const gallery = document.getElementById('gallery');
const image = gallery.querySelectorAll('img');
let dragImage = null;

images.forEach((image) => {
    image.addEventListener("dragstart", ()=> {
        image.classList.add('dragging');
        dragImage = image;
    })
    image.addEventListener("dragend", ()=> {
    image.classList.add('dragging');
 });
 image.addEventListener('dragover', (e)=> {
    e.preventDefault
    console.log('드래그 오버');
 });
 image.addEventListener('drop', (e) =>{
    e.preventDefault
    if(dragImage !== image) {
        gallery.insertBefore(dragImage, image);
    }

 })


})
