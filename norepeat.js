const arr=['1','2','3','4','5','6','7','8','9']

let i=arr.length, random,temp;
while(--i>0){

    random=Math.floor(Math.random()*(i+1));
    temp=arr[random];
    arr[random]=arr[i];
    arr[i]=temp

}

i++

console.log(arr)
console.log(arr[i])


// for(i=0;i<arr.length;i++){

//     console.log(arr[i])
// }