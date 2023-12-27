


const menu = document.querySelector(".navbar-toggler");
const navbar = document.querySelector(".navbar-collapse");

menu.addEventListener("click", () => {
  const currentBgColor = navbar.style.backgroundColor;

  if (!currentBgColor || currentBgColor === "transparent" || currentBgColor === "rgba(0, 0, 0, 0)") {
    navbar.style.backgroundColor = "#0F4332";
    navbar.style.padding ='5px';
  } else {
    navbar.style.backgroundColor = "transparent";
  }
});

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 250) {
    nav.classList.add("position-sticky");
    nav.style.top = "0px";
    nav.style.left = "0px";
    nav.style.background = "#26BE9F";
  } else {
    nav.classList.remove("position-sticky");
    nav.classList.add("position-absolute");
    nav.style.background = "";
  }
});

let s1bottom = document.querySelector(".s1bottom");
const loadBtn = document.querySelector(".loadbutton");

let page = 3;

function getAlldata(page) {
  fetch(`http://localhost:3000/data?page=${page}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.length <= 3) {
        loadBtn.style.display = 'none'
      }
      data.slice(0, page).forEach((element) => {
        s1bottom.innerHTML += ` 
            <div class="s1bot">
            <div class="imgicon">
              <img src="${element.image}" alt="">
            </div>
            <h6>${element.name}</h6>
            <a href="#">
              ${element.description}
            </a>
            <p>${element.content}</p>
            <div class="crud">
            <button onclick="deleteCard(${element.id})" class="delete">Delete</button>
            <button onclick="Update(${element.id})" class="update">Update</button>
            <button onclick="Detail(${element.id})" class="detailbutton">Details</button>
             <i onclick="addFavorite(${element.id} , this)" class=" bi-heart-fill"></i> 
             </div>
             </div>
             
          `;
      });
    });
}
// __________________LoadBtn

loadBtn.addEventListener("click", () => {
  s1bottom.innerHTML = ''
  //  page++
  page += 3;
  getAlldata(page);
});

// getAlldata(page);
// -------------->delete-------------
function deleteCard(id) {
  axios.delete(`http://localhost:3000/data/${id}`);
  window.location.reload();
}
// --------------------->view details-------

function Detail(id) {
  window.location = `details.html?id=${id}`;
}

// -----------------------Uptade____________
function Update(id) {
  window.location = `./update.html?id=${id}`;
}



// -------------------Favorite
function addFavorite(id, heart) {
  axios.get(`http://localhost:3000/data/${id}`).then((res) => {
    axios.post(`http://localhost:3000/favorites`, res.data);
    axios.post(`./favorite.html`, res.data);
    heart.style.color = "red";

    window.location = `./favorite.html?id=${id}`;
  });
}

getAlldata(page);



let topbutton = document.querySelector('#top-button')



topbutton.addEventListener('click', function () {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
});

