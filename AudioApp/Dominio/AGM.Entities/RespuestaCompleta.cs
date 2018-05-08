using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AGM.Entities
{
    public class RespuestaUPMCompleta
    {
        public int VariableId { get; set; }
        public string Pregunta { get; set; }
        public string Respuesta { get; set; }

        public int ComponenteId { get; set; }

        public int Hijos { get; set; }
        public short Orden { get; set; }
        public string TipoControl { get; set; }
        public string Valor { get; set; }
        public int RespuestaUPMId { get; set; }

        public int RespuestaLugarTrabajoId { get; set; }

        public int? ParentId { get; set; }

        public int VisitaId { get; set; }

        public int OpcionRespuestaId { get; set; }

        public int? ParentRespuestaId { get; set; }

    }
}
