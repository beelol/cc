export default (array, item) => {
  let newArray = [...array];

  const itemIndex = newArray.findIndex(
    currentItem => currentItem.id === item.id
  );

  newArray[itemIndex] = item;

  return newArray;
};
