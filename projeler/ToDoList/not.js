// Sayfa içeriği tamamen yüklendiğinde çalışacak olan fonksiyon
document.addEventListener('DOMContentLoaded', function() {
    // HTML içindeki form, input ve todo-list elementlerini seçme
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
  
    // Form gönderildiğinde çalışacak olan fonksiyon
    form.addEventListener('submit', function(event) {
      // Sayfanın yeniden yüklenmesini engelle
      event.preventDefault();
      
      // Input alanından alınan metni trim() fonksiyonu ile başındaki ve sonundaki boşlukları temizle
      const todoText = input.value.trim();
  
      // Eğer input alanı boş değilse, addTodoToList fonksiyonunu çağır
      if (todoText !== '') {
        addTodoToList(todoText);
        // Eklenen todo'dan sonra input alanını temizle
        input.value = '';
      }
    });
  
    // Yapılacaklar listesindeki elemanlara tıklama olayı
    todoList.addEventListener('click', function(event) {
      // Eğer tıklanan eleman bir BUTTON ise
      if (event.target.tagName === 'BUTTON') {
        // Bu butona ait olan LIST ITEM'ı sil
        event.target.parentElement.remove();
      } 
      // Eğer tıklanan eleman bir LIST ITEM ise
      else if (event.target.tagName === 'LI') {
        // Bu LIST ITEM'a 'completed' sınıfını ekleyip çıkar
        event.target.classList.toggle('completed');
      }
    });
  
    // Yapılacaklar listesine eleman eklemek için kullanılan fonksiyon
    function addTodoToList(todoText) {
      // Yeni bir LIST ITEM oluştur
      const listItem = document.createElement('li');
      // LIST ITEM'ın metnini gelen todoText'e ayarla
      listItem.innerText = todoText;
  
      // Yeni bir BUTTON oluştur
      const deleteButton = document.createElement('button');
      // BUTTON'ın metnini 'Sil' olarak ayarla
      deleteButton.innerText = 'Sil';
      // BUTTON'a 'delete' sınıfını ekle
      deleteButton.classList.add('delete');
  
      // BUTTON'ı LIST ITEM'a ekle
      listItem.appendChild(deleteButton);
      
      // LIST ITEM'ı Yapılacaklar listesine ekle
      todoList.appendChild(listItem);
    }
  });