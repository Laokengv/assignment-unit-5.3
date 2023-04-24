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

