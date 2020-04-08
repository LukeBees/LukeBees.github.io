var board = [];

function resetBoard()
{
  var row = [];
  for(i = 0; i < 7; i++)
  {
    row.push(0);
  }
  for(i = 0; i < 6; i++)
  {
    board.push(row);
  }
}
