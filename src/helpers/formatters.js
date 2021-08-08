function formatTime(time) {
  let newThing = time.toString();
  let timeArr = newThing.split("");
  while (timeArr.length < 4) {
    timeArr.unshift("0");
  }
  return convertTime(timeArr);
}

function convertTime(arr) {
  let hrs = arr.splice(0, 2);
  let mins = arr.splice(0, 2);
  let newHrs = parseInt(hrs.join(""));
  let newMins = mins.join("");
  let ampm = "am";
  if (newHrs > 12) {
    newHrs -= 12;
    ampm = "pm";
  }
  if (newHrs === 0) newHrs = 12;
  return newHrs + ":" + newMins + " " + ampm.toUpperCase();
}

function handlePlaceData(obj) {
  try {
    let nextClosingTime;
    let daysOfOperation = obj.hours[0].open;
    let today = new Date();
    const currentTime = () => {
      let minutes = today.getMinutes().toString();
      let hours = today.getHours().toString();
      return parseInt(hours + minutes);
    };
    let dayOfWeek = today.getDay();
    let todaysHours = daysOfOperation.filter((d) => d.day === dayOfWeek);
    todaysHours.map((slot) => {
      slot.end = parseInt(slot.end);
      return slot;
    });
    // if location has split hours (i.e. closed from 2 to 4pm)
    if (todaysHours.length > 1) {
      nextClosingTime =
        currentTime() > todaysHours[0].end
          ? todaysHours[0].end
          : todaysHours[1].end;
    } else nextClosingTime = todaysHours[0].end;
    return formatTime(nextClosingTime);
  } catch (e) {}
}

function sortCategories(categories) {
  let results = categories.sort(function (a, b) {
    if (a.title[0] < b.title[0]) return -1;
    else if (a.title[0] > b.title[0]) return 1;
    else return 0;
  });
  return results;
}

function formatSelections(selections) {
  let categories = {};
  let categoryArr = [];
  for (let selection of selections) {
    let name = selection.name;
    let selectionCategories = selection.categories;
    for (let a of selectionCategories) {
      if (categories[a]) {
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

module.exports = { handlePlaceData, sortCategories, formatSelections };
