document.addEventListener('DOMContentLoaded', function () {
    // Sayfa yüklendiğinde notları yükle
    loadNotes();
  
    // Ekleme butonuna tıklandığında not ekle
    document.getElementById('note-input').addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
        addNote();
      }
    });
  });
  
  function addNote() {
    const noteInput = document.getElementById('note-input');
    const noteText = noteInput.value.trim();
  
    if (noteText !== '') {
      // Yeni not oluştur
      const newNote = document.createElement('li');
  
      // Not metni içeren bir span oluştur
      const noteSpan = document.createElement('span');
      noteSpan.textContent = noteText;
  
      // Sil butonunu içeren bir button oluştur
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Sil';
      deleteButton.onclick = function () {
        deleteNote(newNote);
      };
  
      // Yeni notu birleştir
      newNote.appendChild(noteSpan);
      newNote.appendChild(deleteButton);
  
      // Not listesine ekle
      document.getElementById('note-list').appendChild(newNote);
  
      // Input'u temizle
      noteInput.value = '';
  
      // Notları yerel depolamada sakla
      saveNotes();
    }
  }
  
  function saveNotes() {
    const notes = document.getElementById('note-list').innerHTML;
    localStorage.setItem('notes', notes);
  }
  
  function loadNotes() {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      document.getElementById('note-list').innerHTML = savedNotes;
    }
  }
  
  function deleteNote(noteElement) {
    // Notu DOM'dan kaldır
    noteElement.remove();
  
    // Güncellenmiş not listesini yerel depolamada sakla
    saveNotes();
  }