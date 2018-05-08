var otAsignacionUPM;
var dataingrid;
var sResultUPMs;
var UPMSelct;
var upmInsert = new Array();
var otUPMsProyectos;

$(document).ready(function () {
    ConfigTableAsignacionUPMs();
    ConfigTableUPMsporProyecto();
});

function ConfigTableAsignacionUPMs() {
    var dtData = []; otAsignacionUPM = $('#tblUPMs').dataTable({
        'aaData': dtData,
        "sPaginationType": "full_numbers",
        "sPageButton": "paginate_button",
        "sPageButtonActive": "paginate_active",
        "sPageButtonStaticDisabled": "paginate_buttond",
        "iDisplayLength": 10,
        "bAutoWidth": false,
        "aoColumns": [{ "sWidth": "5%" }, { "sWidth": "40%" }, { "sWidth": "60%" }],
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

function ConfigTableUPMsporProyecto() {
    var dtData = []; otUPMsProyectos = $('#tbliUPMsProyectos').dataTable({
        'aaData': dtData,
        "sPaginationType": "full_numbers",
        "sPageButton": "paginate_button",
        "sPageButtonActive": "paginate_active",
        "sPageButtonStaticDisabled": "paginate_buttond",
        "iDisplayLength": 10,
        "bAutoWidth": false,
        "aoColumns": [{ "sWidth": "40%" }, { "sWidth": "60%" }],
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

function GetUPMs() {

    $.ajax({
        type: "POST",
        url: "/AsignacionUPMs/GetUPMs",
        data: {},
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            dataingrid = data;
            otAsignacionUPM.fnClearTable();
            for (var x = 0; x < data.length; x++) {

                param = data[x].UPMId + '|' + data[x].ProyectoId + '|' + data[x].Codigo + '|' + data[x].Nombre;

                otAsignacionUPM.fnAddData(['<div class="checkbox m-l m-r-xs"><label class="i-checks"> <input type="checkbox" id="chk' + data[x].UPMId + '" onchange="changestate(this, ' + data[x].UPMId + ');"><i></i></label></div>',
                            data[x].Codigo,
                            data[x].Nombre]);
            }
        },
        complete: function () {            
        },       
        error: function (data) {
            swal("Error: " + data.responseText, "AGM", "error");
        } //fin error
    });
}

function GetUPMsProyectos() {

    var params = new Object();
    params.ProyectoId = $("#cboProyectos").val();
    params = JSON.stringify(params);

    $("#lblProyectoSEL").text($("#cboProyectos option:selected").text());

    $.ajax({
        type: "POST",
        url: "/AsignacionUPMs/GetUPMsProyectos",
        data: params,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            dataingrid = data;
            otUPMsProyectos.fnClearTable();
            for (var x = 0; x < data.length; x++) {                

                otUPMsProyectos.fnAddData([data[x].Codigo,
                            data[x].Nombre]);
            }
        },
        complete: function () {
        },
        error: function (data) {
            swal("Error: " + data.responseText, "AGM", "error");
        } //fin error
    });
}

function InsertAsignacionUPMs() {

    $("#btnGuardar").prop("disabled", true);

    var iAsigUPM = new Object();
    var liAsignacionUPMs = new Array();
    var bexists;
    var ProyectoId;

    for (var i = 0; i < upmInsert.length; i++) {
        iAsigUPM = new Object();
        iAsigUPM.ProyectoId = $("#cboProyectos").val();
        iAsigUPM.UPMId = upmInsert[i];
        iAsigUPM.EstadoId = $("#cboEstado").val();

        liAsignacionUPMs.push(iAsigUPM);
    }    

    if (liAsignacionUPMs.length > 0) {

        var param_ = JSON.stringify({ liAsigUPMs: liAsignacionUPMs });

        $.ajax({
            type: "POST",
            url: "/AsignacionUPMs/InsertAsignacionUPMs",
            data: param_,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                if (data != null) {
                    switch (data) {
                        case "success":                            
                            swal("Registro creado satisfactoriamente", "AGM", "success");
                            //Cleanfields();
                            upmInsert = new Array();
                            InhabilitarUPM($("#cboProyectos").val());
                            break;
                            //case "Exists":
                            //    swal("Ya existe el registro", "AGM", "info");
                            //    break;
                        default:
                            swal(data, "AGM", "error");
                            break;
                    }
                }
            },
            complete: function () {
                $("#btnGuardar").prop("disabled", false);
            },
            error: function (data) {
                alert("Error: " + data.responseText);
            } //fin error
        });  //Fin
    } else {
        swal("Obligatorio realizar una selección", "AGM", "info");
        $("#btnGuardar").prop("disabled", false);
    }
}


function OnClickSelecion(result) {
    sResultUPMs = sResultUPMs + "|" + result;
    alert(result);
}

function changestate(value, IdUPM) {
    if (value.checked) {
        upmInsert.push(IdUPM);
    }
    else {
        remove(IdUPM);
    }    
}

function remove(item) {
    for (var i = upmInsert.length; i--;) {
        if (upmInsert[i] === item) {
            upmInsert.splice(i, 1);
            break;
        }
    }
}

function InhabilitarUPM(ProyectoId) {
    
    var params = new Object();
    params.ProyectoId = ProyectoId;
    params = JSON.stringify(params);
    
    $("#lblProyectoSEL").text($("#cboProyectos option:selected").text());

    $.ajax({
        type: "POST",
        url: "/AsignacionUPMs/GetUPMsporProyectos",
        data: params,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            dataingrid = data;
            otAsignacionUPM.fnClearTable();
            for (var x = 0; x < data.length; x++) {

                param = data[x].UPMId + '|' + data[x].ProyectoId + '|' + data[x].Codigo + '|' + data[x].Nombre;

                otAsignacionUPM.fnAddData(['<div class="checkbox m-l m-r-xs"><label class="i-checks"> <input type="checkbox" id="chk' + data[x].UPMId + '" onchange="changestate(this, ' + data[x].UPMId + ');"><i></i></label></div>',
                            data[x].Codigo,
                            data[x].Nombre]);
            }
        },
        complete: function () {
            GetUPMsProyectos();
        },
        error: function (data) {
            swal("Error: " + data.responseText, "AGM", "error");
        } //fin error
    });
}