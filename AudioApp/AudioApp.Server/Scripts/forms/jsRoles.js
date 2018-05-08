var otRoles;

var viewrol = {
    RolId: ko.observable(),
    ID: ko.observable(),
    Codigo: ko.observable(),
    Descripcion: ko.observable(),
    UsuarioCreacion: ko.observable(),
    FechaCreacion: ko.observable(),
    UsuarioModificacion: ko.observable(),
    FechaModificacion: ko.observable(),
    EstadoId: ko.observable(),
    ListRoles: ko.observableArray([]),
    InsertRoles: function () {
        var self = this;
        var dataToPost = ko.toJS(self);
        $('#RolForm').validate({
            rules: {
                Codigo: { required: true },
                Descripcion: { required: true}
            }
        });
        if ($('#RolForm').valid()) {
            var rolserv = InsertNewRol(dataToPost);
            rolserv.done(function (data) {
                if (data == "success") {
                    GetRoles();
                    swal("Registro creado satisfactoriamente", "AGM", "success");
                    Cleanfields();
                } else {
                    swal(data, "AGM", "error");
                }
            }).fail(function (a, b, c) {
                // hideloadingmodal();
                // showmodalerror("Hubo un error en plataforma.", "Hubo un error tratando de conectar con el servicio.");
                swal("Ha ocurrido un inconveniente.", "AGM", "error");
            });
        }
    }
};

$(document).ready(function () {
    ko.applyBindings(viewrol);
    ConfigTableRoles();
    GetRoles();
});

function InsertNewRol(rol) {
    return $.ajax({
        type: "POST",
        dataType: "JSON",
        contentType: "application/json;",
        url: "/Rol/InsertRoles",
        data: JSON.stringify(rol)
    });
}

function Cleanfields() {    
    //$("#cboEstado")[0].selectedIndex = 0;

    viewrol.RolId(0);
    viewrol.Codigo("");
    viewrol.Descripcion("");
    viewrol.EstadoId("");
}

function ServGetRoles() {    
    return $.ajax({
        type: "GET",
        dataType: "JSON",
        contentType: "application/json;",
        url: "/Rol/GetRoles"
    });
}

function koGetRoles() {
    var rlserv = ServGetRoles();
    rlserv.done(function (data) {
        viewrol.ListRoles(data);
    }).fail(function (a, b, c) {
        // hideloadingmodal();
        // showmodalerror("Hubo un error en plataforma.", "Hubo un error tratando de conectar con el servicio.");
        swal("Ha ocurrido un inconveniente.", "AGM", "error");
    });
}

function ConfigTableRoles() {
    var dtData = []; otRoles = $('#tblRoles').dataTable({
        'aaData': dtData,
        "sPaginationType": "full_numbers",
        "sPageButton": "paginate_button",
        "sPageButtonActive": "paginate_active",
        "sPageButtonStaticDisabled": "paginate_buttond",
        "iDisplayLength": 10,
        "bAutoWidth": false,
        "aoColumns": [{ "sWidth": "30%" }, { "sWidth": "50%" }, { "sWidth": "50%" }, { "sWidth": "5%" }],
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

function GetRoles() {
    
    $.ajax({
        type: "POST",
        url: "/Rol/GetRoles",
        data: {},
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            otRoles.fnClearTable();
            for (var x = 0; x < data.length; x++) {
                param = data[x].RolId + '|' + data[x].Codigo + '|' + data[x].Descripcion + '|' + data[x].EstadoId;
                
                otRoles.fnAddData([data[x].Codigo,
                        data[x].Descripcion,
                        data[x].DescripcionEstado,
                        '<table><tr><td></td><td><a href="#" class="fa fa-edit fa-2x" onclick="LoadFields(' + "'" + param + "'" + ')"></a></td><td><a href="#" class="fa fa-trash fa-2x" onclick="DeleteRecord(' + "'" + param + "'" + ')"></a></td></tr></table>']);
            }
        },
        complete: function () {            
        },        
        error: function (data) {
            swal("Error: " + data.responseText, "AGM", "error");
        } //fin error
    });
}

function GetProyectos() {
    var params = new Object();

    $.ajax({
        type: "POST",
        url: "/Rol/GetRoles",
        data: {},
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            otRoles.fnClearTable();
            for (var x = 0; x < data.length; x++) {

                param = data[x].RolId + '|' + data[x].Codigo + '|' + data[x].Descripcion + '|' + data[x].EstadoId;

                otRoles.fnAddData([data[x].RolId,
                        data[x].Nombre,
                        data[x].Descripcion,
                        data[x].DescripcionEstado,
                        '<table><tr><td></td><td><a href="#" class="fa fa-edit fa-2x" onclick="LoadFields(' + "'" + param + "'" + ')"></a></td><td><a href="#" class="fa fa-trash fa-2x" onclick="DeleteRecord(' + "'" + param + "'" + ')"></a></td></tr></table>']);
            }
        },
        complete: function () {            
        },        
        error: function (data) {
            swal("Error: " + data.responseText, "AGM", "error");
        } //fin error
    });
}


function LoadFields(iRol) {
    var res = iRol.split('|');
   
    viewrol.RolId(res[0]);
    viewrol.Codigo(res[1]);
    viewrol.Descripcion(res[2]);
    viewrol.EstadoId(res[3]);

    $("#txtCodigo").focus();
}



function DeleteRecord(iRol) {
    var res = iRol.split('|');

    swal({
        title: 'Desea eliminar el registro ' + res[2] + '?',
        text: "No podrás revertir esto!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar'

    }).then(function () {
        DelRol(res[0]);
        Cleanfields();
    })
}

function DelRol(RolId) {

    params_ = JSON.stringify({ RolId: RolId });

    $.ajax({
        type: "POST",
        url: "/Rol/DelRol",
        data: params_,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data != null) {
                if (data == "success") {

                    GetRoles();

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