var otUsuarios;

var viewUsuario = {
    UsuarioId: ko.observable(),
    UserName: ko.observable(),
    Password: ko.observable(),
    UsuarioCreacion: ko.observable(),
    FechaCreacion: ko.observable(),
    UsuarioModificacion: ko.observable(),
    FechaModificacion: ko.observable(),
    EstadoId: ko.observable(),
    ListUsuarios: ko.observableArray([]),
    InsertUsuarios: function () {
        var self = this;
        var dataToPost = ko.toJS(self);
        $('#UsuariosForm').validate({
            rules: {
                UserName: { required: true },
                Password: { required: true}
            }
        });
        if ($('#UsuariosForm').valid()) {
            var rolserv = InsertNewUsuario(dataToPost);
            rolserv.done(function (data) {
                if (data == "success") {
                    GetUsuarios();
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
    ko.applyBindings(viewUsuario);
    ConfigTableUsuarios();
    GetUsuarios();
});

function InsertNewUsuario(usuario) {
    return $.ajax({
        type: "POST",
        dataType: "JSON",
        contentType: "application/json;",
        url: "/Usuarios/InsertUsuarios",
        data: JSON.stringify(usuario)
    });
}

function Cleanfields() {    
    viewUsuario.UsuarioId(0);
    viewUsuario.UserName("");
    viewUsuario.Password("");
    viewUsuario.EstadoId("");
}

function ServGetUsuarios() {    
    return $.ajax({
        type: "GET",
        dataType: "JSON",
        contentType: "application/json;",
        url: "/Usuarios/GetUsuarios"
    });
}

function koGetUsuarios() {
    var rlserv = ServGetUsuarios();
    rlserv.done(function (data) {
        viewUsuario.ListUsuarios(data);
    }).fail(function (a, b, c) {
        // hideloadingmodal();
        // showmodalerror("Hubo un error en plataforma.", "Hubo un error tratando de conectar con el servicio.");
        swal("Ha ocurrido un inconveniente.", "AGM", "error");
    });
}


function ConfigTableUsuarios() {
    var dtData = []; otUsuarios = $('#tblUsers').dataTable({
        'aaData': dtData,
        "sPaginationType": "full_numbers",
        "sPageButton": "paginate_button",
        "sPageButtonActive": "paginate_active",
        "sPageButtonStaticDisabled": "paginate_buttond",
        "iDisplayLength": 10,
        "bAutoWidth": false,
        "aoColumns": [{ "sWidth": "30%" }, { "sWidth": "50%" }, { "sWidth": "5%" }],
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
        url: "/Usuarios/GetUsuarios",
        data: {},
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            otUsuarios.fnClearTable();
            for (var x = 0; x < data.length; x++) {
                param = data[x].UsuarioId + '|' + data[x].UserName + '|' + data[x].Password + '|' + data[x].EstadoId;
                
                otUsuarios.fnAddData([data[x].UserName,
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


function LoadFields(iUsuario) {
    var res = iUsuario.split('|');
   
    viewUsuario.UsuarioId(res[0]);
    viewUsuario.UserName(res[1]);
    viewUsuario.Password(res[2]);
    viewUsuario.EstadoId(res[3]);
    $("#txtUserName").focus();
}



function DeleteRecord(iUsuario) {
    var res = iUsuario.split('|');

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
        DelUsuario(res[0]);
        Cleanfields();
    })
}

function DelUsuario(UsuarioId) {

    params_ = JSON.stringify({ UsuarioId: UsuarioId });

    $.ajax({
        type: "POST",
        url: "/Usuarios/DelUsuario",
        data: params_,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data != null) {
                if (data == "success") {

                    GetUsuarios();

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
        error: function (data) {
            //alert("Error: " + data.responseText);
            swal('Error!', 'Ha ocurrido un inconveniente.' + data.responseText, 'error');
        } //fin error
    });  //Fin
}