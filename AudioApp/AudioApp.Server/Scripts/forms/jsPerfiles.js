var otPerfiles;
var dataingrid = [];
$(document).ready(function () {
    ko.applyBindings(viewperfil);
    ConfigTablePerfiles();
    GetPerfiles();
});

var viewperfil = {
    PerfilId: ko.observable(),
    ID: ko.observable(),
    Codigo: ko.observable(),
    Descripcion: ko.observable(),
    UsuarioCreacion: ko.observable(),
    FechaCreacion: ko.observable(),
    UsuarioModificacion: ko.observable(),
    FechaModificacion: ko.observable(),
    EstadoId: ko.observable(),
    ListPerfiles: ko.observableArray([]),
    InsertPerfil: function () {
        var self = this;
        var dataToPost = ko.toJS(self);
        $('#PerfilesForm').validate({
            rules: {
                Codigo: { required: true },
                Descripcion: { required: true }
            }
        });
        if ($('#PerfilesForm').valid()) {
            var perfilserv = InsertNewPerfil(dataToPost);
            perfilserv.done(function (data) {
                if (data == "success") {
                    GetPerfiles();
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

function ConfigTablePerfiles() {
    var dtData = []; otPerfiles = $('#tblPerfiles').dataTable({
        'aaData': dtData,
        "sPaginationType": "full_numbers",
        "sPageButton": "paginate_button",
        "sPageButtonActive": "paginate_active",
        "sPageButtonStaticDisabled": "paginate_buttond",
        "iDisplayLength": 10,
        "bAutoWidth": false,
        "aoColumns": [{ "sWidth": "30%" }, { "sWidth": "50%" }, { "sWidth": "25%" }, { "sWidth": "5%" }],
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

function InsertNewPerfil(perfil) {
    return $.ajax({
        type: "POST",
        dataType: "JSON",
        contentType: "application/json;",
        url: "/Perfiles/InsertPerfil",
        data: JSON.stringify(perfil)
    });
}

function Cleanfields() {

    viewperfil.PerfilId(0);
    viewperfil.Codigo("");
    viewperfil.Descripcion("");
    viewperfil.EstadoId("");

}

function ServGetRoles() {
    return $.ajax({
        type: "GET",
        dataType: "JSON",
        contentType: "application/json;",
        url: "/Rol/GetRoles"
    });
}

function koGetPerfiles() {
    var rlserv = ServGetRoles();
    rlserv.done(function (data) {
        viewrol.ListPerfiles(data);
    }).fail(function (a, b, c) {
        // hideloadingmodal();
        // showmodalerror("Hubo un error en plataforma.", "Hubo un error tratando de conectar con el servicio.");
        swal("Ha ocurrido un inconveniente.", "AGM", "error");
    });
}

function GetPerfiles() {

    $.ajax({
        type: "POST",
        url: "/Perfiles/GetPerfiles",
        data: {},
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            dataingrid = data;
            otPerfiles.fnClearTable();

            for (var x = 0; x < data.length; x++) {
                //   param = data[x].PerfilId + '|' + data[x].Codigo + '|' + data[x].Descripcion + '|' + data[x].EstadoId;
                otPerfiles.fnAddData([data[x].Codigo,
                        data[x].Descripcion,
                        data[x].DescripcionEstado,
                        '<table><tr><td><a href="#" class="fa fa-edit fa-2x" onclick="LoadFields(' + x + ')"></a></td><td><a href="#" class="fa fa-trash fa-2x" onclick="DeleteRecord(' + x + ')"></a></td></tr></table>']);
            }
        },
        complete: function () {
        },
        error: function (data) {
            swal("Error: " + data.responseText, "AGM", "error");
        } //fin error
    });
}

function LoadFields(iPerfil) {
    //var res = iPerfil.split('|');

    viewperfil.PerfilId(dataingrid[iPerfil].PerfilId);
    viewperfil.Codigo(dataingrid[iPerfil].Codigo);
    viewperfil.Descripcion(dataingrid[iPerfil].Descripcion);
    viewperfil.EstadoId(dataingrid[iPerfil].EstadoId);

    $("#txtCodigo").focus();
}

function DeleteRecord(iPerfil) {
   
    swal({
        title: 'Desea eliminar el registro ' + dataingrid[iPerfil].Codigo + '?',
        text: "No podrás revertir esto!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar'

    }).then(function () {
        DelPerfil(dataingrid[iPerfil].PerfilId);
        Cleanfields();
    })
}

function DelPerfil(PerfilId) {

    params_ = JSON.stringify({ PerfilId: PerfilId });

    $.ajax({
        type: "POST",
        url: "/Perfiles/DelPerfil",
        data: params_,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data != null) {
                if (data == "success") {

                    GetPerfiles();

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