//var objCatEventos = new CatEventos();

function AppBegin() {
	var that = this;

	var objCatEventos = new CatEventos();
	var objCatContactos = new CatContactos();
	var objCatUsuarios = new CatUsuarios();

	try {
		objCatEventos.cargaUIEventos();
		objCatContactos.cargaContactos();
		objCatUsuarios.cargaUsuarios();
	}
	catch(x) {
		console.log("AppBegin.AppBegin --- " + x);
	}

}