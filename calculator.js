function getOutput(){
	return document.getElementById('output-value').innerText;
}


function printOutput(num){

	document.getElementById('output-value').innerText = num;
}


function getHistory(){
	return document.getElementById('history-value').innerText;
}


function printHistory(num){
	document.getElementById('history-value').innerText = num;
}


let number = document.getElementsByClassName('number');

for(let i = 0; i < number.length; i++){
	const element = number[i];
	element.addEventListener('click', function() {
		let output = getOutput();
		if(output != NaN){
			output += this.id;
			printOutput(output);
		}
	})
}

let operator = document.getElementsByClassName('operator');

for (let i = 0; i < operator.length; i++) {
	const element = operator[i];
	element.addEventListener('click', function(){
		if(this.id == 'clear'){
			printOutput('');
			printHistory('');
		}

		else if(this.id == 'backspace'){
			let output = getOutput().toString();			
			output =  output.substr(0, output.length-1);
			printOutput(output);
		}

		else{

			let output = getOutput();
			let history = getHistory();

			if(output != ''){
				history += output;

				if(this.id == '='){
					let result = eval(history);
					let resultValue = result.toFixed(1);
					printOutput(resultValue);					 
					printHistory('');
				}
				else{
					history += this.id;
					printHistory(history);
					printOutput('');
				}
			}
		}
	})
}