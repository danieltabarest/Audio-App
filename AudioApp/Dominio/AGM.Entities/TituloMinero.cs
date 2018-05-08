using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AGM.Entities
{
    [Table("TitulosMineros", Schema = "AGM")]
    public class TituloMinero : EntidadBase
    {
        [Key]
        [Column("idTituloMinero")]
        public int TituloMineroId { get; set; }
        public string Placa { get; set; }
    }
}
