function CatUsuarios() {

	var that = this;
	var objAjax = new AjaxObject();

	this.idioma = new IdiomaDataTables();
	this.respuesta;

	this.requestAllUser = function() {
		var requesteOpt = "cmdOpt=selectUser";
		objAjax.parameters = requesteOpt;
		var datosbien = objAjax.requestAllUser();
		objAjax.ajaxF(datosbien);
		var datosTabla = objAjax.r;
		return datosTabla;
	};

	this.requestAddUser = function(nombresUsuario,apaternoUsuario,amaternoUsuario,emailUsuario,userName,passwdUser) {
		try {
			var requesteOpt = "cmdOpt=insert";
			
			nombresUsuario = nombresUsuario.trim();
			apaternoUsuario = apaternoUsuario.trim();
			amaternoUsuario = amaternoUsuario.trim();
			emailUsuario = emailUsuario.trim();
			userName = userName.trim();
			passwdUser = passwdUser.trim();

			objAjax.parameters = nombresUsuario + "," + apaternoUsuario + "," + amaternoUsuario + "," + emailUsuario + "," + userName + "," + passwdUser + "," + requesteOpt;
			that.limpiaForm();
			var datosbien = objAjax.requestAddUser();
			that.respuesta = objAjax.ajaxF(datosbien);
			objAjax.parameters;
		}

		catch (x) {
			console.log("Error en función catUsuarios.requestAddUser --- " + x);
		}
	}

	this.columnasUsuarios = [
			{title: "ID Usuario"},
			{title: "Nombre de usuario"},
			{title: "Nombre completo"},
			{title: "E-mail"}
	];

	this.columnsDefs = [
            { targets: 0, visible: false },
            { targets: 1, width: "20%" },
            { targets: 2, width: "60%" },
            { targets: 3, width: "20%" },
        ]

	function limpiaDivs() {
   		$("#catEventos").empty();
   		$("#catContactos").empty();
   		$("#catUsuarios").empty();
   	}

   	this.cargaUsuarios = function() {

   		$("#idcatUsuarios").click(function() {
			limpiaDivs();

			$("#catUsuarios").css("display","inline");
			$("#catUsuarios").load("usuarios.html",function() {

				that.validateUsuariosForm();

				var datosTabla = that.requestAllUser();

				$("#tablaUsuarios").append('<table id="tableUsuarios" class="table table-bordered table-hover table-striped" cellspacing="0" width="100%" style="cursor:pointer">');
				var table = $("#tableUsuarios").DataTable({
   					data: datosTabla,
   					columns: that.columnasUsuarios,
   					"language": that.idioma.espanol,
   					"scrollx": true,
   					columnDefs: that.columnsDefs,
        			fixedColumns: true
   				});

   				$("#tableUsuarios tbody").on('click', 'tr', function () {
					var data = table.row( this ).data();
					that.seleccionUser(data);
				});

				$("#limpiarFormUsuarios").click(function() {
					that.limpiaForm();
				});

				that.formFirstState();

				$("#saveUser").click(function() {

					$("#userAddForm").valid();

					if ($("#userAddForm").valid()) {

						console.log($("#userAddForm").valid());
						table.destroy();
						var nombresUsuario = $("#nombresUsuario").val();
						var apaternoUsuario = $("#apaternoUsuario").val();
						var amaternoUsuario = $("#amaternoUsuario").val();
						var emailUsuario = $("#emailUsuario").val();
						var userName = $("#userName").val();
						var passwdUser = $("#passwdUser").val();

						that.requestAddUser(nombresUsuario,apaternoUsuario,amaternoUsuario,emailUsuario,userName,passwdUser);

						var datosTabla = that.requestAllUser();

						$("#tablaUsuarios").append('<table id="tableUsuarios" class="table table-bordered table-hover table-striped" cellspacing="0" width="100%" style="cursor:pointer">');
						table = $("#tableUsuarios").DataTable({
	   						data: datosTabla,
	   						columns: that.columnasUsuarios,
	   						"language": that.idioma.espanol,
	   						"scrollx": true,
	   						columnDefs: that.columnsDefs,
	        				fixedColumns: true
   						});
						that.formFirstState();
					}
				});

				$("#newUser").click(function() {
					that.buttonNuevo();
				});

				$("#editUser").click(function() {
					that.buttonEditar();
				});
			});
		});
   	}

   	this.limpiaForm = function() {
   		$("#nombresUsuario").val("");
		$("#apaternoUsuario").val("");
		$("#amaternoUsuario").val("");
		$("#emailUsuario").val("");
		$("#userName").val("");
		$("#passwdUser").val("");
   	};

   	this.validateUsuariosForm = function() {
		$("#userAddForm").validate({
			rules: {
				nombre: "required",
				apaterno: "required",
				emailUsuario: {
					required: true,
					email: true
				},
				userName: {
					required: true,
					minlength: 6,
					maxlength: 10
				},
				passwdUser:{
					required: true,
					minlength: 5
				}
			},
			messages: {
				nombre: "Nombre obligatorio",
				apaterno: "Apellido paterno obligatroio",
				emailUsuario: "Ingresa una dirección de correo válida",
				userName: {
					required: "Nombre de usuario obligatorio",
					minlength: "El nombre de usuario mínimo debe tener 6 caracteres",
					maxlength: "El nombre de usuario máximo debe tener 10 caracteres"
				},
				passwdUser:{
					required: "Password oblibatorio",
					minlength:"El password mínimo debe tener 5 caracteres"
				}
			}
		});
	};

	this.buttonNuevo = function() {
		that.limpiaForm();
		$("#editUser").css("display","none");
		$("#deleteUSer").css("display","none");
		$("#limpiarFormUsuarios").css("display","inline");
		$("#saveUser").css("display","inline");
		$("#nombresUsuario").prop('disabled', false);
		$("#apaternoUsuario").prop('disabled', false);
		$("#amaternoUsuario").prop('disabled', false);
		$("#emailUsuario").prop('disabled', false);
		$("#userName").prop('disabled', false);
		$("#passwdUser").prop('disabled', false);
	};

	this.seleccionUser = function(datos) {
		that.formFirstState();
		$("#nombresUsuario").val(datos[4]);
		$("#apaternoUsuario").val(datos[5]);
		$("#amaternoUsuario").val(datos[6]);
		$("#emailUsuario").val(datos[3]);
		$("#userName").val(datos[1]);
		$("#editUser").css("display","inline");
	};

	this.formFirstState = function() {
		$("#nombresUsuario").prop('disabled', true);
		$("#apaternoUsuario").prop('disabled', true);
		$("#amaternoUsuario").prop('disabled', true);
		$("#emailUsuario").prop('disabled', true);
		$("#userName").prop('disabled', true);
		$("#passwdUser").prop('disabled', true);
		$("#limpiarFormUsuarios").css("display","none");
		$("#saveUser").css("display","none");
		$("#editUser").css("display","none");
		$("#deleteUSer").css("display","none");
		$("#changePass").css("display","none");
		$("#passDiv").css("display","table");
		$("#labelPass").css("display","block");
	};

	this.buttonEditar = function() {
		$("#passDiv").css("display","none");
		$("#labelPass").css("display", "none");
		$("#divPassC").append(
			'<button type="button" class="btn bg-olive" style="margin-top:20px" id="changePass">Cambiar password</button>'
		);
		$("#divPassC").addClass("pull-right");
	};
}