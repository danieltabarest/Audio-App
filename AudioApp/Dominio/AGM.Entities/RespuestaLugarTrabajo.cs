using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AGM.Entities
{
    [Table("RespuestaLugarTrabajo", Schema = "AGM")]
    public class RespuestaLugarTrabajo : EntidadBase
    {    
        [Key]
        [Column("idRespuestaLugarTrabajo")]
        public int RespuestaLugarTrabajoId { get; set; }

        [Column("idRespuestaParent")]
        public int? RespuestaParentId { get; set; }

        [Column("idVisita")]
        public int VisitaId { get; set; }        
        [Column("idLugarTrabajo")]
        public int? LugarTrabajoId { get; set; }

        [Column("idAspecto")]
        public int AspectoId { get; set; }

        [Column("idVariable")]
        public int VariableId { get; set; }
        public string Valor { get; set; }
        [Column("idOpcionRespuesta")]
        public int OpcionRespuestaId { get; set; }
        public string CodigoVisita { get; set; }

        public string Observaciones { get; set; }
        

        #region Entidades        
        public virtual LugarTrabajo LugarTrabajo { get; set; }
        public virtual Visita Visita { get; set; }        
        
        #endregion



    }
}
