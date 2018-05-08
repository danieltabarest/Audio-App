var otAsignacionPro;
var otProfesional;
var dataingrid;
var ProInsert = new Array();

$(document).ready(function () {
    ConfigTableAsignacionPro();
    ConfigTableProfesional();
    GetProfesionales();
    GetAsignacionPRO();
});



function ConfigTableAsignacionPro() {
    var dtData = []; otAsignacionPro = $('#tblProyectos').dataTable({
        'aaData': dtData,
        "sPaginationType": "full_numbers",
        "sPageButton": "paginate_button",
        "sPageButtonActive": "paginate_active",
        "sPageButtonStaticDisabled": "paginate_buttond",
        "iDisplayLength": 10,
        "bAutoWidth": false,
        "aoColumns": [{ "sWidth": "50%" }, { "sWidth": "50%" }, { "sWidth": "5%" }],
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

function ConfigTableProfesional() {
    var dtData = []; otProfesional = $('#tblProfesional').dataTable({
        'aaData': dtData,
        "sPaginationType": "full_numbers",
        "sPageButton": "paginate_button",
        "sPageButtonActive": "paginate_active",
        "sPageButtonStaticDisabled": "paginate_buttond",
        "iDisplayLength": 10,
        "bAutoWidth": false,
        "aoColumns": [{ "sWidth": "95%" }, { "sWidth": "5%" }],
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

function GetProfesionales() {    

    $.ajax({
        type: "POST",
        url: "/AsignacionProfesionales/GetProfesionales",
        data: {},
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            otProfesional.fnClearTable();
            for (var x = 0; x < data.length; x++) {
                param = data[x].ProfesionalId + '|' + data[x].NombresApellidos;

                otProfesional.fnAddData([data[x].NombresApellidos,
                    '<table><tr><td></td><td> <div class="checkbox m-l m-r-xs"><label class="i-checks"> <input type="checkbox" id="chk' + data[x].ProfesionalId + '" onchange="changestate(this, ' + data[x].ProfesionalId + ');"><i></i></label></div> </td></tr></table >']);

                //otProfesional.fnAddData([data[x].NombresApellidos,
                //            '<table><tr><td></td><td><a href="#" class="fa fa-share" onclick="LoadFieldsSelection(' + "'" + param + "'" + ')"></a></td></tr></table>']);
            }
        },
        complete: function () {            
        },
        //error: ErrorGeneralCallBackGMS $('#myModalValorxPrograma').modal('hide');
        error: function (data) {
            swal("Error: " + data.responseText, "AGM", "error");
        } //fin error
    });
}

function LoadFieldsSelection(profesional) {
    var sreg = profesional.split("|");    
    $("#txtProfesionalId").val(sreg[0]);
    $("#txtProfesional").val(sreg[1]);
    $('#ModalProfesional').modal('hide');
}

function ValidateFormAsignacionPro() {
    if ($("#txtProfesional").val() == "") {
        return false;
    }

    if ($("select#cboProyectos")[0].selectedIndex == 0) {
        return false;
    }

    return true;
}

function InsertAsignacionPro() {
    if (ValidateFormAsignacionPro()) {

        var iAsigPro = new Object();
        var aAsigPro = new Array();

        for (var i = 0; i < ProInsert.length; i++) {
            iAsigPro = new Object();

            //iAsigPro.ProfesionalId = $("#txtProfesionalId").val();
            iAsigPro.ProfesionalId = ProInsert[i];
            iAsigPro.ProyectoId = $("#cboProyectos").val();
            iAsigPro.EstadoId = $("#cboEstado").val();

            aAsigPro.push(iAsigPro)
        }

        

        aAsigPro = JSON.stringify({ liAsigProfesional: aAsigPro });

        $.ajax({
            type: "POST",
            url: "/AsignacionProfesionales/InsertAsignacionProfesionales",
            data: aAsigPro,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                if (data != null) {
                    switch (data) {
                        case "success":
                            GetAsignacionPRO();
                            GetProfesionales();
                            swal("Registro creado satisfactoriamente", "AGM", "success");
                            Cleanfields();
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

            },
            error: function (data) {
                alert("Error: " + data.responseText);
            } //fin error
        });  //Fin

    }
    else {
        swal("Todos los campos son requeridos", "AGM", "info");
    }
}

function Cleanfields() {
    $("#txtProfesionalId").val("");
    $("#txtProfesional").val("");
    $("select#cboProyectos")[0].selectedIndex = 0;
    $("select#cboEstado")[0].selectedIndex = 0;
}

function GetAsignacionPRO() {
    $.ajax({
        type: "POST",
        url: "/AsignacionProfesionales/GetAsignacionPRO",
        data: {},
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            otAsignacionPro.fnClearTable();
            for (var x = 0; x < data.length; x++) {

                param = data[x].ProfesionalId + '|' + data[x].Profesional + '|' + data[x].ProyectoId + '|' + data[x].Proyecto;

                otAsignacionPro.fnAddData([data[x].Profesional,
                            data[x].Proyecto,
                            '<table><tr><td></td><td><a href="#" class="fa fa-trash-o" onclick="DeleteRecord(' + "'" + param + "'" + ')"></a></td></tr></table>']);
            }
        },
        complete: function () {
        },
        //error: ErrorGeneralCallBackGMS $('#myModalValorxPrograma').modal('hide');
        error: function (data) {
            swal("Error: " + data.responseText, "AGM", "error");
        } //fin error
    });
}

function DeleteRecord(Param) {
    var rParam = Param.split('|');
    var ProfesionalId = rParam[0];
    var ProyectoId = rParam[2];
    

    swal({
        title: 'Desea eliminar el registro (Profesional: ' + rParam[1] + ', Proyecto: ' + rParam[3] + ')?',
        text: "No podrás revertir esto!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar'

    }).then(function () {
        DelAsigPro(ProfesionalId, ProyectoId);
        Cleanfields();
    })
}


function DelAsigPro(ProfesionalId, ProyectoId) {

    var iAsignacionPro = new Object();
    iAsignacionPro.ProfesionalId = ProfesionalId;
    iAsignacionPro.ProyectoId = ProyectoId;

    iAsignacionPro = JSON.stringify({ iAsigProfesional: iAsignacionPro });

    $.ajax({
        type: "POST",
        url: "/AsignacionProfesionales/DelAsignacionPRO",
        data: iAsignacionPro,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data != null) {
                if (data == "success") {

                    GetAsignacionPRO();

                    swal(
                        'Procesado!',
                        'Su registro ha sido eliminado.',
                        'success'
                    )
                }
                else {
                    swal('Error!', 'Ha ocurrido un inconveniente.' + data, 'error');
                }
            }
        },
        complete: function () {
            //GetProyectos();
        },
        error: function (data) {
            //alert("Error: " + data.responseText);
            swal('Error!', 'Ha ocurrido un inconveniente.' + data.responseText, 'error');
        } //fin error
    });  //Fin
}

function changestate(value, ProfesionalId) {
    if (value.checked) {
        ProInsert.push(ProfesionalId);
    }
    else {
        remove(ProfesionalId);
    }

    console.log(ProInsert);
}

function remove(item) {
    for (var i = ProInsert.length; i--;) {
        if (ProInsert[i] === item) {
            ProInsert.splice(i, 1);
            break;
        }
    }
}