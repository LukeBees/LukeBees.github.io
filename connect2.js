

var allChips = new Array(6); //two-dimensional array of integers

for(let i = 0; i < 6; i++)
{
  let r = new Array(7);
  allChips[i] = r;
  for(let j = 0; j < 7; j++)
  {
    allChips[i][j] = 0;
  }
}

function clearBoard()
{
  for(let i = 0; i < 6; i++)
  {
    for(let j = 0; j < 7; j++)
    {
      allChips[i][j] = 0;
    }
  }
}

function connectfour()
{
  let t = 0;
  
  while(t < 49)
  {
    if(t % 2 == 0)
    {
    
    }
    else //t % 2 == 1
    {
    
    }
  }
}
