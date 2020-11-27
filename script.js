const topicsData = [{
    "topicTitle": "Основы языка и как на нём говорить правильно",
    "topicList": [
      "Лексическая структура",
      "Типы данных, значения и переменные",
      "Выражения и операторы инструкции"
    ]
  },
  {
    "topicTitle": "Функции",
    "topicList": [
      "Lorem ipsum dolor sit amet.",
      "Nostrum laboriosam quibusdam numquam asperiores!",
      "Eveniet excepturi sunt non officia."
    ]
  },
  {
    "topicTitle": "Обработка ошибок",
    "topicList": [
      "Lorem ipsum dolor sit amet.",
      "Nostrum laboriosam quibusdam numquam asperiores!",
      "Eveniet excepturi sunt non officia."
    ]
  },
  {
    "topicTitle": "Объекты и массивы",
    "topicList": [
      "Lorem ipsum dolor sit amet.",
      "Nostrum laboriosam quibusdam numquam asperiores!",
      "Eveniet excepturi sunt non officia."
    ]
  },
  {
    "topicTitle": "События",
    "topicList": [
      "Lorem ipsum dolor sit amet.",
      "Nostrum laboriosam quibusdam numquam asperiores!",
      "Eveniet excepturi sunt non officia."
    ]
  },
]

let accordeon = document.querySelector("#accordeon");
let accTitle = [];

accordeon.innerHTML = `${topicsData.map(topicTemplate).join("")}`

function getAccTitle() {
  for (let i = 0; i < accordeon.childElementCount; i++) {
    if (i % 2 === 0) {
      accTitle.push(accordeon.children[i]);
    }
  }
};

getAccTitle();

function topicTemplate(topic) {
  return `
    <div class="accordeon__title">${topic.topicTitle}
      <div class="accordeon__polygon"></div>
    </div>
    <div class="accordeon__content">${topicListItems(topic.topicList)}</div>
      `
}

function topicListItems(items) {
  return `
    <ul class="content__list">${items.map(item => `<li class="content__item">${item}</li>`).join("")}</ul>
  `
}

for (let i = 0; i < accTitle.length; i++) {
  accTitle[i].addEventListener("click", changeClassActive, false);
  if (i % 2 === 0) {
    accTitle[i].classList.add("accordeon__title_odd");
  }
}

function changeClassActive(e) {
  let classes = e.target.getAttribute("class"),
    newClasses = "",
    classesArr = classes.split(" "),
    newClassesArr = classes.split(" ");

  for (let j = 0; j < classesArr.length; j++) {
    if (classesArr[j] == "accordeon__title-active") {
      classesArr.splice([j], 1);
    }
  }
  if (classesArr.length === newClassesArr.length) {
    classesArr.push("accordeon__title-active");
    newClasses = classesArr.join(" ");
  } else {
    newClasses = classesArr.join(" ");
  }

  for (let l = 0; l < accTitle.length; l++) {
    let oldClasses = accTitle[l].getAttribute("class"),
      oldClassesArr = oldClasses.split(" ");
    for (let k = 0; k < oldClassesArr.length; k++) {
      if (oldClassesArr[k] == "accordeon__title-active") {
        oldClassesArr.splice([k], 1);
      }
      oldClasses = oldClassesArr.join(" ");
      accTitle[l].setAttribute("class", oldClasses);

    }
  }
  e.target.setAttribute("class", newClasses);
}