using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AudioApp.Models
{
    public static class Comun
    {
        public enum Perfiles
        {
            TECNICO = 1,
            AMBIENTAL = 2,
            JURIDICO = 3,
            ECONOMICO = 4,
            SST = 5,
            SOCIAL = 6
        }
        public enum TipoVariables
        {
            Variable,
            SubComponente,
            VariableSub,
            VariableExt,
            VariableList,
            Filtro


        }

        public enum TipoRespuesta
        {
            Departamentos,
            Paises,
            Municipios
        }
        

        public enum OpcionRespuesta {
            SI,
            NO,
            NA,
            NS,
            NR
        }
        public enum TipoControl
        {
            CheckPadre,
            Checkbox,
            CheckboxExt,
            List,
            Label,
            Input,
            ListOpciones,
            LabelExt

        }

        public enum Roles
        {

            Administrador = 1,
            LiderProyecto = 2,
            LiderCampo = 3,
            Profesional =4


        };
        public enum Respuesta
        {

            Pendiente = 1,
            OK = 2,
            APLICA =3,
            NA = -1,
            AUTO=-2


        };

        public enum Registro
        {

            Activo = 1,
            Inactivo = 0,
            Add = 11,
            Find=12

        };
        public enum VisitaEstados
        {
            Filtro = 3,
            Iniciada = 4,
            Completada = 5,
            Cerrada = 6,
            Sincronizada = 7,
            Correcion =8

        };
        public enum TipoAspectos
        {           
            FiltroUPM,
            FiltroLugarTrabajo,
            UPM,
            LugarTrabajo
        };
        public enum VisitaLTEstados
        {
            SinIniciar = 2,
            Filtro = 3,
            Iniciada = 4,
            Completada = 5,
            Cerrada = 6,
            Sincronizada = 7,
            Correcion = 8

        };

    }
}
