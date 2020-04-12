
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var allChips = new Array(7);
for(let i = 0; i < allChips.length; i++)
{
	allChips[i] = new Array(6);
	for(let j = 0; j < 6; j++)
	{
		allChips[i][j] = 0;
	}
}

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

function drawBoard()
{
	for(let i = 0; i < 7; i++)
	{
		for(let j = 0; j < 6; j++)
		{
			if(allChips[i][j] == 0)
			{
				ctx.beginPath();
				ctx.arc((40+50*i), (40+50*j), 20, 0, 2 * Math.PI);
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

function connectfour() 
{
	let isWin = false;  
	let t = 0;
  
	while(!isWin || t < 49)
	{
	
	drawBoard();
		
	if(t % 2 == 0) //red plays
	{
		let y;
		if(isValid(y))
      		{
        		add(y, 1);
        		t++;
      		}
    	}
    	else //t % 2 == 1, yellow plays
    	{
      		let y;
      		if(isValid(y))
      		{
        		add(y, 2);
        		t++;
      		}
   	}
	  
    	if(t > 7) //a minimum of seven turns overall is needed for the first player to add four chips, so only then does the program check for winners
    	{
      	isWin = checkWin();
    	}

  	}
}
     
function add(c, s) //c represents the column (0-6), s represents the side
{
  let r = 5;
  while(allChips[r][c] != 0)
  {
	r--;
  }
  allChips[r][c] = s;
}

function checkWin()
{
	
}

function checkRow(row)
{
	let tf = false;
	for(let i = 0; i < 7; i++)
	{
		if(allChips[row][i] != 0)
		{
		   tf = true;
		}
	}
	return(tf);
}

function checkCol(col)
{
	let tf = false;
	for(let i = 0; i < 6; i++)
	{
		if(allChips[i][col] != 0)
		{
		   tf = true;
		}
	}
	return(tf);
}

function isValid(c) //c represents the column where a spot is being added
{
  if(c < 1 || c > 7)
  {
    let r = 5;
    return(false);
  }  
  else
  {
    let r = 5;
    while(r > 0)
    {
      if(allChips[r][c] != 0)
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


