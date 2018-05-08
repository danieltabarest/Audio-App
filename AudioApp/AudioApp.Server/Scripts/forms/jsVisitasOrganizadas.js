var otVisitas;
var otProyectosAsignados;
var otInconformidadUPMs;
var otVisitas;
var otNoConformidad;

var dataingrid;
var dataingridProyectos;
var dataingridUPMs;
var dataVisitas;

$(document).ready(function () {
    $("#rowVisita").show();
    $("#rowRespuestas").hide();
    $("#btnBack").hide();
    ConfigTableIncProyectos();
    ConfigTableVisitas();
    ConfigTableNoConformidad();
    GetProyectos();


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
        "aoColumns": [{ "sWidth": "25%" }, { "sWidth": "20%" }, { "sWidth": "5%" }, { "sWidth": "10%" }, { "sWidth": "10%" }, { "sWidth": "10%" }, { "sWidth": "10%" }, { "sWidth": "5%" }],
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
        url: "/Visitas/GetAspectos",
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

    GetVisitas();

    $("#txtVisitaId").val("0");
    $("#txtVisita").val("");

    $("#tabAspectos").empty();
    $("#tabcontent").empty();

    $('#ModalProyectos').modal('hide');

}


function GetVisitas() {

    if ($("#txtProyectoId").val() != "") {

        var params = new Object();
        params.ProyectoId = $("#txtProyectoId").val();
        params.Tipo = "VisitasOrganizadas";
        params = JSON.stringify(params);

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
                    //var Actions = '<i class="fa fa-eye-slash fa-2x text-navy"></i>';
                    //Por pruebas y desarrollo se deja habilitado esta
                    var Actions = '<a href="#" onclick="GetRespuestasUPM(' + data[x].VisitaId + ')"><i class="fa fa-eye fa-2x text-navy"></i></a>';
                    var NumVisitas = '<span class="badge badge-success">' + data[x].NumVisita + '</span>';
                    var FechaInicio = moment((data[x].FechaInicio.match(/\d+/)[0] * 1)).format('LLL');
                    var FechaFin = moment((data[x].FechaFin.match(/\d+/)[0] * 1)).format('LLL');
                    switch (data[x].EstadoDescripcion) {
                        case 'SINCRONIZADA':
                            var Estado = '<span class="badge badge-success">' + data[x].EstadoDescripcion + '</span>';
                            break;
                        case 'CORRECION':
                            Actions = ' <a href="#" onclick="GetRespuestasUPM(' + data[x].VisitaId + ')"><i class="fa fa-eye fa-2x text-navy"></i></a>';
                            var Estado = '<span class="badge badge-danger">' + data[x].EstadoDescripcion + '</span>';
                            break;
                        case 'APROBADA':
                            var Estado = '<span class="badge badge-primary">' + data[x].EstadoDescripcion + '</span>';
                            break;
                        case 'SOLUCIONADA':
                            var Estado = '<span class="badge badge-warning">' + data[x].EstadoDescripcion + '</span>';
                            break;
                        case 'ORGANIZADA':
                            var Estado = '<span class="badge badge-warning">' + data[x].EstadoDescripcion + '</span>';
                            break;
                    }



                    otVisitas.fnAddData(
                        [data[x].Codigo, data[x].UPM.Codigo, NumVisitas, data[x].RutaDescripcion, FechaInicio, FechaFin, Estado, Actions]);
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


function GetRespuestasUPM(visitaId) {
    var shtmlUl;
    var shtmlTabPane;
    var NombreClave = "";
    var sAspectos;
    var reg;
    var regupd;

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
        url: "/Visitas/GetRespuestasUPMxVisitaIconformidad",
        data: params,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            if (data.length > 0) {

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

                                        break;
                                }
                                
                                var scambio = '';
                                //alert(RespuestasPri[z].Respuesta.VisitaId);
                                
                                if (RespuestasPri[z].Correcion) {
                                    htmlString += '<td><a href="#" onclick="SetCambiarOrganizada(' + RespuestasPri[z].Respuesta.VisitaId + ', ' + RespuestasPri[z].RespuestaId + ', ' + RespuestasPri[z].Respuesta.UPMId + ')"><i class="fa fa-floppy-o"></i></a></td>';
                                } else {
                                    htmlString += "<td>-</td>";
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
                                                    break;
                                            }
                                            htmlString += "<td>-</td>"
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
                                                            htmlString += "<td><a href='#' onclick='expandItemRespuesta(" + respuestasTer[v].RespuestaId + ")'><i id='iconExpand-" + respuestasTer[v].RespuestaId + "' class='fa fa-plus text-navy'></i></a></td>"
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
                                                        htmlString += "<td>-</td>"
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

function backVisitas() {
    $("#titleVisita").html("Visitas");
    $("#btnBack").hide();
    $("#rowVisita").show();
    $("#rowRespuestas").hide();

}

function SetCambiarOrganizada(idVisita, IdRespuesta, idUPM) {
    //alert("idVisita: " + idVisita + " idRespuesta: " + IdRespuesta + " idUPM: " + idUPM);
    $("#txtVisitaIdSel").val(idVisita);
    $("#txtRespuestaIdSel").val(IdRespuesta);
    $("#txtidUPMSel").val(idUPM);

    $('#ModalCambiarEstado').modal('show');
}

function ActualizarEstado() {
    var params_ = new Object();
    params_.idVisita = $("#txtVisitaIdSel").val();
    params_.idRespuesta = $("#txtRespuestaIdSel").val();
    params_.idUPM = $("#txtidUPMSel").val();
    
    params_ = JSON.stringify(params_);    

    $.ajax({
        type: "POST",
        url: "/VisitasOrganizada/UpdateVisitaOrganizadaporRespuesta",
        data: params_,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data != null) {
                switch (data) {
                    case "success":
                        $('#ModalCambiarEstado').modal('hide');
                        swal("Registro actualizado existosamente satisfactoriamente", "AGM", "success");
                        InhabilitarUPM($("#cboProyectos").val());
                        break;
                    default:
                        $('#ModalCambiarEstado').modal('hide');
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