var questions = 
	[{
		Question: `Do you like pina coladas?`,
		"1":
			{
			value: `1`,
			text: `Strongly Disagree`
			}
		"2":
			{
			value: `2`,
			text: `Disagree`
			}
		"3":
			{
			value: `3`,
			text: `Neutral`
			}
		"4":
			{
			value: `4`,
			text: `Agree`
			}
		"5":
			{
			value: `5`,
			text: `Strongly Agree`
			}
	},
	{
		Question: `Do you like getting caught in the rain?`,
		StronglyDisagree: `1`,
		Disagree: `2`,
		Neutral: `3`,
		Agree: `4`,
		StronglyAgree: `5`
	},
	{
		Question: `Do you like champagne?`,
		StronglyDisagree: `1`,
		Disagree: `2`,
		Neutral: `3`,
		Agree: `4`,
		StronglyAgree: `5`
	},
	{
		Question: `Do you like making love at midnight, in the dunes of the cape?`,
		StronglyDisagree: `1`,
		Disagree: `2`,
		Neutral: `3`,
		Agree: `4`,
		StronglyAgree: `5`
	},
	{
		Question: `Do you like the feel of the ocean?`,
		StronglyDisagree: `1`,
		Disagree: `2`,
		Neutral: `3`,
		Agree: `4`,
		StronglyAgree: `5`
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

		for (var j = 1; j < 5; j++){



		}

		cardBody.html(questions[i].Question);
		$(`#questionDiv`).append(cardBody);
	};

};

window.onload = function(){

	renderQuestions();

};


