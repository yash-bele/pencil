const nav_menu = document.querySelector(".nav-menu");
const dd_links = document.querySelectorAll(".dd-link");

const ul1_res = document.querySelector(".ul1-res");
const ul2_res = document.querySelectorAll(".ul2-res");

nav_menu.addEventListener("click", () => {
    let ht1_val = getComputedStyle(ul1_res).height;
    ht1_val === "0px" ? ul1_res.style.height = "269px" : ul1_res.style.height = "0px";
});

dd_links.forEach((i, j) => {
    i.addEventListener("click", (e) => {
        let ht2_val = getComputedStyle(ul2_res[j]).height;
        if (ht2_val === "0px" && j === 0) {
            ul2_res[1].style.height = "0px";
            ul2_res[2].style.height = "0px";
            ul2_res[j].style.height = "90px";
            ul1_res.style.height = String(296 + 65) + "px";
        } else if (ht2_val === "0px" && j === 1) {
            ul2_res[0].style.height = "0px";
            ul2_res[2].style.height = "0px";
            ul2_res[j].style.height = "90px";
            ul1_res.style.height = String(296 + 65) + "px";
        } else if (ht2_val === "0px" && j === 2) {
            ul2_res[0].style.height = "0px";
            ul2_res[1].style.height = "0px";
            ul2_res[j].style.height = "60px";
            ul1_res.style.height = String(296 + 35) + "px";
        } else {
            ul2_res[j].style.height = "0px";
            ul1_res.style.height = String(296 - 25) + "px";
        }
    });
});