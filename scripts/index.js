function mobileMenuShow() {
    let mobileMenu = document.getElementById("navmob");
    let mobileIcon = document.getElementById("mobileClosed");
    let header = document.getElementById("header");
    let body = document.getElementById("body")

    if(mobileMenu.classList.contains("opened") == false) {
        mobileMenu.classList.add("opened");
        header.classList.add("rmja");
        body.classList.add("rmov")
    } else {
        mobileMenu.classList.remove("opened");
        header.classList.remove("rmja");
        body.classList.remove("rmov")
    }
}