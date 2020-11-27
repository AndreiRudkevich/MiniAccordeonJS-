"use strict";

var i,
    doc = document,
    title = doc.getElementsByClassName("accordeon__title"),
    content = doc.getElementsByClassName("accordeon__content");

for (i = 0; i < title.length; i++)
{
  title[i].addEventListener("click", changeClassActive, false);

  if (i%2 === 0)
  {
    title[i].classList.add("accordeon__title_odd");
  }
}

function changeClassActive()
{
  var classes = this.getAttribute("class"),
      newClasses = "",
      classesArr = classes.split(" "),
      newClassesArr = classes.split(" ");

  for (var j = 0; j < classesArr.length; j++)
  {
    if (classesArr[j] == "accordeon__title-active")
    {
      classesArr.splice([j], 1);
    }
  }
  if (classesArr.length === newClassesArr.length)
  {
    classesArr.push("accordeon__title-active");
    newClasses = classesArr.join(" ");
  } else
  {
    newClasses = classesArr.join(" ");
  }

  for (var l = 0; l < title.length; l++)
  {
    var oldClasses = title[l].getAttribute("class"),
        oldClassesArr = oldClasses.split(" ");
    for (var k = 0; k < oldClassesArr.length; k++)
    {
      if (oldClassesArr[k] == "accordeon__title-active")
      {
        oldClassesArr.splice([k], 1);
      }
      oldClasses = oldClassesArr.join(" ");
      title[l].setAttribute("class", oldClasses);

    }
  }
  this.setAttribute("class", newClasses);
}