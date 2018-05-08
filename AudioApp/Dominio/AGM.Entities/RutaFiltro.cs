using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AGM.Entities
{
    [Table("RutaFiltros", Schema = "AGM")]
    public class RutaFiltro : EntidadBase
    {
        [Key]
        [Column("idRutaFiltro")]
        public int RutaFiltroId { get; set; }
        [Column("idRuta")]
        public int RutaId { get; set; }
        [Column("idVariable")]
        public int VariableId { get; set; }
        public string Valor { get; set; }
        [Column("idOpcionRespuesta")]
        public int OpcionRespuestaId { get; set; }
        public virtual OpcionRespuesta OpcionRespuesta { get; set; }        
        public virtual Ruta Ruta { get; set; }
        public virtual Variable Variable { get; set; }
    }
}
