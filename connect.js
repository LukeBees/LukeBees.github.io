
let allChips = new Array(6);
for(var i = 0; i < allChips.length; i++)
  {
	  allChips[i] = new Array(7);
	  for(var j = 0; j < 7; j++)
	  {
		  allChips[i][j] = 0;
	  }
  }

function resetBoard()
{
  for(var i = 0; i < allChips.length; i++)
  {
	  for(var j = 0; j < 7; j++)
	  {
		  allChips[i][j] = 0;
	  }  
  }
}

function connectfour() 
{
  let isWin = false;  let t = 0;
  
  while(!isWin || t < 49)
  {
    if(t % 2 == 0) //red plays
    {
      let y;
      add(y, 1)
      if(isValid(y))
      {
        
        t++;
      }
    }
    else //t % 2 == 1, yellow plays
    {
      let y;
    }
  }
  
}
     
function add(c, s) //c represents the column (0-6), s represents the side
{
  allChips[][c];
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


