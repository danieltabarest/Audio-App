using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AGM.Entities
{
   public  static class Comun
    {

        public enum TipoEstados
        {
            Registro,
            Visita
        }
        public enum EstadoRegistro
        {
            Activo = 1,
            Inactivo = 0,
            Add = 2,
            Find =3
        }

        public enum Perfiles
        {
            TECNICO = 1,
            AMBIENTAL = 2,
            JURIDICO = 3,
            ECONOMICO = 4,
            SST = 5,
            SOCIAL = 6
        }

        public enum Roles
        {

            Administrador = 1,
            LiderProyecto = 3,
            LiderCampo = 6,
            Profesional = 4,
            Auditor = 7

        };

        public enum VariableEstados
        {
Organizada=10
        }
        public enum VisitaEstados
        {
            Filtro = 3,
            Iniciada = 4,
            Completada = 5,
            Cerrada = 6,
            Sincronizada = 7,
            Correcion = 8,
            Aprobada = 13,
            Solucionada = 15            
        };
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


        public enum OpcionRespuesta
        {
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
    }
}
