var otProfesionales;
var dataingrid = [];

$(document).ready(function () {
    ko.applyBindings(vm);
    ConfigTableProfesionales();
    GetList();

    $('#txtFechaNacimiento').datepicker({
        startView: 2,
        todayBtn: "linked",
        keyboardNavigation: false,
        forceParse: false,
        autoclose: true
    });
});

var vm = {
    UsuarioId: ko.observable(),
    ID: ko.observable(),
    ProfesionalId: ko.observable(),
    UserName: ko.observable(),
    Password: ko.observable(),
    EstadoId: ko.observable(),
    Profesional: {
        ProfesionalId: ko.observable(),
        ID: ko.observable(),
        Matricula: ko.observable(),
        PersonaId: ko.observable(),
        PerfilId: ko.observable(),
        EstadoId: ko.observable(),
        Persona: {
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
            EstadoId: ko.observable()
        }

    },
    InsertModel: function () {
        var self = this;
        var dataToPost = ko.toJS(self);
        $('#ProfesionalForm').validate({
            rules: {
                cboTipoIdentificacion: { required: true },
                Identificacion: { required: true },
                PrimerNombre: { required: true },
                PrimerApellido: { required: true },
                FechaNacimiento: { required: true },
                Telefono: { required: true },
                Celular: { required: true },
                Correo: { required: true, email: true },
                Matricula: { required: true },
                cboPerfil: { required: true },
                Usuario: { required: true },
                Password: { required: true },
                cboEstado: { required: true }
            }
        });
        if ($('#ProfesionalForm').valid()) {
            var serv = InsertNewModel(dataToPost);
            serv.done(function (data) {
                if (data == "success") {
                    GetList();
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
function InsertNewModel(model) {
    return $.ajax({
        type: "POST",
        dataType: "JSON",
        contentType: "application/json;",
        url: "/Profesionales/Insert",
        data: JSON.stringify(model)
    });
}

function ConfigTableProfesionales() {
    var dtData = []; otProfesionales = $('#tblProfesionales').dataTable({
        'aaData': dtData,
        "sPaginationType": "full_numbers",
        "sPageButton": "paginate_button",
        "sPageButtonActive": "paginate_active",
        "sPageButtonStaticDisabled": "paginate_buttond",
        "iDisplayLength": 10,
        "bAutoWidth": false,
        "aoColumns": [{ "sWidth": "20%" }, { "sWidth": "20%" }, { "sWidth": "30%" }, { "sWidth": "20%" }, { "sWidth": "10%" }],
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


function ValidateForm() {
    return true;
}



function GetList() {

    $.ajax({
        type: "POST",
        url: "/Profesionales/GetList",
        data: {},
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            otProfesionales.fnClearTable();
            dataingrid = data;
            for (var x = 0; x < data.length; x++) {
                var Actions = ' <a href="#" onclick="LoadFields(' + x + ')"><i class="fa fa-edit fa-2x text-primary"></i></a>&nbsp;<a href="#" onclick="DeleteRecord(' + x + ')"><i class="fa fa-trash fa-2x text-danger"></i></a>';
                otProfesionales.fnAddData([
                    data[x].Matricula,
                    data[x].Cedula,
                    data[x].NomPerson,
                    data[x].NomPerfil,
                    Actions]);
            }
        },
        complete: function () {
        },
        error: function (data) {
            swal("Error: " + data.responseText, "AGM", "error");
        } //fin error
    });
}

function DeleteRecord(iPro) {

    swal({
        title: 'Desea eliminar el registro ' + dataingrid[iPro].Matricula + '?',
        text: "No podrás revertir esto!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar'

    }).then(function () {
        DelPro(dataingrid[iPro].ProfesionalId);
        Cleanfields();
    })
}

function DelPro(ProfesionalId) {

    params_ = JSON.stringify({ ProfesionalId: ProfesionalId });

    $.ajax({
        type: "POST",
        url: "/Profesionales/Delete",
        data: params_,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data != null) {
                if (data == "success") {

                    GetList();

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

function LoadFields(iPro) {
    //Profesional
    vm.Profesional.ProfesionalId(dataingrid[iPro].ProfesionalId);
    vm.Profesional.ID(dataingrid[iPro].ID);
    vm.Profesional.PersonaId(dataingrid[iPro].PersonaId);
    vm.Profesional.Matricula(dataingrid[iPro].Matricula);
    vm.Profesional.PerfilId(dataingrid[iPro].PerfilId);
    vm.Profesional.EstadoId(dataingrid[iPro].EstadoId);
    //Persona
    vm.Profesional.Persona.PersonaId(dataingrid[iPro].Persona.PersonaId);
    vm.Profesional.Persona.ID(dataingrid[iPro].Persona.ID);
    vm.Profesional.Persona.TipoIdentificacionId(dataingrid[iPro].Persona.TipoIdentificacionId);
    vm.Profesional.Persona.Identificacion(dataingrid[iPro].Persona.Identificacion);
    vm.Profesional.Persona.PrimerNombre(dataingrid[iPro].Persona.PrimerNombre);
    vm.Profesional.Persona.SegundoNombre(dataingrid[iPro].Persona.SegundoNombre);
    vm.Profesional.Persona.PrimerApellido(dataingrid[iPro].Persona.PrimerApellido);
    vm.Profesional.Persona.SegundoApellido(dataingrid[iPro].Persona.SegundoApellido);
    vm.Profesional.Persona.FechaNacimiento(new Date(dataingrid[iPro].Persona.FechaNacimiento));
    vm.Profesional.Persona.Celular(dataingrid[iPro].Persona.Celular);
    vm.Profesional.Persona.Telefono(dataingrid[iPro].Persona.Telefono);
    vm.Profesional.Persona.Correo(dataingrid[iPro].Persona.Correo);
    vm.Profesional.Persona.EstadoId(dataingrid[iPro].Persona.EstadoId);
    //Usuario

    vm.UsuarioId(dataingrid[iPro].Usuario.UsuarioId)
    vm.ProfesionalId(dataingrid[iPro].Usuario.ProfesionalId)
    vm.ID(dataingrid[iPro].Usuario.ID)
    vm.UserName(dataingrid[iPro].Usuario.UserName)
    vm.Password(dataingrid[iPro].Usuario.Password);
    vm.EstadoId(dataingrid[iPro].Usuario.EstadoId);

    $("#txtIdentificacion").focus();
}


function Cleanfields() {


    vm.Profesional.ProfesionalId("");
    vm.Profesional.ID("");
    vm.Profesional.PersonaId("");
    vm.Profesional.Matricula("");
    vm.Profesional.PerfilId("");
    vm.Profesional.EstadoId("");
    //Persona
    vm.Profesional.Persona.PersonaId("");
    vm.Profesional.Persona.ID("");
    vm.Profesional.Persona.TipoIdentificacionId("");
    vm.Profesional.Persona.Identificacion("");
    vm.Profesional.Persona.PrimerNombre("");
    vm.Profesional.Persona.SegundoNombre("");
    vm.Profesional.Persona.PrimerApellido("");
    vm.Profesional.Persona.SegundoApellido("");
    vm.Profesional.Persona.FechaNacimiento("");
    vm.Profesional.Persona.Celular("");
    vm.Profesional.Persona.Telefono("");
    vm.Profesional.Persona.Correo("");
    vm.Profesional.Persona.EstadoId(1);

    vm.UsuarioId(0)
    vm.ID("")
    vm.UserName("")
    vm.Password("");
    vm.EstadoId(1);
}


