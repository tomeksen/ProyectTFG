﻿// <auto-generated />
using BBDD.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace BBDD.Migrations
{
    [DbContext(typeof(GareonContext))]
    [Migration("20200511130955_m3")]
    partial class m3
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("BBDD.Models.CuentaJuego", b =>
                {
                    b.Property<int>("JuegoId");

                    b.Property<int>("UsuarioId");

                    b.Property<string>("NombreCuenta");

                    b.HasKey("JuegoId", "UsuarioId");

                    b.HasIndex("UsuarioId");

                    b.ToTable("CuentaJuegos");

                    b.HasData(
                        new
                        {
                            JuegoId = 1,
                            UsuarioId = 1,
                            NombreCuenta = "TwitchTvTomeksen"
                        });
                });

            modelBuilder.Entity("BBDD.Models.Juegos", b =>
                {
                    b.Property<int>("JuegoId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("NombreJuego");

                    b.HasKey("JuegoId");

                    b.ToTable("Juego");

                    b.HasData(
                        new
                        {
                            JuegoId = 1,
                            NombreJuego = "League of legends"
                        },
                        new
                        {
                            JuegoId = 2,
                            NombreJuego = "Valorant"
                        },
                        new
                        {
                            JuegoId = 3,
                            NombreJuego = "TeamFight Tactics"
                        },
                        new
                        {
                            JuegoId = 4,
                            NombreJuego = "Leguends of Runaterra"
                        });
                });

            modelBuilder.Entity("BBDD.Models.Usuario", b =>
                {
                    b.Property<int>("UsuarioId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Amigos");

                    b.Property<string>("Descripcion");

                    b.Property<string>("Email");

                    b.Property<string>("Nickname");

                    b.Property<string>("Password");

                    b.HasKey("UsuarioId");

                    b.ToTable("Usuarios");

                    b.HasData(
                        new
                        {
                            UsuarioId = 1,
                            Descripcion = "Soy guapo, tengo dinero y soy muy buen futbolista",
                            Email = "1234@hotmail.com",
                            Nickname = "tomek",
                            Password = "1234"
                        });
                });

            modelBuilder.Entity("BBDD.Models.CuentaJuego", b =>
                {
                    b.HasOne("BBDD.Models.Juegos", "Juegos")
                        .WithMany("CuentaJuegos")
                        .HasForeignKey("JuegoId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("BBDD.Models.Usuario", "Usuario")
                        .WithMany("CuentaJuegos")
                        .HasForeignKey("UsuarioId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
