function savetoLocal(obj) {
  
    if (localStorage.getItem("tasks") == null) {
        let oldtasks = [];
        oldtasks.push(obj);
       localStorage.setItem("tasks", JSON.stringify(oldtasks));
       
       
    

    }
    else {
        let oldtasks = localStorage.getItem("tasks");
        oldtasks = JSON.parse(oldtasks);
        oldtasks.push(obj);
        localStorage.setItem("tasks", JSON.stringify(oldtasks));
        
       
        
    
    }
    
}

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
const categorygroup = document.querySelector(".category-group");
const profileform = document.querySelector("#profile-form")
let alertBox = document.createElement("div");
const categoryRad = form.querySelectorAll("input[name='category']");
const stack = document.querySelector(".stack")
let themeBtn = document.querySelector("#theme-toggle")
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {

    document.body.classList.toggle(
        "light-theme",
        savedTheme === "light"
    );

} else {

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

    if (!prefersDark.matches) {
        document.body.classList.add("light-theme");
    }

}

themeBtn.textContent =
    document.body.classList.contains("light-theme")
        ? "☀️"
        : "🌙";

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");

    const theme = document.body.classList.contains("light-theme")
        ? "light"
        : "dark";

    localStorage.setItem("theme", theme);

    themeBtn.textContent =
        theme === "light"
            ? "☀️"
            : "🌙";
});



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
          let selected = false;
        categoryRad.forEach(function (cat) {
            if (cat.checked == true) {
                selected = cat.value;

            }


        });

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
      
        if (!selected) {
            alertBox.classList.add("alert-box");
            alertBox.textContent = "Please choose your category.";
            categorygroup.appendChild(alertBox);
            alertBox.style.display = "block";
            setTimeout(() => {
                alertBox.style.display = "none";
                categorygroup.removeChild(alertBox);
            }, 3000);
            return;

        }


        savetoLocal(
            {
                url,
                name,
                hometown,
                purpose,
                selected,

            }
        )
        
        cardmaker();
      
        
        profileform.reset();

    });

}
closeBtn.addEventListener("click", () => {
    form.style.display = "none";
    container.style.filter = "blur(0)";
    profileform.reset();


});

function cardmaker(){
    stack.innerHTML = "";
    let alltasks = JSON.parse(localStorage.getItem("tasks")) || [];
    // currentIndex = Math.max(0, alltasks.length - 3);
  
     alltasks.forEach((tasks) => {
          // Main card container
const card = document.createElement("div");
// Profile section wrapper
const profile = document.createElement("div");
// Profile image
const img = document.createElement("img");
// Information section
const info = document.createElement("div");
// User name heading
const h2 = document.createElement("h2");
// Details container
const details = document.createElement("div");
// First detail block (Home Town)
const detail1 = document.createElement("div");
// Home Town label
const p1 = document.createElement("p");
// Home Town value
const span1 = document.createElement("span");
// Second detail block (Bookings)
const detail2 = document.createElement("div");
// Bookings label
const p2 = document.createElement("p");
// Bookings value
const span2 = document.createElement("span");
// Buttons container
const buttons = document.createElement("div");
// Call button
const callBtn = document.createElement("button");
// Message button
const msgBtn = document.createElement("button");



p1.textContent="Home Town";
p2.textContent="Purpose";
img.src = tasks.url;
h2.textContent = tasks.name;
span1.textContent = tasks.hometown;
span2.textContent = tasks.purpose;
callBtn.textContent="📞 Call";
msgBtn.textContent="Message";



card.appendChild(profile);

profile.appendChild(img);
profile.appendChild(info);

info.appendChild(h2);
info.appendChild(details);
info.appendChild(buttons);

details.appendChild(detail1);
details.appendChild(detail2);

detail1.appendChild(p1);
detail1.appendChild(span1);

detail2.appendChild(p2);
detail2.appendChild(span2);

buttons.appendChild(callBtn);
buttons.appendChild(msgBtn);



card.classList.add("card");
profile.classList.add("profile");
info.classList.add("info");
details.classList.add("details");
buttons.classList.add("buttons");
// stack.classList.add("stack");

callBtn.classList.add("call");
msgBtn.classList.add("msg");
    


    stack.appendChild(card);

     });

    };
    
  

submission();
function updatestack(){
    const cards = document.querySelectorAll(".stack .card");
   for (let i=0 ;i<3;i++ ) {
        cards.style.zIndex=100-i;
        cards.style.transform=`translate(${10*index}px) scale(${1 - i*0.02})`;
        cards.style.opacity=`${1- i*0.02}`;

    };
}
downBtn.addEventListener("click", () => {
    let lc = stack.lastElementChild;

    if (lc) {
       stack.insertBefore(lc , stack.firstElementChild);
        updatestack();
    }
});
upBtn.addEventListener("click", () => {
    let fc = stack.firstElementChild;
     if (fc) {
       stack.append(fc);
        updatestack();
    }
});
window.addEventListener("DOMContentLoaded", () => {
    cardmaker();
});
