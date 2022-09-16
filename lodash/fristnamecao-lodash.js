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

  difference: function difference(
    Array1,
    ...Array2 //创建一个array不包含在其他给定数组中的值数组，SameValueZero用于相等比较。结果值的顺序和引用由第一个数组确定。
  ) {
    let NewArray = [];
    let puArray = [];
    let i = 0;
    while (Array.isArray(Array2[i])) {
      for (let j = 0; j < Array2[i].length; ++j) {
        puArray.push(Array2[i][j]);
      }
      ++i;
    }
    // puArray = Array2.flat(); //展平数组
    for (let num of Array1) {
      if (!puArray.includes(num)) {
        //判断是否存在该数
        NewArray.push(num);
      }
    }

    return NewArray;
  },

  //array用valuefrom startup to 但不包括填充 的元素end。
  fill: function fill(array, value, start = 0, end = array.length) {
    for (; start < end; ++start) {
      //从哪儿填充就从哪儿开始，然后end结束
      array[start] = value;
    }
    return array;
  },
  //array使用n从开头删除的元素创建一个切片。
  drop: function drop(array, n = 1) {
    if (array.length < n) {
      return [];
    }
    if (n == 0) {
      return array;
    }
    let NewArray = [];
    //从哪儿开始就从哪儿开始赋值新的切片数组
    while (n < array.length) {
      NewArray.push(array[n]);
      n++;
    }
    return NewArray;
  },
  findIndex: function findIndex() {},

  //展平数组
  flatten: function flatten(array) {
    debugger;
    let NewArray = []; //展平的数组存放这里
    let i = 0; //展品数组的每一个下标
    while (i < array.length) {
      if (Array.isArray(array[i])) {
        //判断是不是数组
        for (let j = 0; j < array[i].length; j++) {
          //是数组就把这个数组里面内容都存放在之前定好的数组
          NewArray.push(array[i][j]);
        }
        i++;
        break; //因为只需要展平一次，所以展平一次以后直接break
      } else {
        NewArray.push(array[i]); //不是数组就直接存放之前定好的数组
        i++;
      }
    }
    while (i < array.length) {
      NewArray.push(array[i]); //展平一次后继续把之前数组放到之前定好的数组
      i++;
    }
    return NewArray;
  },

  flattenDeep: function flattenDeep(array) {
    return array.reduce((pre, cur) => {
      return pre.concat(Array.isArray(cur) ? flattenDeep(cur) : cur);
    }, []);
  },

  flattenDepth: function flattenDepth(array, depth) {
    return array.flat(depth);
  },
  head: function head(array) {
    if (array.length == 0) {
      return undefined;
    }
    return array[0];
  },

  indexOf: function indexOf(array, value, fromIndex) {
    if (fromIndex) {
      for (; fromIndex < array.length; ++fromIndex) {
        if (array[fromIndex] == value) {
          return fromIndex;
        }
      }
    } else {
      for (let i = 0; i < array.length; ++i) {
        if (array[i] == value) {
          return i;
        }
      }
    }
    return -1;
  },
  lastIndexOf: function lastIndexOf(array, value, fromIndex = 0) {
    if (fromIndex < 0) {
      return -1;
    }
    if (fromIndex) {
      for (; fromIndex < array.length; fromIndex--) {
        if (array[fromIndex] == value) {
          return fromIndex;
        }
      }
    } else {
      for (let i = array.length - 1; i > -1; i--) {
        if (array[i] == value) {
          return i;
        }
      }
    }
    return -1;
  },
  initial: function initial(array) {
    return array.slice(0, array.length - 1);
  },
  join: function join(array, separator = ",") {
    let str = "";
    for (let num of array) {
      str = str + (num + separator);
    }
    return str;
  },
  last: function last(array) {
    return array[array.length - 1];
  },
  pull: function pull(array, ...value) {
    let NewArray = [];
    let i = 0;
    while (i < array.length) {
      if (value.includes(array[i])) {
        ++i;
      } else {
        NewArray.push(array[i]);
        ++i;
      }
    }
    return NewArray;
  },
  reverse: function reverse(array){
    let i=0
    let j=array.length-1

    while(i<j){
      let temp = array[j]
      array[j] = array[i]
      array[i] = temp;
      i++
      j--
    }
    return array;
  }
};
