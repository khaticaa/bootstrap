const name = document.querySelector("#name");
const category = document.querySelector("#category");
const image = document.querySelector("#image");
const img = document.querySelector("#img");
const form = document.querySelector(".category-form");
const content = document.querySelector("#content");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let obj = {};
  let src = image.files[0];
  const reader = new FileReader();
  reader.onload = function (e) {
    obj = {
      image: e.target.result,
      name: name.value,
      description: category.value,
      content: content.value
    };
    axios.post("http://localhost:3000/data", obj).then((res) => {
      window.location = "./index.html";
    });
  };
  reader.readAsDataURL(src);
});
