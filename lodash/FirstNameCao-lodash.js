var fristnamecao = {
  chunk: (Array, Size) => {
    if (Size >= Array.length || Size == 0) {
      return Array;
    }
    let NewArray = [];
    let OldArray = [];
    let Count = 0;
    for (let i = 0; i < Array.length; ++i) {
      OldArray.push(Array[i]);
      count++;
      if (Count == Size) {
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
};
