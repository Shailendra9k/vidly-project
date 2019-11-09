import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();

  //_.slice(items, startIndex) - This will slice our array starting from this index. Now that we have a new array. We can go to this array and pick items for this new page. Lodash has method for that.
  //_.take(array, totalNumberof items that we want to take from that array)
}
