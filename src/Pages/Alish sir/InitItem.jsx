const InitItem = new Array(299999).fill(0).map((_, i) => ({
  id: i + 1, // Assuming you want id to start from 1
  isSelected: i === 299998, // Set isSelected based on index
}));

export default InitItem;
