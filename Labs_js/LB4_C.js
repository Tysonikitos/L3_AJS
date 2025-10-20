function GetUsers()
{
  return fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(data=>{
    data.map(user=>({
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone
    }))
  })
  .catch(err => console.error('Не удалось отправить запрос', err));

}
function GetTodos()
{
  return fetch("https://jsonplaceholder.typicode.com/todos").then(response => response.json()).then(data => data.filter(todos => !todos.completed))
  .catch(err => console.error('Не удалось отправить запрос', err));
}
GetUsers().then(data => {
    console.log('=== Промисы: USERS (оставлены нужные поля) ===');
    console.log(data);
});

GetTodos().then(data => {
    console.log('=== Промисы: TODOS (только невыполненные) ===');
    console.log(data);
});