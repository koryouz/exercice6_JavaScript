function toggle(){
  var firstNumber = document.getElementById("firstNumber").value;
  var secondNumber = document.getElementById("secondNumber").value;
  if (!isNaN(firstNumber) && !isNaN(secondNumber)){
    if (secondNumber != 0){
      alert(firstNumber%secondNumber);
    }else{
      alert('second number != 0');
    }
  }else{
    alert('not a number');
  }
}
