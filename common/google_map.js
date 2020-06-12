// JavaScript Document
//<![CDATA[
function load() {
  if (GBrowserIsCompatible()) {
	var map = new GMap2(document.getElementById("map"));
	map.setCenter(new GLatLng(35.46402557554467,133.06200742721558), 17);
	map.addControl(new GLargeMapControl());
	map.addControl(new GMapTypeControl());
	var point = new GPoint(133.06200742721558, 35.46402557554467);
	var marker = new GMarker(point);
	map.addOverlay(marker);
	var offset = new GSize(0, -20);
	map.openInfoWindowHtml(map.getCenter(),	'<div id="info-window">しまねOSS協議会<br />〒690-0003 松江市朝日町478-18<br />松江テルサ別館2階<br />（株）ネットワーク応用通信研究所内<br />TEL : 0852-28-9298</div>', offset);
  }
}


window.onload = function() {
	load();
}

window.onunload = function() {
	GUnload();
}
//]]>
