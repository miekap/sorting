function swap(index1, index2, array) {
    var temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

function bubbleSort(array) {
  for (var j=array.length-1;j>0;j--) {
    for (var i=0; i<j;i++) {
      if (array[i] > array[i+1]) {
        swap(i, i + 1, array);
      }
    }
  }
  return array;
}
