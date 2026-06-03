const container = document.querySelector(".container");
const actions = document.querySelector(".actions");
const createBtn = document.querySelector("#create-btn");
const upBtn = document.querySelector("#up-btn");
const downBtn = document.querySelector("#down-btn");
const form = document.querySelector(".form-card");
const closeBtn = document.querySelector(".close-btn");
const nameInput = document.querySelector("#name");
const hometownInput = document.querySelector("#hometown");
const urlInput = document.querySelector("#url");
const submitBtn = document.querySelector("#submit-btn");
const purposeInput = document.querySelector("#purpose");
const urlgroup = document.querySelector(".url-group");
const namegroup = document.querySelector(".name-group");
const purposegroup = document.querySelector(".purpose-group");
const hometowngroup = document.querySelector(".hometown-group");
const categoryInput = document.querySelector(".categories");

createBtn.addEventListener("click", () => {
    form.style.display = "block";
    container.style.filter = "blur(5px)";

   
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.style.display = "none";
    container.style.filter = "blur(0)";
});
closeBtn.addEventListener("click", () => {
    form.style.display = "none";
    container.style.filter = "blur(0)";
     nameInput.value = "";
    hometownInput.value = "";
    urlInput.value = "";
    purposeInput.value = "";
    categoryInput.querySelector('input[name="category"]:checked').checked=false;
});
submitBtn.addEventListener("click", () => {
    const name = nameInput.value;
    const hometown = hometownInput.value;
    const url = urlInput.value;
    const purpose = purposeInput.value;
    if (name.length == 0) {
        let alertBox = document.createElement("div");
        alertBox.classList.add("alert-box");
        alertBox.innerText = "Name is required";
        namegroup.appendChild(alertBox);
    }
     if (hometown.length == 0) {
        let alertBox = document.createElement("div");
        alertBox.classList.add("alert-box");
        alertBox.innerText = "Home town is required";
        hometowngroup.appendChild(alertBox);
    }
    let regexurl = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!regexurl.test(url)) {
        let alertBox = document.createElement("div");
        alertBox.classList.add("alert-box");
        alertBox.innerText = "Please enter a valid image URL";
        urlgroup.appendChild(alertBox);
    }
    
    if (purpose.length == 0) {
        let alertBox = document.createElement("div");
        alertBox.classList.add("alert-box");
        alertBox.innerText = "Purpose is required";
        purposegroup.appendChild(alertBox);
    }
    if(categoryInput.querySelector('input[name="category"]:checked')==null){
        let alertBox = document.createElement("div");
        alertBox.classList.add("alert-box");
        alertBox.innerText = "Please select a category";
        categoryInput.appendChild(alertBox);
    }
    
    nameInput.value = "";
    hometownInput.value = "";
    urlInput.value = "";
    purposeInput.value = "";
    categoryInput.querySelector('input[name="category"]:checked').checked=false;


 
});
// localStorage.removeItem("tasks");