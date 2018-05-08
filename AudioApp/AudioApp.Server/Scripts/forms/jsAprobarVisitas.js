var otVisitas;
var dataingrid;
var iVisitasAprobadas = new Object();
var liVisitasId = new Array();

$(document).ready(function () {
    ConfigTableVisitas();
    GetVisitas();
});

function ConfigTableVisitas() {
    var dtData = []; otVisitas = $('#tblVisitas').dataTable({
        'aaData': dtData,
        "sPaginationType": "full_numbers",
        "sPageButton": "paginate_button",
        "sPageButtonActive": "paginate_active",
        "sPageButtonStaticDisabled": "paginate_buttond",
        "iDisplayLength": 10,
        "bAutoWidth": false,
        "aoColumns": [{ "sWidth": "5%" }, { "sWidth": "25%" }, { "sWidth": "20%" }, { "sWidth": "5%" }, { "sWidth": "10%" }, { "sWidth": "10%" }, { "sWidth": "10%" }, { "sWidth": "10%" }],
        "oLanguage": {
            "sProcessing": "Procesando...",
            "sLengthMenu": "Mostrar _MENU_ registros",
            "sZeroRecords": "No se encontraron resultados",
            "sInfo": "Mostrando desde _START_ hasta _END_ de _TOTAL_ registros",
            "sInfoEmpty": "Mostrando desde 0 hasta 0 de 0 registros",
            "sInfoFiltered": "(filtrado de _MAX_ registros en total)",
            "sInfoPostFix": "",
            "sSearch": "Buscar:",
            "sUrl": "",
            "oPaginate": {
                "sFirst": "<",
                "sPrevious": "<<",
                "sNext": ">>",
                "sLast": ">"
            }
        }
    });
}

function GetVisitas() {

    $.ajax({
        type: "POST",
        url: "/AprobarVisitas/GetCargaVisitas",
        data: {},
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            otVisitas.fnClearTable();
            for (var x = 0; x < data.length; x++) {
                //Aquí van son los check en vez de los a href
                //var Actions = ' <a href="#" onclick="ObtenerInformacionVisita(' + data[x].VisitaId + ',&quot;' + data[x].Codigo + '&quot;,&quot;' + data[x].UPM.Codigo + '&quot;)"><i class="fa fa-eye fa-2x text-navy"></i></a>';
                var Actions = "<center><input type='checkbox' name='chk_" + data[x].VisitaId + "' onclick='hdCheckAprobar(" + data[x].VisitaId + ");'  /></center>";
                //     var Actions = ' <a href="#" onclick="GetEncabezadoUPM(' + data[x].VisitaId + ')"><i class="fa fa-eye fa-2x text-navy"></i></a>';
                var NumVisitas = '<span class="badge badge-success">' + data[x].NumVisita + '</span>';
                var FechaInicio = moment((data[x].FechaInicio.match(/\d+/)[0] * 1)).format('LLL');
                var FechaFin = moment((data[x].FechaFin.match(/\d+/)[0] * 1)).format('LLL');
                switch (data[x].EstadoDescripcion) {
                    case 'SINCRONIZADA':
                        var Estado = '<span class="badge badge-success">' + data[x].EstadoDescripcion + '</span>';
                        break;
                    case 'SOLUCIONADA':
                        var Estado = '<span class="badge badge-warning">' + data[x].EstadoDescripcion + '</span>';
                        break;
                }

                otVisitas.fnAddData(
                    [Actions, data[x].Codigo, data[x].UPM.Codigo, NumVisitas, data[x].RutaDescripcion, FechaInicio, FechaFin, Estado]);
            }
        },
        complete: function () {
        },
        error: function (data) {
            swal("Error: " + data.responseText, "AGM", "error");
        } //fin error
    });
}

function hdCheckAprobar(idvisita) {
    iVisitasAprobadas = new Object();
    iVisitasAprobadas.VisitaId = idvisita;
    liVisitasId.push(iVisitasAprobadas);
}

function AprobarVisitasTodas() {
    $.ajax({
        type: "POST",
        url: "/AprobarVisitas/SetAprobarVisitasTodas",
        data: liVisitasId,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data != null) {
                switch (data) {
                    case "success":
                        $('#ModalAprobar').modal('hide');
                        liVisitasId = new Array();
                        GetVisitas();
                        break;
                    default:
                        $('#ModalAprobar').modal('hide');
                        swal(data, "AGM", "error");
                        break;
                }
            }
        },
        complete: function () {

        },
        error: function (data) {
            alert("Error: " + data.responseText);
        } //fin error
    });  //Fin
}

function AprobarVisitasSeleccionadas() {

    liVisitasId = JSON.stringify({ liVisitasAprobadas: liVisitasId });

    $.ajax({
        type: "POST",
        url: "/AprobarVisitas/SetAprobarVisitasSeleccionadas",
        data: liVisitasId,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data != null) {
                switch (data) {
                    case "success":
                        $('#ModalConfirmarApro').modal('hide');
                        liVisitasId = new Array();
                        GetVisitas();
                        break;
                    default:
                        $('#ModalConfirmarApro').modal('hide');
                        swal(data, "AGM", "error");
                        break;
                }
            }
        },
        complete: function () {

        },
        error: function (data) {
            alert("Error: " + data.responseText);
        } //fin error
    });  //Fin
}