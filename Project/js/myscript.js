function enlargeImage(img) {
    console.log
    // create a modal element
    var modal = document.createElement("div");
    modal.classList.add("modal");
    console.log
  
    // create an image element inside the modal
    var modalImg = document.createElement("img");
    modalImg.src = img.src.replace("thumb/", "large/"); // replace thumbnail image source with full-size image source
    modalImg.alt = img.alt;
    modal.appendChild(modalImg);
  
    // add the modal to the document
    document.body.appendChild(modal);
  
    // add a click event listener to the modal to close it when clicked
    modal.addEventListener("click", function() {
      document.body.removeChild(modal);
    });
  }
  