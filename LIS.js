

function LongestIncreasingSequence(arr,n){

let LIS = Array(n).fill(1);
let max = 0;

for (i = 1; i < n; i++)
    for(j = 0; j < i; j++)
       if(arr[i]> arr[j] && LIS[i] < LIS[j] + 1)
              LIS[i] = LIS[j] + 1;
    


for (i = 0; i < n; i++)
    if(LIS[i] > max)
        max = LIS[i];

        return max

}
        

let arr = ([10,22,9,33,21,50,41,60,22,68,90]); 
let n = arr.length;
console.log('Length of LIS is', LongestIncreasingSequence(arr,n));

