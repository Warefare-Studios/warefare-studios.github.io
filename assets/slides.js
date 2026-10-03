var pictureIndex= 0;
    showPics();
        
    function showPics() {
      var i;
      var pictures = document.getElementsByClassName("slides");
      for (i = 0; i < pictures.length; i++) {
        pictures[i].style.display = "none";}
      pictureIndex++;
      if (pictureIndex > pictures.length) {
        pictureIndex = 1}
     pictures[pictureIndex-1].style.display = "block";
        setTimeout(showPics, 1500)}

