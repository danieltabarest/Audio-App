using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AGM.Entities
{
    [Table("SincronizacionTablas", Schema = "AGM")]
    public class SincronizacionTabla : EntidadBase
    {

        [Key]
        [Column("idSincronizacionTabla")]
        public int SincronizacionTablaId { get; set; }
        public string URL { get; set; }
        public string Tipo { get; set; }
        public string Entidad { get; set; }
        public int Orden { get; set; }


    }
}

