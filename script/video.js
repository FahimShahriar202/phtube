//1- fetch, catch and load categories on html

// create loadCategories
const loadCategories = () => {
  // fetch the data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")


    // if data fetched we get response, we make the response a json object
    .then((res) => res.json())

    // the json object is a data now
    .then((data) => displayCategories(data.categories))

    // if not fetched er get error
    .catch((error) => console.log(error));
}


// create displayCategories
const displayCategories = (categories) => {

  const categoryContainer = document.getElementById('categories');
  categories.forEach(item => {
    console.log(item);

    // createbutton st
    const button = document.createElement('button');
    button.classList = 'btn';
    button.innerText = item.category;

    // createbutton st


    categoryContainer.append(button)
  });
}

// loadCategories end



// loadVideos st
const loadVideos = () => {
  // fetch the data
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")


    // if data fetched we get response, we make the response a json object
    .then((res) => res.json())

    // the json object is a data now
    .then((data) => displayVideos(data.videos))

    // if not fetched er get error
    .catch((error) => console.log(error));
}

// displayVideos st
const displayVideos = (videos) => {
  const videoContainer = document.getElementById("videos");

  videos.forEach(video => {
    console.log(video);

    const card = document.createElement("div");
    card.classList = "card bg-base-70 w-70 shadow-sm";
    card.innerHTML = `
     <figure class=" pt-3 h-[150px]">
    <img
      src= ${video.thumbnail}
      alt="Shoes"
      class="rounded-xl h-full w-full object-cover" />
  </figure>
  <div class="py-2 px-0 items-center text-center flex gap-2">
     <div>
       <img class=" w-10 h-10 rounded-full object-cover" src= ${video.authors[0].profile_picture}>
      </div>

      <div>
        <h2 class="font-bold">${video.title}</h2>

        <div class="flex items-center gap-2">
          <p class="text-grey-400">${video.authors[0].profile_name}</p>
          <img class="w-5 h-5" src="https://img.icons8.com/?size=96&id=D9RtvkuOe31p&format=png">

           
        </div>

        <p></p>
      </div>
      
    </div>
  </div>
    `;

    videoContainer.append(card)

  })
}
// displayVideos end

// loadVideos end



// testing
loadCategories()

loadVideos()

