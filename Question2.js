function findClosestAnswer(askedQuesion, question_answers) {
    
    function wordMatchCount(str1, str2) {
      const words1 = str1.toLowerCase().split(/\s+/);
      const words2 = str2.toLowerCase().split(/\s+/);
      const commonWords = words1.filter(word => words2.includes(word));
      return commonWords.length;
    }
  
    let closestMatch = '';
    let maxMatches = 0;
  
    
    for (let [question, answer] of question_answers) {
      const matches = wordMatchCount(askedQuesion, question);
      if (matches > maxMatches) {
        maxMatches = matches;
        closestMatch = answer;
      }
    }
  
    return closestMatch;
  }
  
  
  const question_answers = [
    ["What is your name?", "My name is Chatbot."],
    ["How can I help you?", "I can assist you with your queries."],
    ["What is the weather today?", "The weather is sunny."]
  ];
  
  
  const askedQuesion = "What's the weather like today?";
  const closestAnswer = findClosestAnswer(askedQuesion, question_answers);
  console.log(closestAnswer);  // Output: "The weather is sunny."
  