window.onload = function () {
    loadNotes();
};

function addNote() {
    var title = document.getElementById('title').value;
    var note = document.getElementById('note').value;

    if (title && note) {
        var notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.push({ title: title, note: note });
        localStorage.setItem('notes', JSON.stringify(notes));
        loadNotes();
        document.getElementById('title').value = '';
        document.getElementById('note').value = '';
    } else {
        alert('Başlık ve not boş olamaz.');
    }
}

function loadNotes() {
    var noteList = document.getElementById('noteList');
    noteList.innerHTML = '';
    var notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.forEach(function (item, index) {
        var li = document.createElement('li');
        li.textContent = item.title;
        li.onclick = function () {
            showNoteDetails(index);
        };
        li.addEventListener('contextmenu', function (e) {
            e.preventDefault();
            showContextMenu(index, e.clientX, e.clientY);
        });
        noteList.appendChild(li);
    });
}

function showContextMenu(index, x, y) {
    var contextMenu = document.getElementById('contextMenu');
    contextMenu.style.display = 'block';
    contextMenu.style.left = x + 'px';
    contextMenu.style.top = y + 'px';
    document.getElementById('deleteNote').onclick = function () {
        deleteNote(index);
        contextMenu.style.display = 'none';
    };
}

function showNoteDetails(index) {
    var notes = JSON.parse(localStorage.getItem('notes')) || [];
    var selectedNoteDiv = document.getElementById('selectedNote');
    selectedNoteDiv.innerHTML = '';
    var selectedNoteTitle = document.createElement('h2');
    selectedNoteTitle.textContent = notes[index].title;
    var selectedNoteContent = document.createElement('p');
    selectedNoteContent.textContent = notes[index].note;
    selectedNoteDiv.appendChild(selectedNoteTitle);
    selectedNoteDiv.appendChild(selectedNoteContent);
    showDeleteButton(true);
}

function showDeleteButton(visible) {
    // Seçili notun div'ini al
    var selectedNoteDiv = document.getElementById('selectedNote');

    // Delete butonunu içeren div'ini al
    var deleteNoteButton = document.getElementById('deleteNoteButton');

    // Eğer seçili not div'i ve delete butonu div'i varsa
    if (selectedNoteDiv && deleteNoteButton) {
        // Delete butonunu göster veya gizle
        deleteNoteButton.style.display = visible ? 'block' : 'none';
    }
}

function clearSelectedNote() {
    var selectedNoteDiv = document.getElementById('selectedNote');
    selectedNoteDiv.innerHTML = '';
    showDeleteButton(false);
}

function deleteSelectedNote() {
    var notes = JSON.parse(localStorage.getItem('notes')) || [];
    var selectedIndex = getSelectedIndex();
    if (selectedIndex !== null) {
        notes.splice(selectedIndex, 1);
        localStorage.setItem('notes', JSON.stringify(notes));
        loadNotes();
        clearSelectedNote();
        var contextMenu = document.getElementById('contextMenu');
        contextMenu.style.display = 'none'; // Sağ tık menüsünü gizle
    }
}

function getSelectedIndex() {
    var selectedNoteDiv = document.getElementById('selectedNote');
    var noteList = document.getElementById('noteList');
    for (var i = 0; i < noteList.children.length; i++) {
        if (noteList.children[i].classList.contains('selected')) {
            return i;
        }
    }
    return null;
}