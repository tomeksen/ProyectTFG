using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BBDD.Migrations
{
    public partial class m1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Juego",
                columns: table => new
                {
                    JuegoId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    NombreJuego = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Juego", x => x.JuegoId);
                });

            migrationBuilder.CreateTable(
                name: "Usuarios",
                columns: table => new
                {
                    UsuarioId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Email = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true),
                    Nickname = table.Column<string>(nullable: true),
                    Amigos = table.Column<string>(nullable: true),
                    Descripcion = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuarios", x => x.UsuarioId);
                });

            migrationBuilder.CreateTable(
                name: "CuentaJuegos",
                columns: table => new
                {
                    UsuarioId = table.Column<int>(nullable: false),
                    JuegoId = table.Column<int>(nullable: false),
                    NombreCuenta = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CuentaJuegos", x => new { x.JuegoId, x.UsuarioId });
                    table.ForeignKey(
                        name: "FK_CuentaJuegos_Juego_JuegoId",
                        column: x => x.JuegoId,
                        principalTable: "Juego",
                        principalColumn: "JuegoId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CuentaJuegos_Usuarios_UsuarioId",
                        column: x => x.UsuarioId,
                        principalTable: "Usuarios",
                        principalColumn: "UsuarioId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Juego",
                columns: new[] { "JuegoId", "NombreJuego" },
                values: new object[,]
                {
                    { 1, "League of legends" },
                    { 2, "Valorant" },
                    { 3, "TeamFight Tactics" },
                    { 4, "Leguends of Runaterra" }
                });

            migrationBuilder.InsertData(
                table: "Usuarios",
                columns: new[] { "UsuarioId", "Amigos", "Descripcion", "Email", "Nickname", "Password" },
                values: new object[] { 1, null, "Soy guapo, tengo dinero y soy muy buen futbolista", "1234@hotmail.com", "tomek", "1234" });

            migrationBuilder.InsertData(
                table: "CuentaJuegos",
                columns: new[] { "JuegoId", "UsuarioId", "NombreCuenta" },
                values: new object[] { 1, 1, "TwitchTvTomeksen" });

            migrationBuilder.CreateIndex(
                name: "IX_CuentaJuegos_UsuarioId",
                table: "CuentaJuegos",
                column: "UsuarioId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CuentaJuegos");

            migrationBuilder.DropTable(
                name: "Juego");

            migrationBuilder.DropTable(
                name: "Usuarios");
        }
    }
}
