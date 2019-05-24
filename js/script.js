'use strict'
const tabs = document.querySelector(".tabs");
const tabsContent = document.querySelector(".tabs-content");
console.log(tabs);
console.log(tabsContent);

tabs.addEventListener("click", e => {
  [...tabs.children].forEach(elem => {
    elem.classList.remove("active");
  });
  e.target.classList.add("active");

  [...tabsContent.children].forEach(elem => {
    elem.style.display = 'none';
    if (elem.dataset.name === e.target.innerText) {
      elem.style.display = 'block';
    }
  });
});

[...tabs.children].forEach(tabsElem => {
  if (tabsElem.classList.contains('active')) {
    [...tabsContent.children].forEach(contentElem => {
      contentElem.style.display = 'none';
      if (contentElem.dataset.name === tabsElem.innerText) {
        contentElem.style.display = 'block';
      }
    });
  }
});

