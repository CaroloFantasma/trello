window.addNewList = function () {
  const newList = document.getElementById ('addCardBtn');
    newList.innerHTML = `
    <form>
      <div class="form-group">
        <input type="text" class="form-control" id="inputNewList" aria-describedby="emailHelp" placeholder="Introduzca el título de la lista...">
        <button>Añadir lista</button>
        <button onClick()="window.closeBtn()"> <i class="fas fa-times"></i></button>
      </div>
    </form>
    `
}

window.closeBtn = function () {
  const closeNewList = document.getElementById ('addCardBtn');
  closeNewList.innerHTML = `
  <button id="addCardBtn" onclick="window.addNewList()">
    <i class="fas fa-plus" id="addCardIcon"></i>
    <p id="AddListTitle">Añada una lista</p>
  </button>
  `    
}