using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AGM.Entities
{
    [Table("UPMs", Schema = "AGM")]
    public class UPM:EntidadBase
    {
        [Key]
        [Column("idUPM")]
        public int UPMId { get; set; }

        [Column("idTituloMinero")]
        public int? TituloMineroId { get; set; }
        public string Codigo { get; set; }
        public string Nombre { get; set; }
        public string Vereda { get; set; }
        [Column("idMunicipio")]
        public int MunicipioId { get; set; }

        public short NumVisitas { get; set; }
              

    }
}
