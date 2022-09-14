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
      count++;
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
      if (
        Array[i] != false &&
        Array[i] != "" &&
        Array[i] != 0 &&
        Array[i] != undefined &&
        Array[i] != NaN
      ) {
        NewArray.push(NewArray[i]);
      }
    }
    return NewArray;
  },

  difference: function difference(Array1, Array2) {
    let NewArray = [];

    for (let num of Array1) {
      if (!Array2.includes(num)) {
        NewArray.push(num);
      }
    }

    return NewArray;
  },

  differenceBy: function differenceBy(Array1,Array2){

  }
};
