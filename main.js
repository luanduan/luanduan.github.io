function decryptEmail(encoded) {
	var address = atob(encoded).trim();
	window.location.href = "mailto:" + address;
}

