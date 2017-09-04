$(document).ready(function (){
	setInterval("ajaxGet()", 2000);
});

function ajaxGet() {
	$.ajax({
		type: 'GET',
		url: '/results.json',
		dataType: 'json',
		success: function (data){
			info = data;
		}
	});
}