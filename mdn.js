/*
To obtain the JSON, we use the Fetch API. This API allows us to make network requests to retrieve resources from a server via JavaScript (e.g. images, text, JSON, HTML snippets), meaning that we can update small sections of content without having to reload the entire page.

In our populate function, the first four lines use the Fetch API to fetch the JSON from the server:
we declare the requestURL variable to store the GitHub URL
we use the URL to initialize a new Request object.
we make the network request using the fetch() function, and this returns a Response object
we retrieve the response as JSON using the json() function of the Response object.


*/
async function populate() {
    const requestURL =
      "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
    const request = new Request(requestURL);
  
    const response = await fetch(request);
    const superHeroes = await response.json();
  
    populateHeader(superHeroes);
    populateHeroes(superHeroes);
  }
  
  
  /*
  Now that we've retrieved the JSON data and converted it into a JavaScript object, let's make use of it by writing the two functions we referenced above.
  
  We first create an h1 element with createElement(), 
  set its textContent to equal the squadName property of the object, 
  then append it to the header using appendChild(). 
  We then do a very similar operation with a paragraph: create it, set its text content and append it to the header.
  */ 
  
  function populateHeader(obj) {
    const header = document.querySelector("header");
    const myH1 = document.createElement("h1");
    myH1.textContent = obj.squadName;
    header.appendChild(myH1);
  
    const myPara = document.createElement("p");
    myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
    header.appendChild(myPara);
  }
  
  
  //Create the hero information cards
  
  /*  
  
  To start with, we store the members property of the JavaScript object in a new variable. This array contains multiple objects that contain the information for each hero.
  
  Next, we use a for...of loop to loop through each object in the array. For each one, we:
  
  Create several new elements: an <article>, an <h2>, three <p>s, and a <ul>.
  Set the <h2> to contain the current hero's name.
  Fill the three paragraphs with their secretIdentity, age, and a line saying "Superpowers:" to introduce the information in the list.
  Store the powers property in another new constant called superPowers — this contains an array that lists the current hero's superpowers.
  Use another for...of loop to loop through the current hero's superpowers — for each one we create an <li> element, put the superpower inside it, then put the listItem inside the <ul> element (myList) using appendChild().
  The very last thing we do is to append the <h2>, <p>s, and <ul> inside the <article> (myArticle), then append the <article> inside the <section>.
  
  The order in which things are appended is important, as this is the order they will be displayed inside the HTML.
  
   */
  
  function populateHeroes(obj) {
    const section = document.querySelector("section");
    const heroes = obj.members;
  
    for (const hero of heroes) {
      const myArticle = document.createElement("article");
      const myH2 = document.createElement("h2");
      const myPara1 = document.createElement("p");
      const myPara2 = document.createElement("p");
      const myPara3 = document.createElement("p");
      const myList = document.createElement("ul");
  
      myH2.textContent = hero.name;
      myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
      myPara2.textContent = `Age: ${hero.age}`;
      myPara3.textContent = "Superpowers:";
  
      const superPowers = hero.powers;
  
      for (const power of superPowers) {
        const listItem = document.createElement("li");
        listItem.textContent = power;
        myList.appendChild(listItem);
      }
  
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);
  
      section.appendChild(myArticle);
    }
  }
  
  
  /* Next we call the top-level function  */
  
  populate();
  