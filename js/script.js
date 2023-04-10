///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      const headerOffset = 55;
      const elementPosition = sectionEl.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    } else if (href.startsWith("http")) {
      window.open(href, "_blank");
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Popup not Available

const popupNotAvailable = document.querySelectorAll(".popup-not-av");
console.log(popupNotAvailable);

for (let i = 0; i < popupNotAvailable.length; i++) {
  popupNotAvailable[i].innerHTML = `
  <ion-icon name="close-outline" class="popup-close--icon"></ion-icon>
  <div class="popup-not-av--content">
  <ion-icon name="time-outline" class="popup-not-av--icon"></ion-icon>
    <div>This week is not available yet. Please check back later.</div>
  </div>
`;
}

///////////////////////////////////////////////////////////
// Backdrop click + Close button + Training card click

const backdrop = document.querySelector(".popup-background");
const body = document.querySelector("body");
const closeBtn = document.querySelectorAll(".popup-close--icon");
const WEEKS = document.querySelectorAll(".training-card").length;

backdrop.addEventListener("click", function () {
  body.className = "sticky";
});

for (let i = 0; i < closeBtn.length; i++) {
  closeBtn[i].addEventListener("click", function () {
    body.className = "sticky";
  });
}

for (let i = 0; i < WEEKS; i++) {
  const trainingCard = document.querySelector(`.training-card--${i}`);
  trainingCard.addEventListener("click", function (e) {
    body.classList.add(`popup-screen--open-${i}`);
  });
}
