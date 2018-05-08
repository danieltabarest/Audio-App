$(document).ready(function () {  
    GetAspectos();
    $("#btnCargar").click(LoadComponentes);
});



function GetAspectos() {

    var modeloId = $("#cboModelos option:selected").val();
    if (modeloId != null) {
       var params_ = JSON.stringify({ ModeloId: modeloId });

        $.ajax({
            type: "POST",
            url: "/Variables/GetAspectosXModelo",
            data: params_,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                if (data != null) {
                     var cboAspectos = $("#cboAspectos");
                        cboAspectos.html("");
                        for (var x = 0; x < data.length; x++) {
                            cboAspectos.append("<option value='" + data[x].AspectoId + "'>" + data[x].Tipo + " - " + data[x].Descripcion + "</option>");
                       }
                }
                else {
                    swal('Error!', 'Ha ocurrido un inconveniente.' + data, 'error');
                }
               
            },
            complete: function () {
                //GetProyectos();
            },
            error: function (data) {
                //alert("Error: " + data.responseText);
                swal('Error!', 'Ha ocurrido un inconveniente.' + data.responseText, 'error');
            } //fin error
        });  
    }
}

function LoadComponentes() {


    var aspectoId = $("#cboAspectos option:selected").val();
    if (aspectoId != null) {
        var params_ = JSON.stringify({ AspectoId: aspectoId });

        $.ajax({
            type: "POST",
            url: "/Variables/GetComponentesXAspecto",
            data: params_,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                if (data != null) {
                        var panelComponentes = $("#PanelComponentes");
                    var htmlString = "";
                    panelComponentes.html("");
                    for (var x = 0; x < data.length; x++) {
                        htmlString = htmlString + "<div class='panel panel-primary'>";                 
                        htmlString = htmlString + "<div class='panel-heading'>";
                        htmlString = htmlString + "<h5 class='panel-title'>";
                        htmlString = htmlString + "<a data-toggle='collapse' data-parent='#PanelComponentes' id='C" + data[x].ComponenteId +"' href='#collapse" + data[x].ComponenteId + "'>"+ data[x].Orden +" - "+ data[x].Descripcion+"</a>";
                        htmlString = htmlString + "</h5><span> </span>";
                        htmlString = htmlString + "</div>";
                        htmlString = htmlString + "<div id='collapse" + data[x].ComponenteId +"' class='panel-collapse collapse'>";
                        htmlString = htmlString + "<div class='panel-body'>";
                        
                        var variables = data[x].Variables;

                        var variablesPri = Enumerable.From(variables)
                            .Where(function (x) { return x.Tipo == 'Variable' || x.Tipo == 'SubComponente' })
                            .ToArray();

                        var variablesSec = Enumerable.From(variables)
                            .Where(function (x) { return x.Tipo == 'VariableSub' || x.Tipo == 'VariableList' })
                            .ToArray();

                        var variablesTer = Enumerable.From(variables)
                            .Where(function (x) { return x.Tipo == 'VariableExt'})
                            .ToArray();

                        htmlString = htmlString + "<div class='panel-group' id='PanelVariablesC" + data[x].ComponenteId +"'>"; 
                        

                        for (var y = 0; y < variablesPri.length; y++) {                     
                            htmlString = htmlString + "<div class='panel panel-default'>";
                            htmlString = htmlString + "<div class='panel-heading'>";
                            htmlString = htmlString + "<h5 class='panel-title'>";
                            htmlString = htmlString + "<a data-toggle='collapse' data-parent='#PanelVariablesC" + data[x].ComponenteId +"' id='Var" + variablesPri[y].VariableId + "' href='#collapseVar" + variablesPri[y].VariableId + "'>" + variablesPri[y].Orden + " - " + variablesPri[y].Descripcion + "</a>";
                            htmlString = htmlString + "</h5><span> </span>";
                            htmlString = htmlString + "</div>";
                            htmlString = htmlString + "<div id='collapseVar" + variablesPri[y].VariableId + "' class='panel-collapse collapse'>";
                            htmlString = htmlString + "<div class='panel-body'>";
                            htmlString = htmlString + "<div class='row'>";
                            htmlString = htmlString + "<div class='col-md-12'>";  
                                        htmlString = htmlString + "<div class='col-md-6'>";  
                                                htmlString = htmlString + "<div class='form-group'>";
                                                htmlString = htmlString + " <label class='col-md-4 control-label text-right'>VariableId:</label>";
                                                                htmlString = htmlString + "<div class='col-md-8'>";
                                                                htmlString = htmlString + "<span class='badge badge-success p-xxs' id='idVar" + variablesPri[y].VariableId + "'>" + variablesPri[y].VariableId + "</span>";
                                                                htmlString = htmlString + "</div>";
                                                htmlString = htmlString + "</div>";
                                                htmlString = htmlString + "<div class='form-group'>";
                                                htmlString = htmlString + " <label class='col-md-4 control-label text-right'>Descripcion:</label>";
                                                                htmlString = htmlString + "<div class='col-md-8'>";
                                                                htmlString = htmlString + "<textarea class='form-control' id='descripcion" + variablesPri[y].VariableId + "'>" + variablesPri[y].Descripcion + "</textarea>";
                                                                htmlString = htmlString + "</div>";
                                                htmlString = htmlString + "</div>";
                                                htmlString = htmlString + "<div class='form-group'>";
                                                htmlString = htmlString + " <label class='col-md-4 control-label text-right'>Longitud:</label>";
                                                                htmlString = htmlString + "<div class='col-md-8'>";
                                                                htmlString = htmlString + "<input type='number' class='form-control' value='" + variablesPri[y].Longitud + "' id='longitud" + variablesPri[y].VariableId + "'/>";
                                                                htmlString = htmlString + "</div>";
                                                 htmlString = htmlString + "</div>";
                                                 htmlString = htmlString + "<div class='form-group'>";
                                                 htmlString = htmlString + " <label class='col-md-4 control-label text-right'>Requerido:</label>";
                                                                htmlString = htmlString + "<div class='col-md-8'>";
                                                                htmlString = htmlString + "<input type='checkbox'  value='' " + (variablesPri[y].Requerido == "1" ? "checked=''" : "") + ">";
                                                                htmlString = htmlString + "</div>";
                                                htmlString = htmlString + "</div>";
                                       htmlString = htmlString + "</div>";
                                       htmlString = htmlString + "<div class='col-md-6'>";  
                                               htmlString = htmlString + "<div class='form-group'>";
                                               htmlString = htmlString + "<label class='col-md-4 control-label text-right'>Tipo:</label>";
                                                                htmlString = htmlString + "<div class='col-md-8'>";
                                                                htmlString = htmlString + "<input type='text' class='form-control' value='" + variablesPri[y].Tipo + "' id='tipo" + variablesPri[y].VariableId + "'/>";
                                                                htmlString = htmlString + "</div>";
                                                htmlString = htmlString + "</div>";                                              
                                                htmlString = htmlString + "<div class='form-group'>";
                                                htmlString = htmlString + " <label class='col-md-4 control-label text-right'>Tipo Respuesta:</label>";
                                                                htmlString = htmlString + "<div class='col-md-8'>";
                                                                htmlString = htmlString + "<input type='text' class='form-control' value='" + variablesPri[y].TipoRespuesta + "' id='tipoRespuesta" + variablesPri[y].VariableId + "'/>";
                                                                htmlString = htmlString + "</div>";
                                               htmlString = htmlString + "</div>";
                                               htmlString = htmlString + "<div class='form-group'>";
                                               htmlString = htmlString + " <label class='col-md-4 control-label text-right'>Tipo Control:</label>";
                                                                htmlString = htmlString + "<div class='col-md-8'>";
                                                                htmlString = htmlString + "<input type='text' class='form-control' value='" + variablesPri[y].TipoControl + "' id='tipoControl" + variablesPri[y].VariableId + "'/>";
                                                                htmlString = htmlString + "</div>";
                                               htmlString = htmlString + "</div>";
                                               htmlString = htmlString + "<div class='form-group'>";
                                               htmlString = htmlString + " <label class='col-md-4 control-label text-right'>Tipo Dato:</label>";
                                                                htmlString = htmlString + "<div class='col-md-8'>";
                                                                htmlString = htmlString + "<input type='text' class='form-control' value='" + variablesPri[y].TipoDato + "' id='tipoDato" + variablesPri[y].VariableId + "'/>";
                                                                htmlString = htmlString + "</div>";
                                              htmlString = htmlString + "</div>";
                                         htmlString = htmlString + "</div>" //Close col-md-6;
                            htmlString = htmlString + " </div>";  //Close col-md-12
                            htmlString = htmlString + " </div>";  //Close row
                            if (variablesPri[y].Hijos > 0) {
                                htmlString = htmlString + "<div class='row'>";
                                htmlString = htmlString + "<div class='col-md-12'>";
                                htmlString = htmlString + "<div class='panel-group' id='PanelVariablesSec" + variablesPri[y].VariableId + "'>";
                                variablesSec = Enumerable.From(variablesSec)
                                    .Where(function (x) { return x.ParentId == variablesPri[y].VariableId })
                                    .ToArray();

                                var htmlStringSec = LoadVariablesSec(variablesSec);
                                htmlString = htmlString + htmlStringSec;

                                htmlString = htmlString + "</div>"; //Close PanelGroup VariablesSec
                                htmlString = htmlString + " </div>";  //Close col-md-12
                                htmlString = htmlString + " </div>";  //Close row
                                

                            }

                            htmlString = htmlString + "</div>"; //Close PanelBody
                            htmlString = htmlString + "</div >"; //Close PanelCollapse
                            htmlString = htmlString + "</div >"; //Close Panel Default

                        }

                        htmlString = htmlString + "</div>"; //Close PanelGroup Componentes

                        htmlString = htmlString + "</div>"; //Close PanelBody
                        htmlString = htmlString + "</div >"; //Close PanelCollapse
                        htmlString = htmlString + "</div >"; //Close PanelPrimary
                        panelComponentes.append(htmlString);
                        htmlString = "";
                    }
                }
                else {
                    swal('Error!', 'Ha ocurrido un inconveniente.' + data, 'error');
                }

            },
            complete: function () {
                //GetProyectos();
            },
            error: function (data) {
                //alert("Error: " + data.responseText);
                swal('Error!', 'Ha ocurrido un inconveniente.' + data.responseText, 'error');
            } //fin error
        });
    }
}


