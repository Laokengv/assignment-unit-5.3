console.log('***** Music Collection *****');

const collection = [];

function addToCollection(title, artist, yearPublished){
let albums = {
  title: title,
  artist: artist,
  yearPublished: yearPublished
  }
  collection.push(albums);
  return albums;
}

console.log('Adding first album:', addToCollection('Social Cues', 'Cage The Elephant', '2019'));
console.log('Adding second album:', addToCollection('KOD', 'J. Cole', '2018'));
console.log('Adding third album:', addToCollection('In Return', 'Odesza', '2014'));
console.log('Adding fourth album:', addToCollection('On Top of The Covers', 'T-Pain', '2023'));
console.log('Adding fifth album:', addToCollection('IGOR', 'Tyler, the Creator', '2019'));
console.log('Adding sixth album:', addToCollection('Goblin', 'Tyler, the Creator', '2011'));

// console.log(collection);

function showCollection(albums){
    console.log(`Number of songs in the collecton: ${albums.length}`);
    for(let album of albums){
      console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
    }
  }
  
  console.log(showCollection(collection));
  

  function findByArtist(artist){
   let result  = [];
   for (let album of collection) {
    if (match.artist === artist) {
    result.push(album);
    console.log(findByArtist(collection));
    }
   } 
   return result;
  }

  function search(item) {
    let searchResults = [];
    for (let album of collection) {
      if (album.artist === item || album.yearPublished === item) {
        searchResults.push('artist:' + album.artist + ', year:' + album.yearPublished);
      } else {
        searchResults;
      }
    }
    if(!item) {
      searchResults.push(collection);
    }
    return searchResults;
  }

  //Testing search function
  console.log(search('Odesza'));
  console.log(search('T-Pain'));
  console.log(search('Tyler, the Creator'));
  console.log(search('J Cole'));
  console.log(search());



