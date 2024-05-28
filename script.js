function scrollToTop() {
    document.body.scroll({
        top: 0,
        behavior: "smooth"
    });
    document.documentElement.scroll({
        top: 0,
        behavior: "smooth"
    });
}

function scrollTo(element) {
    document.body.scroll({
        top: getScrollOffsetY(element),
        behavior: "smooth"
    });
    document.documentElement.scroll({
        top: getScrollOffsetY(element),
        behavior: "smooth"
    });
}

const toTopButton = document.querySelector('.topButton');

window.onscroll = () => {
    if (window.scrollY > 200) {
        toTopButton.style.opacity = 100;
    } else {
        toTopButton.style.opacity = 0;
    }
}

if (window.innerWidth > 768) {
    const cursor = document.querySelector(".cursor");
    const circle = document.querySelector("#circle");
    const anchors = document.querySelectorAll("a, button");

    anchors.forEach(item => {
        item.addEventListener("mouseenter", () => {
            cursor.style.transform = "scale(3)";
            circle.style.fill = "#8A4800";
        });
        item.addEventListener("mouseleave", () => {
            cursor.style.transform = "scale(1.5)";
            circle.style.fill = "#8A6436";
        });
    });

    document.onmousemove = event => {
        const { clientX, clientY } = event;

        cursor.style.left = (clientX - cursor.offsetWidth / 2) + 'px';
        cursor.style.top = (clientY - cursor.offsetHeight / 2) + 'px';
    }
}