function LoadVariablesSec(variablesSec)
{

    var htmlString = "";
    
        for (var a = 0; a < variablesSec.length; a++) {

            htmlString = htmlString + "<div class='panel panel-success'>";
            htmlString = htmlString + "<div class='panel-heading'>";
            htmlString = htmlString + "<h5 class='panel-title'>";
            htmlString = htmlString + "<a data-toggle='collapse' data-parent='#PanelVariablesSec" + variablesSec[a].ParentId + "' id='VarSec" + variablesSec[a].VariableId + "' href='#collapseVarSec" + variablesSec[a].VariableId + "'>" + variablesSec[a].Orden + " - " + variablesSec[a].Descripcion + "</a>";
            htmlString = htmlString + "</h5><span> </span>";
            htmlString = htmlString + "</div>";
            htmlString = htmlString + "<div id='collapseVarSec" + variablesSec[a].VariableId + "' class='panel-collapse collapse'>";
            htmlString = htmlString + "<div class='panel-body'>";
            htmlString = htmlString + "<div class='row'>";
            htmlString = htmlString + "<div class='col-md-12'>";
                    htmlString = htmlString + "<div class='col-md-6'>";
                            htmlString = htmlString + "<div class='form-group'>";
                                    htmlString = htmlString + " <label class='col-md-4 control-label text-right'>VariableId:</label>";
                                    htmlString = htmlString + "<div class='col-md-8'>";
                                    htmlString = htmlString + "<span class='badge badge-success p-xxs' id='idVarSec" + variablesSec[a].VariableId + "'>" + variablesSec[a].VariableId + "</span>";
                                    htmlString = htmlString + "</div>";
                            htmlString = htmlString + "</div>";
                            htmlString = htmlString + "<div class='form-group'>";
                                    htmlString = htmlString + " <label class='col-md-4 control-label text-right'>Descripcion:</label>";
                                    htmlString = htmlString + "<div class='col-md-8'>";
                                    htmlString = htmlString + "<textarea class='form-control' id='descripcion" + variablesSec[a].VariableId + "'>" + variablesSec[a].Descripcion + "</textarea>";
                                    htmlString = htmlString + "</div>";
                            htmlString = htmlString + "</div>";
                            htmlString = htmlString + "<div class='form-group'>";
                                    htmlString = htmlString + " <label class='col-md-4 control-label text-right'>Longitud:</label>";
                                    htmlString = htmlString + "<div class='col-md-8'>";
                                    htmlString = htmlString + "<input type='number' class='form-control' value='" + variablesSec[a].Longitud + "' id='longitud" + variablesSec[a].VariableId + "'/>";
                                    htmlString = htmlString + "</div>";
                            htmlString = htmlString + "</div>";
                            htmlString = htmlString + "<div class='form-group'>";
                                        htmlString = htmlString + " <label class='col-md-4 control-label text-right'>Requerido:</label>";
                                        htmlString = htmlString + "<div class='col-md-8'>";
                                        htmlString = htmlString + "<input type='checkbox'  value='' " + (variablesSec[a].Requerido == "1" ? "checked=''" : "") + "/>"
                                        htmlString = htmlString + "</div>";
                            htmlString = htmlString + "</div>";
                    htmlString = htmlString + "</div>";
                    htmlString = htmlString + "<div class='col-md-6'>";
                            htmlString = htmlString + "<div class='form-group'>";
                                        htmlString = htmlString + "<label class='col-md-4 control-label text-right'>Tipo:</label>";
                                        htmlString = htmlString + "<div class='col-md-8'>";
                                        htmlString = htmlString + "<input type='text' class='form-control' value='" + variablesSec[a].Tipo + "' id='tipo" + variablesSec[a].VariableId + "'/>";
                                        htmlString = htmlString + "</div>";
                            htmlString = htmlString + "</div>";
                        htmlString = htmlString + "<div class='form-group'>";
                                    htmlString = htmlString + " <label class='col-md-4 control-label text-right'>Tipo Respuesta:</label>";
                                    htmlString = htmlString + "<div class='col-md-8'>";
                                    htmlString = htmlString + "<input type='text' class='form-control' value='" + variablesSec[a].TipoRespuesta + "' id='tipoRespuesta" + variablesSec[a].VariableId + "'/>";
                                    htmlString = htmlString + "</div>";
                        htmlString = htmlString + "</div>";
                        htmlString = htmlString + "<div class='form-group'>";
                                    htmlString = htmlString + " <label class='col-md-4 control-label text-right'>Tipo Control:</label>";
                                    htmlString = htmlString + "<div class='col-md-8'>";
                                    htmlString = htmlString + "<input type='text' class='form-control' value='" + variablesSec[a].TipoControl + "' id='tipoControl" + variablesSec[a].VariableId + "'/>";
                                    htmlString = htmlString + "</div>";
                        htmlString = htmlString + "</div>";
                        htmlString = htmlString + "<div class='form-group'>";
                                    htmlString = htmlString + " <label class='col-md-4 control-label text-right'>Tipo Dato:</label>";
                                    htmlString = htmlString + "<div class='col-md-8'>";
                                    htmlString = htmlString + "<input type='text' class='form-control' value='" + variablesSec[a].TipoDato + "' id='tipoDato" + variablesSec[a].VariableId + "'/>";
                                    htmlString = htmlString + "</div>";
                        htmlString = htmlString + "</div>";
            htmlString = htmlString + "</div>" //Close col-md-6;
            htmlString = htmlString + " </div>";  //Close col-md-12
            htmlString = htmlString + " </div>"; //close row
            htmlString = htmlString + "</div>"; //Close PanelBody
            htmlString = htmlString + "</div >"; //Close PanelCollapse
            htmlString = htmlString + "</div >"; //Close PanelSuccess
        }

   


    return htmlString;
}