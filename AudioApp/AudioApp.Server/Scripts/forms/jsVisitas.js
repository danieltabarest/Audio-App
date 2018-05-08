var otVisitas;
var otProyectosAsignados;
var otInconformidadUPMs;
var otVisitas;
var otLugaresTrabajo;
var otNoConformidad;
var contenedoresComponentes = [];
var contentPreguntasRespuestas = [];
var contentPreguntasRespuestasNivel2 = [];
var contentPreguntasRespuestasNivel3 = [];

var dataingrid;
var dataingridProyectos;
var dataingridUPMs;
var dataVisitas;
var dataLugaresTrabajo;

$(document).ready(function () {
    $("#rowVisita").show();
    $("#rowRespuestas").hide();
    $("#btnBack").hide();
    $("#VisitaPanel").hide();
    $("#LugaresTrabajoContent").hide();
    ConfigTableIncProyectos();
    ConfigTableVisitas();
    ConfigTableLugaresTrabajo();
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

function ConfigTableLugaresTrabajo() {
    var dtData = []; otLugaresTrabajo = $('#tblLugarDeTrabajoUPM').dataTable({
        'aaData': dtData,
        "sPaginationType": "full_numbers",
        "sPageButton": "paginate_button",
        "sPageButtonActive": "paginate_active",
        "sPageButtonStaticDisabled": "paginate_buttond",
        "iDisplayLength": 10,
        "bAutoWidth": false,
        "aoColumns": [{ "sWidth": "25%" }, { "sWidth": "25%" }, { "sWidth": "25%" }, { "sWidth": "25%" }, { "sWidth": "25%" }, { "sWidth": "10%" }],
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
                if (x === 0) {
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

    $("#LugaresTrabajoContent").hide();

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

    if ($("#txtProyectoId").val() !== "") {

        var params = new Object();
        params.ProyectoId = $("#txtProyectoId").val();
        params.Tipo = "Visitas";
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
                    var Actions = ' <a href="#" onclick="ObtenerInformacionVisita(' + data[x].VisitaId + ',&quot;' + data[x].Codigo + '&quot;,&quot;'+data[x].UPM.Codigo+'&quot;)"><i class="fa fa-eye fa-2x text-navy"></i></a>';
                    //     var Actions = ' <a href="#" onclick="GetEncabezadoUPM(' + data[x].VisitaId + ')"><i class="fa fa-eye fa-2x text-navy"></i></a>';
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


function ObtenerInformacionVisita(idVisita, codigoVisita, upmCodigo) {

    $("#VisitaPanel").hide();
    $("#LugaresTrabajoContent").hide();

    $("#lblCodigoUPM").val(upmCodigo);
    $("#lblCodigoVisita").val(codigoVisita);

    var ActionViewUPM = 'Información a nivel de UPM <a href="#" onclick="GetEncabezadoUPM(' + idVisita + ',&quot;' + codigoVisita + '&quot;,true,0)"><i class="fa fa-eye fa-2x text-navy"></i></a>';
    $("#divbtn").html(ActionViewUPM);
    
    var params = new Object();
    params.idVisita = idVisita;
    params.codigoVisita = codigoVisita;
    params = JSON.stringify(params);
    var tieneLugaresTrabajo = false;

    $.ajax({
        type: "POST",
        url: "/Visitas/GetObtenerLugaresTrabajoUPM",
        data: params,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (dataLtUPM) {

            if (dataLtUPM.length > 0) {
                otLugaresTrabajo.fnClearTable();
                dataLugaresTrabajo = dataLtUPM;
                

                for (var x = 0; x < dataLtUPM.length; x++) {
                  
                    var ActionViewLugarTrabajo = ' <a href="#" onclick="GetEncabezadoUPM(' + idVisita + ',&quot;' + codigoVisita + '&quot;,false,' + dataLtUPM[x].LugarTrabajoId + ')"><i class="fa fa-eye fa-2x text-navy"></i></a>';
                    var NumLugar = '<span class="badge badge-success">' + dataLtUPM[x].NumLugar + '</span>';

                    otLugaresTrabajo.fnAddData(
                      [dataLtUPM[x].Codigo, dataLtUPM[x].Nombre, NumLugar, dataLtUPM[x].TipoLugar, dataLtUPM[x].Etapa, ActionViewLugarTrabajo]);

                }
                //pintar grid con lugares de trabajo
                tieneLugaresTrabajo = true;
                $("#LugaresTrabajoContent").show();
                $("#VisitaPanel").show();
            }
            else {
                tieneLugaresTrabajo = false;
                $("#VisitaPanel").show();
                $("#LugaresTrabajoContent").hide();
            }
        },
        complete: function () {

            if (tieneLugaresTrabajo === false) {
                GetEncabezadoUPM(idVisita,true,0);
            }

        },
        error: function (data) {
            swal("Error: " + data.responseText, "AGM", "error");
        }
    });

}

function GetEncabezadoUPM(visitaId,codigoVisita, esUPM, IdLugarTrabajo) {
    
    var urlPost = "";
    var params = new Object();

    if (esUPM) {
        urlPost = "/Visitas/GetEncabezadoUPM";
        params.VisitaId = visitaId;
        params.CodigoVisita = codigoVisita;
    }
    else {
        urlPost = "/Visitas/GetEncabezadoLugarTrabajo";
        params.VisitaId = visitaId;
        params.CodigoVisita = codigoVisita;
        params.IdLugarTrabajo = IdLugarTrabajo;
    }
 
    $("#titleVisita").html("Visita :" + codigoVisita);
    $("#btnBack").show();

    var tabAspectos = $("#tabAspectos");
    tabAspectos.empty();

    params = JSON.stringify(params);
    var idPrimerEncabezado = 0;

    $.ajax({
        type: "POST",
        url: urlPost,
        data: params,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (dataEncabezados) {

            if (dataEncabezados.length > 0) {
                for (var x = 0; x < dataEncabezados.length; x++) {
                    var nombreAspecto = dataEncabezados[x].Descripcion;
                    var onclickEncabezado = "ObtenerComponentesTag(" + dataEncabezados[x].AspectoId + "," + visitaId + ",'" + codigoVisita +"',"+IdLugarTrabajo+"," + esUPM + "," + dataEncabezados[x].AspectoId + ",'" + nombreAspecto + "');";
                    var tab = "<li " + ((x == 0) ? "class='active'" : "") + "><a id='Tag-" + dataEncabezados[x].AspectoId + "' data-toggle='tab' href='#tab-" + dataEncabezados[x].AspectoId + "'> " + dataEncabezados[x].Descripcion + "</a></li>"
                    if (x == 0) {
                        idPrimerEncabezado = dataEncabezados[x].AspectoId;
                    }
                    tabAspectos.append(tab);
                    $('#Tag-' + dataEncabezados[x].AspectoId).attr('onClick', onclickEncabezado);
                }
            }
            $("#rowVisita").hide();
            $(".expandItem").hide();
            $("#rowRespuestas").show();
        },
        complete: function () {
            $("#Tag-" + idPrimerEncabezado).click();
        },
        error: function (data) {
            swal("Error: " + data.responseText, "AGM", "error");
        }
    });
}

function ObtenerComponentesTag(idAspecto, idVisita,codigoVisita,idLugar, esUPM, idTag, nombreAspecto) {

    var params = new Object();
    var agregarComponentes = true;
    params.idVisita = idVisita;
    params.codigoVisita = codigoVisita;
    params.esUPM = esUPM;
    params.idLugar = idLugar;
    params.idAspecto = idAspecto;
    params = JSON.stringify(params);
    var tabContenedorAspectos = $("#tabContentAspectos");

    for (var i = 0; i < contenedoresComponentes.length; i++) {
        if (("tab-" + idAspecto) === contenedoresComponentes[i]) {
            agregarComponentes = false;
            $("#tab-" + idAspecto).addClass("tab-pane active");
        }
        else {
            $('.active').removeClass('active');
        }
    }

    if (agregarComponentes) {
        contenedoresComponentes.push("tab-" + idAspecto);
        $.ajax({
            type: "POST",
            url: "/Visitas/GetTitulosComponentesPorAspecto",
            data: params,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (dataComponentes) {

                if (dataComponentes.length > 0) {

                    var htmlComponente = '';
                    htmlComponente += "<div id='tab-" + idAspecto + "' class='tab-pane active'>";
                    htmlComponente += "<div class='panel-body'>";
                    htmlComponente += "<div class='panel-group' id='PanelComponentes-" + idAspecto + "'>";
                    for (var x = 0; x < dataComponentes.length; x++) {
                        htmlComponente += "<div class='panel panel-primary'>";
                        htmlComponente += "<div class='panel-heading'>";
                        htmlComponente += "<h5 class='panel-title'>";
                        htmlComponente += '<a onClick="ObtenerPreguntasRespuestas(' + idVisita + ',\'' + codigoVisita + '\',' + idAspecto + ',' + dataComponentes[x].ComponenteId + ',\'' + dataComponentes[x].Descripcion + '\','+idLugar+',' + esUPM + ');" data-toggle="collapse" data-parent="#PanelComponentes-' + idAspecto + '" id="C' + dataComponentes[x].ComponenteId + '" href="#collapse' + dataComponentes[x].ComponenteId + '">' + dataComponentes[x].Orden + ' - ' + dataComponentes[x].Descripcion + '</a>';
                        htmlComponente += "</h5><span> </span>";
                        htmlComponente += "</div>";
                        htmlComponente += "<div id='collapse" + dataComponentes[x].ComponenteId + "' class='panel-collapse collapse'>";
                        htmlComponente += "<div class='panel-body' id='PanelBody-" + dataComponentes[x].ComponenteId + "' >";
                        htmlComponente += "</div>"; //Close PanelBody
                        htmlComponente += "</div>"; //Close PanelCollapse
                        htmlComponente += "</div>"; //Close Panel primary
                    }
                    tabContenedorAspectos.append(htmlComponente);
                }
            },
            complete: function () {
            },
            error: function (data) {
                swal("Error: " + data.responseText, "AGM", "error");
            }
        });
    }
}

function ObtenerPreguntasRespuestas(idvisita, codigoVisita, idaspecto, idcomponente, nombreAspecto, idLugar, esUPM) {
    var params = new Object();
    var agregarPreguntasRespuestas = true;
    params.idVisita = idvisita;
    params.codigoVisita = codigoVisita;
    params.idAspecto = idaspecto;
    params.nombreAspecto = nombreAspecto;
    params.idComponente = idcomponente;
    params.idLugar = idLugar
    params.esUPM = esUPM;
    params = JSON.stringify(params);

    for (var i = 0; i < contentPreguntasRespuestas.length; i++) {
        if (("tbl-" + idcomponente) === contentPreguntasRespuestas[i]) {
            agregarPreguntasRespuestas = false;
        }
    }

    if (agregarPreguntasRespuestas) {
        contentPreguntasRespuestas.push("tbl-" + idcomponente);
        $.ajax({
            type: "POST",
            url: "/Visitas/GetVariablesRespuestasPrimerNivelComponente",
            data: params,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (datarespuestasPrimerNivel) {

                if (datarespuestasPrimerNivel.length > 0) {
                    var tablaPreguntasRespuestas = '';
                    tablaPreguntasRespuestas += "<div class='row'>";
                    tablaPreguntasRespuestas += '<table class="table table-striped table-bordered table-hover" id="tbl-' + idcomponente + '">';
                    tablaPreguntasRespuestas += ' <thead>';
                    tablaPreguntasRespuestas += '     <tr>';
                    tablaPreguntasRespuestas += '         <th></th>';
                    tablaPreguntasRespuestas += '         <th>PREGUNTA</th>';
                    tablaPreguntasRespuestas += '         <th>RESPUESTA</th>';
                    tablaPreguntasRespuestas += '         <th></th>';
                    tablaPreguntasRespuestas += '     </tr>';
                    tablaPreguntasRespuestas += ' </thead>';
                    tablaPreguntasRespuestas += ' <tbody>';
                    for (var z = 0; z < datarespuestasPrimerNivel.length; z++) {
                        if (datarespuestasPrimerNivel[z].Hijos > 0) {
                            tablaPreguntasRespuestas += '<tr id="TieneHijos-' + datarespuestasPrimerNivel[z].RespuestaUPMId + '">';
                            tablaPreguntasRespuestas += "<td><a href='#'><i id='iconExpand-" + datarespuestasPrimerNivel[z].RespuestaUPMId + "' onClick='AbrirRespuestasSegundoNivel(" + datarespuestasPrimerNivel[z].RespuestaUPMId + "," + datarespuestasPrimerNivel[z].VariableId + "," + idLugar+"," + esUPM + "," + idvisita + ");' class='fa fa-plus text-navy'></i></a></td>";
                        } else {
                            tablaPreguntasRespuestas += '<tr>';
                            tablaPreguntasRespuestas += "<td>-</td>"
                        }

                        tablaPreguntasRespuestas += '  <td>' + datarespuestasPrimerNivel[z].Orden + '. ' + datarespuestasPrimerNivel[z].Pregunta + '</td>';
                        if (datarespuestasPrimerNivel[z].TipoControl === "Input") {
                            tablaPreguntasRespuestas += '  <td>' + datarespuestasPrimerNivel[z].Valor + '</td>';
                        }
                        else {
                            if ((datarespuestasPrimerNivel[z].Hijos > 0)) {
                                tablaPreguntasRespuestas += '  <td>-</td>';
                            }
                            else {
                                tablaPreguntasRespuestas += '  <td>' + datarespuestasPrimerNivel[z].Respuesta + '</td>';
                            }
                        }
                        tablaPreguntasRespuestas += '<td>-</td>'
                        tablaPreguntasRespuestas += '</tr>';
                    }

                    $("#PanelBody-" + idcomponente).append(tablaPreguntasRespuestas);
                }
            },
            complete: function () {
            },
            error: function (data) {
                swal("Error: " + data.responseText, "AGM", "error");
            }
        });
    }
}


function AbrirRespuestasSegundoNivel(idRespuesta, idVariable,idLugar, esupm, idvisita) {

    var params = new Object();
    var agregarPreguntasSegundoNivel = true;
    params.idVariable = idVariable;
    params.esUPM = esupm;
    params.idvisita = idvisita;
    params.idLugar = idLugar;
    params = JSON.stringify(params);

    for (var i = 0; i < contentPreguntasRespuestasNivel2.length; i++) {
        if (("tbl-" + idRespuesta) === contentPreguntasRespuestasNivel2[i]) {
            agregarPreguntasSegundoNivel = false;
        }
    }
    if (agregarPreguntasSegundoNivel) {
        contentPreguntasRespuestasNivel2.push("tbl-" + idRespuesta);
        $.ajax({
            type: "POST",
            url: "/Visitas/GetVariablesRespuestasSegundoYTercerNivel",
            data: params,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (datarespuestasSegundoNivel) {

                if (datarespuestasSegundoNivel.length > 0) {
                    var tablaPreguntasRespuestas = '';
                    tablaPreguntasRespuestas += "<tr class='expandItem' id='expandItem-" + idRespuesta + "'>";
                    tablaPreguntasRespuestas += "<td colspan='4'>";
                    tablaPreguntasRespuestas += '<table class="table table-striped table-bordered table-hover" id="tbl-' + idRespuesta + '">';
                    tablaPreguntasRespuestas += ' <thead>';
                    tablaPreguntasRespuestas += '     <tr>';
                    tablaPreguntasRespuestas += '         <th></th>';
                    tablaPreguntasRespuestas += '         <th>PREGUNTA</th>';
                    tablaPreguntasRespuestas += '         <th>RESPUESTA</th>';
                    tablaPreguntasRespuestas += '         <th></th>';
                    tablaPreguntasRespuestas += '     </tr>';
                    tablaPreguntasRespuestas += ' </thead>';
                    tablaPreguntasRespuestas += ' <tbody>';
                    tablaPreguntasRespuestas += ' </tr>';

                    for (var z = 0; z < datarespuestasSegundoNivel.length; z++) {
                        tablaPreguntasRespuestas += '<tr>';
                        if (datarespuestasSegundoNivel[z].Hijos > 0) {
                            tablaPreguntasRespuestas += '<tr id="TieneHijos-' + datarespuestasSegundoNivel[z].RespuestaUPMId + '">';
                            tablaPreguntasRespuestas += "<td><a href='#'><i id='iconExpand-" + datarespuestasSegundoNivel[z].RespuestaUPMId + "' onClick='AbrirRespuestasTercerNivel(" + datarespuestasSegundoNivel[z].RespuestaUPMId + "," + datarespuestasSegundoNivel[z].VariableId + "," + esupm + "," + idLugar+"," + idvisita + ");' class='fa fa-plus text-navy'></i></a></td>";
                        } else {
                            tablaPreguntasRespuestas += '<tr>';
                            tablaPreguntasRespuestas += "<td>-</td>"
                        }
                        tablaPreguntasRespuestas += '  <td>' + datarespuestasSegundoNivel[z].Orden + '. ' + datarespuestasSegundoNivel[z].Pregunta + '</td>';
                        if (datarespuestasSegundoNivel[z].TipoControl === "Input") {
                            tablaPreguntasRespuestas += '  <td>' + datarespuestasSegundoNivel[z].Valor + '</td>';
                        }
                        else {
                            tablaPreguntasRespuestas += '  <td>' + datarespuestasSegundoNivel[z].Respuesta + '</td>';
                        }
                        tablaPreguntasRespuestas += '<td>-</td>'
                    }
                    tablaPreguntasRespuestas += '</tr>';
                    $("#TieneHijos-" + idRespuesta).after(tablaPreguntasRespuestas);
                }
            },
            complete: function () {
            },
            error: function (data) {
                swal("Error: " + data.responseText, "AGM", "error");
            }
        });
    }

    var trItem = $("#expandItem-" + idRespuesta);
    var iconExpan = $("#iconExpand-" + idRespuesta);
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

function AbrirRespuestasTercerNivel(idRespuesta, idVariable, esupm,idLugar, idvisita) {

    var params = new Object();
    var agregarPreguntasTercerNivel = true;
    params.idVariable = idVariable;
    params.esUPM = esupm;
    params.idvisita = idvisita;
    params.idLugar = idLugar;
    params = JSON.stringify(params);

    for (var i = 0; i < contentPreguntasRespuestasNivel3.length; i++) {

        if (("tbl-" + idRespuesta) === contentPreguntasRespuestasNivel3[i]) {
            agregarPreguntasTercerNivel = false;
        }
    }

    if (agregarPreguntasTercerNivel) {

        contentPreguntasRespuestasNivel3.push("tbl-" + idRespuesta);
        $.ajax({
            type: "POST",
            url: "/Visitas/GetVariablesRespuestasSegundoYTercerNivel",
            data: params,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (datarespuestasTercerNivel) {

                if (datarespuestasTercerNivel.length > 0) {

                    var tablaPreguntasRespuestas = '';
                    tablaPreguntasRespuestas += "<tr class='expandItem' id='expandItem-" + idRespuesta + "'>";
                    tablaPreguntasRespuestas += "<td colspan='4'>";
                    tablaPreguntasRespuestas += '<table class="table table-striped table-bordered table-hover" id="tbl-' + idRespuesta + '">';
                    tablaPreguntasRespuestas += ' <thead>';
                    tablaPreguntasRespuestas += '     <tr>';
                    tablaPreguntasRespuestas += '         <th></th>';
                    tablaPreguntasRespuestas += '         <th>PREGUNTA</th>';
                    tablaPreguntasRespuestas += '         <th>RESPUESTA</th>';
                    tablaPreguntasRespuestas += '         <th></th>';
                    tablaPreguntasRespuestas += '     </tr>';
                    tablaPreguntasRespuestas += ' </thead>';
                    tablaPreguntasRespuestas += ' <tbody>';
                    tablaPreguntasRespuestas += ' </tr>';

                    for (var z = 0; z < datarespuestasTercerNivel.length; z++) {

                      

                        tablaPreguntasRespuestas += '<tr>';

                        if (idRespuesta === datarespuestasTercerNivel[z].ParentRespuestaId) {

                            if (datarespuestasTercerNivel[z].Hijos > 0) {

                                tablaPreguntasRespuestas += "<td><a href='#'><i id='iconExpand-" + datarespuestasTercerNivel[z].RespuestaUPMId + "' onClick='AbrirRespuestasSegundoNivel(" + datarespuestasTercerNivel[z].RespuestaUPMId + "," + datarespuestasTercerNivel[z].VariableId + ","+idLugar+"," + esUPM + "," + idvisita + ");' class='fa fa-plus text-navy'></i></a></td>"

                            } else {
                                tablaPreguntasRespuestas += "<td>-</td>"
                            }

                            tablaPreguntasRespuestas += '  <td>' + datarespuestasTercerNivel[z].Orden + '. ' + datarespuestasTercerNivel[z].Pregunta + '</td>';

                            if (datarespuestasTercerNivel[z].TipoControl === "Input") {

                                tablaPreguntasRespuestas += '  <td>' + datarespuestasTercerNivel[z].Valor + '</td>';
                            }
                            else {

                                tablaPreguntasRespuestas += '  <td>' + datarespuestasTercerNivel[z].Respuesta + '</td>';

                            }
                            tablaPreguntasRespuestas += '<td>-</td>'
                        }


                     
                    }

                    tablaPreguntasRespuestas += '</tr>';

                    $("#TieneHijos-" + idRespuesta).after(tablaPreguntasRespuestas);
                }
            },
            complete: function () {
            },
            error: function (data) {
                swal("Error: " + data.responseText, "AGM", "error");
            }
        });


    }

    var trItem = $("#expandItem-" + idRespuesta);
    var iconExpan = $("#iconExpand-" + idRespuesta);

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
        url: "/Visitas/GetRespuestasUPMxVisita",
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
                                htmlString += "<td>-</td>"
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




