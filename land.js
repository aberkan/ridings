const usColor = "#000001";
const waterColor = "#9999E0";
const landColor = "#D0E8D0";
const cityColor = "#BBBBBB";

var landParams = [
    {"name": "US1", "color": usColor, "coords": [1, 20, 30, 41]},
    {"name": "US2", "color": usColor, "coords": [1, 35, 65, 41]},
    {"name": "US3", "color": usColor, "coords": [40, 30, 62, 41]},
    {"name": "US4", "color": usColor, "coords": [60, 25, 65, 41]},

    {"name": "lake_sup", "color": waterColor, "coords": [27, 17, 33, 22]},
    {"name": "lake_sup2", "color": waterColor, "coords": [24, 19, 33, 22]},
    {"name": "lake_hur", "color": waterColor, "coords": [29, 20, 36, 27]},
    {"name": "lake_eri", "color": waterColor, "coords": [31, 34, 37, 36]},
    {"name": "lake_ont", "color": waterColor, "coords": [38, 30, 50, 33]},
    {"name": "lake_win", "color": waterColor, "coords": [21, 5, 24, 13]},


    {"name": "hudson1", "color": waterColor, "coords": [30, 1, 53, 10]},
    {"name": "hudson2", "color": waterColor, "coords": [26, 1, 53, 7]},
    {"name": "james", "color": waterColor, "coords": [42, 9, 49, 18]},

    {"name": "lab1", "color": waterColor, "coords": [40, 3, 91, 7]},
    {"name": "lab2", "color": waterColor, "coords": [60, 1, 91, 11]},
    {"name": "lab3", "color": waterColor, "coords": [65, 1, 91, 17]},
    {"name": "lab4", "color": waterColor, "coords": [68, 1, 91, 41]},

    {"name": "stlaur", "color": waterColor, "coords": [70, 1, 91, 25]},

    {"name": "pacific", "color": waterColor, "coords": [1, 1, 5, 41]},

    {"name": "van_isle", "color": landColor, "coords": [2, 14, 4, 22]},



    {"name": "toronto", "color": cityColor, "coords": [39, 25, 48, 32]},
    {"name": "montreal", "color": cityColor, "coords": [50, 24, 58, 29]},
    {"name": "ottawa", "color": cityColor, "coords": [46, 21, 49, 24]},
    {"name": "quebec", "color": cityColor, "coords": [61, 20, 64, 23]},

    {"name": "winnipeg", "color": cityColor, "coords": [21, 15, 24, 17]},
    {"name": "edmonton", "color": cityColor, "coords": [12, 8, 15, 11]},
    {"name": "calgary", "color": cityColor, "coords": [12, 14, 15, 17]},
    {"name": "vancouver", "color": cityColor, "coords": [5, 17, 11, 20]},
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
