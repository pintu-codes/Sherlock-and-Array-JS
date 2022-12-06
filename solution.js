function balancedSums(arr) {
    
    let output = "NO";
  
    // starting index of the array
    let i = 0; 
  
    // End index of the array
    let j = arr.length - 1;

    let left_sum = arr[i];
    let right_sum = arr[j];
    
    // If the array has just one item or zero items, we outright declare it a balanced sum
    if(arr.length <= 1){
      output = "YES";
    }else{
      
      // Perform the action, while index of j - 1 != 1
      while(j - i != 1){
      
      // When the array has 3 elements for eg [1,4,1], it is a balanced sum array.
      if(j - i == 2 && left_sum == right_sum){
        output = "YES";
        break;
      }
      
      // Move the pointer based on the value of sum
      if(left_sum > right_sum){
        j--;
        right_sum += arr[j]; 
      }else{
        i++
        left_sum += arr[i];
      }
      
    }

    // For input like [2,0,0,0] or [0,0,1];
    if(right_sum === 0 || left_sum === 0){
      output = "YES";
    }

    }
   return output;
}

console.log(balancedSums([1, 2, 3, 3]));
