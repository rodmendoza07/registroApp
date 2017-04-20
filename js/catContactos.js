function CatContactos() {
	
	var that = this;
	this.idioma = new IdiomaDataTables();

	this.columnasContactos = [
			{title: "Nombre(s)"},
			{title: "Apellidos"},
			{title: "Empresa"},
			{title: "Puesto"},
			{title: "Teléfono(s)"},
			{title: "E-mail"}
	];

	this.columnasEmpresas = [
			{title: "Nombre"},
			{title: "Dirección"},
			{title: "Teléfono(s)"},
			{title: "Correo de contacto"}
	];

	this.datos;

	function limpiaDivs() {
   		$("#catEventos").empty();
   		$("#catContactos").empty();
   		$("#catUsuarios").empty();
   	}

	this.cargaContactos = function() {
		
		$("#idcatContactos").click(function() {
			limpiaDivs();
			$("#catContactos").css("display","inline");
			$("#catContactos").load("contactos.html",function() {
				that.ContactosLista();
				$( "#tabs" ).tabs();
			});
		});
	}

	$("#idcatContactos_emp").click(function() {
		limpiaDivs();
		$("#catContactos").css("display","inline");
		$("#catContactos").load("empresas.html",function() {
			that.EmpresasLista();
			$( "#tabs" ).tabs();
		});
	});

	this.ContactosLista = function () {
		$("#tablaContactos").append('<table id="tableContactos" class="table table-bordered table-hover table-striped" cellspacing="0" width="100%" style="cursor:pointer">');
		var table = $("#tableContactos").DataTable({
			data: that.datos,
			columns: that.columnasContactos,
			"language": that.idioma.espanol,
			"scrollx": true
		});
	}

	this.EmpresasLista = function() {
		$("#tablaEmpresas").append('<table id="tableEmpresas" class="table table-bordered table-hover table-striped" cellspacing="0" width="100%" style="cursor:pointer">');
		var table = $("#tableEmpresas").DataTable({
			data: that.datos,
			columns: that.columnasEmpresas,
			"language": that.idioma.espanol,
			"scrollx": true
		});
	}
}