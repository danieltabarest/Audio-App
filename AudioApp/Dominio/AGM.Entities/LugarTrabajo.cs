using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AGM.Entities
{
    [Table("LugaresTrabajo", Schema = "AGM")]
    public class LugarTrabajo : EntidadBase
    {

        [Key]
        [Column("idLugarTrabajo")]
        public int? LugarTrabajoId { get; set; }
        public string Codigo { get; set; }
        [Column("idVisita")]
        public int VisitaId { get; set; }
        [Column("idUPM")]
        public int UPMId { get; set; }
        [Column("idRuta")]
        public int RutaId { get; set; }
        public short NumLugar { get; set; }
        [Column("idTipoLugar")]
        public int TipoLugarId { get; set; }
        public string Nombre { get; set; }
        [Column("idEtapa")]
        public int EtapaId { get; set; }
        [Column("idMineral")]
        public int? MineralId { get; set; }
        public decimal Latitude { get; set; }
        public decimal Longitude { get; set; }
        public decimal Altitude { get; set; }
        [Column("idSistemaExplotacion")]
        public int SistemaExplotacionId { get; set; }
        public string CodigoVisita { get; set; }

        //public virtual OpcionRespuesta OpcionRespuesta { get; set; }
        //public virtual Mineral Mineral { get; set; }
        public virtual UPM UPM { get; set; }
        public virtual Visita Visita { get; set; }

        public virtual IEnumerable<Anexo> Anexos { get; set; }
        public virtual IEnumerable<RespuestaLugarTrabajo> RespuestasLugarTrabajo { get; set; }
    }


}
