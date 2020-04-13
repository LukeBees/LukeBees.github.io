
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//complete, initializes all values in the integer array
var allChips = new Array(7);
for(let i = 0; i < allChips.length; i++)
{
	allChips[i] = new Array(6);
	for(let j = 0; j < 6; j++)
	{
		allChips[i][j] = 0;
	}
}

//complete, resets all values in the integer array to zero
function resetBoard()
{
	for(let i = 0; i < allChips.length; i++)
	{
		for(let j = 0; j < 6; j++)
		{
			allChips[i][j] = 0;
		}
	}
}

//complete, draws all pieces as described in integer array
function drawBoard()
{
	for(let i = 0; i < 7; i++)
	{
		for(let j = 0; j < 6; j++)
		{
			if(allChips[i][j] == 0)
			{
				ctx.beginPath();
				ctx.fillStyle = 'white';
				ctx.arc((40+50*i), (40+50*j), 20, 0, 2 * Math.PI);
				ctx.fill();
				ctx.stroke();
			}
			else if(allChips[i][j] == 1)
			{
				ctx.beginPath();
				ctx.fillStyle = 'red';
				ctx.arc((40+50*i), (40+50*j), 20, 0, 2 * Math.PI);
				ctx.fill();			}
			else //allChips[i][j] == 2
			{
				ctx.beginPath();
				ctx.fillStyle = 'yellow';
				ctx.arc((40+50*i), (40+50*j), 20, 0, 2 * Math.PI);
				ctx.fill();
			}
		}
	}
}











var playerbutton = document.getElementById('b1');
var playerinput = document.getElementById('input'); //box in which the user enters data
var playertext = document.getElementById('s1');
var turns = 0;
var side = 1;
var isWin = false;
var winner = 0;

playerbutton.addEventListener("click", (e) => {
	if(isWin || turns == 42) //reset the board in case a player wins or the board is full
	{
		resetBoard();
		drawBoard();
		turns = 0;
		playertext.innerText = "Red Player, make your move";
		playerinput.value = "";
		side = 1;
		isWin = false;
	}
	else
	{
		let col = parseInt(playerinput.value);
		if(isValid(col)) //if the column the player enters is acceptable
		{
			let r = 5;
			while(allChips[col-1][r] != 0)
			{
				r--;
			}
			allChips[col-1][r] = side;
	
			drawBoard();
			
			turns++;
		
			if(turns > 6)
			{
				isWin = checkWin();
			}
		
			if(!isWin)
			{
				if(turns % 2 == 0)
				{
					playertext.innerText = "Red Player, make your move";
					side = 1;
				}
				else //turns % 2 == 1
				{
					playertext.innerText = "Yellow Player, make your move";
					side = 2;
				}
			}
			else
			{
				if(winner == 1)
				{
				   playertext.innerText = "Red wins! ";
				}
				else //winner == 2
				{
				   playertext.innerText = "Yellow wins! ";
				}
				playertext.innerText = playertext.innerText + "Press button to play again";
			}
		}
	}

});

function checkWin()
{
	//check horizontally for fours
	for(let row = 5; row >= 0; row--)
	{
		let sum = 0;
		let line = 0;
		for(let col = 1; col < 7; col++)
		{
			let currentChip = allChips[col][row];
			if(currentChip == 0 || currentChip != allChips[col-1][row])
			{
			   line = 0;
			}
			else //currentChip == allChips[col-1][row] && currentChip != 0
			{
			   line++;
			}
			   
			if(line == 3)
			{
				winner = allChips[col][row];
				return(true);
			}
			sum = sum + allChips[col][row];
		}
		if(sum == 0)
		{
			row = -1; //
		}
	}
	
	
	//check vertically
	for(let col = 0; col < 7; col++)
	{
		let row = 5;
		let line = 0;
		let currentChip = allChips[col][row]
		while(row > 0 && currentChip != 0)
		{
			if(allChips[col][row-1] != currentChip)
			{
			   line = 0;
			}
			else
			{
			   line++;
			}
			
			if(allChips[col][row-1] == 0)
			{
				row == -1;
			}
			
			row--;
			   
			if(line == 3)
			{
				console.log(col);
				console.log(row);
				winner = allChips[col][row-1];
				return(true);
			}
		}
	}
	
	
	
	
	
	return(false);
}

//complete, determine whether a chip can be added to the column the user specifies
function isValid(c) //c represents the column where a spot is being added
{
  if(c < 1 || c > 7)
  {
    return(false);
  }  
  else
  {
    let r = 5;
    while(r >= 0)
    {
      if(allChips[c-1][r] != 0)
      {
        r--;
      }
      else // allChips[r][c] is 0, a new chip can be added to that place
      {
        return(true);
      }
    }
    return(false);
  }
}


