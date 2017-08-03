fetch('band.json').then(function(response) {
  return response.json();
}).then(function(band) {

  var counter = 0;

  // var nodesArray = [].slice.call(document.querySelector("li"));

  band.forEach(function(element, index){
     var bandname = 'band-' + (index+1);
     var bandName = (band[index].name);
     var sectionName = 'band' + (index+1);

     document.getElementById(bandname).innerHTML = bandName;
     var ulArray = document.getElementById(sectionName).querySelectorAll("ul>li");

      for(var i=0; i < band[index].members.length; i++){

         var membersName = (band[index].members[i].name);
         var membersIns = (band[index].members[i].instrument);
         ulArray[i].textContent=(membersName + ' ' + membersIns);
       }

      for(var j=0; j < band[index].albums.length; j++){

         var albumsTitle = (band[index].albums[j].title);
         var albumsReleaseYear =(band[index].albums[j].releaseYear);
         ulArray[j+2].textContent=(albumsTitle + ' ' + albumsReleaseYear);
    }
     console.log(ulArray);
  })
});




