const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const logo = document.getElementById("logo");
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");


tabs.forEach((tab) => tab.addEventListener('click', oneTabClick));

function oneTabClick(e) {
    // debug
    // console.log(e.target);
    // deactive
    tabs.forEach((tab) => {
        tab.children[0].classList.remove(
            "border-softRed",
            "border-b-4",
            "md:border-b-0"
            );
    })

    panels.forEach((panel) => {
        panel.classList.add("hidden");
    })
    // aktive target
    e.target.classList.add(
        "border-softRed",
        "border-b-4",
    );
    const classString = e.target.getAttribute("data-target");
    document.getElementById('panels')
        .getElementsByClassName(classString)[0]
        .classList.remove("hidden");
    
}




menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("open");
    menu.classList.toggle("flex");
    menu.classList.toggle("hidden");
})