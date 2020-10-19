function insertSort(arr) {
    let tmp;

    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
          tmp = arr[i];
          arr[i] = arr[j];
          arr[j] = tmp;
        }
      }
    }

   console.log(arr)
  }


tab= [5,3,4,1,500]

insertSort(tab)