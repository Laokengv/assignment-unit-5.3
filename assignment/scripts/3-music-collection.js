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

console.log(collection);

function showCollection(array){
    console.log('Number of songs in the collecton: ${array.length}');
    for(let i of array){
      console.log('${array[i].title} by ${array[i].artist}, published in ${array[i].yearPublished}');
    }
  }
  
  console.log(showCollection(collection));
  
function search() {

}

function findByArtist(artist){
    let result = [];
    for(i in collection){
      if(artist === collection[i].artist){
        result.push(collection[i]);
      }
    }
  }
  console.log(findByArtist(collection));
  