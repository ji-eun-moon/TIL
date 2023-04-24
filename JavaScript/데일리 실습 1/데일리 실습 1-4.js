const p1 = ['rock', 'paper', 'scissors', 'scissors', 'rock', 'rock', 'paper', 'paper', 'rock', 'scissors']
const p2 = ['paper', 'paper', 'rock', 'scissors', 'paper', 'scissors', 'scissors', 'rock', 'rock', 'rock']

const playGame = (p1_choice, p2_choice) => {
	// 작성해 주세요

	// 비겼을 경우
	if (p1_choice == p2_choice){
		return 0
	}
	// p1이 이겼을 경우
	if (
		(p1_choice === "scissors" && p2_choice === "paper") ||
		(p1_choice === "rock" && p2_choice === "scissors") ||
		(p1_choice === "paper" && p2_choice === "rock")
	  ) {
		return 1;
	}
	
	  // p2가 이겼을 경우
	  if (
		(p2_choice === "scissors" && p1_choice === "paper") ||
		(p2_choice === "rock" && p1_choice === "scissors") ||
		(p2_choice === "paper" && p1_choice === "rock")
	  ) {
		return 2;
	}	
}

for (let i = 0; i < 10; i++){
	console.log(playGame(p1[i], p2[i]));
}

// 2
// 0
// 2
// 0
// 2
// 1
// 2
// 1
// 0
// 2
