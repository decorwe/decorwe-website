const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");
const navDropdown = document.querySelector(".nav-dropdown");
const dropdownToggle = document.querySelector(".dropdown-toggle");
const menuIcon = menuToggle.querySelector("i");

// Mobile Menu

menuToggle.addEventListener("click", function () {

    mainNav.classList.toggle("active");

    const menuIsOpen = mainNav.classList.contains("active");

    menuIcon.classList.toggle("fa-bars", !menuIsOpen);
    menuIcon.classList.toggle("fa-xmark", menuIsOpen);

});

// Categories Dropdown Arrow

dropdownToggle.addEventListener("click", function (e) {

    e.preventDefault();
    e.stopPropagation();

    navDropdown.classList.toggle("active");

    const dropdownIsOpen =
        navDropdown.classList.contains("active");

    dropdownToggle.setAttribute(
        "aria-expanded",
        dropdownIsOpen
    );

});

// Outside Click

document.addEventListener("click", function (e) {

    if (!navDropdown.contains(e.target)) {

        navDropdown.classList.remove("active");

        dropdownToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }

});

// Close Mobile Menu After Link Click

mainNav.querySelectorAll("a").forEach(function (link) {

    link.addEventListener("click", function () {

        mainNav.classList.remove("active");
        navDropdown.classList.remove("active");

        dropdownToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuIcon.classList.add("fa-bars");
        menuIcon.classList.remove("fa-xmark");

    });

});

// Reset Navigation on Resize

window.addEventListener("resize", function () {

    if (window.innerWidth > 900) {

        mainNav.classList.remove("active");
        navDropdown.classList.remove("active");

        dropdownToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuIcon.classList.add("fa-bars");
        menuIcon.classList.remove("fa-xmark");

    }

});
