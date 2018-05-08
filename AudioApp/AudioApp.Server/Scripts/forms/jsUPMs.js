var otUPMs;
var dataingrid = [];
$(document).ready(function () {
    ko.applyBindings(viewupm);
    ConfigTableUPMs();
    GetUPMs(); 

});

var viewupm = {
    UPMId: ko.observable(),
    ID: ko.observable(),
    TituloMineroId: ko.observable(),
    Codigo: ko.observable(),
    Nombre: ko.observable(),
    Vereda: ko.observable(),
    MunicipioId: ko.observable(),
    NumVisitas: ko.observable(),
    UsuarioCreacion: ko.observable(),
    FechaCreacion: ko.observable(),
    UsuarioModificacion: ko.observable(),
    FechaModificacion: ko.observable(),
    EstadoId: ko.observable(),
    ListUPMs: ko.observableArray([]),
    InsertUPM: function () {
        var self = this;
        var dataToPost = ko.toJS(self);
        $('#UpmForm').validate({
            rules: {
                Codigo: { required: true },
                Nombre: { required: true },
                Vereda: { required: true },
                cboMunicipio: { required: true },
                cboEstado: { required: true },
            }
        });
        if ($('#UpmForm').valid()) {
            var upmserv = InsertNewUPM(dataToPost);
            upmserv.done(function (data) {
                if (data == "success") {
                    GetUPMs();
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

function ConfigTableUPMs() {
    var dtData = [];
    otUPMs = $('#tblUPMs').dataTable({
        'aaData': dtData,
        "sPaginationType": "full_numbers",
        "sPageButton": "paginate_button",
        "sPageButtonActive": "paginate_active",
        "sPageButtonStaticDisabled": "paginate_buttond",
        "iDisplayLength": 10,
        "bAutoWidth": false,
        "aoColumns": [{ "sWidth": "20%" }, { "sWidth": "30%" }, { "sWidth": "25%" }, { "sWidth": "5%" }, { "sWidth": "15%" }, { "sWidth": "5%" }],
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

function InsertNewUPM(upm) {
    return $.ajax({
        type: "POST",
        dataType: "JSON",
        contentType: "application/json;",
        url: "/UPMs/InsertUPM",
        data: JSON.stringify(upm)
    });
}

function Cleanfields() {
    
    viewupm.UPMId(0);
    viewupm.ID("");
    viewupm.TituloMineroId(0);
    viewupm.Codigo("");
    viewupm.Nombre("");
    viewupm.Vereda("");
    viewupm.MunicipioId(0);
    viewupm.NumVisitas(0);
    viewupm.UsuarioCreacion("");
    viewupm.FechaCreacion("");
    viewupm.UsuarioModificacion("");
    viewupm.FechaModificacion("");
    viewupm.EstadoId(1);
}

function GetUPMs() {

    $.ajax({
        type: "POST",
        url: "/UPMs/GetUPMs",
        data: {},
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            dataingrid = data;
            otUPMs.fnClearTable();

            for (var x = 0; x < data.length; x++) {
               
                var Actions = ' <a href="#" onclick="LoadFields(' + x + ')"><i class="fa fa-edit fa-2x text-navy"></i></a> <a href="#" onclick="DeleteRecord(' + x + ')"><i class="fa fa-trash fa-2x text-navy"></i></a>';
                var NumVisitas = '<span class="badge badge-success">' + data[x].NumVisitas + '</span>';
                var Estado = data[x].Estado.Descripcion;
                otUPMs.fnAddData(
                    [
                    data[x].Codigo,
                    data[x].Nombre,
                    data[x].Vereda,
                    NumVisitas,
                    Estado,                       
                    Actions
                   ]);
            }
        },
        complete: function () {
        },
        error: function (data) {
            swal("Error: " + data.responseText, "AGM", "error");
        } //fin error
    });
}

function LoadFields(iUPM) {

    viewupm.UPMId(dataingrid[iUPM].UPMId);
    viewupm.Codigo(dataingrid[iUPM].Codigo);  
    viewupm.ID(dataingrid[iUPM].ID); 
    viewupm.TituloMineroId(dataingrid[iUPM].TituloMineroId);
    viewupm.Nombre(dataingrid[iUPM].Nombre);
    viewupm.Vereda(dataingrid[iUPM].Vereda);
    viewupm.MunicipioId(dataingrid[iUPM].MunicipioId);
    viewupm.NumVisitas(dataingrid[iUPM].NumVisitas);
    viewupm.UsuarioCreacion(dataingrid[iUPM].UsuarioCreacion);
    viewupm.FechaCreacion(dataingrid[iUPM].FechaCreacion);
    viewupm.UsuarioModificacion(dataingrid[iUPM].UsuarioModificacion);
    viewupm.FechaModificacion(dataingrid[iUPM].FechaModificacion);
    viewupm.EstadoId(dataingrid[iUPM].EstadoId);

    $("#txtNombre").focus();
}

function DeleteRecord(iUPM) {
   
    swal({
        title: 'Desea eliminar el registro ' + dataingrid[iUPM].Codigo + '?',
        text: "No podrás revertir esto!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar'

    }).then(function () {
        DelUPM(dataingrid[iUPM].UPMId);
        Cleanfields();
    })
}

function DelUPM(UPMId) {

    params_ = JSON.stringify({ UPMId: UPMId });

    $.ajax({
        type: "POST",
        url: "/UPMs/DelUPM",
        data: params_,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data != null) {
                if (data == "success") {

                    GetUPMs();

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