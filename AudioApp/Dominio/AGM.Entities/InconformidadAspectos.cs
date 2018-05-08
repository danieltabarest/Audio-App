using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AGM.Entities
{
    [Table("InconformidadAspectos", Schema = "AGM")]
    public class InconformidadAspectos : EntidadBase
    {
        [Key]        
        public int IdInconformidadAspectos { get; set; }
        [Column("idProyecto")]
        public int ProyectoId { get; set; }
        [Column("idUPM")]
        public int UPMId { get; set; }
        [Column("idVisita")]
        public int VisitaId { get; set; }
        [Column("idVariable")]
        public int VariableId { get; set; }
        [Column("idRespuesta")]
        public int RespuestaId { get; set; }
        [Column("idAspecto")]
        public int AspectoId { get; set; }
        [Column("idLugarTrabajo")]
        public int LugarTrabajoId { get; set; }
        public string Observacion { get; set; }
    }
}
