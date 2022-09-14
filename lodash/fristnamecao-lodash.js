var fristnamecao = {
  //创建一个元素数组，这些元素按大小的长度分成数组。
  //如果数组不能被均匀分割，那么最后的块将是剩余的元素。
  chunk: function chunk(Array, Size) {
    if (Size >= Array.length || Size == 0) {
      //判断长度
      return Array;
    }
    let NewArray = []; //建立两个数组作为备用
    let OldArray = [];
    let Count = 0;
    for (let i = 0; i < Array.length; ++i) {
      OldArray.push(Array[i]);
      Count++;
      if (Count == Size) {
        //只要长度够了就重置再来
        NewArray.push(OldArray);
        Count = 0;
        OldArray = [];
      }
    }
    if (OldArray.length != 0) {
      NewArray.push(OldArray);
    }
    return NewArray;
  },

  compact: function compact(Array) {
    //创建一个删除了所有假值的数组。值 false、 null、0、“”、 unDefinition 和 NaN 都是假值。
    let NewArray = [];
    for (let i = 0; i < Array.length; ++i) {
      if (Array[i]) {
        NewArray.push(Array[i]);
      }
    }
    return NewArray;
  },

  difference: function difference(Array1, ...Array2) {
    debugger;
    let NewArray = [];
    let puArray = [];
    // let i=0
    // while(isArray(Array2[i])){
    //   for(let j=0;j< Array2[i].length;++j){
    //       puArray.push(Array2[i][j])
    //   }
    //   ++i
    // }
    puArray = Array2.flat();
    for (let num of Array1) {
      if (!puArray.includes(num)) {
        NewArray.push(num);
      }
    }

    return NewArray;
  },

  fill: function fill(array, value, start = 0, end = array.length) {
    for (; start < end; ++start) {
      array[start] = value;
    }
    return array;
  },
  drop: function drop(array, n = 1) {
    if (array.length < n) {
      return [];
    }
    if (n == 0) {
      return array;
    }
    let NewArray = [];

    while (n < array.length) {
      NewArray.push(array[n]);
      n++;
    }
  },
};
