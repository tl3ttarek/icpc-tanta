import React, { useEffect } from "react";

function useSmoothScroll() {
  useEffect(() => {
    const allLinks = document.querySelectorAll("a:link");
    const headerEl = document.querySelector(".header");

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
  }, []);

  return null;
}

export default useSmoothScroll;
