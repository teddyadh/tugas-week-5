var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

function readFormData() {
    var formData = {};
    formData["nama"] = document.getElementById("nama").value;
    formData["umur"] = document.getElementById("umur").value;
    formData["uangSangu"] = document.getElementById("uangSangu").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.nama;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.umur;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.uangSangu;
    cell3 = newRow.insertCell(3);
        cell3.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nama").value = selectedRow.cells[0].innerHTML;
    document.getElementById("umur").value = selectedRow.cells[1].innerHTML;
    document.getElementById("uangSangu").value = selectedRow.cells[2].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.nama;
    selectedRow.cells[1].innerHTML = formData.umur;
    selectedRow.cells[2].innerHTML = formData.uangSangu;
}

function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

function resetForm() {
    document.getElementById("nama").value = '';
    document.getElementById("umur").value = '';
    document.getElementById("uangSangu").value = '';
    selectedRow = null;
}
