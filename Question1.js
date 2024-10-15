//Question 1: Normalize an Input String (Easy)


function normalizeInputString(input) {
    let trimmedStr = input.trim();
    let byRemovingSpecialChar = trimmedStr.replace(/[^a-zA-Z0-9 ]/g, '');
    let byRemoveSpace = byRemovingSpecialChar.replace(/\s+/g, ' '); 
    let camelCaseString = byRemoveSpace
      .toLowerCase()                            
      .split(' ')                               
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))  
      .join(' ');                               
  
    return camelCaseString;
  }
  
  
  let inputByUser = " Hello! World@ This is a Test!. ";
  let normalizedString = normalizeInputString(inputByUser);
  console.log(normalizedString);  
  