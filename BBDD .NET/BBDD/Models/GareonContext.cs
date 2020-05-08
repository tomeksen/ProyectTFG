using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Web;

namespace BBDD.Models
{
    public class GareonContext : DbContext
    {
        public DbSet<Juegos> Juego { get; set; }
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<CuentaJuego> CuentaJuegos { get; set; }
        public GareonContext()
        {

        }
        public GareonContext(DbContextOptions options):base(options) 
        {

        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) 
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseMySql("Server=127.0.0.1;Database=Gareon;Uid=root;Pwd='';SslMode=none"); 
            }
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Juegos>()
                .HasKey(bc => new { bc.JuegoId});
            modelBuilder.Entity<CuentaJuego>()
                .HasKey(bc => new { bc.JuegoId, bc.UsuarioId });
            modelBuilder.Entity<CuentaJuego>()
                .HasOne(bc => bc.Usuario)
                .WithMany(b => b.CuentaJuegos)
                .HasForeignKey(bc => bc.UsuarioId);
            modelBuilder.Entity<CuentaJuego>()
                .HasOne(bc => bc.Juegos)
                .WithMany(c => c.CuentaJuegos)
                .HasForeignKey(bc => bc.JuegoId);
            modelBuilder.Entity<Juegos>().HasData(new Juegos(1,"League of legends"));
            modelBuilder.Entity<Juegos>().HasData(new Juegos(2, "Valorant"));
            modelBuilder.Entity<Juegos>().HasData(new Juegos(3, "TeamFight Tactics"));
            modelBuilder.Entity<Juegos>().HasData(new Juegos(4, "Leguends of Runaterra"));
            modelBuilder.Entity<Usuario>().HasData(new Usuario(1,"1234@hotmail.com","1234","tomek",null,"Soy guapo, tengo dinero y soy muy buen futbolista"));
            modelBuilder.Entity<CuentaJuego>().HasData(new CuentaJuego("TwitchTvTomeksen",1,1));
        }
    }
}