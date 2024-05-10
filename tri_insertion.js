function tri_insertion(array) {
	for(let i = 1; i < array.length; i++) {
        let tmp = array[i];
        let j = i;
    while (j > 0 && array[j-1] > tmp) {
        array[j] = array[j-1];
        j--;
    }		
	array[j] = tmp;
}
	return array;
}