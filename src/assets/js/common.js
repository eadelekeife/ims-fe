const displayMobileMenu = () => {
    document.querySelector('.mobile-menu').style.display = "block";
}

const closeMobileMenu = () => {
    document.querySelector('.mobile-menu').style.display = "none";
}

let navItems = document.querySelectorAll('nav ul li.hover-cover ul li');
for (let items of navItems) {
    // console.log(items.innerHTML)
    items.addEventListener('mouseover', () => {
        items.querySelector(`ul li .hover-content-bg`).style.display = "block";
        // gsap.to(items.querySelector(`ul li .hover-content-bg`), {
        //     display: 'block',
        //     duration: 20,
        //     ease: "sine.out",
        // })
    })
    items.addEventListener('mouseout', () => {
        items.querySelector(`ul li .hover-content-bg`).style.display = "none";
        // gsap.to(items.querySelector(`ul li .hover-content-bg`), {
        //     display: 'block',
        //     duration: 20,
        //     ease: "sine.out",
        // })
    })
}

document.querySelector('.nav-products').addEventListener('mouseover', () => {
    document.querySelector('.hover-tab.products-tab').style.display = "block";
})

document.querySelector('.nav-more').addEventListener('mouseover', () => {
    document.querySelector('.hover-tab.more-tab').style.display = "block"
})

document.querySelector('.nav-products').addEventListener('mouseout', () => {
    document.querySelector('.hover-tab.products-tab').style.display = "none";
})

document.querySelector('.nav-more').addEventListener('mouseout', () => {
    document.querySelector('.hover-tab.more-tab').style.display = "none"
})

// footerDisplayController
const footerDisplayController = (e) => {
    let target = document.querySelector(`.footer-menu-${e}`);
    let targetImg = document.querySelector(`.arr-footer-cover-${e} .arr-footer-controller`);
    if (target.style.display === "block") {
        // gsap.to(targetImg, {

        // });
        target.style.display = "none";
        targetImg.setAttribute('src', './images/arr-down-sec.png');
    } else {
        target.style.display = "block";
        targetImg.setAttribute('src', './images/arr-up-sec.png');
    }
}