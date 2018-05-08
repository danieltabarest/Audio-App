var otVisitas;
var otInconformidadProyectos;
var otInconformidadUPMs;
var otVisitas;
var otNoConformidad;
var otAnexos;

var dataingrid;
var dataingridProyectos;
var dataingridUPMs;
var dataingrVisitas;
var dataAnexos;

$(document).ready(function () {
    ConfigTableIncProyectos();
    ConfigTableIncUPMs();
    ConfigTableVisitas();
    ConfigTableNoConformidad();
    ConfigTableAnexos();
    GetProyectos();
    GetURL();

});

function ConfigTableVisitas() {
    var dtData = []; otVisitas = $('#tblVisitas').dataTable({
        'aaData': dtData,
        "sPaginationType": "full_numbers",
        "sPageButton": "paginate_button",
        "sPageButtonActive": "paginate_active",
        "sPageButtonStaticDisabled": "paginate_buttond",
        "iDisplayLength": 10,
        "bAutoWidth": false,
        "aoColumns": [{ "sWidth": "50%" }, { "sWidth": "45%" }, { "sWidth": "5%" }],
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

function ConfigTableIncProyectos() {
    var dtData = []; otInconformidadProyectos = $('#tblProyectos').dataTable({
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

function ConfigTableIncUPMs() {
    var dtData = []; otInconformidadUPMs = $('#tblUPMs').dataTable({
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

function ConfigTableIncAspectos() {
    var dtData = []; otVisitas = $('#tblAspectos').dataTable({
        'aaData': dtData,
        "sPaginationType": "full_numbers",
        "sPageButton": "paginate_button",
        "sPageButtonActive": "paginate_active",
        "sPageButtonStaticDisabled": "paginate_buttond",
        "iDisplayLength": 10,
        "bAutoWidth": false,
        "aoColumns": [{ "sWidth": "30%" }, { "sWidth": "20%" }, { "sWidth": "50%" }, { "sWidth": "5%" }],
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

function ConfigTableAnexos() {
    var dtData = []; otAnexos = $('#tblAnexos').dataTable({
        'aaData': dtData,
        "sPaginationType": "full_numbers",
        "sPageButton": "paginate_button",
        "sPageButtonActive": "paginate_active",
        "sPageButtonStaticDisabled": "paginate_buttond",
        "iDisplayLength": 10,
        "bAutoWidth": false,
        "aoColumns": [{ "sWidth": "40%" }, { "sWidth": "30%" }, { "sWidth": "30%" }, { "sWidth": "20%" }, { "sWidth": "5%" }],
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

function ConfigTableAspectos() {
    $('.dataTables-aspectos').DataTable({
        pageLength: 10,
        sPaginationType: "full_numbers",
        sPageButton: "paginate_button",
        sPageButtonActive: "paginate_active",
        sPageButtonStaticDisabled: "paginate_buttond",
        iDisplayLength: 10,
        bAutoWidth: false,
        aoColumns: [{ "sWidth": "70%" }, { "sWidth": "30%" }, { "sWidth": "5%" }],
        oLanguage: {
            sProcessing: "Procesando..",
            sLengthMenu: "Mostrar _MENU_ registros",
            sZeroRecords: "No se encontraron resultados",
            sInfo: "Mostrando desde _START_ hasta _END_ de _TOTAL_ registros",
            sInfoEmpty: "Mostrando desde 0 hasta 0 de 0 registros",
            sInfoFiltered: "(filtrado de _MAX_ registros en total)",
            sInfoPostFix: "",
            sSearch: "Buscar:",
            sUrl: "",
            oPaginate: {
                sFirst: "<",
                sPrevious: "<<",
                sNext: ">>",
                sLast: ">"
            }
        }
    });
}

function ConfigTableNoConformidad() {
    var dtData = []; otNoConformidad = $('#tblNoConformidad').dataTable({
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

function GetProyectos() {
    var seleccion;
    $.ajax({
        type: "POST",
        url: "/Proyectos/GetProyectos",
        data: {},
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            otInconformidadProyectos.fnClearTable();
            dataingridProyectos = data;
            for (var x = 0; x < data.length; x++) {
                //seleccion = data[x].ProyectoId + '|' + data[x].Nombre + '|' + data[x].Descripcion + '|' + data[x].ModeloId + '|' + data[x].DescripcionModelo;
                otInconformidadProyectos.fnAddData([data[x].Nombre,
                        data[x].Descripcion,
                        '<table><tr><td></td><td><a href="#" class="fa fa-edit fa-2x" onclick="LoadFieldsProyectos(' + x + ')"></a></td></tr></table>']);
            }
        },
        complete: function () {
        },
        error: function (data) {
            swal("Error: " + data.responseText, "AGM", "error");
        } //fin error
    });
}

function GetUPMsProyecto() {

    if ($("#txtProyectoId").val() != "") {

        var params = new Object();
        params.ProyectoId = $("#txtProyectoId").val();
        params = JSON.stringify(params);

        $.ajax({
            type: "POST",
            url: "/VistasAnexos/GetUPMsporProyectos",
            data: params,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                otInconformidadUPMs.fnClearTable();
                dataingridUPMs = data;
                for (var x = 0; x < data.length; x++) {
                    //seleccion = data[x].ProyectoId + '|' + data[x].Nombre + '|' + data[x].Descripcion + '|' + data[x].ModeloId + '|' + data[x].DescripcionModelo;
                    otInconformidadUPMs.fnAddData([data[x].Codigo,
                            data[x].Nombre,
                            '<table><tr><td></td><td><a href="#" class="fa fa-edit fa-2x" onclick="LoadFieldsUPMs(' + x + ')"></a></td></tr></table>']);
                }
            },
            complete: function () {
            },
            error: function (data) {
                swal("Error: " + data.responseText, "AGM", "error");
            } //fin error
        });
    }
    else {
        swal("Es necesario un proyecto antes de continuar.", "AGM", "info");
    }
}

function GetAspectos() {
    var shtmlUl;
    var shtmlTabPane;
    var params = new Object();
    params.UPMId = $("#txtUPMId").val();
    params = JSON.stringify(params);

    //shtmlUl = '<ul class="nav nav-tabs" id="tabAspectos">';
    shtmlUl = "";
    shtmlTabPane = "";

    $("#tabAspectos").empty();
    $("#tabcontent").empty();

    $.ajax({
        type: "POST",
        url: "/VistasAnexos/GetAspectos",
        data: params,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            for (var x = 0; x < data.length; x++) {
                if (x == 0) {
                    shtmlUl = '<li class="active"><a data-toggle="tab" href="#' + data[x].Codigo + '"><i class="fa fa-home">' + data[x].NombreClave + '</i></a></li>';

                    shtmlTabPane = '<div id="' + data[x].Codigo + '" class="tab-pane active">';
                    shtmlTabPane += '   <div class="panel-body">';
                    shtmlTabPane += '       <h1>' + data[x].Descripcion + '</h1>';
                    shtmlTabPane += '       <div class="row">';
                    shtmlTabPane += '           <div class="col-lg-6">';
                    shtmlTabPane += '               <div class="form-group">';
                    shtmlTabPane += '                   <label>' + data[x].NombreClave + '</label>';
                    shtmlTabPane += '               </div>';
                    shtmlTabPane += '           </div>';
                    shtmlTabPane += '       </div>';
                    shtmlTabPane += '   </div>';
                    shtmlTabPane += '</div>';
                }
                else {
                    shtmlUl += '<li class=""><a data-toggle="tab" href="#' + data[x].Codigo + '"><i class="fa fa-home">' + data[x].NombreClave + '</i></a></li>';

                    shtmlTabPane += '<div id="' + data[x].Codigo + '" class="tab-pane">';
                    shtmlTabPane += '   <div class="panel-body">';
                    shtmlTabPane += '       <h1>' + data[x].Descripcion + '</h1>';
                    shtmlTabPane += '       <div class="row">';
                    shtmlTabPane += '           <div class="col-lg-6">';
                    shtmlTabPane += '               <div class="form-group">';
                    shtmlTabPane += '                   <label>' + data[x].NombreClave + '</label>';
                    shtmlTabPane += '               </div>';
                    shtmlTabPane += '           </div>';
                    shtmlTabPane += '       </div>';
                    shtmlTabPane += '   </div>';
                    shtmlTabPane += '</div>';
                }
            }
        },
        complete: function () {
            //shtmlUl += '</ul>';
            $("#tabAspectos").append(shtmlUl);
            $("#tabcontent").append(shtmlTabPane);
        },
        error: function (data) {
            swal("Error: " + data.responseText, "AGM", "error");
        } //fin error
    });
}

function LoadFieldsAspectos(x) {
    $("#txtidAspecto").val(dataingrid[x].AspectoId);
    $("#txtAspecto").val(dataingrid[x].Descripcion);
    $("#lblAspecto").text(dataingrid[x].AspectoId);
    $("#lblModelo").text(dataingrid[x].ModeloId);
    $("#lblProyecto").text(dataingrid[x].ProyectoId);
    $("#lblUPMs").text(dataingrid[x].UPMId);

    $('#ModalAspectos').modal('hide');
}

function LoadFieldsProyectos(x) {

    $("#txtProyectoId").val(dataingridProyectos[x].ProyectoId);
    $("#lblModelo").text(dataingridProyectos[x].DescripcionModelo);
    $("#lblProyecto").text(dataingridProyectos[x].Nombre);
    $("#txtProyecto").val(dataingridProyectos[x].Nombre);

    GetUPMsProyecto();

    $("#txtUPMId").val("");
    $("#txtUPM").val("");

    $("#txtVisitaId").val("0");
    $("#txtVisita").val("");

    $("#tabAspectos").empty();
    $("#tabcontent").empty();

    $('#ModalProyectos').modal('hide');

}

function LoadFieldsUPMs(x) {

    $("#txtUPMId").val(dataingridUPMs[x].UPMId);
    $("#txtUPM").val(dataingridUPMs[x].Codigo);

    $("#txtVisitaId").val("0");
    $("#txtVisita").val("");

    $("#tabAspectos").empty();
    $("#tabcontent").empty();

    GetVisitas();

    $('#ModalUPMs').modal('hide');

}

function GetVisitas() {    

    if ($("#txtProyectoId").val() != "") {

        

        var params = new Object();
        params.IdUPM = $("#txtUPMId").val();
        params = JSON.stringify(params);

        $.ajax({
            type: "POST",
            url: "/VistasAnexos/GetVisita",
            data: params,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                otVisitas.fnClearTable();
                dataingrVisitas = data;
                for (var x = 0; x < data.length; x++) {
                    otVisitas.fnAddData([data[x].Descripcion,
                            data[x].RutaDescripcion,
                            '<table><tr><td></td><td><a href="#" class="fa fa-edit fa-2x" onclick="LoadFieldsVisitas(' + x + ')"></a></td></tr></table>']);
                }
            },
            complete: function () {
            },
            error: function (data) {
                swal("Error: " + data.responseText, "AGM", "error");
            } //fin error
        });
    }
    else {
        swal("Es necesario un proyecto antes de continuar.", "AGM", "info");
    }
}

function LoadFieldsVisitas(x) {
    $("#txtVisitaId").val(dataingrVisitas[x].VisitaId);
    $("#txtVisita").val(dataingrVisitas[x].Descripcion);

    //GetAspectos();
    //GetComponentesVariables();

    GetAnexos();


    $('#ModalVisitas').modal('hide');
}

function GetAnexos() {

    var tipoclass;
    var iUrlp = "";
    var iUrl = "";

    var params = new Object();
    params.UPMId = $("#txtUPMId").val();
    params.VisitaId = $("#txtVisitaId").val();
    params = JSON.stringify(params);

    $.ajax({
        type: "POST",
        url: "/VistasAnexos/GetAnexos",
        data: params,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            otAnexos.fnClearTable();
            dataAnexos = data;
            for (var x = 0; x < data.length; x++) {                

                switch (data[x].Tipo) {
                    case ".mp3":
                    case ".mp4":
                        tipoclass = "fa fa-film";
                        break;
                    case ".jpg":
                        tipoclass = "fa fa-file-image-o";
                        break;
                    default:
                        tipoclass = "fa fa-gift";
                        break;
                }
                
                //debugger;
                iUrlp = data[x].URL.split('\\');                
                iUrl = "../../UploadedFiles/" + data[x].URL;
                //Servidor
                //iUrl = "http://190.90.132.48/UploadedFiles/" + iUrlp[5];
                iUrl = "http://190.90.132.48/UploadedFiles/" + data[x].URL;

                otAnexos.fnAddData([data[x].UPMs,
                        data[x].Visita,
                        data[x].Descripcion,
                        data[x].Tipo,
                        '<table><tr><td></td><td><a href="' + iUrl + '" class="' + tipoclass + '" download></a></td></tr></table>']);
                        //'<table><tr><td></td><td><a href="#" class="' + tipoclass + '" onclick="LoadFieldsProyectos(' + x + ')"></a></td></tr></table>']);
            }
        },
        complete: function () {
        },
        error: function (data) {
            swal("Error: " + data.responseText, "AGM", "error");
        } //fin error
    });
}

function GetComponentesVariables() {
    var shtmlUl;
    var shtmlTabPane;
    var NombreClave = "";
    var sAspectos;
    var reg;
    var regupd;

    var params = new Object();

    params.UPMId = $("#txtUPMId").val();
    params = JSON.stringify(params);

    //shtmlUl = '<ul class="nav nav-tabs" id="tabAspectos">';
    shtmlUl = "";
    shtmlTabPane = "";
    shtmlCtrls = "";
    sAspectos = "";

    $("#tabAspectos").empty();
    $("#tabcontent").empty();

    $.ajax({
        type: "POST",
        url: "/VistasAnexos/GetComponentesVariables",
        data: params,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            for (var x = 0; x < data.length; x++) {
                if (NombreClave != data[x].NombreClave) {
                    sAspectos = sAspectos + data[x].NombreClave + ",";
                    NombreClave = data[x].NombreClave;

                    if (x == 0) {
                        shtmlUl = '<li class="active"><a data-toggle="tab" href="#' + data[x].NombreClave + '"><i class="fa fa-home">' + data[x].NombreClave + '</i></a></li>';

                        shtmlTabPane = '<div id="' + data[x].NombreClave + '" class="tab-pane active">';
                        shtmlTabPane += '   <div class="panel-body">';
                        shtmlTabPane += '       <h1>' + data[x].Descripcion + '</h1>';
                        shtmlTabPane += '       <div class="row">';
                        shtmlTabPane += '           <div class="col-lg-12">';
                        shtmlTabPane += '               <div class="form-group">';
                        shtmlTabPane += '                   <div id="div' + data[x].NombreClave + '"></div>';
                        shtmlTabPane += '               </div>';
                        shtmlTabPane += '           </div>';
                        shtmlTabPane += '       </div>';
                        shtmlTabPane += '   </div>';
                        shtmlTabPane += '</div>';
                    }
                    else {
                        shtmlUl += '<li class=""><a data-toggle="tab" href="#' + data[x].NombreClave + '"><i class="fa fa-home">' + data[x].NombreClave + '</i></a></li>';

                        shtmlTabPane += '<div id="' + data[x].NombreClave + '" class="tab-pane">';
                        shtmlTabPane += '   <div class="panel-body">';
                        shtmlTabPane += '       <h1>' + data[x].Descripcion + '</h1>';
                        shtmlTabPane += '       <div class="row">';
                        shtmlTabPane += '           <div class="col-lg-12">';
                        shtmlTabPane += '               <div class="form-group">';
                        shtmlTabPane += '                   <div id="div' + data[x].NombreClave + '"></div>';
                        shtmlTabPane += '               </div>';
                        shtmlTabPane += '           </div>';
                        shtmlTabPane += '       </div>';
                        shtmlTabPane += '   </div>';
                        shtmlTabPane += '</div>';
                    }
                }
            }


            $("#tabAspectos").append(shtmlUl);
            $("#tabcontent").append(shtmlTabPane);

            NombreClave = "";

            sAspectos = sAspectos.substring(0, sAspectos.length - 1);
            var spAspectos = sAspectos.split(',');

            for (var i = 0; i < spAspectos.length; i++) {
                shtmlCtrls = '<table class="table table-striped table-bordered table-hover dataTables-aspectos" id="tbl' + spAspectos[i] + '">';
                shtmlCtrls += ' <thead>';
                shtmlCtrls += '     <tr>';
                shtmlCtrls += '         <th>PREGUNTA</th>';
                shtmlCtrls += '         <th>RESPUESTA</th>';
                //shtmlCtrls += '         <th></th>';
                shtmlCtrls += '     </tr>';
                shtmlCtrls += ' </thead>';
                shtmlCtrls += ' <tbody>';
                for (var x = 0; x < data.length; x++) {

                    if (data[x].NombreClave == spAspectos[i]) {

                        //reg = data[x].VisitaId + '|' + data[x].VariableId + '|' + data[x].AspectoId + '|' + data[x].NombreClave + '|' + data[x].Descripcion + '|' + data[x].CodigoUPM + '|' + data[x].Pregunta + '|' + data[x].Respuesta + '|' + data[x].RespuestaId;
                        reg = data[x].VisitaId + '|' + data[x].VariableId + '|' + data[x].AspectoId + '|' + data[x].NombreClave + '|' + data[x].Descripcion + '|' + data[x].CodigoUPM + '|' + data[x].Pregunta + '|' + data[x].RespuestaId + '|' + data[x].LugarTrabajoId;

                        shtmlCtrls += '<tr>';
                        shtmlCtrls += '  <td>' + data[x].Pregunta + '</td>';
                        shtmlCtrls += '  <td>' + data[x].Respuesta + '</td>';
                        //shtmlCtrls += '  <td><table><tr><td><a href="#" title="Agregar no conformidad" class="fa fa-thumbs-down" onclick="LoadFieldsInconformidad(' + "'" + reg + "'" + ');"></a></td><td><a href="#" title="Arreglar no conformidad" class="fa fa-thumbs-up" onclick="ActEstado(' + "'" + data[x].VariableId + "'" + ');"></a></td></tr></table></td>';
                        shtmlCtrls += '</tr>';

                    }
                }
                shtmlCtrls += ' </tbody>';
                shtmlCtrls += '</table>';

                $("#div" + spAspectos[i]).append(shtmlCtrls);
            }

        },
        complete: function () {
            //shtmlUl += '</ul>';
            //$("#tabAspectos").append(shtmlUl);
            //$("#tabcontent").append(shtmlTabPane);

            ConfigTableAspectos();
        },
        error: function (data) {
            swal("Error: " + data.responseText, "AGM", "error");
        } //fin error
    });
}

function LoadFieldsInconformidad(reg) {
    var sreg = reg.split('|');
    $("#txtVisitaId").val(sreg[0]);
    $("#txtVariableId").val(sreg[1]);
    $("#txtAspectoId").val(sreg[2]);
    $("#txtAspectoSEL").val(sreg[4]);
    $("#txtPregunta").val(sreg[6]);
    $("#txtRespuestaId").val(sreg[7]);
    $("#txtLugarTrabajoId").val(sreg[8]);
    //$("#txtRespuesta").val(sreg[7]);

    GetInconformidad();

    $('#ModalInconformidad').modal('show');

}

function ValidateFormAsignacionInconformidad() {
    if ($("#txtObservacion").val() == "") {
        $("#txtObservacion").focus();
        return false;
    }

    return true;
}

function GetInconformidad() {

    var iInconformidad = new Object();
    iInconformidad.IdVisitas = $("#txtIdVisitas").val();
    iInconformidad.ProyectoId = $("#txtProyectoId").val();
    iInconformidad.UPMId = $("#txtUPMId").val();
    iInconformidad.VisitaId = $("#txtVisitaId").val();
    iInconformidad.VariableId = $("#txtVariableId").val();
    iInconformidad.RespuestaId = $("#txtRespuestaId").val();
    iInconformidad.AspectoId = $("#txtAspectoId").val();

    iInconformidad = JSON.stringify({ iIncoAspecto: iInconformidad });

    $.ajax({
        type: "POST",
        url: "/VistasAnexos/GetInconformidad",
        data: iInconformidad,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            otNoConformidad.fnClearTable();
            for (var x = 0; x < data.length; x++) {

                param = data[x].IdVisitas + '|' + data[x].ProyectoId + '|' + data[x].UPMId + '|' + data[x].VisitaId + '|' + data[x].VariableId + '|' + data[x].RespuestaId + '|' + data[x].AspectoId + '|' + data[x].Observacion + '|' + data[x].EstadoId;

                otNoConformidad.fnAddData([data[x].Observacion,
                            '<table><tr><td align="center"><a href="#" class="fa fa-trash-o" onclick="DeleteRecordInconformidad(' + "'" + data[x].IdVisitas + "'" + ')"></a></td></tr></table>']);
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

function CleanfieldsInconformidad() {
    $("#txtObservacion").val("");
    $("select#cboEstado")[0].selectedIndex = 0;
}

function DeleteRecordInconformidad(IdVisitas) {

    $('#ModalInconformidad').modal('hide');

    swal({
        title: 'Desea eliminar la inconformidad seleccionada?',
        text: "No podrás revertir esto!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar'
    }).then(function () {
        DelInconformidad(IdVisitas);
    })
}

function DelInconformidad(IdInconAspectos) {

    VisitasId = JSON.stringify({ IdVisitas: IdInconAspectos });

    $.ajax({
        type: "POST",
        url: "/VistasAnexos/DelInconformidad",
        data: VisitasId,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data != null) {
                if (data == "success") {
                    GetInconformidad();
                    $('#ModalInconformidad').modal('show');
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

function ActEstado(variableId) {
    swal({
        title: '¿Desea cambiar el estado de la variable seleccionada a ORGANIZADA?',
        text: "No podrás revertir esto!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar'
    }).then(function () {

        IdVariable = JSON.stringify({ VariableId: variableId });

        $.ajax({
            type: "POST",
            url: "/VistasAnexos/UpdInconformidad",
            data: IdVariable,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                if (data != null) {
                    if (data == "success") {
                        swal('Registro actualizado correctamente!', 'AGM', 'success');
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
    })
}

function GetURL() {    

    $.ajax({
        type: "POST",
        url: "/VistasAnexos/GetUrl",
        data: {},
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data != null) {                
                $("#txtRuta").val(data);
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