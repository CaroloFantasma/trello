window.addNewList = function() {
  const newList = document.getElementById ('addListContainer');
    newList.innerHTML = `
    <form>
      <div class="form-group" id="newListWrapper">
        <input type="text" id="newListInput" autofocus placeholder="Introduzca el título de la lista...">
        <div>
        <button type"button" id="addingListBtn" onClick= window.addingList()>Añadir lista</button>
        <button type="button" id="closeNewListBtn" onClick="window.closeBtn()"><i class="fas fa-times"></i></button>
        </div>
      </div>
    </form>
    `
};

window.closeBtn = function() {
  const closeNewList = document.getElementById ('addListContainer');
  closeNewList.innerHTML = `
  <button id="addCardBtn" onclick="window.addNewList()">
    <i class="fas fa-plus" id="addCardIcon"></i>
    <p id="AddListTitle">Añada una lista</p>
  </button>
  `    
};

window.addingList = function() {
  inputAddListValue = document.getElementById('newListInput').value;
  const addingNewList = document.getElementById ('addListContainer');
  addingNewList.innerHTML = `
  <div class="form-group" id="newListWrapper">
    <p><strong>${inputAddListValue}</strong></p>
    <div>
      <button type"button" id="addingCard" onClick= window.addingAnotherList()><i class="fas fa-plus"></i>Añada una tarjeta</button>
    </div>
  </div>

  <div id="formContainer"> 
    <form>
      <div class="form-group" id="newListWrapper">
        <input type="text" id="newListInput" placeholder="Introduzca el título de la lista...">
      <div>
        <button type"button" id="addingListBtn" onClick= window.addingList()>Añadir lista</button>
        <button type="button" id="closeNewListBtn" onClick="window.closeBtn()"><i class="fas fa-times"></i></button>
      </div>
    </div>
    </form>
  </div>
  `
};

window.addingAnotherList = function() {
  const addingAnotherList = document.getElementById ('addListContainer');
  addingAnotherList.innerHTML = `
  <div class="form-group" id="newListWrapper">
    <p><strong>${inputAddListValue}</strong></p>
    <form>
    <input type="text" id="newListInput" placeholder="Introduzca un título para esta tarjeta...">
    <div>
    <button type"button" id="addingListBtn" onClick= window.addingList()>Añada otra tarjeta</button>
    <button type="button" id="closeNewListBtn" onClick="window.closeBtn()"><i class="fas fa-times"></i></button>
    </div>
  </form>
  </div>
  `
};