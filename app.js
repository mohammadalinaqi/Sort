/* Number 128867
/Mohammad Ali Naqi Niarami
*/
window.onload=function()
    {
      displayTable(TABLE_DATA);
    }
    //Function to clear table
    function clearTable(TABLE_DATA)
 {
    let child = document.getElementById('body');
    let i=child.getElementsByTagName('tr');
    let j=i.length;
    for( let x=j-1;x>-1;x--)
    {
    child.removeChild(i[x]);
 }  }
    //Function to display
    function displayTable(TABLE_DATA)
    {
      let tab=document.getElementById('tab');
      let body=document.getElementById('body');
      for(let i=0;i<TABLE_DATA.length;i++)
      {
        let y=TABLE_DATA[i];
        let row=document.createElement('tr');
        let properties=['id','thumbnailUrl','name','price'];
        for (let j=0;j<properties.length;j++)
        {
          let column=document.createElement('td');
          column.innerHTML= y[properties[j]];
          row.appendChild(column);
        }
      body.appendChild(row);
      tab.appendChild(body);
    } }
    
    //Function to shuffle
    function shuffle(array)
  {let i=array.length,j,temp;
    while(--i>0)
    {
      j=Math.floor(Math.random()*(i+1)); 
      temp=array[j];
      array[j]=array[i];
      array[i]=temp;
    }     
return array;
  }
  function startbutton()
  {
  clearTable();
  shuffle(TABLE_DATA);
  displayTable(TABLE_DATA);
   }
//Function for sorting
function sortingPrice(a,b)
{
  return parseFloat(b.price)-parseFloat(a.price)
}
function sortingId(abc,xyz)
{
  abc.sort(xyz);
  abc.sort(function(a, b) {
  if(a.price==b.price)
  return parseFloat(a.id)-parseFloat(b.id)});
}
function sorts()
  {
  sortingId(TABLE_DATA,sortingPrice);
  clearTable();
  displayTable(TABLE_DATA);
}