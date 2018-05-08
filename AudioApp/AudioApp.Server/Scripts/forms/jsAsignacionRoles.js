var otAsignacionRoles;
var otUsuarios;
var dataingrid;

$(document).ready(function () {
    ConfigTableAsignacionRoles();
    ConfigTableUsuarios();
    GetUsuarios();
    GetAsignacionRoles();
});

function ConfigTableAsignacionRoles() {
    var dtData = []; otAsignacionRoles = $('#tblRolsUser').dataTable({
        'aaData': dtData,
        "sPaginationType": "full_numbers",
        "sPageButton": "paginate_button",
        "sPageButtonActive": "paginate_active",
        "sPageButtonStaticDisabled": "paginate_buttond",
        "iDisplayLength": 10,
        "bAutoWidth": false,
        "aoColumns": [{ "sWidth": "40%" }, { "sWidth": "50%" }, { "sWidth": "40%" }, { "sWidth": "5%" }],
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

function ConfigTableUsuarios() {
    var dtData = []; otUsuarios = $('#tblUsuarios').dataTable({
        'aaData': dtData,
        "sPaginationType": "full_numbers",
        "sPageButton": "paginate_button",
        "sPageButtonActive": "paginate_active",
        "sPageButtonStaticDisabled": "paginate_buttond",
        "iDisplayLength": 10,
        "bAutoWidth": false,
        "aoColumns": [{ "sWidth": "45%" }, { "sWidth": "50%" }, { "sWidth": "5%" }],
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

function GetUsuarios() {

    $.ajax({
        type: "POST",
        url: "/AsignacionRoles/GetUsuarios",
        data: {},
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            otUsuarios.fnClearTable();
            for (var x = 0; x < data.length; x++) {
                param = data[x].UsuarioId + '|' + data[x].UserName + '|' + data[x].NombreProfesional;

                otUsuarios.fnAddData([data[x].UserName,
                            data[x].NombreProfesional,
                            '<table><tr><td></td><td><a href="#" class="fa fa-share" onclick="LoadFieldsSelection(' + "'" + param + "'" + ')"></a></td></tr></table>']);
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

function LoadFieldsSelection(Usr) {
    var sreg = Usr.split("|");
    $("#txtUsuarioId").val(sreg[0]);
    $("#txtUsuario").val(sreg[1]);
    $('#ModalUsuarios').modal('hide');
}

function ValidateFormAsignacionRol() {
    if ($("#txtUsuarioId").val() == "") {
        return false;
    }

    if ($("select#cboRoles")[0].selectedIndex == 0) {
        return false;
    }

    return true;
}

function InsertAsignacionRol() {
    if (ValidateFormAsignacionRol()) {

        var iAsigRol = new Object();
        iAsigRol.RolId = $("#cboRoles").val();
        iAsigRol.UsuarioId = $("#txtUsuarioId").val();
        iAsigRol.EstadoId = $("#cboEstado").val();

        iAsigRol = JSON.stringify({ iAsigRoles: iAsigRol });

        $.ajax({
            type: "POST",
            url: "/AsignacionRoles/InsertAsignacionRoles",
            data: iAsigRol,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                if (data != null) {
                    switch (data) {
                        case "success":
                            GetAsignacionRoles();
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
    $("#txtUsuarioId").val("");
    $("#txtUsuario").val("");
    $("select#cboRoles")[0].selectedIndex = 0;
    $("select#cboEstado")[0].selectedIndex = 0;    
}

function GetAsignacionRoles() {
    $.ajax({
        type: "POST",
        url: "/AsignacionRoles/GetAsignacionRoles",
        data: {},
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            otAsignacionRoles.fnClearTable();
            for (var x = 0; x < data.length; x++) {

                param = data[x].UsuarioId + '|' + data[x].UserName + '|' + data[x].NombreProfesional + '|' + data[x].RolId + '|' + data[x].NameRol;

                otAsignacionRoles.fnAddData([data[x].UserName,
                            data[x].NombreProfesional,
                            data[x].NameRol,
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
    var UsuarioId = rParam[0];
    var RolId = rParam[3];
    
    swal({
        title: 'Desea eliminar el registro (Profesional: ' + rParam[2] + ', Rol: ' + rParam[4] + ')?',
        text: "No podrás revertir esto!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar'

    }).then(function () {
        DelAsigRol(RolId, UsuarioId);
        Cleanfields();
    })
}


function DelAsigRol(RolId, UsuarioId) {
    
    
    var iAsigRol = new Object();
    iAsigRol.RolId = RolId;
    iAsigRol.UsuarioId = UsuarioId;

    iAsigRol = JSON.stringify({ iAsigRol: iAsigRol });


    $.ajax({
        type: "POST",
        url: "/AsignacionRoles/DelAsignacionROL",
        data: iAsigRol,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data != null) {
                if (data == "success") {

                    GetAsignacionRoles();

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

