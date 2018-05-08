using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AGM.Entities
{
    [Table("OpcionesRespuesta", Schema = "AGM")]
    public class OpcionRespuesta : EntidadBase
    {
        //public OpcionRespuesta()
        //{
        //    this.RespuestaLugarTrabajo = new RespuestaLugarTrabajo();
        //}

        [Key]
        [Column("idOpcionRespuesta")]
        public int OpcionRespuestaId { get; set; }
        [Column("idModelo")]
        public int ModeloId { get; set; }        
        public string Tipo { get; set; }
        public int Orden { get; set; }        
        public string Descripcion { get; set; }

        //public virtual RespuestaLugarTrabajo RespuestaLugarTrabajo { get; set; }
        
    }
}
