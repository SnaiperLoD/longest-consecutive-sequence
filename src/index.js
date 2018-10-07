module.exports = function longestConsecutiveLength(array) {

  let max = 1;
  let counter = 1;
  const n=array.length

  for (let i = 1, l = array.length; i < n; ++i)
   {
      if (array[i] === array[i - 1]) continue;

      if (array[i] - 1 === array[i - 1]) 
      {
          counter++;
      } 
      else 
      {
          buff = array[i] - i;
          counter = 1;
      }

      max = Math.max(counter, max);
  }

  if (n==0)
  return 0;

  return max;
};
