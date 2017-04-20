function AjaxObject(){
	var that = this;

	this.parameters;
	this.r;

	this.requestAddUser = function() {
		var datos = this.parameters.split(",");

		var datosPost = {
			"nombresUsuario":  datos[0],
			"apaternoUsuario": datos[1],
			"amaternoUsuario": datos[2],
			"emailUsuario":    datos[3],
			"userName":        datos[4],
			"passwdUser":      datos[5],
			"cmdOpt": 		   datos[6]
		};

		return datosPost;
	}

	this.requestAllUser = function() {
		var datos = this.parameters;
		var datosPost = {
			"cmdOpt": datos
		};

		return datosPost;
	};

	this.ajaxF = function(datosPost) {
		var contNombres;
		var contApaterno;
		var contAmaterno;
		var datos12;
		var ajax = $.ajax({
			data: datosPost,
			url: "include/01abb20c61108e47d06a6d1d041e2ca7.php",
			type: "post",
			async: false,
			datatype: "json",
			success: function(response) {
				return response;
			}
		});
		var respuesta; 
		respuesta = ajax.responseText;
		loco = JSON.parse(respuesta);
		that.r = new Array();
		for(i = 0; i < loco.length; i++) {

			var nombreCompleto = loco[i].nombres + " " + loco[i].apaterno + " " + loco[i].amaterno;
			var obj = [
				loco[i].id_usuarios,
				loco[i].user_name,
				nombreCompleto,
				loco[i].email,
				loco[i].nombres,
				loco[i].apaterno,
				loco[i].amaterno
			];
			that.r.push(obj);
		}
	}
}