using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AGM.Entities
{
    [Table("Variables", Schema = "AGM")]
    public class Variable: EntidadBase
    {
        [Key]
        [Column("idVariable")]
        public int VariableId { get; set; }

        [Column("idComponente")]
        public int ComponenteId { get; set; }

        [Column("idParent")]
        public int? ParentId { get; set; }
        public int Hijos { get; set; }
        public short Nivel { get; set; }
        public short Orden { get; set; }
        public string Tipo { get; set; }
        public string Descripcion { get; set; }
        public string TipoDato { get; set; }
        public string TipoRespuesta { get; set; }
        public string TipoControl { get; set; }
        public int? Longitud { get; set; }
        public bool Requerido { get; set; }

    }
}
