const originalList = document.getElementById("list");
const originalListWords = Array.from(originalList.children).map(
  (child) => child.innerHTML
);

const searchChange = () => {
  filteredList.innerHTML = "";
  const searchstring = document.getElementById("search").value;

  // hide list when filtering
  if (searchstring) {
    originalList.style.display = "none";
  } else {
    originalList.style.display = "list-item";
    return;
  }

  const filterWords = originalListWords.filter((word) =>
    word.toLowerCase().includes(searchstring.toLowerCase())
  );

  filterWords.forEach((filteredWord) => {
    let listItem = document.createElement("li");

    const wordIdx = filteredWord.indexOf(searchstring);
    const firstWordPart = filteredWord.substring(0, wordIdx);
    const secondPartOfWord = filteredWord.substring(
      wordIdx + searchstring.length,
      filteredWord.length
    );

    const htmlString = `<div>${firstWordPart} <span class="fitleredWord">${searchstring}</span>${secondPartOfWord}</div>`;

    listItem.innerHTML = htmlString;
    listItem.classList.add("listElement");

    filteredList.append(listItem);
  });
};
