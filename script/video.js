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
     <figure class="px-4 pt-3">
    <img
      src= ${video.thumbnail}
      alt="Shoes"
      class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions">
      <button class="btn btn-primary">Buy Now</button>
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

