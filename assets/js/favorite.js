let id=new URLSearchParams(window.location.search).get("id");
const favcard=document.querySelector(".favcard")

fetch(`http://localhost:3000/favorites/`)
.then(res=>res.json())
.then(data=>{
  data.forEach(element => {
    favcard.innerHTML+=`
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
        
                </div>
    `
  });
})

function deleteCard(id){
    axios.delete(`http://localhost:3000/favorites/${id}`)
}

