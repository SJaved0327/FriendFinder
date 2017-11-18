var questions = 
	[{
		Question: `Do you like pina coladas?`
	},
	{
		Question: `Do you like getting caught in the rain?`
	},
	{
		Question: `Do you like champagne?`
	},
	{
		Question: `Do you like making love at midnight, in the dunes of the cape?`
	},
	{
		Question: `Do you like the feel of the ocean?`
	}];

console.log(questions);

//create headers for survey questions
function renderQuestions(){
	for (var i = 0; i < questions.length; i++){
		
		var adder = i+1;

	//create and append card head for each quesiton
		var cardHead = $(`<div>`);
		cardHead.addClass(`card-header`);
		cardHead.data(`data-question`, adder);
		cardHead.html(questions[i].Question);
		$(`#questionDiv`).append(cardHead);

	//create and append card body for each question
		var cardBody = $(`<div>`);
		cardBody.addClass(`card-body`);
		$(`#questionDiv`).append(cardBody);
		
		//create questions options for each card body
		for (var j = 1; j < 6; j++){
			console.log(j);
			var input;

			if (j === 1){
				input = (`<input type="radio" name="choice" data-value=${j}> ${j}  Strongly Disagree`);
				cardBody.append(input);
				cardBody.append(`<br>`);
			}
			if (j === 2){
				input = (`<input type="radio" name="choice" data-value=${j}> ${j}  Disagree`);
				cardBody.append(input);
				cardBody.append(`<br>`);
			}
			if (j === 3){
				input = (`<input type="radio" name="choice" data-value=${j}> ${j}  Neutral`);
				cardBody.append(input);
				cardBody.append(`<br>`);
			}
			if (j === 4){
				input = (`<input type="radio" name="choice" data-value=${j}> ${j}  Agree`);
				cardBody.append(input);
				cardBody.append(`<br>`);
			}
			if (j === 5){
				input = (`<input type="radio" name="choice" data-value=${j}> ${j}  Strongly Agree`);
				cardBody.append(input);
				cardBody.append(`<br>`);
			}

		};

		
	};

};

window.onload = function(){

	renderQuestions();

};


