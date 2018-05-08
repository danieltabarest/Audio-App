var otPersonas;

$(document).ready(function () {
    ko.applyBindings(viewpersonas);
    ConfigTablePersonas();
    GetPersonas();
});


function ConfigTablePersonas() {
    var dtData = []; otPersonas = $('#tblPersonas').dataTable({
        'aaData': dtData,
        "sPaginationType": "full_numbers",
        "sPageButton": "paginate_button",
        "sPageButtonActive": "paginate_active",
        "sPageButtonStaticDisabled": "paginate_buttond",
        "iDisplayLength": 10,
        "bAutoWidth": false,
        "aoColumns": [{ "sWidth": "25%" }, { "sWidth": "30%" }, { "sWidth": "40%" }, { "sWidth": "40%" }, { "sWidth": "25%" }, { "sWidth": "20%" }, { "sWidth": "5%" }],
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

function GetPersonas() {
    var params = new Object();

    $.ajax({
        type: "POST",
        url: "/Personas/GetPersonas",
        data: {},
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            otPersonas.fnClearTable();
            for (var x = 0; x < data.length; x++) {
                param = data[x].PersonaId + '|' + data[x].TipoIdentificacionId + '|' + data[x].Identificacion + '|' + data[x].PrimerNombre + '|' + data[x].SegundoNombre + '|' + data[x].PrimerApellido + '|' + data[x].SegundoApellido + '|' + data[x].FechaNacimiento + '|' + data[x].Celular + '|' + data[x].Telefono + '|' + data[x].Correo + '|' + data[x].EstadoId;

                otPersonas.fnAddData([data[x].TipoIdentificacionId,
                        data[x].Identificacion,
                        data[x].PrimerNombre + " " + data[x].SegundoNombre,
                        data[x].PrimerApellido + " " + data[x].SegundoApellido,
                        data[x].Celular,
                        data[x].Correo,                        
                        '<table><tr><td></td><td><a href="#" class="fa fa-edit fa-2x" onclick="LoadFields(' + "'" + param + "'" + ')"></a></td><td><a href="#" class="fa fa-trash fa-2x" onclick="DeleteRecord(' + "'" + param + "'" + ')"></a></td></tr></table>']);
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

var viewpersonas = {

    PersonaId: ko.observable(),
    ID: ko.observable(),
    TipoIdentificacionId: ko.observable(),
    Identificacion: ko.observable(),
    PrimerNombre: ko.observable(),
    SegundoNombre: ko.observable(),
    PrimerApellido: ko.observable(),
    SegundoApellido: ko.observable(),
    FechaNacimiento: ko.observable(),
    Celular: ko.observable(),
    Telefono: ko.observable(),
    Correo: ko.observable(),
    EstadoId: ko.observable(),
    //ListProyectos: ko.observableArray([]),
    InsertPersonas: function () {
        var self = this;
        var dataToPost = ko.toJS(self);
        var personasserv = InsertNewPersonas(dataToPost);
        $('#PersonasForm').validate({
            rules: {
                cboTipoIdentificacionId: { required: true },
                Identificacion: { required: true },
                PrimerNombre: { required: true },
                PrimerApellido: { required: true },
                Celular: { required: true, number: true},
                Telefono: { required: true, number: true },
                Correo: { required: true, email: true }
            }
        });
        if ($('#PersonasForm').valid()) {
            personasserv.done(function (data) {
                if (data == "success") {
                    GetPersonas();
                    swal("Registro creado satisfactoriamente", "AGM", "success");
                    Cleanfields();
                } else {
                    swal(data, "AGM", "error");
                }
            }).fail(function (a, b, c) {
                swal("Ha ocurrido un inconveniente.", "AGM", "error");
            });
        }
    }
};

function InsertNewPersonas(persona) {
    return $.ajax({
        type: "POST",
        dataType: "JSON",
        contentType: "application/json;",
        url: "/Personas/InsertPersona",
        data: JSON.stringify(persona)
    });
}

function Cleanfields() {
    
    //$("#cboTipoIdentificacionId")[0].selectedIndex = 0;    

    viewpersonas.PersonaId(0);
    viewpersonas.TipoIdentificacionId("");
    viewpersonas.Identificacion("");
    viewpersonas.PrimerNombre("");
    viewpersonas.SegundoNombre("");
    viewpersonas.PrimerApellido("");
    viewpersonas.SegundoApellido("");
    viewpersonas.FechaNacimiento("");
    viewpersonas.Celular("");
    viewpersonas.Telefono("");
    viewpersonas.Correo("");
    viewpersonas.EstadoId("");

    //$("#cboEstado")[0].selectedIndex = 0;


}

function DeleteRecord(iPersona) {
    var res = iPersona.split('|');
    var sRegistro = res[3] + " " + res[4] + " " + res[5] + " " + res[6];
    swal({
        title: 'Desea eliminar el registro ' + sRegistro + '?',
        text: "No podrás revertir esto!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar'

    }).then(function () {
        //DelPersona(res[0]);
    })
}


function LoadFields(iPerson) {   
    var res = iPerson.split('|');
    //var tempdate = parseJsonDate(res[7]);
    viewpersonas.PersonaId(res[0]);
    viewpersonas.TipoIdentificacionId(res[1]);
    viewpersonas.Identificacion(res[2]);
    viewpersonas.PrimerNombre(res[3]);
    viewpersonas.SegundoNombre(res[4]);
    viewpersonas.PrimerApellido(res[5]);
    viewpersonas.SegundoApellido(res[6]);
    viewpersonas.FechaNacimiento(moment(res[7]).format("DD-MM-YYYY"));

    viewpersonas.Celular(res[8]);
    viewpersonas.Telefono(res[9]);
    viewpersonas.Correo(res[10]);
    viewpersonas.EstadoId(res[11]);

    $("#cboTipoIdentificacionId").focus();
}

function parseJsonDate(jsonDateString) {
    return new Date(parseInt(jsonDateString.replace('/Date(', '')));
}