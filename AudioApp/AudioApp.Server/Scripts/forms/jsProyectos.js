var otProyectos;

var viewproyecto = {
    ProyectoId: ko.observable(),
    ID: ko.observable(),
    Nombre: ko.observable(),
    Descripcion: ko.observable(),
    ModeloId: ko.observable(),
    UsuarioCreacion: ko.observable(),
    FechaCreacion: ko.observable(),
    UsuarioModificacion: ko.observable(),
    FechaModificacion: ko.observable(),
    EstadoId: ko.observable(),
    //ListProyectos: ko.observableArray([]),
    InsertProyectos: function () {
        var self = this;
        var dataToPost = ko.toJS(self);
        $('#ProyectosForm').validate();
        if ($('#ProyectosForm').valid()) {
            var proyectoserv = InsertNewProyecto(dataToPost);
            proyectoserv.done(function (data) {
                if (data == "success") {
                    GetProyectos();
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

$(document).ready(function () {
    ko.applyBindings(viewproyecto);
    ConfigTableProyectos();
    GetProyectos();
    
});

function ConfigTableProyectos() {
    var dtData = []; otProyectos = $('#tblProyectos').dataTable({
        'aaData': dtData,
        "sPaginationType": "full_numbers",
        "sPageButton": "paginate_button",
        "sPageButtonActive": "paginate_active",
        "sPageButtonStaticDisabled": "paginate_buttond",
        "iDisplayLength": 10,
        "bAutoWidth": false,
        "aoColumns": [{ "sWidth": "30%" }, { "sWidth": "40%" }, { "sWidth": "80%" }, { "sWidth": "10%" }, { "sWidth": "5%" }],
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

function InsertNewProyecto(rol) {
    return $.ajax({
        type: "POST",
        dataType: "JSON",
        contentType: "application/json;",
        url: "/Proyectos/InsertProyectos",
        data: JSON.stringify(rol)
    });
}

function Cleanfields() {
    
    //$("#cboEstado")[0].selectedIndex = 0;

    viewproyecto.ProyectoId(0);
    viewproyecto.Nombre("");
    viewproyecto.Descripcion("");
    viewproyecto.ModeloId("");
    viewproyecto.EstadoId("");

}

function ServGetProyectos() {
    return $.ajax({
        type: "GET",
        dataType: "JSON",
        contentType: "application/json;",
        url: "/Proyectos/GetProyectos"
    });
}

function Get_Proyectos() {
    var rlserv = ServGetProyectos();
    rlserv.done(function (data) {
        viewproyecto.ListProyectos(data);
    }).fail(function (a, b, c) {
        // hideloadingmodal();
        // showmodalerror("Hubo un error en plataforma.", "Hubo un error tratando de conectar con el servicio.");
        swal("Ha ocurrido un inconveniente.", "AGM", "error");
    });
}

function GetProyectos() {
    var params = new Object();

    $.ajax({
        type: "POST",
        url: "/Proyectos/GetProyectos",
        data: {},
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            otProyectos.fnClearTable();
            for (var x = 0; x < data.length; x++) {
                param = data[x].ProyectoId + '|' + data[x].Nombre + '|' + data[x].Descripcion + '|' + data[x].ModeloId + '|' + data[x].EstadoId;

                //params.ProyectoId = data[x].ProyectoId;
                //params.Nombre = data[x].Nombre;
                //params.Descripcion = data[x].Descripcion;
                //params.ModeloId = data[x].ModeloId;

                //params = JSON.stringify({ iProyecto: params });

                otProyectos.fnAddData([data[x].Nombre,
                        data[x].Descripcion,
                        data[x].DescripcionModelo,
                        data[x].DescripcionEstado,
                        '<table><tr><td></td><td><a href="#" class="fa fa-edit fa-2x" onclick="LoadFields(' + "'" + param + "'" + ')"></a></td><td><a href="#" class="fa fa-trash fa-2x" onclick="DeleteRecord(' + "'" + param + "'" + ')"></a></td></tr></table>']);
            }
        },
        complete: function () {
            //Espacio para validaciones  <a href="#" class="fa fa-edit fa-2x"></a>
            //'<table><tr><td></td><td><a class="btn btn-default" href="#"  onclick="LoadFields(' + "'" + param + "'" + ')" role="button"><img src="../image/update.png" /></a></td><td><a class="btn btn-default" data-toggle="modal" data-target="#myModal" href="#"  onclick="SetValorxProg(' + "'" + param + "'" + ')" role="button"><img src="../image/money.png" /></a></td></tr></table>']);
        },
        //error: ErrorGeneralCallBackGMS $('#myModalValorxPrograma').modal('hide');
        error: function (data) {
            swal("Error: " + data.responseText, "AGM", "error");
        } //fin error
    });
}

function LoadFields(iProyecto) {
    var res = iProyecto.split('|');

    viewproyecto.ProyectoId(res[0]);
    viewproyecto.Nombre(res[1]);
    viewproyecto.Descripcion(res[2]);
    viewproyecto.ModeloId(res[3]);
    viewproyecto.EstadoId(res[4]);


    $("#txtNombre").focus();


}

function DeleteRecord(iProyecto) {
    var res = iProyecto.split('|');

    swal({
        title: 'Desea eliminar el registro ' + res[1] + '?',
        text: "No podrás revertir esto!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar'

    }).then(function () {
        DelProyecto(res[0]);
    })
}


function DelProyecto(ProyectoId) {

    
    params_ = JSON.stringify({ ProyectoId: ProyectoId });

    $.ajax({
        type: "POST",
        url: "/Proyectos/DelProyectos",
        data: params_,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data != null) {
                if (data == "success") {                    

                    GetProyectos();

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

    //return $.ajax({
    //    type: "POST",
    //    dataType: "JSON",
    //    contentType: "application/json;",
    //    url: "http://localhost:4439/Proyectos/DelProyectos",
    //    data: JSON.stringify(ProyectoId)
    //});
}