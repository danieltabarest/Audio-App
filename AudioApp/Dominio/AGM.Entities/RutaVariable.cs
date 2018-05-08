using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AGM.Entities
{
    [Table("RutaVariables", Schema = "AGM")]
    public class RutaVariable : EntidadBase
    {
       
        [Column("idRuta")]
        public int RutaId { get; set; }
        [Column("idVariable")]
        public int VariableId { get; set; }

        [Column("idOpcionRespuesta")]
        public int OpcionRespuestaId { get; set; }
        public virtual Ruta Ruta { get; set; }
        public virtual Variable Variable { get; set; }
    }
}
