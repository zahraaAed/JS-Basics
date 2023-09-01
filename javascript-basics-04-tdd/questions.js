
const stringSize = (text) => {
    return text.length;

}
const replaceCharacterE = (text) => {
    return text.replace('e', ' ');

}
const concatString = (text1, text2) => {
    return (text1)+(text2);

}
const showChar5 = (text) => {
    return text.charAt(4);

}
const showChar9 = (text) => {
    return text.slice(0,9);

}
const toCapitals = (text) => {
    return text.toUpperCase();

}
const toLowerCase = (text) => {
    return text.toLowerCase();

}
const removeSpaces = (text) => {
  return text.trim();
}
const IsString = (text) => {
    if(typeof text ==="string"){
        return true;
    }
    else{
    return false;
    }
}

const getExtension = (text) => {
    return text.split(".")[1];
}
const countSpaces = (text) => {
    let count=0;
for (let c of text){
    if(c===" "){
        count++;
    }
}
return count;
}
const InverseString = (text) => {
    function reverseText(inputText) {
      let reversedText = ''; // Define the reversedText variable
  
      for (let i = inputText.length - 1; i >= 0; i--) {
        reversedText += inputText[i];
      }
      
      return reversedText;
    }
  
    // Call the reverseText function and return its result
    return reverseText(text);
  };
const power = (x, y) => {
    return(x**y);

}
const absoluteValue = (num) => {
    return Math.abs(num);
};
const absoluteValueArray = (array) => {
    return array.map((num) => Math.abs(num));

}
const circleSurface = (radius) => {
      const pi = Math.PI; // Use Math.PI for a more accurate value of pi
      const surfaceArea = pi * radius*radius;
    return Math.round(surfaceArea);
}
const hypothenuse = (ab, ac) => {
    return Math.sqrt(ab*ab+ac*ac);

}
const BMI = (weight, height) => {
    return +(weight/(height*height)).toFixed(2);

}

const createLanguagesArray = () => {
    return (["Html","CSS","Java","PHP"]);

}

const createNumbersArray = () => {
return([0,1,2,3,4,5]);
}

const replaceElement = (languages) => {
    languages[2]="Javascript";
    return(languages);

}

const addElement = (languages) => {
    languages.push("Ruby","Python");
    return(languages);

}

const addNumberElement = (numbers) => {
     numbers.unshift(-2,-1);
     return(numbers);
}

const removeFirst = (languages) => {
languages.shift();
return(languages);
}

const removeLast = (languages) => {
    languages.pop();
    return(languages);
    }

    const convertStrToArr = (social_str) => {
        const social_arr = social_str.split(",");
        return social_arr;
    }
    
const convertArrToStr = (languages) => {
    myString =languages.join(",");
    return myString;
}

const sortArr = (social_arr) => {
return social_arr.sort();
}

const invertArr = (social_arr) => {
return social_arr.reverse();

}