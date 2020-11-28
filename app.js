let inputData = data;
console.log(inputData)


function showData(index){

  for(let i = (index-1) * 20; i < index*20; i++){
    console.log(inputData[i]);
  }
}