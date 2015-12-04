Handlebars.registerHelper("lookup", function(address) {
	var name = ethid.identify(address);
	if(name.length > 0) return name + " <"+address+">";

	return address;
});
