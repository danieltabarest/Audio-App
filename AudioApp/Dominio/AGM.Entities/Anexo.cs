using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace AGM.Entities
{
    [Table("Anexos", Schema = "dbo")]
    public class Anexo : EntidadBase
    {
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        [Column("idAnexo")]
        public int AnexoId { get; set; }  
        public string URL { get; set; }
        public string CodNivel { get; set; }
        [Column("idVisita")]
        public int VisitaId { get; set; }        
        [Column("idUPM")]
        public int? UPMId { get; set; }
        [Column("idLugarTrabajo")]
        public int? LugarTrabajoId { get; set; }
        public string Descripcion { get; set; }
        public string Tipo { get; set; }


    }
}
