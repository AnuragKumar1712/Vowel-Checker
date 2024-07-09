function checkVowels(){
    var text = document.getElementById("inputText").value;
    var vowelCount = 0;

    //Convert the input text into lowercase
    text = text.toLowerCase();

    //Loop to check the nubmber of vowels
    for(var i = 0; i < text.length; i++){

        var char = text.charAt(i);
        if(isVowel(char)){
            vowelCount++;
        }
    }

    //Display the result
    var result = document.getElementById("result");
    result.textContent = "Total Vowels:" + vowelCount;
}

function isVowel(char){
    var vowels = ["a","e","i","o","u"];
    return vowels.includes(char);
}