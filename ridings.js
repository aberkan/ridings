
map = document.getElementById("map")

data.forEach(function(riding) {
    var r = document.createElement("button");
    r.className = "riding" + riding.code
	var result = results[riding.code]
	switch (result) {
		case "Lib": color = "#FF2040"; break;
		case "Con": color = "#70C0FF"; break;
		case "NDP": color = "orange"; break;
		case "BlQ": color = "#70FFD0"; break;
		case "Grn": color = "#40F040"; break;
		case "Ind": color = "brown"; break;
        default: color = "white"; break;
	}

    r.setAttribute("style", "grid-row: " + riding.coord[1] + "; grid-column: " +
		riding.coord[0] + "; background-color: " + color);

	r.setAttribute("onclick",  "location.href='https://www.elections.ca/map_02.aspx?lang=e&p=06_ON&t=/1Dis/" + riding.code + "&d=" + riding.code + "'");
	r.type = "button";

    var t = document.createElement("span")
    t.className = "tip"
    t.innerText = riding.name + " (" + result + ")";

	r.onmouseenter = function() {
		t.setAttribute("style", "visibility: visible");
	};
	r.onmouseout = function() {
		t.setAttribute("style", "visibility: hidden");
	};
    r.appendChild(t);
    map.appendChild(r);
});
