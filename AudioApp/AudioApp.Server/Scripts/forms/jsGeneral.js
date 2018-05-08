$(document).ready(function () {
    GetNombresApellidos();
});

function GetNombresApellidos() {
    
    $.ajax({
        type: "GET",
        url: "/Login/GetDatosUsuario",
        data: {},
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {            
            if (data != null){
                $("#lblNombresCompletos").text(data.NombresApellidos);
                $("#lblPerfil").text(data.Perfil);
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