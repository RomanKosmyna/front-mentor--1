const wrapperEl = document.querySelector("#mobile_navigation_wrapper");

const toggleMenu = () => {
    if (wrapperEl.classList.contains("not_active")) {
        wrapperEl.classList.remove("not_active");
        wrapperEl.classList.add("active");
        document.querySelector("body").style.overflow = "hidden";
    } else {
        wrapperEl.classList.remove("active");
        wrapperEl.classList.add("not_active");
        document.querySelector("body").style.overflow = "visible";
    }
};