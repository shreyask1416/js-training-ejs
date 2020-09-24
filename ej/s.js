function range(start, end, step = start <= end ? 1 : -1) {
    let res = [];
  for(let i=start;step>=0?i<=end:i>=end;i+=step)
  {
    res.push(i);
  }
  return res;
}
  
  function sum(numbers) {
     res = 0;
    for (let num of numbers) {
      res += num;
    }
    return res;
    
  }
  
  console.log(range(1, 10))
  // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(range(5, 2, -1));
  // → [5, 4, 3, 2]
  console.log(sum(range(1, 10)));
  // → 55