// const url = "https://fakestoreapi.com/products";

// var products = [];

// async function getData(url) {
//   const response = await fetch("https://fakestoreapi.com/products");
//   const data = await response.json();
//   products = data;
//   console.log(products);
// }

// var cartClicked = false;

// getData(url);

// render();

// const searchbtn = document.querySelector(".search-btn");
// const searchbox = document.querySelector("#search-box");
// const items = document.querySelector(".items");

// var query = "";

// searchbtn.addEventListener("click", () => {
//   query = searchbox.value;
//   items.innerHTML = ``;
//   search();
// });

// async function search() {
//   await getData(url);
//   items.innerHTML = ""; // Clear previous search results
//   const queryLower = query.toLowerCase(); // Convert query to lowercase once for efficiency
//   products.forEach((product) => {
//     const likeID = localStorage.getItem()
//     if (
//       product.description.toLowerCase().includes(queryLower) ||
//       product.category.toLowerCase().includes(queryLower) ||
//       product.title.toLowerCase().includes(queryLower)
//     ) {
//       items.innerHTML += `<div class="product">
//                 <div class="product-img">
//                     <img id="${product.id}" src="${product.image}" alt="product">
//                 </div>
//                 <div class="product-body">
//                     <div class="title">
//                         <span>
//                             <h2>${product.title}</h2>
//                         </span>
//                         <div class="like">
//                             <button id="liked-${product.id}" class="like-btn">
//                                 <i class="fa-regular fa-heart fa-xl"></i>
//                             </button>
//                         </div>
//                     </div>
//                     <div class="desc">
//                         <h3 class="category">${product.category}</h3>
//                         <p>${product.description}</p>
//                     </div>
//                 </div>
//             </div>`;
//     }
//   });

//   function toggleLike(productId) {
//     const likeBtn = document.getElementById(`liked-${productId}`);
//     const isLiked = JSON.parse(localStorage.getItem(`liked-${productId}`)); // Get liked status from local storage

//     if (isLiked) {
//         // If already liked, remove from local storage and change heart icon to regular
//         localStorage.removeItem(`liked-${productId}`);
//         console.log(likeBtn.firstElementChild.classList);
//         likeBtn.firstElementChild.classList.remove('fa-solid');
//         likeBtn.firstElementChild.classList.add('fa-regular');
//         console.log(likeBtn.lastElementChild.classList);
//     } else {
//         // If not liked, add to local storage and change heart icon to solid
//         localStorage.setItem(`liked-${productId}`, true);
//         console.log(likeBtn.lastElementChild.classList);
//         likeBtn.lastElementChild.classList.remove('fa-regular');
//         likeBtn.lastElementChild.classList.add('fa-solid');
//         console.log(likeBtn.lastElementChild.classList);
//     }
// }

//   const cart = document.querySelector(".cart-btn");
//   const likeButtons = document.querySelectorAll(".like-btn");

//   if(cartClicked){
//     cartClicked = false;
//     render();
//   }
//   else{
//     function displayLikedProducts() {
//         items.innerHTML = ""; // Clear previous search results
//         products.forEach((product) => {
//           const isLiked = JSON.parse(
//             localStorage.getItem(`liked-${product.id}`) || "false"
//           ); // Get liked status from local storage
//           if (isLiked) {
//             items.innerHTML += `<div class="product">
//                     <div class="product-img">
//                             <img id="${product.id}" src="${product.image}" alt="product">
//                             </div>
//                         <div class="product-body">
//                         <div class="title">
//                         <span>
//                                     <h2>${product.title}</h2>
//                                     </span>
//                                     <div class="like">
//                                     <button id="like-${product.id}" class="like-btn" onclick="toggleLike(${product.id})">
//                                     <i class="fas fa-heart fa-xl"></i> <!-- Change to solid heart -->
//                                     </button>
//                                     </div>
//                             </div>
//                             <div class="desc">
//                             <h3 class="category">${product.category}</h3>
//                             <p>${product.description}</p>
//                             </div>
//                             </div>
//                             </div>`;
//           }
//         });
//       }
//       cartClicked = true;
//   }
  

//   likeButtons.forEach((likeBtn) => {
//     likeBtn.addEventListener("click", () => {
//       console.log("Button clicked!");
//       var id = likeBtn.getAttribute("id").split("-")[1]; // Extract product ID from ID attribute
//       console.log("Product ID:", id);
//       toggleLike(id);
//     });
//   });
//   cart.addEventListener("click", displayLikedProducts);
// }

// async function render() {
//   await getData(url);
//   products.forEach((product) => {
//     const isLiked = JSON.parse(localStorage.getItem(`liked-${product.id}`))
//     if(isLiked){
//         const likeClass = 'solid';
//     }
//     else{
//         const likeClass = 'regular';
//     }
//         items.innerHTML += `<div class="product">
//         <div class="product-img">
//             <img id="${product.id}" src="${product.image}" alt="product">
//         </div>
//         <div class="product-body">
//             <div class="title">
//                 <span>
//                     <h2>${product.title}</h2>
//                 </span>
//                 <div class="like">
//                     <button id="liked-${product.id}" class="like-btn">
//                         <i class="fa-${likeClass} fa-heart fa-xl"></i>
//                     </button>
//                 </div>
//             </div>
//             <div class="desc">
//                 <h3 class="category">${product.category}</h3>
//                 <p>${product.description}</p>
//             </div>
//         </div>

//     </div>`;
    
//   });

//   function toggleLike(productId) {
//     const likeBtn = document.getElementById(`liked-${productId}`);
//     const isLiked = JSON.parse(localStorage.getItem(`liked-${productId}`)); // Get liked status from local storage

