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
let alertBox = document.createElement("div");
createBtn.addEventListener("click", () => {
    form.style.display = "block";
    container.style.filter = "blur(5px)";
    alertBox.style.display = "none";


});

function submission() {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = nameInput.value;
        const hometown = hometownInput.value;
        const url = urlInput.value;
        const purpose = purposeInput.value;
        const category = categoryInput.value;
        if (name.length === 0 && hometown.length === 0 && url.length === 0 && purpose.length === 0) {

            alertBox.classList.add("alert-box");
            alertBox.textContent = "Please fill in all the fields.";
            form.appendChild(alertBox);
            alertBox.style.display = "block";
            alertBox.style.position = "fixed";
            alertBox.style.top = "20px";
            alertBox.style.right = "20px";
            setTimeout(() => {
                alertBox.style.display = "none";
                form.removeChild(alertBox);
            }, 3000);
            return;
        }
        const urlRegex = /^(https?:\/\/)([\w-]+\.)+[\w-]{2,}(\/\S*)?$/;
        if (!urlRegex.test(url)) {

            alertBox.classList.add("alert-box");
            alertBox.textContent = "Please enter a valid image URL.";
            urlgroup.appendChild(alertBox);
            alertBox.style.display = "block";

            setTimeout(() => {
                alertBox.style.display = "none";
                urlgroup.removeChild(alertBox);
            }, 3000);
            return;
        }
        if (name.length === 0) {
            alertBox.classList.add("alert-box");
            alertBox.textContent = "Please enter your name.";
            namegroup.appendChild(alertBox);
            alertBox.style.display = "block";
            setTimeout(() => {
                alertBox.style.display = "none";
                namegroup.removeChild(alertBox);
            }, 3000);
            return;
        }
        if (hometown.length === 0) {
            alertBox.classList.add("alert-box");
            alertBox.textContent = "Please enter your hometown.";
            hometowngroup.appendChild(alertBox);
            alertBox.style.display = "block";
            setTimeout(() => {
                alertBox.style.display = "none";
                hometowngroup.removeChild(alertBox);
            }, 3000);
            return;
        }
        if (purpose.length === 0) {
            alertBox.classList.add("alert-box");
            alertBox.textContent = "Please enter your purpose.";
            purposegroup.appendChild(alertBox);
            alertBox.style.display = "block";
            setTimeout(() => {
                alertBox.style.display = "none";
                purposegroup.removeChild(alertBox);
            }, 3000);
            return;
        }

        if (categoryInput.querySelector('input[name="category"]:checked') == null) {
            alertBox.classList.add("alert-box");
            alertBox.textContent = "Please select a category.";
            categoryInput.parentElement.appendChild(alertBox);
            alertBox.style.display = "block";
            setTimeout(() => {
                alertBox.style.display = "none";
                categoryInput.parentElement.removeChild(alertBox);
            }, 3000);
            return;
        }
        form.style.display = "none";
        container.style.filter = "blur(0)";
        nameInput.value = "";
        hometownInput.value = "";
        urlInput.value = "";
        purposeInput.value = "";
    });

}
closeBtn.addEventListener("click", () => {
    form.style.display = "none";
    container.style.filter = "blur(0)";
    nameInput.value = "";
    hometownInput.value = "";
    urlInput.value = "";
    purposeInput.value = "";

});
submission();
// localStorage.removeItem("important");