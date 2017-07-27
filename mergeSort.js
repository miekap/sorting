function split(wholeArray) {
//	var wholeArray = [1, 2, 3, 4, 5];
	var middle = Math.ceil((wholeArray.length-1)/2);
	var firstHalf = wholeArray.slice(0, middle);
	var secondHalf = wholeArray.slice(middle);
  	return [firstHalf, secondHalf];
}

function merge(leftArr, rightArr) {
	var result = [];
	var leftIndex = 0;
	var rightIndex = 0;

	while(leftIndex < leftArr.length || rightIndex < rightArr.length) {
		if(leftIndex === leftArr.length) {
			result.push(rightArr[rightIndex]);
			rightIndex++;
		} else if(rightIndex === rightArr.length) {
			result.push(leftArr[leftIndex]);
			leftIndex++;
		}
		else if(leftArr[leftIndex] < rightArr[rightIndex]) {
			result.push(leftArr[leftIndex]);
			leftIndex++;
		} else {
			result.push(rightArr[rightIndex]);
			rightIndex++;
		}
	}
	return result;
}

function mergeSort(array) {
	if (array.length === 1) {
		return array;
	} else {
		var splits = split(array);
	  return merge(mergeSort(splits[0]),mergeSort(splits[1]));
	}
}
