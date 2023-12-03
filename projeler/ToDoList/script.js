document.addEventListener('DOMContentLoaded', function() { //DOM bizim html ile bağlantı kurmamızı sağlaya bir ney????
    const form = document.getElementById('todo-form');// const ve letin tanımı araştır 
    const input = document.getElementById('todo-input'); // kullanıcın yazı yazmak için kullanığı alanda ??ulaşmak için kullandığımız tanımlama
    const todoList = document.getElementById('todo-list'); // kullanıcının yazdığı şeyleri listelemek için html kısmındaki yere js deulaşmak için kullandığımız fonksiyon
  
    //aşağıdaki kısım buttonun amacını gösteriyor(bu kısmı özellikle araştır)
    form.addEventListener('submit', function(event) { //(araştır) submiti ayrı olarak çağırma fonksiyonu ile kullanmamızın nedeni sayfa açıldığı gibi değilde kullanıcıyla etkileşim halinde çalışmasını istediğimiz bir fonksiyon olması
      event.preventDefault();// (araştır)bu olay form açıldığı gibi çalışmasın demek bütün özelliklerini durduruyor sadece çağırdığı (kullanıcının) çağırdığı durumda çalışacak
      const todoText = input.value.trim(); //(trim ne demek) todotext tanımı yaptık inputun değerini trim ile belirledik ???
      if (todoText !== '') { // if döngüsü ile eğer boş değilse liste bölümüne texti ekle ve değerini tekrardan boş yap işlemi yaptık
        addTodoToList(todoText);//???
        input.value = '';
      }

    });
    
    //buradaki kısım todolist içerisinde  tıklandığında ne olacağını gösteriyor 
    todoList.addEventListener('click', function(event) {
      if (event.target.tagName === 'BUTTON') { 
        event.target.parentElement.remove();
      } else if (event.target.tagName === 'LI') {
        event.target.classList.toggle('completed');
      }
    });
  
    function addTodoToList(todoText) {
      const listItem = document.createElement('li');
      listItem.innerText = todoText;
      const deleteButton = document.createElement('button');
      deleteButton.innerText = 'Sil';
      deleteButton.classList.add('delete');
      listItem.appendChild(deleteButton);
      todoList.appendChild(listItem);
    }
  });