//     if (isLiked) {
//         // If already liked, remove from local storage and change heart icon to regular
//         localStorage.removeItem(`liked-${productId}`);
//         console.log(likeBtn.firstElementChild.classList);
//         likeBtn.firstElementChild.classList.remove('fa-solid');
//         likeBtn.firstElementChild.classList.add('fa-regular');
//         console.log(likeBtn.lastElementChild.classList);
//     } else {
//         // If not liked, add to local storage and change heart icon to solid
//         localStorage.setItem(`liked-${productId}`, true);
//         console.log(likeBtn.lastElementChild.classList);
//         likeBtn.lastElementChild.classList.remove('fa-regular');
//         likeBtn.lastElementChild.classList.add('fa-solid');
//         console.log(likeBtn.lastElementChild.classList);
//     }
// }

//   const cart = document.querySelector(".cart-btn");
//   const likeButtons = document.querySelectorAll(".like-btn");

//   function displayLikedProducts() {
//     items.innerHTML = ""; // Clear previous search results
//     products.forEach((product) => {
//       const isLiked = JSON.parse(
//         localStorage.getItem(`liked-${product.id}`) || "false"
//       ); // Get liked status from local storage
//       if (isLiked) {
//         items.innerHTML += `<div class="product">
//                 <div class="product-img">
//                         <img id="${product.id}" src="${product.image}" alt="product">
//                         </div>
//                     <div class="product-body">
//                     <div class="title">
//                     <span>
//                                 <h2>${product.title}</h2>
//                                 </span>
//                                 <div class="like">
//                                 <button id="like-${product.id}" class="like-btn" onclick="toggleLike(${product.id})">
//                                 <i class="fas fa-heart fa-xl"></i> <!-- Change to solid heart -->
//                                 </button>
//                                 </div>
//                         </div>
//                         <div class="desc">
//                         <h3 class="category">${product.category}</h3>
//                         <p>${product.description}</p>
//                         </div>
//                         </div>
//                         </div>`;
//       }
//     });
//   }

//   likeButtons.forEach((likeBtn) => {
//     likeBtn.addEventListener("click", () => {
//       console.log("Button clicked!");
//       var id = likeBtn.getAttribute("id").split("-")[1]; // Extract product ID from ID attribute
//       console.log("Product ID:", id);
//       toggleLike(id);
//     });
//   });
//   cart.addEventListener("click", displayLikedProducts);
// }


const url = "https://fakestoreapi.com/products";

var cartClicked = false;

var products = [];

async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function render() {
  const products = await getData(url); // Wait for data to be fetched

  const items = document.querySelector(".items");
  items.innerHTML = ""; // Clear previous search results

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
    const isLiked = JSON.parse(localStorage.getItem(`liked-${productId}`)); // Get liked status from local storage
  
    if (isLiked) {
      // If already liked, remove from local storage and change heart icon to regular
      localStorage.removeItem(`liked-${productId}`);
      likeBtn.firstElementChild.classList.remove("fa-solid");
      likeBtn.firstElementChild.classList.add("fa-regular");
    } else {
      // If not liked, add to local storage and change heart icon to solid
      localStorage.setItem(`liked-${productId}`, true);
      likeBtn.lastElementChild.classList.remove("fa-regular");
      likeBtn.lastElementChild.classList.add("fa-solid");
    }
  }
  const likeButtons = document.querySelectorAll(".like-btn");
  likeButtons.forEach((likeBtn) => {
    likeBtn.addEventListener("click", () => {
      console.log("Button clicked!");
      var id = likeBtn.getAttribute("id").split("-")[1]; // Extract product ID from ID attribute
      console.log("Product ID:", id);
      toggleLike(id);
    });
  });

}

async function displayLikedProducts() {
  const items = document.querySelector(".items");
  items.innerHTML = ""; // Clear previous search results

  const products = await getData(url); // Wait for data to be fetched

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

// Function to handle like button click
// function toggleLike(productId) {
//   const likeBtn = document.getElementById(`liked-${productId}`);
//   const isLiked = JSON.parse(localStorage.getItem(`liked-${productId}`)); // Get liked status from local storage

//   if (isLiked) {
//     // If already liked, remove from local storage and change heart icon to regular
//     localStorage.removeItem(`liked-${productId}`);
//     likeBtn.firstElementChild.classList.remove("fa-solid");
//     likeBtn.firstElementChild.classList.add("fa-regular");
//   } else {
//     // If not liked, add to local storage and change heart icon to solid
//     localStorage.setItem(`liked-${productId}`, true);
//     likeBtn.firstElementChild.classList.remove("fa-regular");
//     likeBtn.firstElementChild.classList.add("fa-solid");
//   }
// }

function toggleLike(productId) {
    const likeBtn = document.getElementById(`like-${productId}`);
    const isLiked = JSON.parse(localStorage.getItem(`liked-${productId}`) || 'false'); // Get liked status from local storage

    if (isLiked) {
        // If already liked, remove from local storage and change heart icon to regular
        localStorage.removeItem(`liked-${productId}`);
        likeBtn.innerHTML = '<i class="fa-regular fa-heart fa-xl"></i>';
    } else {
        // If not liked, add to local storage and change heart icon to solid
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

// Function to handle search
async function search() {
    const items = document.querySelector(".items");
    const products = await getData(url);
    items.innerHTML = ''; // Clear previous search results
    const queryLower = query.toLowerCase(); // Convert query to lowercase once for efficiency
    const matches = [];
    products.forEach((product) => {
        const isLiked = JSON.parse(localStorage.getItem(`liked-${product.id}`) || 'false'); // Check if product is liked
        const likeClass = isLiked ? 'solid' : 'regular'; // Determine like class based on like status
        
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
    if(matches)
}

  


// Call render function to initially render products
render();
