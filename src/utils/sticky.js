export const stickyNav = () => {
    window.addEventListener("scroll", () => {
        let offset = window.scrollY;
        const sticky = document.querySelectorAll(".header__skll");
        for (let i = 0; i < sticky.length; i++) {
            const stick = sticky[i];
            if (stick) {
                if (offset > 10) {
                    stick.classList.add("sticky");
                } else {
                    stick.classList.remove("sticky");
                }
            }
        }
    })
}