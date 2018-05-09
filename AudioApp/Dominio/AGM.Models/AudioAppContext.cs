using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using AGM.Entities;
using AGM.Entities;

namespace AudioApp.Models
{
    public class AudioAppContext : DbContext
    {
        public AudioAppContext()
            : base("name=AudioAppContext")
        {
            this.Configuration.LazyLoadingEnabled = false;
        }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {

            base.OnModelCreating(modelBuilder);
        }

        public virtual DbSet<Anexo> Anexos { get; set; }


    }
}
