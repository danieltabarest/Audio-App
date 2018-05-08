using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AGM.Entities
{
    [Table("RespuestaUPM", Schema = "AGM")]
    public class RespuestaUPM : EntidadBase
    {
        [Key]
        [Column("idRespuestaUPM")]
        public int RespuestaUPMId { get; set; }

        [Column("idRespuestaParent")]
        public int? RespuestaParentId { get; set; }
        [Column("idVisita")]
        public int VisitaId { get; set; }        
        [Column("idAspecto")]
        public int AspectoId { get; set; }
        [Column("idUPM")]
        public int UPMId { get; set; }
        [Column("idVariable")]
        public int VariableId { get; set; }
        public string Valor { get; set; }
        [Column("idOpcionRespuesta")]
        public int OpcionRespuestaId { get; set; }
        public string Observaciones { get; set; }
        public string CodigoVisita { get; set; }

        public virtual UPM UPM { get; set; }        
        public virtual Visita Visita { get; set; }
    }
}
