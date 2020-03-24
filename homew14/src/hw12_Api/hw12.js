export const photosOfCharacters = {
    "Luke Skywalker": "images/lukeSkywalker.jpg",
    "R2-D2": "images/r2D2.jpg",
    "Darth Vader": "images/darthVader.jpeg",
    "C-3PO": "images/c3po.png",
    "Leia Organa": "images/leia.jpg",
    "Wedge Antilles": "images/vedge.jpg",
    "Chewbacca": "images/chew.jpg",
    "Han Solo": "images/hanS.jpg",
    "Yoda": "images/yoda.jpg",
    'Obi-Wan Kenobi': "images/obiVan.jpg",
    "Boba Fett": "images/bobaFet.jpg",
    "Palpatine": "images/palpatine.jpg",
    "IG-88": "images/ig88.jpg",
    "Lobot": "images/lobot.jpeg",
    "Bossk": "images/bossk.jpg",
    "Lando Calrissian": "images/landoC.jpg",
}

export async function getCharacters() {
    const res =  await axios.get('https://swapi.co/api/films/2');
    const arr = res.data.characters;
    const container = document.querySelector('.users');
   arr.forEach(el => {
      let newR = axios.get(el).then(newR => {
       const infoCharacter = document.createElement('div');
       const name = newR.data.name;
       infoCharacter.innerHTML = `
       <img class="photo" src="${photosOfCharacters[name]}">
       <h3>${newR.data.name}</h3>
       <h5>${newR.data.birth_year}</h5>
       <p>${newR.data.gender}</p>
       `
       container.append(infoCharacter);
       infoCharacter.classList.add('user')
       });
      
})
}