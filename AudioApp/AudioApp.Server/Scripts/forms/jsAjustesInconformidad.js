var AjustesInconformidad;
var otAjustesInConformidad;
var dataingridAjustesInc;

$(document).ready(function () {
    ConfigTableAjustesInconformidad();
    GetInconformidad();
});

function ConfigTableAjustesInconformidad() {
    
    var dtData = []; otAjustesInConformidad = $('#tblAjustesInconformidad').dataTable({
        'aaData': dtData,
        "sPaginationType": "full_numbers",
        "sPageButton": "paginate_button",
        "sPageButtonActive": "paginate_active",
        "sPageButtonStaticDisabled": "paginate_buttond",
        "iDisplayLength": 10,
        "bAutoWidth": false,
        "aoColumns": [{ "sWidth": "5%" }, { "sWidth": "15%" }, { "sWidth": "15%" }, { "sWidth": "10%" }, { "sWidth": "35%" }, { "sWidth": "35%" }, { "sWidth": "35%" }],
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

function GetInconformidad() {
    var seleccion;
    $.ajax({
        type: "POST",
        url: "/AjustesInconformidad/GetAjustesInconformidad",
        data: {},
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            otAjustesInConformidad.fnClearTable();
            dataingridAjustesInc = data;
            for (var x = 0; x < data.length; x++) {
                var Actions = ' <a href="#" onclick="LoadAjusteInconformidad(' + x + ')"><i class="fa fa-edit fa-2x text-navy"></i></a>';
                otAjustesInConformidad.fnAddData([data[x].IdInconformidadAspectos, data[x].Proyectos, data[x].UPM, data[x].CodigoVisita, data[x].Variable, data[x].RespuestaUPM, Actions]);
            }
        },
        complete: function () {
        },
        error: function (data) {
            swal("Error: " + data.responseText, "AGM", "error");
        } //fin error
    });
}

function LoadAjusteInconformidad(x) {
    //alert(dataingridAjustesInc[x].Proyectos);
    //console.log(dataingridAjustesInc[x].Variable);

    $("#txtInconformidad").val(dataingridAjustesInc[x].Inconformidad);
    $("#txtidAspecto").val(dataingridAjustesInc[x].idAspectos);
    $("#txtidVisita").val(dataingridAjustesInc[x].idVisita);

    var params = new Object();
    params.idVariable = dataingridAjustesInc[x].idVariable;
    params.idComponente = dataingridAjustesInc[x].idComponente;

    params = JSON.stringify(params);

    var shtml = '';
    var shtmlcomplet = '';
    $("#CtrlVariables").html('');

    $("#txtidVariable").val(dataingridAjustesInc[x].idVariable);
    $("#txtidComponente").val(dataingridAjustesInc[x].idComponente);

    $.ajax({
        type: "POST",
        url: "/AjustesInconformidad/GetComponentesPorVariables",
        data: params,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var htmlString = "";
            for (var x = 0; x < data.length; x++) {
                //debugger;
                if (!shtml.includes(data[x].Descripcion)) {
                    shtml += '  <label>' + data[x].Descripcion + ':</label><br />';
                }
                
                switch (data[x].TipoControl) {
                    case "ListOpciones":
                        break;
                    case "LabelOpciones":
                        break;
                    case "Input":

                        shtml += '<div class="col-lg-12">';
                        shtml += '    <div class="form-group">';
                        shtml += '        <label>' + data[x].OpcionRespuesta + ':</label><br />';
                        shtml += '        <input id="txt' + data[x].idVariable + '" type="text" class="form-control" maxlength="' + data[x].Longitud + '">';
                        shtml += '    </div>';
                        shtml += '</div > ';

                        break;
                    case "Checkbox":

                        shtml += '<div class="col-lg-12">';
                        shtml += '    <div class="form-group">';
                        shtml += '        <label>' + data[x].OpcionRespuesta + ':</label><br />';
                        shtml += '        <input type="radio" name="' + data[x].Descripcion + '" value="' + data[x].idOpcionRespuesta + '" onclick="FillFields(' + data[x].idOpcionRespuesta + ');">';
                        //shtml += '        <input type="checkbox" name="chk' + data[x].idVariable + '">';
                        shtml += '    </div>';
                        shtml += '</div > ';
                        break;
                    case "List":
                        //shtml += '<div class="col-lg-12"><div class="form-group"><div class="form-group">';
                        ////shtml += '  <label>' + data[x].Descripcion + ':</label><br />';
                        //shtml += '  <label>' + data[x].OpcionRespuesta + ':</label>';
                        //shtml += '  <select class="form-control m-b"></select>';
                        //shtml += '</div></div>';

                        shtml += '<div class="col-lg-12">';
                        shtml += '    <div class="form-group">';
                        shtml += '        <label>' + data[x].OpcionRespuesta + ':</label><br />';
                        shtml += '        <select class="form-control m-b" name="cbo' + data[x].idVariable + '"></select>';
                        shtml += '    </div>';
                        shtml += '</div > ';

                        break;
                    case "LabelExt":
                        break;
                    case "CheckPadre":
                        break;
                    case "CheckboxExt":
                        break;
                }
            }

            shtmlcomplet += shtml;
            $("#CtrlVariables").append(shtmlcomplet);

        },
        complete: function () {
        },
        error: function (data) {
            swal("Error: " + data.responseText, "AGM", "error");
        } //fin error
    });
    $('#ModalInconformidad').modal('show');

}

function FillFields(result) {
    $("#txtidOpcionRespuesta").val(result);
}

function SetCambioRespuestaUPM() {

    var iParam = JSON.stringify({ idVisita: $("#txtidVisita").val(), idRespuestaUPM: $("#txtidOpcionRespuesta").val() });

    $.ajax({
        type: "POST",
        url: "/AjustesInconformidad/SetCambioRespuestaUPM",
        data: iParam,
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
}