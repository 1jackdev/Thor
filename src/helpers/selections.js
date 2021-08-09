const genericCategories = ["Bars"];

function formatSelections(selections) {
  let categories = {};
  let categoryArr = [];
  for (let selection of selections) {
    let name = selection.name;
    let selectionCategories = selection.categories;
    for (let a of selectionCategories) {
      if (categories[a] && genericCategories.indexOf(a) === -1) {
        categories[a].push(name);
      } else categories[a] = [name];
    }
  }
  categoryArr = Object.entries(categories);
  categoryArr.sort((a, b) => {
    if (a[1].length > b[1].length) return -1;
    if (a[1].length < b[1].length) return 1;
    else return 0;
  });
  categoryArr = categoryArr.filter((a) => a[1].length > 1);
  return categoryArr;
}

export default formatSelections;
