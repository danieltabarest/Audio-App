var otInconformidadAspectos;
var otInconformidadProyectos;
var otInconformidadUPMs;
var otVisitas;
var otNoConformidad;
var otLugaresTrabajo
var dataingrid;
var dataingridProyectos;
var dataingridUPMs;
var dataingrVisitas;

$(document).ready(function () {
    ConfigTableIncProyectos();
    ConfigTableVisitas();
    ConfigTableNoConformidad();
    ConfigTableLugaresTrabajo();

    GetProyectos();
});

function ConfigTableLugaresTrabajo() {
    var dtData = []; otLugaresTrabajo = $('#tblLugaresTrabajo').dataTable({
        'aaData': dtData,
        "sPaginationType": "full_numbers",
        "sPageButton": "paginate_button",
        "sPageButtonActive": "paginate_active",
        "sPageButtonStaticDisabled": "paginate_buttond",
        "iDisplayLength": 20,
        "bAutoWidth": false,
        "aoColumns": [{ "sWidth": "5%" }, { "sWidth": "25%" }, { "sWidth": "50%" }, { "sWidth": "45%" }, { "sWidth": "45%" }, { "sWidth": "5%" }],
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
    var dtData = []; otProyectosAsignados = $('#tblProyectos').dataTable({
        'aaData': dtData,
        "sPaginationType": "full_numbers",
        "sPageButton": "paginate_button",
        "sPageButtonActive": "paginate_active",
        "sPageButtonStaticDisabled": "paginate_buttond",
        "iDisplayLength": 20,
        "bAutoWidth": false,
        "aoColumns": [{ "sWidth": "25%" }, { "sWidth": "40%" }, { "sWidth": "20%" }, { "sWidth": "10%" }, { "sWidth": "5%" }],
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

function ConfigTableVisitas() {
    var dtData = []; otVisitas = $('#tblVisitas').dataTable({
        'aaData': dtData,
        "sPaginationType": "full_numbers",
        "sPageButton": "paginate_button",
        "sPageButtonActive": "paginate_active",
        "sPageButtonStaticDisabled": "paginate_buttond",
        "iDisplayLength": 10,
        "bAutoWidth": false,
        "aoColumns": [{ "sWidth": "25%" }, { "sWidth": "20%" }, { "sWidth": "5%" }, { "sWidth": "10%" }, { "sWidth": "10%" }, { "sWidth": "10%" }, { "sWidth": "10%" }, { "sWidth": "5%" }, { "sWidth": "0%" }],
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

    otVisitas.fnSetColumnVis(8, false);

}

//function ConfigTableIncProyectos() {
//    var dtData = []; otInconformidadProyectos = $('#tblProyectos').dataTable({
//        'aaData': dtData,
//        "sPaginationType": "full_numbers",
//        "sPageButton": "paginate_button",
//        "sPageButtonActive": "paginate_active",
//        "sPageButtonStaticDisabled": "paginate_buttond",
//        "iDisplayLength": 10,
//        "bAutoWidth": false,
//        "aoColumns": [{ "sWidth": "45%" }, { "sWidth": "50%" }, { "sWidth": "5%" }],
//        "oLanguage": {
//            "sProcessing": "Procesando...",
//            "sLengthMenu": "Mostrar _MENU_ registros",
//            "sZeroRecords": "No se encontraron resultados",
//            "sInfo": "Mostrando desde _START_ hasta _END_ de _TOTAL_ registros",
//            "sInfoEmpty": "Mostrando desde 0 hasta 0 de 0 registros",
//            "sInfoFiltered": "(filtrado de _MAX_ registros en total)",
//            "sInfoPostFix": "",
//            "sSearch": "Buscar:",
//            "sUrl": "",
//            "oPaginate": {
//                "sFirst": "<",
//                "sPrevious": "<<",
//                "sNext": ">>",
//                "sLast": ">"
//            }
//        }
//    });
//}

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
    var dtData = []; otInconformidadAspectos = $('#tblAspectos').dataTable({
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
        url: "/Proyectos/GetProyectosAsignados",
        data: {},
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            otProyectosAsignados.fnClearTable();
            dataingridProyectos = data;
            for (var x = 0; x < data.length; x++) {
                var Actions = ' <a href="#" onclick="LoadFieldsProyectos(' + x + ')"><i class="fa fa-edit fa-2x text-navy"></i></a>';
                otProyectosAsignados.fnAddData([data[x].Nombre, data[x].Descripcion, data[x].DescripcionModelo, data[x].DescripcionEstado, Actions]);
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
            url: "/InconformidadAspectos/GetUPMsporProyectos",
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
        url: "/InconformidadAspectos/GetAspectos",
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

    $('#divLugaresTrabajo').hide();

    GetVisitas();

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
        params.ProyectoId = $("#txtProyectoId").val();
        params.Tipo = "InconformidadAspectos";
        params = JSON.stringify(params);
        var reg;

        $.ajax({
            type: "POST",
            url: "/Visitas/GetVisitasProfesionalXProyecto",
            data: params,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                otVisitas.fnClearTable();
                dataVisitas = data;
                for (var x = 0; x < data.length; x++) {
                    var Actions = ' <a href="#" onclick="GetRespuestasUPM(' + data[x].VisitaId + ', ' + data[x].UPMId + ')"><i class="fa fa-eye fa-2x text-navy"></i></a>';
                    var NumVisitas = '<span class="badge badge-success">' + data[x].NumVisita + '</span>';
                    var FechaInicio = moment((data[x].FechaInicio.match(/\d+/)[0] * 1)).format('LLL');

                    var FechaFin = moment((data[x].FechaFin.match(/\d+/)[0] * 1)).format('LLL');
                    switch (data[x].EstadoDescripcion) {
                        case 'SINCRONIZADA':
                            var Estado = '<span class="badge badge-success">' + data[x].EstadoDescripcion + '</span>';
                            break;
                        case 'CORRECION':
                            var Estado = '<span class="badge badge-danger">' + data[x].EstadoDescripcion + '</span>';
                            break;
                        case 'APROBADA':
                            var Estado = '<span class="badge badge-primary">' + data[x].EstadoDescripcion + '</span>';
                            break;
                        case 'SOLUCIONADA':
                            var Estado = '<span class="badge badge-warning">' + data[x].EstadoDescripcion + '</span>';
                            break;
                        case 'INCONFORMIDAD':
                            var Estado = '<span class="badge badge-danger">' + data[x].EstadoDescripcion + '</span>';
                            break;
                    }

                    otVisitas.fnAddData(
                        [data[x].Codigo, data[x].UPM.Codigo, NumVisitas, data[x].RutaDescripcion, FechaInicio, FechaFin, Estado, Actions, data[x].UPMId]);
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
    GetComponentesVariables();

    $('#ModalVisitas').modal('hide');
}

function GetRespuestasUPM(visitaId, UPMid) {
    var shtmlUl;
    var shtmlTabPane;
    var NombreClave = "";
    var sAspectos;
    var reg;
    var regupd;

    $("#txtUPMId").val(UPMid);
    $("#txtVisitaId").val(visitaId);

    var visita = Enumerable.From(dataVisitas).Where(function (a) { return a.VisitaId == visitaId }).ToArray();

    $("#titleVisita").html("Visita :" + visita[0].Codigo);
    $("#btnBack").show();
    var params = new Object();

    params.VisitaId = visitaId;
    params = JSON.stringify(params);

    //shtmlUl = '<ul class="nav nav-tabs" id="tabAspectos">';
    shtmlUl = "";
    shtmlTabPane = "";
    shtmlCtrls = "";
    sAspectos = "";
    var tabAspectos = $("#tabAspectos");
    var tabContentAspectos = $("#tabContentAspectos");
    tabAspectos.empty();
    tabContentAspectos.empty();

    $.ajax({
        type: "POST",
        url: "/Visitas/GetRespuestasUPMxVisita",
        data: params,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            if (data.length > 0) {
                if (data[0].Tipo == "UPM") {
                    $('#divLugaresTrabajo').hide();
                    var Aspectos = Enumerable.From(data).Distinct(function (a) { return a.AspectoId; }).Select(function (b) { return b; }).OrderBy(function (c) { return c.Aspecto.Orden }).ToArray();

                    var htmlString;
                    for (var x = 0; x < Aspectos.length; x++) {

                        var tab = "<li " + ((x == 0) ? "class='active'" : "") + "><a data-toggle='tab' href='#tab-" + Aspectos[x].AspectoId + "'> " + Aspectos[x].Aspecto.NombreClave + "</a></li>"
                        tabAspectos.append(tab);

                        htmlString = '';

                        htmlString += "<div id='tab-" + Aspectos[x].AspectoId + "' class='tab-pane " + ((x == 0) ? "active" : "") + "'>";
                        htmlString += "<div class='panel-body'>";
                        //Inicio TabContent

                        var Componentes = Enumerable.From(data).Where(function (a) { return a.AspectoId == Aspectos[x].AspectoId }).ToArray();
                        Componentes = Enumerable.From(Componentes).Distinct(function (a) { return a.ComponenteId; }).Select(function (b) { return b; }).OrderBy(function (c) { return c.Componente.Orden }).ToArray();

                        htmlString += "<div class='panel-group' id='PanelComponentes-" + Aspectos[x].AspectoId + "'>";

                        for (var y = 0; y < Componentes.length; y++) {
                            htmlString += "<div class='panel panel-primary'>";
                            htmlString += "<div class='panel-heading'>";
                            htmlString += "<h5 class='panel-title'>";
                            htmlString += "<a data-toggle='collapse' data-parent='#PanelComponentes-" + Aspectos[x].AspectoId + "' id='C" + Componentes[y].ComponenteId + "' href='#collapse" + Componentes[y].ComponenteId + "'>" + Componentes[y].Componente.Orden + " - " + Componentes[y].Componente.Descripcion + "</a>";
                            htmlString += "</h5><span> </span>";
                            htmlString += "</div>";
                            htmlString += "<div id='collapse" + Componentes[y].ComponenteId + "' class='panel-collapse collapse'>";
                            htmlString += "<div class='panel-body'>";

                            var Respuestas = Enumerable.From(data).Where(function (a) { return a.ComponenteId == Componentes[y].ComponenteId }).ToArray();

                            var RespuestasPri = Enumerable.From(Respuestas).Where(function (a) { return a.Variable.Tipo == 'Filtro' || a.Variable.Tipo == 'Variable' || a.Variable.Tipo == 'SubComponente' }).OrderBy(function (c) { return c.Variable.Orden }).ToArray();
                            var RespuestasSec = Enumerable.From(Respuestas).Where(function (a) { return a.Variable.Tipo == 'VariableSub' || a.Variable.Tipo == 'VariableList' }).OrderBy(function (c) { return c.Variable.Orden }).ToArray();
                            var RespuestasTer = Enumerable.From(Respuestas).Where(function (a) { return a.Variable.Tipo == 'VariableExt' }).OrderBy(function (c) { return c.Variable.Orden }).ToArray();

                            if (RespuestasPri.length > 0) {
                                htmlString += "<div class='row'>"; //Close PanelBody
                                htmlString += '<table class="table table-striped table-bordered table-hover" id="tbl-' + Componentes[y].ComponenteId + '">';
                                htmlString += ' <thead>';
                                htmlString += '     <tr>';
                                htmlString += '         <th></th>';
                                htmlString += '         <th>PREGUNTA</th>';
                                htmlString += '         <th>RESPUESTA</th>';
                                htmlString += '         <th></th>';
                                htmlString += '     </tr>';
                                htmlString += ' </thead>';
                                htmlString += ' <tbody>';

                                for (var z = 0; z < RespuestasPri.length; z++) {


                                    htmlString += '<tr>';
                                    if (RespuestasPri[z].Variable.Hijos > 0) {
                                        htmlString += "<td><a href='#' onclick='expandItemRespuesta(" + RespuestasPri[z].RespuestaId + ")'><i id='iconExpand-" + RespuestasPri[z].RespuestaId + "' class='fa fa-plus text-navy'></i></a></td>"
                                    } else {
                                        htmlString += "<td>-</td>"
                                    }
                                    htmlString += '  <td>' + RespuestasPri[z].Variable.Orden + '. ' + RespuestasPri[z].Variable.Descripcion + '</td>';

                                    switch (RespuestasPri[z].Variable.TipoControl) {
                                        case "Input":
                                            htmlString += '  <td>' + RespuestasPri[z].Respuesta.Valor + '</td>';
                                            break;
                                        default:
                                            var opciones = Enumerable.From(RespuestasPri[z].OpcionesRespuesta).Where(function (a) { return a.OpcionRespuestaId == RespuestasPri[z].Respuesta.OpcionRespuestaId }).OrderBy(function (c) { return c.Descripcion }).ToArray();

                                            if (opciones.length > 0) {
                                                var opcion = opciones[0];
                                                if (opcion) {

                                                    htmlString += '  <td>' + opcion.Descripcion + '</td>';
                                                } else {
                                                    htmlString += '  <td></td>';
                                                }
                                            }
                                            else {
                                                htmlString += '  <td></td>';
                                            }

                                            break;
                                    }
                                    //Sixto: Cambio aqui
                                    //console.log(RespuestasPri[z].RespuestaId);
                                    if (RespuestasPri[z].Variable.Hijos == 0) {
                                        reg = RespuestasPri[z].Variable.VariableId + "|" + RespuestasPri[z].RespuestaId;
                                        htmlString += '<td><table><tr><td><a href="#" title="Agregar no conformidad" class="fa fa-thumbs-down" onclick="LoadFieldsInconformidad(' + "'" + reg + "'" + ');"></a></td><td><a href="#" title="Arreglar no conformidad" class="fa fa-thumbs-up" onclick="ActEstado(' + "'" + reg + "'" + ');"></a></td></tr></table></td>';
                                    } else {
                                        htmlString += '<td>-</td>';
                                    }

                                    htmlString += '</tr>';

                                    if (RespuestasPri[z].Variable.Hijos > 0) {
                                        var respuestasSub = Enumerable.From(RespuestasSec).Where(function (a) { return a.Variable.ParentId == RespuestasPri[z].Variable.VariableId }).OrderBy(function (c) { return c.Variable.Orden }).ToArray();

                                        if (respuestasSub.length > 0) {

                                            htmlString += "<tr class='expandItem' id='expandItem-" + RespuestasPri[z].RespuestaId + "'>";
                                            htmlString += "<td colspan='4'>";
                                            htmlString += '<table class="table table-striped table-bordered table-hover" id="tbl-' + RespuestasPri[z].RespuestaId + '">';
                                            htmlString += ' <thead>';
                                            htmlString += '     <tr>';
                                            htmlString += '         <th></th>';
                                            htmlString += '         <th>PREGUNTA</th>';
                                            htmlString += '         <th>RESPUESTA</th>';
                                            htmlString += '         <th></th>';
                                            htmlString += '     </tr>';
                                            htmlString += ' </thead>';
                                            htmlString += ' <tbody>';
                                            for (var v = 0; v < respuestasSub.length; v++) {
                                                htmlString += '<tr>';

                                                if (respuestasSub[v].Variable.Hijos > 0) {
                                                    htmlString += "<td><a href='#' onclick='expandItemRespuesta(" + respuestasSub[v].RespuestaId + ")'><i id='iconExpand-" + respuestasSub[v].RespuestaId + "' class='fa fa-plus text-navy'></i></a></td>"
                                                } else {
                                                    htmlString += "<td>-</td>"
                                                }

                                                htmlString += '  <td>' + respuestasSub[v].Variable.Orden + '. ' + respuestasSub[v].Variable.Descripcion + '</td>';

                                                switch (respuestasSub[v].Variable.TipoControl) {
                                                    case "Input":
                                                        htmlString += '  <td>' + respuestasSub[v].Respuesta.Valor + '</td>';
                                                        break;

                                                    default:
                                                        var opciones = Enumerable.From(respuestasSub[v].OpcionesRespuesta).Where(function (a) { return a.OpcionRespuestaId == respuestasSub[v].Respuesta.OpcionRespuestaId }).OrderBy(function (c) { return c.Descripcion }).ToArray();
                                                        if (opciones.length > 0) {
                                                            var opcion = opciones[0];
                                                            if (opcion) {

                                                                htmlString += '  <td>' + opcion.Descripcion + '</td>';
                                                            } else {
                                                                htmlString += '  <td></td>';
                                                            }

                                                        }
                                                        else {
                                                            htmlString += '  <td></td>';
                                                        }
                                                        break;
                                                }
                                                //htmlString += "<td>-</td>"
                                                if (respuestasSub[v].Variable.Hijos == 0) {
                                                    reg = respuestasSub[v].Variable.VariableId + "|" + respuestasSub[v].RespuestaId;
                                                    htmlString += '<td><table><tr><td><a href="#" title="Agregar no conformidad" class="fa fa-thumbs-down" onclick="LoadFieldsInconformidad(' + "'" + reg + "'" + ');"></a></td><td><a href="#" title="Arreglar no conformidad" class="fa fa-thumbs-up" onclick="ActEstado(' + "'" + reg + "'" + ');"></a></td></tr></table></td>';
                                                }
                                                else {
                                                    htmlString += '<td>-</td>'
                                                }

                                                htmlString += '</tr>';
                                                ///
                                                if (respuestasSub[v].Variable.Hijos > 0) {
                                                    var respuestasTer = Enumerable.From(RespuestasTer).Where(function (a) { return a.Variable.ParentId == respuestasSub[v].Variable.VariableId }).OrderBy(function (c) { return c.Variable.Orden }).ToArray();

                                                    if (respuestasTer.length > 0) {

                                                        htmlString += "<tr class='expandItem' id='expandItem-" + respuestasSub[v].RespuestaId + "'>";
                                                        htmlString += "<td colspan='4'>";
                                                        htmlString += '<table class="table table-striped table-bordered table-hover" id="tbl-' + respuestasSub[v].RespuestaId + '">';
                                                        htmlString += ' <thead>';
                                                        htmlString += '     <tr>';
                                                        htmlString += '         <th></th>';
                                                        htmlString += '         <th>PREGUNTA</th>';
                                                        htmlString += '         <th>RESPUESTA</th>';
                                                        htmlString += '         <th></th>';
                                                        htmlString += '     </tr>';
                                                        htmlString += ' </thead>';
                                                        htmlString += ' <tbody>';
                                                        for (var w = 0; w < respuestasTer.length; w++) {
                                                            htmlString += '<tr>';

                                                            if (respuestasTer[w].Variable.Hijos > 0) {
                                                                htmlString += "<td><a href='#' onclick='expandItemRespuesta(" + respuestasTer[v].RespuestaId + ")'><i id='iconExpand-" + respuestasTer[v].RespuestaId + "' class='fa fa-plus text-navy'></i></a></td>";
                                                            } else {
                                                                htmlString += "<td>-</td>"
                                                            }

                                                            htmlString += '  <td>' + respuestasTer[w].Variable.Orden + '. ' + respuestasTer[w].Variable.Descripcion + '</td>';

                                                            switch (respuestasTer[w].Variable.TipoControl) {
                                                                case "Input":
                                                                    htmlString += '  <td>' + respuestasTer[w].Respuesta.Valor + '</td>';
                                                                    break;

                                                                default:
                                                                    var opciones = Enumerable.From(respuestasTer[w].OpcionesRespuesta).Where(function (a) { return a.OpcionRespuestaId == respuestasTer[w].Respuesta.OpcionRespuestaId }).OrderBy(function (c) { return c.Descripcion }).ToArray();
                                                                    if (opciones.length > 0) {
                                                                        var opcion = opciones[0];
                                                                        if (opcion) {

                                                                            htmlString += '  <td>' + opcion.Descripcion + '</td>';
                                                                        } else {
                                                                            htmlString += '  <td></td>';
                                                                        }

                                                                    }
                                                                    break;
                                                            }

                                                            reg = respuestasTer[w].Variable.VariableId + "|" + respuestasTer[w].RespuestaId;
                                                            htmlString += '<td><table><tr><td><a href="#" title="Agregar no conformidad" class="fa fa-thumbs-down" onclick="LoadFieldsInconformidad(' + "'" + reg + "'" + ');"></a></td><td><a href="#" title="Arreglar no conformidad" class="fa fa-thumbs-up" onclick="ActEstado(' + "'" + reg + "'" + ');"></a></td></tr></table></td>';
                                                            htmlString += '</tr>';

                                                        }
                                                        htmlString += ' </tbody>';
                                                        htmlString += ' </table>';
                                                        htmlString += '</td>';
                                                        htmlString += '</tr>';



                                                    }



                                                }

                                                ///
                                            }
                                            htmlString += ' </tbody>';
                                            htmlString += ' </table>';
                                            htmlString += '</td>';
                                            htmlString += '</tr>';
                                        }
                                    }
                                }

                                htmlString += ' </tbody>';
                                htmlString += ' </table>';
                                htmlString += "</div>"; //Close Row
                            }
                            htmlString += "</div>"; //Close PanelBody
                            htmlString += "</div >"; //Close PanelCollapse
                            htmlString += "</div >"; //Close Panel primary
                        }

                        htmlString += "</div>"; //Close PanelGroup Componentes

                        htmlString += "</div>"; //Close PanelBody
                        htmlString += "</div >"; //Close PanelCollapse
                        htmlString += "</div >"; //Close PanelPrimary

                        htmlString += "</div>";



                        htmlString += "</div></div>";
                        tabContentAspectos.append(htmlString);

                    }

                    $("#rowVisita").hide();
                    $(".expandItem").hide();
                    $("#rowRespuestas").show();

                }
                else {
                    $('#divLugaresTrabajo').show();
                    otLugaresTrabajo.fnClearTable();
                    for (var x = 0; x < data.length; x++) {
                        //seleccion = data[x].ProyectoId + '|' + data[x].Nombre + '|' + data[x].Descripcion + '|' + data[x].ModeloId + '|' + data[x].DescripcionModelo;
                        otLugaresTrabajo.fnAddData([data[x].NumLugar,
                            data[x].Codigo,
                            data[x].Nombre,
                            data[x].UPM,
                            data[x].Descripcion,
                        '<table><tr><td></td><td><a href="#" class="fa fa-edit fa-2x" onclick="GetRespuestasLugarTrabajo()"></a></td></tr></table>']);
                    }
                }
            }
        },
        complete: function () {

        },
        error: function (data) {
            swal("Error: " + data.responseText, "AGM", "error");
        }
    });
}

function GetRespuestasLugarTrabajo() {
    var shtmlUl;
    var shtmlTabPane;
    var NombreClave = "";
    var sAspectos;
    var reg;
    var regupd;

    var UPMid = $("#txtUPMId").val();
    var visitaId = $("#txtVisitaId").val();

    var visita = Enumerable.From(dataVisitas).Where(function (a) { return a.VisitaId == visitaId }).ToArray();

    $("#titleVisita").html("Visita :" + visita[0].Codigo);
    $("#btnBack").show();
    var params = new Object();

    params.VisitaId = visitaId;
    params = JSON.stringify(params);

    //shtmlUl = '<ul class="nav nav-tabs" id="tabAspectos">';
    shtmlUl = "";
    shtmlTabPane = "";
    shtmlCtrls = "";
    sAspectos = "";
    var tabAspectos = $("#tabAspectos");
    var tabContentAspectos = $("#tabContentAspectos");
    tabAspectos.empty();
    tabContentAspectos.empty();

    $.ajax({
        type: "POST",
        url: "/Visitas/GetRespuestasLugarTrabajoxVisita",
        data: params,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            if (data.length > 0) {
                $('#divLugaresTrabajo').hide();
                var Aspectos = Enumerable.From(data).Distinct(function (a) { return a.AspectoId; }).Select(function (b) { return b; }).OrderBy(function (c) { return c.Aspecto.Orden }).ToArray();

                var htmlString;
                for (var x = 0; x < Aspectos.length; x++) {

                    var tab = "<li " + ((x == 0) ? "class='active'" : "") + "><a data-toggle='tab' href='#tab-" + Aspectos[x].AspectoId + "'> " + Aspectos[x].Aspecto.NombreClave + "</a></li>"
                    tabAspectos.append(tab);

                    htmlString = '';

                    htmlString += "<div id='tab-" + Aspectos[x].AspectoId + "' class='tab-pane " + ((x == 0) ? "active" : "") + "'>";
                    htmlString += "<div class='panel-body'>";
                    //Inicio TabContent

                    var Componentes = Enumerable.From(data).Where(function (a) { return a.AspectoId == Aspectos[x].AspectoId }).ToArray();
                    Componentes = Enumerable.From(Componentes).Distinct(function (a) { return a.ComponenteId; }).Select(function (b) { return b; }).OrderBy(function (c) { return c.Componente.Orden }).ToArray();

                    htmlString += "<div class='panel-group' id='PanelComponentes-" + Aspectos[x].AspectoId + "'>";

                    for (var y = 0; y < Componentes.length; y++) {
                        htmlString += "<div class='panel panel-primary'>";
                        htmlString += "<div class='panel-heading'>";
                        htmlString += "<h5 class='panel-title'>";
                        htmlString += "<a data-toggle='collapse' data-parent='#PanelComponentes-" + Aspectos[x].AspectoId + "' id='C" + Componentes[y].ComponenteId + "' href='#collapse" + Componentes[y].ComponenteId + "'>" + Componentes[y].Componente.Orden + " - " + Componentes[y].Componente.Descripcion + "</a>";
                        htmlString += "</h5><span> </span>";
                        htmlString += "</div>";
                        htmlString += "<div id='collapse" + Componentes[y].ComponenteId + "' class='panel-collapse collapse'>";
                        htmlString += "<div class='panel-body'>";

                        var Respuestas = Enumerable.From(data).Where(function (a) { return a.ComponenteId == Componentes[y].ComponenteId }).ToArray();

                        var RespuestasPri = Enumerable.From(Respuestas).Where(function (a) { return a.Variable.Tipo == 'Filtro' || a.Variable.Tipo == 'Variable' || a.Variable.Tipo == 'SubComponente' }).OrderBy(function (c) { return c.Variable.Orden }).ToArray();
                        var RespuestasSec = Enumerable.From(Respuestas).Where(function (a) { return a.Variable.Tipo == 'VariableSub' || a.Variable.Tipo == 'VariableList' }).OrderBy(function (c) { return c.Variable.Orden }).ToArray();
                        var RespuestasTer = Enumerable.From(Respuestas).Where(function (a) { return a.Variable.Tipo == 'VariableExt' }).OrderBy(function (c) { return c.Variable.Orden }).ToArray();

                        if (RespuestasPri.length > 0) {
                            htmlString += "<div class='row'>"; //Close PanelBody
                            htmlString += '<table class="table table-striped table-bordered table-hover" id="tbl-' + Componentes[y].ComponenteId + '">';
                            htmlString += ' <thead>';
                            htmlString += '     <tr>';
                            htmlString += '         <th></th>';
                            htmlString += '         <th>PREGUNTA</th>';
                            htmlString += '         <th>RESPUESTA</th>';
                            htmlString += '         <th></th>';
                            htmlString += '     </tr>';
                            htmlString += ' </thead>';
                            htmlString += ' <tbody>';

                            for (var z = 0; z < RespuestasPri.length; z++) {


                                htmlString += '<tr>';
                                if (RespuestasPri[z].Variable.Hijos > 0) {
                                    htmlString += "<td><a href='#' onclick='expandItemRespuesta(" + RespuestasPri[z].RespuestaId + ")'><i id='iconExpand-" + RespuestasPri[z].RespuestaId + "' class='fa fa-plus text-navy'></i></a></td>"
                                } else {
                                    htmlString += "<td>-</td>"
                                }
                                htmlString += '  <td>' + RespuestasPri[z].Variable.Orden + '. ' + RespuestasPri[z].Variable.Descripcion + '</td>';

                                switch (RespuestasPri[z].Variable.TipoControl) {
                                    case "Input":
                                        htmlString += '  <td>' + RespuestasPri[z].Respuesta.Valor + '</td>';
                                        break;
                                    default:
                                        var opciones = Enumerable.From(RespuestasPri[z].OpcionesRespuesta).Where(function (a) { return a.OpcionRespuestaId == RespuestasPri[z].Respuesta.OpcionRespuestaId }).OrderBy(function (c) { return c.Descripcion }).ToArray();

                                        if (opciones.length > 0) {
                                            var opcion = opciones[0];
                                            if (opcion) {

                                                htmlString += '  <td>' + opcion.Descripcion + '</td>';
                                            } else {
                                                htmlString += '  <td></td>';
                                            }
                                        }
                                        else {
                                            htmlString += '  <td></td>';
                                        }

                                        break;
                                }
                                //Sixto: Cambio aqui
                                //console.log(RespuestasPri[z].RespuestaId);
                                if (RespuestasPri[z].Variable.Hijos == 0) {
                                    reg = RespuestasPri[z].Variable.VariableId + "|" + RespuestasPri[z].RespuestaId;
                                    htmlString += '<td><table><tr><td><a href="#" title="Agregar no conformidad" class="fa fa-thumbs-down" onclick="LoadFieldsInconformidad(' + "'" + reg + "'" + ');"></a></td><td><a href="#" title="Arreglar no conformidad" class="fa fa-thumbs-up" onclick="ActEstado(' + "'" + reg + "'" + ');"></a></td></tr></table></td>';
                                } else {
                                    htmlString += '<td>-</td>';
                                }

                                htmlString += '</tr>';

                                if (RespuestasPri[z].Variable.Hijos > 0) {
                                    var respuestasSub = Enumerable.From(RespuestasSec).Where(function (a) { return a.Variable.ParentId == RespuestasPri[z].Variable.VariableId }).OrderBy(function (c) { return c.Variable.Orden }).ToArray();

                                    if (respuestasSub.length > 0) {

                                        htmlString += "<tr class='expandItem' id='expandItem-" + RespuestasPri[z].RespuestaId + "'>";
                                        htmlString += "<td colspan='4'>";
                                        htmlString += '<table class="table table-striped table-bordered table-hover" id="tbl-' + RespuestasPri[z].RespuestaId + '">';
                                        htmlString += ' <thead>';
                                        htmlString += '     <tr>';
                                        htmlString += '         <th></th>';
                                        htmlString += '         <th>PREGUNTA</th>';
                                        htmlString += '         <th>RESPUESTA</th>';
                                        htmlString += '         <th></th>';
                                        htmlString += '     </tr>';
                                        htmlString += ' </thead>';
                                        htmlString += ' <tbody>';
                                        for (var v = 0; v < respuestasSub.length; v++) {
                                            htmlString += '<tr>';

                                            if (respuestasSub[v].Variable.Hijos > 0) {
                                                htmlString += "<td><a href='#' onclick='expandItemRespuesta(" + respuestasSub[v].RespuestaId + ")'><i id='iconExpand-" + respuestasSub[v].RespuestaId + "' class='fa fa-plus text-navy'></i></a></td>"
                                            } else {
                                                htmlString += "<td>-</td>"
                                            }

                                            htmlString += '  <td>' + respuestasSub[v].Variable.Orden + '. ' + respuestasSub[v].Variable.Descripcion + '</td>';

                                            switch (respuestasSub[v].Variable.TipoControl) {
                                                case "Input":
                                                    htmlString += '  <td>' + respuestasSub[v].Respuesta.Valor + '</td>';
                                                    break;

                                                default:
                                                    var opciones = Enumerable.From(respuestasSub[v].OpcionesRespuesta).Where(function (a) { return a.OpcionRespuestaId == respuestasSub[v].Respuesta.OpcionRespuestaId }).OrderBy(function (c) { return c.Descripcion }).ToArray();
                                                    if (opciones.length > 0) {
                                                        var opcion = opciones[0];
                                                        if (opcion) {

                                                            htmlString += '  <td>' + opcion.Descripcion + '</td>';
                                                        } else {
                                                            htmlString += '  <td></td>';
                                                        }

                                                    }
                                                    else {
                                                        htmlString += '  <td></td>';
                                                    }
                                                    break;
                                            }
                                            //htmlString += "<td>-</td>"
                                            if (respuestasSub[v].Variable.Hijos == 0) {
                                                reg = respuestasSub[v].Variable.VariableId + "|" + respuestasSub[v].RespuestaId;
                                                htmlString += '<td><table><tr><td><a href="#" title="Agregar no conformidad" class="fa fa-thumbs-down" onclick="LoadFieldsInconformidad(' + "'" + reg + "'" + ');"></a></td><td><a href="#" title="Arreglar no conformidad" class="fa fa-thumbs-up" onclick="ActEstado(' + "'" + reg + "'" + ');"></a></td></tr></table></td>';
                                            }
                                            else {
                                                htmlString += '<td>-</td>'
                                            }

                                            htmlString += '</tr>';
                                            ///
                                            if (respuestasSub[v].Variable.Hijos > 0) {
                                                var respuestasTer = Enumerable.From(RespuestasTer).Where(function (a) { return a.Variable.ParentId == respuestasSub[v].Variable.VariableId }).OrderBy(function (c) { return c.Variable.Orden }).ToArray();

                                                if (respuestasTer.length > 0) {

                                                    htmlString += "<tr class='expandItem' id='expandItem-" + respuestasSub[v].RespuestaId + "'>";
                                                    htmlString += "<td colspan='4'>";
                                                    htmlString += '<table class="table table-striped table-bordered table-hover" id="tbl-' + respuestasSub[v].RespuestaId + '">';
                                                    htmlString += ' <thead>';
                                                    htmlString += '     <tr>';
                                                    htmlString += '         <th></th>';
                                                    htmlString += '         <th>PREGUNTA</th>';
                                                    htmlString += '         <th>RESPUESTA</th>';
                                                    htmlString += '         <th></th>';
                                                    htmlString += '     </tr>';
                                                    htmlString += ' </thead>';
                                                    htmlString += ' <tbody>';
                                                    for (var w = 0; w < respuestasTer.length; w++) {
                                                        htmlString += '<tr>';

                                                        if (respuestasTer[w].Variable.Hijos > 0) {
                                                            htmlString += "<td><a href='#' onclick='expandItemRespuesta(" + respuestasTer[v].RespuestaId + ")'><i id='iconExpand-" + respuestasTer[v].RespuestaId + "' class='fa fa-plus text-navy'></i></a></td>";
                                                        } else {
                                                            htmlString += "<td>-</td>"
                                                        }

                                                        htmlString += '  <td>' + respuestasTer[w].Variable.Orden + '. ' + respuestasTer[w].Variable.Descripcion + '</td>';

                                                        switch (respuestasTer[w].Variable.TipoControl) {
                                                            case "Input":
                                                                htmlString += '  <td>' + respuestasTer[w].Respuesta.Valor + '</td>';
                                                                break;

                                                            default:
                                                                var opciones = Enumerable.From(respuestasTer[w].OpcionesRespuesta).Where(function (a) { return a.OpcionRespuestaId == respuestasTer[w].Respuesta.OpcionRespuestaId }).OrderBy(function (c) { return c.Descripcion }).ToArray();
                                                                if (opciones.length > 0) {
                                                                    var opcion = opciones[0];
                                                                    if (opcion) {

                                                                        htmlString += '  <td>' + opcion.Descripcion + '</td>';
                                                                    } else {
                                                                        htmlString += '  <td></td>';
                                                                    }

                                                                }
                                                                break;
                                                        }

                                                        reg = respuestasTer[w].Variable.VariableId + "|" + respuestasTer[w].RespuestaId;
                                                        htmlString += '<td><table><tr><td><a href="#" title="Agregar no conformidad" class="fa fa-thumbs-down" onclick="LoadFieldsInconformidad(' + "'" + reg + "'" + ');"></a></td><td><a href="#" title="Arreglar no conformidad" class="fa fa-thumbs-up" onclick="ActEstado(' + "'" + reg + "'" + ');"></a></td></tr></table></td>';
                                                        htmlString += '</tr>';

                                                    }
                                                    htmlString += ' </tbody>';
                                                    htmlString += ' </table>';
                                                    htmlString += '</td>';
                                                    htmlString += '</tr>';



                                                }



                                            }

                                            ///
                                        }
                                        htmlString += ' </tbody>';
                                        htmlString += ' </table>';
                                        htmlString += '</td>';
                                        htmlString += '</tr>';
                                    }
                                }
                            }

                            htmlString += ' </tbody>';
                            htmlString += ' </table>';
                            htmlString += "</div>"; //Close Row
                        }
                        htmlString += "</div>"; //Close PanelBody
                        htmlString += "</div >"; //Close PanelCollapse
                        htmlString += "</div >"; //Close Panel primary
                    }

                    htmlString += "</div>"; //Close PanelGroup Componentes

                    htmlString += "</div>"; //Close PanelBody
                    htmlString += "</div >"; //Close PanelCollapse
                    htmlString += "</div >"; //Close PanelPrimary

                    htmlString += "</div>";



                    htmlString += "</div></div>";
                    tabContentAspectos.append(htmlString);

                }

                $("#rowVisita").hide();
                $(".expandItem").hide();
                $("#rowRespuestas").show();
            }
        },
        complete: function () {

        },
        error: function (data) {
            swal("Error: " + data.responseText, "AGM", "error");
        }
    });
}

function expandItemRespuesta(RespuestaId) {
    var trItem = $("#expandItem-" + RespuestaId);
    var iconExpan = $("#iconExpand-" + RespuestaId);

    if (iconExpan.hasClass('fa-plus')) {
        iconExpan.removeClass('fa-plus');
        iconExpan.removeClass('text-navy');
        iconExpan.addClass('fa-minus');
        iconExpan.addClass('text-danger');
        trItem.show();
    } else {
        iconExpan.removeClass('fa-minus');
        iconExpan.removeClass('text-danger');
        iconExpan.addClass('fa-plus');
        iconExpan.addClass('text-navy');
        trItem.hide();
    }
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
        url: "/InconformidadAspectos/GetComponentesVariables",
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
                shtmlCtrls += '         <th></th>';
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
                        shtmlCtrls += '  <td><table><tr><td><a href="#" title="Agregar no conformidad" class="fa fa-thumbs-down" onclick="LoadFieldsInconformidad(' + "'" + reg + "'" + ');"></a></td><td><a href="#" title="Arreglar no conformidad" class="fa fa-thumbs-up" onclick="ActEstado(' + "'" + reg + "'" + ');"></a></td></tr></table></td>';
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

    $("#txtVariableId").val(sreg[0]);
    $("#txtAspectoId").val("0");
    $("#txtRespuestaId").val(sreg[1]);
    //$("#txtLugarTrabajoId").val(sreg[8]);
    ////$("#txtRespuesta").val(sreg[7]);

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

function InsertNoConformidad() {
    if (ValidateFormAsignacionInconformidad()) {
        var iInconformidad = new Object();
        iInconformidad.IdInconformidadAspectos = $("#txtIdInconformidadAspectos").val();
        iInconformidad.ProyectoId = $("#txtProyectoId").val();
        iInconformidad.UPMId = $("#txtUPMId").val();
        iInconformidad.VisitaId = $("#txtVisitaId").val();
        iInconformidad.VariableId = $("#txtVariableId").val();
        iInconformidad.RespuestaId = $("#txtRespuestaId").val();
        iInconformidad.AspectoId = $("#txtAspectoId").val();
        iInconformidad.Observacion = $("#txtObservacion").val();
        iInconformidad.EstadoId = $("#cboEstado").val();
        iInconformidad.LugarTrabajoId = $("#txtLugarTrabajoId").val();

        iInconformidad = JSON.stringify({ iIncoAspecto: iInconformidad });

        $.ajax({
            type: "POST",
            url: "/InconformidadAspectos/InsertInconformidadAspectos",
            data: iInconformidad,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                if (data != null) {
                    switch (data) {
                        case "success":
                            GetInconformidad();
                            CleanfieldsInconformidad();
                            break;
                        default:
                            $('#ModalInconformidad').modal('hide');
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

function GetInconformidad() {

    var iInconformidad = new Object();
    iInconformidad.IdInconformidadAspectos = $("#txtIdInconformidadAspectos").val();
    iInconformidad.ProyectoId = $("#txtProyectoId").val();
    iInconformidad.UPMId = $("#txtUPMId").val();
    iInconformidad.VisitaId = $("#txtVisitaId").val();
    iInconformidad.VariableId = $("#txtVariableId").val();
    iInconformidad.RespuestaId = 0;
    //iInconformidad.RespuestaId = $("#txtRespuestaId").val();
    //iInconformidad.AspectoId = $("#txtAspectoId").val();    
    iInconformidad.AspectoId = 0;

    iInconformidad = JSON.stringify({ iIncoAspecto: iInconformidad });

    $.ajax({
        type: "POST",
        url: "/InconformidadAspectos/GetInconformidad",
        data: iInconformidad,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            otNoConformidad.fnClearTable();
            for (var x = 0; x < data.length; x++) {

                param = data[x].IdInconformidadAspectos + '|' + data[x].ProyectoId + '|' + data[x].UPMId + '|' + data[x].VisitaId + '|' + data[x].VariableId + '|' + data[x].RespuestaId + '|' + data[x].AspectoId + '|' + data[x].Observacion + '|' + data[x].EstadoId;

                otNoConformidad.fnAddData([data[x].Observacion,
                '<table><tr><td align="center"><a href="#" class="fa fa-trash-o" onclick="DeleteRecordInconformidad(' + "'" + data[x].IdInconformidadAspectos + "'" + ')"></a></td></tr></table>']);
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

function DeleteRecordInconformidad(IdInconformidadAspectos) {

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
        DelInconformidad(IdInconformidadAspectos);
    })
}

function DelInconformidad(IdInconAspectos) {

    InconformidadAspectosId = JSON.stringify({ IdInconformidadAspectos: IdInconAspectos });

    $.ajax({
        type: "POST",
        url: "/InconformidadAspectos/DelInconformidad",
        data: InconformidadAspectosId,
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

function ActEstado(reg) {
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

        IdVariable = JSON.stringify({ VariableId: reg[0] });

        $.ajax({
            type: "POST",
            url: "/InconformidadAspectos/UpdInconformidad",
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