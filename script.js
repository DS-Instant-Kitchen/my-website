const mobMenu = document.getElementById("mob-res");
const mobAdd = document.getElementById("ad-class");
const mobRemove = document.getElementById("close-btn");


mobMenu.addEventListener("click", function(){
    mobAdd.classList.add("mob-responsive");
});
mobRemove.addEventListener("click", function(){
    mobAdd.classList.remove("mob-responsive");
})

