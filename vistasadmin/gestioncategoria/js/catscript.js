function obtenerID() {
    var table = document.getElementById('table');
    for(var i = 1; i < table.rows.length; i++)
    {
        table.rows[i].onclick = function()
        {
            document.getElementById("idEditar").value = this.cells[0].innerHTML;
            document.getElementById("subEditar").value = this.cells[2].innerHTML;
        };
    }
}

function limpiarCampo() {
    document.getElementById("vacio").value = " ";
}
function limpiarAgregar() {
    document.getElementById("nombreSub").value = " ";
    document.getElementById("descSub").value = " ";
    document.getElementById("selector").selectedIndex = "0"
}

function eliminarID() {
    var table = document.getElementById('table');
    for(var i = 1; i < table.rows.length; i++)
    {
        table.rows[i].onclick = function()
        {
            var a = this.cells[0].innerHTML;
            var b = this.cells[2].innerHTML;
            var c = a + " - " + b;
            document.getElementById("eliminarID").value = c;
        };
    }
}