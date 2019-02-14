
function solution(N) {
    var maxGap = 0;
    var currentGap = 0;
    var binaryN = N.toString(2);
    var posIndex = binaryN.length;
    var maxIndex = posIndex - 1;
    
    for(var i = posIndex-1; i >= 0; i--){
        
        if(binaryN.charAt(maxIndex) == '0'){
            currentGap = 0;
            maxGap = currentGap;
        }else{
            if(binaryN.charAt(i) == '0'){
            currentGap = currentGap + 1;
            
            if( currentGap > maxGap){
                maxGap = currentGap;
            }
            
            }else{
                currentGap = 0;
            }
        }
        
        
    }return maxGap;
}
