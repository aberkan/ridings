const usColor = "#400020";
const waterColor = "#4020B0";
const landColor = "#D0E0C0";
const greaterColor = "#909090";
const cityColor = "#303030";

var landParams = [
    {"name": "Canada", "color": landColor, "coords": [3, 1, 70, 37]},

    {"name": "US1", "color": usColor, "coords": [1, 20, 28, 37]},
    {"name": "US2", "color": usColor, "coords": [1, 35, 65, 37]},
    {"name": "US3", "color": usColor, "coords": [39, 31, 62, 37]},
    {"name": "US4", "color": usColor, "coords": [3, 20, 33, 26]},
    {"name": "US5", "color": usColor, "coords": [3, 20, 31, 28]},
    {"name": "US6", "color": usColor, "coords": [3, 20, 29, 29]},

    {"name": "lake_sup", "color": waterColor, "coords": [28, 19, 33, 21]},
    {"name": "lake_sup", "color": waterColor, "coords": [30, 18, 32, 21]},
    {"name": "lake_hur", "color": waterColor, "coords": [33, 20, 36, 24]},
    {"name": "lake_hur2", "color": waterColor, "coords": [30, 22, 35, 24]},
    {"name": "lake_hur3", "color": waterColor, "coords": [30, 22, 33, 26]},
    {"name": "lake_hur4", "color": waterColor, "coords": [30, 22, 32, 28]},
    {"name": "lake_eri", "color": waterColor, "coords": [28, 34, 39, 36]},
    {"name": "lake_ont", "color": waterColor, "coords": [36, 30, 49, 32]},
    {"name": "lake_mic1", "color": waterColor, "coords": [26, 23, 28, 28]},
    {"name": "lake_mic2", "color": waterColor, "coords": [27, 22, 31, 23]},

    {"name": "lake_win", "color": waterColor, "coords": [25, 7, 27, 13]},


    {"name": "hudson1", "color": waterColor, "coords": [33, 1, 78, 10]},
    {"name": "hudson2", "color": waterColor, "coords": [30, 1, 53, 9]},
    {"name": "hudson3", "color": waterColor, "coords": [29, 1, 53, 7]},
    {"name": "james", "color": waterColor, "coords": [43, 9, 48, 16]},

    {"name": "lab2", "color": waterColor, "coords": [65, 1, 78, 15]},
    {"name": "lab3", "color": waterColor, "coords": [69, 1, 78, 37]},


    {"name": "fundy", "color": waterColor, "coords": [64, 30, 78, 37]},

    {"name": "stlaur1", "color": waterColor, "coords": [70, 1, 78, 25]},
    {"name": "stlaur2", "color": waterColor, "coords": [63, 22, 70, 23]},
    {"name": "stlaur3", "color": waterColor, "coords": [57, 23, 61, 24]},

    {"name": "pacific", "color": waterColor, "coords": [1, 5, 5, 37]},


    {"name": "alaska1", "color": usColor, "coords": [1, 1, 5, 5]},
    {"name": "alaska2", "color": usColor, "coords": [4, 4, 6, 9]},
    {"name": "maine", "color": usColor, "coords": [61, 25, 65, 37]},

    {"name": "van_isle", "color": landColor, "coords": [2, 14, 4, 22]},

    {"name": "baffin", "color": landColor, "coords": [54, 1, 61, 3]},

    {"name": "n_que", "color": landColor, "coords": [50, 6, 57, 12]},
    {"name": "labrador", "color": landColor, "coords": [60, 7, 62, 12]},
    {"name": "alminski", "color": landColor, "coords": [44, 12, 46, 13]},
    {"name": "manitoulin", "color": landColor, "coords": [34, 21, 35, 22]},
    {"name": "bruce", "color": landColor, "coords": [34, 23, 35, 25]},

    {"name": "scotia", "color": landColor, "coords": [66, 32, 73, 35]},
    {"name": "breton", "color": landColor, "coords": [74, 32, 76, 34]},
    {"name": "moncton", "color": landColor, "coords": [68, 29, 70, 34]},

    {"name": "pei", "color": landColor, "coords": [71, 28, 75, 30]},

    {"name": "nl1", "color": landColor, "coords": [72, 22, 77, 25]},
    {"name": "nl2", "color": landColor, "coords": [72, 19, 74, 25]},

    {"name": "gta", "color": greaterColor, "coords": [38, 25, 46, 31]},
    {"name": "toronto", "color": cityColor, "coords": [40, 26, 45, 31]},
    {"name": "ottawa", "color": cityColor, "coords": [47, 21, 50, 24]},
    {"name": "hamilton", "color": cityColor, "coords": [34, 30, 36, 32]},
    {"name": "kitwat", "color": cityColor, "coords": [33, 27, 35, 29]},
    {"name": "london", "color": cityColor, "coords": [30, 30, 32, 32]},

    {"name": "gma", "color": greaterColor, "coords": [51, 24, 57, 29]},
    {"name": "montreal", "color": cityColor, "coords": [51, 25, 57, 28]},
    {"name": "quebec", "color": cityColor, "coords": [61, 21, 64, 23]},

    {"name": "halifax", "color": cityColor, "coords": [69, 33, 71, 35]},

    {"name": "winnipeg", "color": cityColor, "coords": [26, 15, 28, 18]},
    {"name": "saskatoon", "color": cityColor, "coords": [19, 12, 22, 13]},
    {"name": "regina", "color": cityColor, "coords": [20, 16, 23, 17]},
    {"name": "edmonton", "color": cityColor, "coords": [15, 7, 18, 10]},
    {"name": "calgary", "color": cityColor, "coords": [15, 13, 18, 17]},

    {"name": "gva", "color": greaterColor, "coords": [5, 16, 10, 20]},
    {"name": "vancouver", "color": cityColor, "coords": [5, 17, 8, 19]},
];


map = document.getElementById("map")

for (var land of landParams) {
    var l = document.createElement("div");
    l.className = land.name;
    l.setAttribute(
        "style",
        "grid-column: " + land.coords[0] + " / " + land.coords[2] + "; " +
        "grid-row: " + land.coords[1] + " / " + land.coords[3] + "; " +
        "background-color: " + land.color + "; " +
        "border-radius: 8px;"
    )
    map.appendChild(l);
}
