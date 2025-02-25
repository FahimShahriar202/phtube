//1- fetch, catch and load categories on html

// create loadCategories
const loadCategories = () => {
  // fetch the data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")


  // if data fetched we get response, we make the response a json object
  .then((res) => res.json())

  // the json object is a data now
  .then((data)=> displayCategories(data.categories))

  // if not fetched er get error
  .catch((error)=> cojnsole.log(error));
}


// create displayCategories
const displayCategories = (data) =>{
  console.log(data)
}



