var url = 'band.json';
var tagMain = document.querySelector('main');

function loadJson(url){
  fetch(url).then(function(response){
      return response.json();

    }).then(whenJsonLoaded)

      .catch(function(err){
        return err;
  });
}

loadJson(url);

function sortByName(a, b){
  if (a.name > b.name){
     return 1
  } if(a.name < b.name){
    return -1
  }
  return 0
}


function sortByReleaseYear(a, b){
  if (a.releaseYear > b.releaseYear){
     return 1
  } if(a.releaseYear < b.releaseYear){
    return -1
  }
  return 0
}

// function whenJsonLoaded(band){
//    console.log(band);
//    tagMain.textContent = '';

//   var wrapper = document.createDocumentFragment();


//   band.forEach(function(element, index){

//       var crEl = document.createElement;
//       var h1 = crEl('h1');
//       var h2 = crEl('h2');
//       // var h3 = crEl('h3');
//       var ul = crEl('ul');
//       var section = crEl('section');
//       var header = crEl('header');
//       // header.appendChild(document.createTextNode(band[index].name));
//       h1.textContent = band[index].name;
//       header.appendChild(h1);
//       h2.textContent = band[index].genre;
//       // h3.textContent = 'Members';
//       section.appendChild(header);
//       section.appendChild(h2);
//       // section.appendChild(h3);

//       var wrapper1 = document.createDocumentFragment();

//       for(var i=0; i < band[index].members.length; i++){
//          var memberName = band[index].members[i].name;
//          var memberInst = band[index].members[i].instrument;
//          var li = crEl('li');

//          li.innerHTML = (memberName + ' , ' + memberInst);
//          ul.appendChild(li);
//          wrapper1.appendChild(ul);
//       }

//       section.appendChild(wrapper1);

//       var wrapper2 = document.createDocumentFragment();

//       for(var i=0; i < band[index].albums.length; i++){
//         var albumsTitle = band[index].albums[i].title;
//         var albumsReleaseYear = band[index].albums[i].releaseYear;
//         var li = crEl('li');

//         li.innerHTML = (albumsTitle + ' , ' + albumsReleaseYear);
//         ul.appendChild(li);
//         wrapper2.appendChild(ul);
//       }

//       section.appendChild(wrapper2);

//       wrapper.appendChild(section);
//       tagMain.appendChild(wrapper);

//   })

// };



 //Dynamic version with map()...====>>

function whenJsonLoaded(bands){

  tagMain.textContent = '';

  var completeListOfHtml = bands.sort(sortByName).map(function(band, index){

      var memberName ='';
      var albumsTitle ='';
      var albumsReleaseYear ='';
      band.members = band.members.sort(sortByName);
      band.albums = band.albums.sort(sortByReleaseYear);

      for(var i=0; i < band.members.length; i++){

         memberName += "<li>" + band.members[i].name + ','
                      + band.members[i].instrument + "</li>";
      }

      for(var i=0; i < band.albums.length; i++){

         albumsTitle += "<li>" +band.albums[i].title + ','
                       + band.albums[i].releaseYear + "</li>";
      }

    return `<section>
     <header>
      <h1 id="band-8">${band.name}</h1>
     </header>
     <h3>${band.genre}</h3>
     <h3>Members</h3>
     <ul>
       ${memberName}
     </ul>
     <h3>Albums</h3>
     <ul>
       ${albumsTitle}
    </ul>
   </section>`

  }).join('');

  tagMain.innerHTML = completeListOfHtml;
}





 //Static Version...======>>>

// fetch('band.json').then(function(response) {
//   return response.json();
// }).then(function(band) {

//   // var nodesArray = [].slice.call(document.querySelector("li"));

//   band.forEach(function(element, index){
//      var bandname = 'band-' + (index+1);
//      var bandName = (band[index].name);
//      var sectionName = 'band' + (index+1);

//      document.getElementById(bandname).innerHTML = bandName;
//      var ulArray = document.getElementById(sectionName).querySelectorAll("ul>li");

//       for(var i=0; i < band[index].members.length; i++){

//          var membersName = (band[index].members[i].name);
//          var membersIns = (band[index].members[i].instrument);
//          ulArray[i].textContent=(membersName + ' ' + membersIns);
//        }

//       for(var j=0; j < band[index].albums.length; j++){

//          var albumsTitle = (band[index].albums[j].title);
//          var albumsReleaseYear =(band[index].albums[j].releaseYear);
//          ulArray[j+2].textContent=(albumsTitle + ' ' + albumsReleaseYear);
//     }
//      console.log(ulArray);
//   })
// });












// var d = document.createDocumentFragment();
//     d.appendChild(document.getElementsByTagName("LI")[0]);
//     d.childNodes[0].childNodes[1].nodeValue = "Milk";
//     document.getElementsByTagName("UL")[0].appendChild(d);
// }

// var docFrag = document.createDocumentFragment();
// for(var i = 0; i < divs.length; i++) {
//   docFrag.appendChild(divs[i]); // Note that this does NOT go to the DOM
// }

// document.body.appendChild(docFrag); // Appends all divs at once


 // div = document.createElement('div');
 //                div.className = (i % 2 != 0 && j % 2 == 0) || (i % 2 == 0 && j % 2 != 0) ? 'black' : 'white';
 //                fragment.appendChild(div);