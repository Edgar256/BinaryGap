
function solution(N) {
    let maxGap = 0;
    let currentGap = 0;
    let binaryN = N.toString(2); //Convert number to binary string
    let len = binaryN.length; // Length of Binary string
    let posOne = binaryN.lastIndexOf('1'); // First occurrence of 1 from the right
    
    for(var i = posOne; i > 0; i--){
        
        if(binaryN.charAt(i) == '1'){
            currentGap = 0; // reset gap counter to zero
        }else{
            currentGap = currentGap + 1;
            if(currentGap > maxGap){
                maxGap = currentGap;
            }
        }      
        
    }
    return maxGap;
}
