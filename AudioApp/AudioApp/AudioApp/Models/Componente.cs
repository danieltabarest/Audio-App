using System;
using System.Collections.Generic;

namespace AudioApp.Models
{
    public class Componente : EntidadBase
    {

        public Componente(string iD, int aspectoId, short orden, string tipo, int componenteId, string descripcion, int estadoId)
        {
            ID = iD;
            AspectoId = aspectoId;
            Orden = orden;
            Tipo = tipo;
            ComponenteId = componenteId;
            Descripcion = descripcion;
            EstadoId = estadoId;          
        }

        public int ComponenteId { get; set; }
        public short Orden { get; set; }

        public int AspectoId { get; set; }
        public string Tipo { get; set; }
        public string Descripcion { get; set; }

        public int TotalVariables { get; set; }

        public int TotalVariablesRequeridas { get; set; }
        public string TotalVariablesMensaje { get { return string.Format("{0} Variables de {1}", VariablesOK, TotalVariables); } }
        public string TotalRequeridasMensaje { get { return string.Format("{0} Variables Requeridas de {1}", VariablesRequeridasOK, TotalVariablesRequeridas); } }
        public int VariablesPendiente { get; set; }
        public int VariablesOK { get; set; }
        public int VariablesRequeridasOK { get; set; }
        public string ImageSource
        {
            get
            {
                 if (VariablesRequeridasOK == 0 && VariablesPendiente !=0)
                {
                    return "ic_next.png";
                }
                else if (VariablesPendiente == 0)
                {
                    return "ic_ok.png";
                }
                else
                {
                    return "ic_progress.png";
                }
            }

        }

    }
}
