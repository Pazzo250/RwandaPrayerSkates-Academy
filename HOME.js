if (localStorage.getItem("theme")=== "dark") {
    document.body.classList.add("dark-mode");
}
document.getElementById("themeToggle").addEventListener("click", function(){
        
    document.body.classList.toggle("dark-mode");
           
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme","light");
    }
});

if (localStorage.getItem("theme")=== "dark") {
    document.body.classList.add("dark-mode");
}
document.getElementById("themeToggl").addEventListener("click", function(){
        
    document.body.classList.toggle("dark-mode");
           
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme","light");
    }
});

/* menu-icon */

function openMenu() {
    document.getElementById("sideMenu").style.right = "0";

    document.querySelector(".menu-icon").
    classList.add("hidden");
}
function closeMenu () {
    document.getElementById ("sideMenu").style.right = "-50%";

    document.querySelector(".menu-icon").
    classList.remove("hidden");
}



