// randomizes possible choices for a question
export const randomizeChoices = questionData => {
  for(let i = 0;i < questionData.length; i++) {
     questionData[i]['choices'] = questionData[i].type === 'multiple' ?
       [...questionData[i].incorrect_answers, questionData[i].correct_answer].sort(function(){return 0.5 - Math.random()})
     : ['True', 'False'];
  }
};