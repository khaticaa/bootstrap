let id = new URLSearchParams(window.location.search).get("id");     
let details = document.querySelector('.details');


fetch(`http://localhost:3000/data/${id}`)
        .then(reponse => reponse.json())
        .then(element => {
                details.innerHTML+= `  

                <div class="detailscard">

                <div class="s1bot">
            <div class="imgicon">
              <img src="${element.image}" alt="">
            </div>
            <h6>${element.name}</h6>
            <a href="#">
              ${element.description}
            </a>
            <p>${element.content}</p>
                
                
                
                </div>
            


               `
})