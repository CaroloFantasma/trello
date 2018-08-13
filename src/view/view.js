window.addNewList = function () {
  const newList = document.getElementById ('addListContainer');
    newList.innerHTML = `
    <form>
      <div class="form-group">
        <input type="text" id="newListInput" placeholder="Introduzca el título de la lista...">
        <button type"button" id="addingListBtn" onClick= addingList()>Añadir lista</button>
        <button type="button" id="closeNewListBtn" onClick="window.closeBtn()"><i class="fas fa-times"></i></button>
      </div>
    </form>
    `
}

window.closeBtn = function () {
  const closeNewList = document.getElementById ('addListContainer');
  closeNewList.innerHTML = `
  <button id="addCardBtn" onclick="window.addNewList()">
  <i class="fas fa-plus" id="addCardIcon"></i>
  <p id="AddListTitle">Añada una lista</p>
</button>
  `    
}