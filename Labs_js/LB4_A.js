function GetPost(callBack)
{
  fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json()).then(data=>{
    let sorted = data.sort((a,b)=>b.title.length-a.title.length);
    callBack(sorted);
  })
  .catch(err => console.error('Не удалось отправить запрос', err));

}
function GetComments(callBack)
{
  fetch("https://jsonplaceholder.typicode.com/comments").then(response => response.json()).then(data=>{
    let sorted = data.sort((a,b)=>a.name.localeCompare(b.name));
    callBack(sorted);
  })
  .catch(err => console.error('Не удалось отправить запрос', err));
}
GetPost(data=>{console.log(data)});
GetComments(data=>{console.log(data)});