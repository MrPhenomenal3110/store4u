const url = "https://fakestoreapi.com/products";

var cartClicked = false;

var products = [];

async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function render() {
  const products = await getData(url);

  const items = document.querySelector(".items");
  items.innerHTML = "";

  products.forEach((product) => {
    const isLiked = JSON.parse(localStorage.getItem(`liked-${product.id}`) || "false");
    const likeClass = isLiked ? "solid" : "regular";

    items.innerHTML += `<div class="product">
        <div class="product-img">
            <img id="${product.id}" src="${product.image}" alt="product">
        </div>
        <div class="product-body">
            <div class="title">
                <span>
                    <h2>${product.title}</h2>
                </span>
                <div class="like">
                    <button id="liked-${product.id}" class="like-btn">
                        <i class="fa-${likeClass} fa-heart fa-xl"></i>
                    </button>
                </div>
            </div>
            <div class="desc">
                <h3 class="category">${product.category}</h3>
                <p>${product.description}</p>
            </div>
        </div>
    </div>`;
  });


  const cart = document.querySelector(".cart-btn");
  cart.addEventListener("click", () => {
    if(cartClicked){
        render();
    }
    else{
        displayLikedProducts();
    }
    cartClicked = !cartClicked;
  });
  function toggleLike(productId) {
    const likeBtn = document.getElementById(`liked-${productId}`);
    const isLiked = JSON.parse(localStorage.getItem(`liked-${productId}`));
  
    if (isLiked) {
      localStorage.removeItem(`liked-${productId}`);
      likeBtn.firstElementChild.classList.remove("fa-solid");
      likeBtn.firstElementChild.classList.add("fa-regular");
    } else {
      localStorage.setItem(`liked-${productId}`, true);
      likeBtn.lastElementChild.classList.remove("fa-regular");
      likeBtn.lastElementChild.classList.add("fa-solid");
    }
  }
  const likeButtons = document.querySelectorAll(".like-btn");
  likeButtons.forEach((likeBtn) => {
    likeBtn.addEventListener("click", () => {
      var id = likeBtn.getAttribute("id").split("-")[1];
      toggleLike(id);
    });
  });

}

async function displayLikedProducts() {
  const items = document.querySelector(".items");
  items.innerHTML = "";

  const products = await getData(url);

  products.forEach((product) => {
    const isLiked = JSON.parse(localStorage.getItem(`liked-${product.id}`) || "false");
    if (isLiked) {
      items.innerHTML += `<div class="product">
            <div class="product-img">
                <img id="${product.id}" src="${product.image}" alt="product">
            </div>
            <div class="product-body">
                <div class="title">
                    <span>
                        <h2>${product.title}</h2>
                    </span>
                    <div class="like">
                        <button id="like-${product.id}" class="like-btn" onclick="toggleLike(${product.id})">
                            <i class="fa-solid fa-heart fa-xl"></i>
                        </button>
                    </div>
                </div>
                <div class="desc">
                    <h3 class="category">${product.category}</h3>
                    <p>${product.description}</p>
                </div>
            </div>
        </div>`;
    }
  });
}

function toggleLike(productId) {
    const likeBtn = document.getElementById(`like-${productId}`);
    const isLiked = JSON.parse(localStorage.getItem(`liked-${productId}`) || 'false');

    if (isLiked) {
        localStorage.removeItem(`liked-${productId}`);
        likeBtn.innerHTML = '<i class="fa-regular fa-heart fa-xl"></i>';
    } else {
        localStorage.setItem(`liked-${productId}`, true);
        likeBtn.innerHTML = '<i class="fa-solid fa-heart fa-xl"></i>';
    }
}

const searchbtn = document.querySelector(".search-btn");
const searchbox = document.querySelector("#search-box");
var query = '';
searchbtn.addEventListener('click', ()=>{
    query = searchbox.value;
    search();
})

async function search() {
    const items = document.querySelector(".items");
    const products = await getData(url);
    items.innerHTML = '';
    const queryLower = query.toLowerCase();
    const matches = [];
    products.forEach((product) => {
        const isLiked = JSON.parse(localStorage.getItem(`liked-${product.id}`) || 'false');
        const likeClass = isLiked ? 'solid' : 'regular';
        
        if (
            product.description.toLowerCase().includes(queryLower) ||
            product.category.toLowerCase().includes(queryLower) ||
            product.title.toLowerCase().includes(queryLower)
        ) {
            items.innerHTML += `<div class="product">
                <div class="product-img">
                    <img id="${product.id}" src="${product.image}" alt="product">
                </div>
                <div class="product-body">
                    <div class="title">
                        <span>
                            <h2>${product.title}</h2>
                        </span>
                        <div class="like">
                            <button id="like-${product.id}" class="like-btn" onclick="toggleLike(${product.id})"> <!-- Call toggleLike function when clicked -->
                                <i class="fa-${likeClass} fa-heart fa-xl"></i>
                            </button>
                        </div>
                    </div>
                    <div class="desc">
                        <h3 class="category">${product.category}</h3>
                        <p>${product.description}</p>
                    </div>
                </div>
            </div>`;
            matches.push(product);
        }
    });
    if(matches.length === 0){
        items.innerHTML += `<div class="not-found">
        <span> <i class="fa-solid fa-triangle-exclamation fa-xl"></i> No search results found ... ! Try searching for something else or make sure the spelling is correct !</span>
    </div>`;
    }
}

render();
