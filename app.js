var binaryGap = (N) => {
    if (isNaN(N)) return null;
    let maxGap = 0;
    let currentGap = 0;
    let binaryN = N.toString(2); //Convert number to binary string
    let posOne = binaryN.lastIndexOf('1'); // First occurrence of 1 from the right
    
    for(let i = posOne; i > 0; i--){
        
        if(binaryN.charAt(i) == '1'){
            currentGap = 0; // reset gap counter to zero
        }else{
            currentGap = currentGap + 1;
            //console.log(`Current count is ${currentGap}`);
            if(currentGap > maxGap){
                maxGap = currentGap;
            }
        }      
        
    }
    return maxGap;
}

module.exports = binaryGap;

// if(isNaN(N)) return null;
//     let binary = N.toString(2);
//     let length = binary.length;
//     console.log(binary)
//     let binaryCount = 0, maxBinaryCount = 0;
//     for(let i = length-2; i >= 0; i--){
//         if(binary.charAt(length-1) == 1){
//             if(binary.charAt(i) == 0){
//                 binaryCount = binaryCount + 1;
//                 if(binaryCount > maxBinaryCount){
//                     maxBinaryCount = binaryCount;
//                 }
//             }else{
//                 binaryCount = 0
//             }
//         }else{
//             if(binary.charAt(i) == 1){
//                 binaryCount = 0;
//                 if(binaryCount > maxBinaryCount){
//                     maxBinaryCount = binaryCount;
//                 }
//             }else{
//                 binaryCount = binaryCount + 1;
//                 if(binaryCount > maxBinaryCount){
//                     maxBinaryCount = binaryCount;
//                 }
//             }
//         }      
//     }
