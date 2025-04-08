var data = [
    {"code": 10001, "name": "Avalon ", "coord": [75, 24]},
    {"code": 10002, "name": "Cape Spear", "coord": [76, 23]},
    {"code": 10003, "name": "Central Newfoundland", "coord": [73, 22]},
    {"code": 10004, "name": "Labrador", "coord": [68, 17]},
    {"code": 10005, "name": "Long Range Mountains", "coord": [72, 23]},
    {"code": 10006, "name": "St. John's East", "coord": [76, 22]},
    {"code": 10007, "name": "Terra Nova-The Peninsulas", "coord": [74, 23]},
    {"code": 11001, "name": "Cardigan", "coord": [74, 29]},

    {"code": 11002, "name": "Charlottetown", "coord": [73, 29]},
    {"code": 11003, "name": "Egmont", "coord": [71, 28]},
    {"code": 11004, "name": "Malpeque", "coord": [72, 29]},

    {"code": 12001, "name": "Acadie-Annapolis", "coord": [66, 32]},
    {"code": 12002, "name": "Cape Breton-Canso-Antigonish", "coord": [74, 33]},
    {"code": 12003, "name": "Central Nova", "coord": [71, 32]},
    {"code": 12004, "name": "Cumberland-Colchester", "coord": [69, 31]},
    {"code": 12005, "name": "Dartmouth-Cole Harbour", "coord": [70, 34]},
    {"code": 12006, "name": "Halifax", "coord": [69, 34]},
    {"code": 12007, "name": "Halifax West", "coord": [69, 33]},
    {"code": 12008, "name": "Kings-Hants", "coord": [68, 32]},
    {"code": 12009, "name": "Sackville-Bedford-Preston", "coord": [70, 33]},
    {"code": 12010, "name": "South Shore-St. Margarets", "coord": [67, 34]},
    {"code": 12011, "name": "Sydney-Glace Bay", "coord": [75, 32]},

    {"code": 13001, "name": "Acadie-Bathurst", "coord": [68, 25]},
    {"code": 13002, "name": "Beaus�jour", "coord": [69, 29]},
    {"code": 13003, "name": "Fredericton-Oromocto", "coord": [66, 27]},
    {"code": 13004, "name": "Fundy Royal", "coord": [67, 29]},
    {"code": 13005, "name": "Madawaska-Restigouche", "coord": [66, 25]},
    {"code": 13006, "name": "Miramichi-Grand Lake", "coord": [67, 26]},
    {"code": 13007, "name": "Moncton-Dieppe", "coord": [68, 28]},
    {"code": 13008, "name": "Saint John-Kennebecasis", "coord": [66, 29]},
    {"code": 13009, "name": "Saint John-St. Croix", "coord": [65, 29]},
    {"code": 13010, "name": "Tobique-Mactaquac", "coord": [65, 26]},

    {"code": 24001, "name": "Abitibi-Baie-James-Nunavik-Eeyou", "coord": [51, 16]},
    {"code": 24002, "name": "Abitibi-T�miscamingue", "coord": [50, 19]},
    {"code": 24003, "name": "Ahuntsic-Cartierville", "coord": [53, 25]},
    {"code": 24004, "name": "Alfred-Pellan", "coord": [55, 24]},
    {"code": 24005, "name": "Argenteuil-La Petite-Nation", "coord": [51, 22]},
    {"code": 24006, "name": "Beauce", "coord": [62, 24]},
    {"code": 24007, "name": "Beauharnois-Salaberry-Soulanges-Huntingdon", "coord": [52, 30]},
    {"code": 24008, "name": "Beauport-Limoilou", "coord": [63, 22]},
    {"code": 24009, "name": "B�cancour-Nicolet-Saurel-Aln�bak", "coord": [60, 24]},
    {"code": 24010, "name": "Bellechasse-Les Etchemins-L�vis", "coord": [63, 23]},
    {"code": 24011, "name": "Beloeil-Chambly", "coord": [56, 28]},
    {"code": 24012, "name": "Berthier-Maskinong�", "coord": [56, 21]},
    {"code": 24013, "name": "Bourassa", "coord": [54, 25]},
    {"code": 24014, "name": "Brome-Missisquoi", "coord": [58, 30]},
    {"code": 24015, "name": "Brossard-Saint-Lambert", "coord": [53, 28]},
    {"code": 24016, "name": "Charlesbourg-Haute-Saint-Charles", "coord": [62, 21]},
    {"code": 24017, "name": "Ch�teauguay-Les Jardins-de-Napierville", "coord": [54, 30]},
    {"code": 24018, "name": "Chicoutimi-Le Fjord", "coord": [64, 20]},
    {"code": 24019, "name": "Compton-Stanstead", "coord": [60, 30]},
    {"code": 24020, "name": "C�te-du-Sud-Rivi�re-du-Loup-Kataskomiq-T�miscouata", "coord": [65, 23]},
    {"code": 24021, "name": "C�te-Nord-Kawawachikamach- Nitassinan", "coord": [66, 21]},
    {"code": 24022, "name": "Dorval-Lachine-LaSalle", "coord": [51, 27]},
    {"code": 24023, "name": "Drummond", "coord": [59, 25]},
    {"code": 24024, "name": "Gasp�sie-Les �les-de-la-Madeleine-Listuguj", "coord": [68, 23]},
    {"code": 24025, "name": "Gatineau", "coord": [50, 22]},
    {"code": 24026, "name": "Hochelaga-Rosemont-Est", "coord": [56, 27]},
    {"code": 24027, "name": "Honor�-Mercier", "coord": [56, 25]},
    {"code": 24028, "name": "Hull-Aylmer", "coord": [50, 21]},
    {"code": 24029, "name": "Joliette-Manawan", "coord": [54, 21]},
    {"code": 24030, "name": "Jonqui�re", "coord": [64, 18]},
    {"code": 24031, "name": "La Pointe-de-l'�le", "coord": [56, 26]},
    {"code": 24032, "name": "La Prairie-Atateken", "coord": [52, 28]},
    {"code": 24033, "name": "Lac-Saint-Jean", "coord": [60, 18]},
    {"code": 24034, "name": "Lac-Saint-Louis", "coord": [51, 26]},
    {"code": 24035, "name": "LaSalle-�mard-Verdun", "coord": [53, 27]},
    {"code": 24036, "name": "Laurentides-Labelle", "coord": [53, 20]},
    {"code": 24037, "name": "Laurier-Sainte-Marie", "coord": [54, 26]},
    {"code": 24038, "name": "Laval-Les �les", "coord": [52, 24]},
    {"code": 24039, "name": "Les Pays-d'en-Haut", "coord": [52, 21]},
    {"code": 24040, "name": "L�vis-Lotbini�re", "coord": [61, 23]},
    {"code": 24041, "name": "Longueuil-Charles-LeMoyne", "coord": [54, 28]},
    {"code": 24042, "name": "Longueuil-Saint-Hubert", "coord": [55, 28]},
    {"code": 24043, "name": "Louis-H�bert", "coord": [61, 22]},
    {"code": 24044, "name": "Louis-Saint-Laurent-Akiawenhrahk", "coord": [61, 21]},
    {"code": 24045, "name": "Marc-Aur�le-Fortin", "coord": [53, 24]},
    {"code": 24046, "name": "M�gantic-L'�rable-Lotbini�re", "coord": [60, 26]},
    {"code": 24047, "name": "Mirabel", "coord": [50, 24]},
    {"code": 24048, "name": "Mount Royal", "coord": [52, 26]},
    {"code": 24049, "name": "Mont-Saint-Bruno-L'Acadie", "coord": [55, 29]},
    {"code": 24050, "name": "Montcalm", "coord": [56, 23]},
    {"code": 24051, "name": "Montmorency-Charlevoix", "coord": [63, 21]},
    {"code": 24052, "name": "Notre-Dame-de-Gr�ce-Westmount", "coord": [52, 27]},
    {"code": 24053, "name": "Outremont", "coord": [53, 26]},
    {"code": 24054, "name": "Papineau", "coord": [55, 26]},
    {"code": 24055, "name": "Pierre-Boucher-Les Patriotes-Verch�res", "coord": [57, 24]},
    {"code": 24056, "name": "Pierrefonds-Dollard", "coord": [51, 25]},
    {"code": 24057, "name": "Pontiac-Kitigan Zibi", "coord": [51, 20]},
    {"code": 24058, "name": "Portneuf-Jacques-Cartier", "coord": [60, 20]},
    {"code": 24059, "name": "Qu�bec Centre", "coord": [62, 22]},
    {"code": 24060, "name": "Repentigny", "coord": [57, 22]},
    {"code": 24061, "name": "Richmond-Arthabaska", "coord": [59, 27]},
    {"code": 24062, "name": "Rimouski-La Matap�dia", "coord": [67, 24]},
    {"code": 24063, "name": "Rivi�re-des-Mille-�les", "coord": [51, 24]},
    {"code": 24064, "name": "Rivi�re-du-Nord", "coord": [53, 22]},
    {"code": 24065, "name": "Rosemont-La Petite-Patrie", "coord": [55, 27]},
    {"code": 24066, "name": "Saint-Hyacinthe-Bagot-Acton", "coord": [58, 26]},
    {"code": 24067, "name": "Saint-Jean", "coord": [56, 30]},
    {"code": 24068, "name": "Saint-Laurent", "coord": [52, 25]},
    {"code": 24069, "name": "Saint-L�onard-Saint-Michel", "coord": [55, 25]},
    {"code": 24070, "name": "Saint-Maurice-Champlain", "coord": [58, 20]},
    {"code": 24071, "name": "Shefford", "coord": [57, 29]},
    {"code": 24072, "name": "Sherbrooke", "coord": [59, 29]},
    {"code": 24073, "name": "Terrebonne", "coord": [56, 24]},
    {"code": 24074, "name": "Th�r�se-De Blainville", "coord": [54, 23]},
    {"code": 24075, "name": "Trois-Rivi�res", "coord": [59, 22]},
    {"code": 24076, "name": "Vaudreuil", "coord": [51, 28]},
    {"code": 24077, "name": "Ville-Marie-Le Sud-Ouest-�le-des-Soeurs", "coord": [54, 27]},
    {"code": 24078, "name": "Vimy", "coord": [54, 24]},

    {"code": 35001, "name": "Ajax", "coord": [45, 29]},
    {"code": 35002, "name": "Algonquin-Renfrew-Pembroke", "coord": [42, 21]},
    {"code": 35003, "name": "Aurora-Oak Ridges-Richmond Hill", "coord": [42, 25]},
    {"code": 35004, "name": "Barrie-South Innisfil", "coord": [38, 23]},
    {"code": 35005, "name": "Barrie-Springwater-Oro-Medonte", "coord": [38, 22]},
    {"code": 35006, "name": "Bay of Quinte", "coord": [48, 29]},
    {"code": 35007, "name": "Beaches-East York", "coord": [43, 29]},
    {"code": 35007, "name": "Bowmanville-Oshawa North", "coord": [45, 26]},
    {"code": 35009, "name": "Brampton Centre", "coord": [39, 27]},
    {"code": 35010, "name": "Brampton-Chinguacousy Park", "coord": [38, 25]},
    {"code": 35011, "name": "Brampton East", "coord": [39, 26]},
    {"code": 35012, "name": "Brampton North-Caledon", "coord": [38, 26]},
    {"code": 35013, "name": "Brampton South", "coord": [38, 27]},
    {"code": 35014, "name": "Brampton West", "coord": [37, 26]},
    {"code": 35015, "name": "Brantford-Brant South-Six Nations", "coord": [32, 32]},
    {"code": 35016, "name": "Bruce-Grey-Owen Sound", "coord": [34, 23]},
    {"code": 35017, "name": "Burlington", "coord": [36, 29]},
    {"code": 35018, "name": "Burlington North-Milton West", "coord": [36, 28]},
    {"code": 35019, "name": "Cambridge", "coord": [35, 28]},
    {"code": 35020, "name": "Carleton", "coord": [47, 23]},
    {"code": 35021, "name": "Chatham-Kent-Leamington", "coord": [30, 33]},
    {"code": 35022, "name": "Davenport", "coord": [41, 29]},
    {"code": 35023, "name": "Don Valley North", "coord": [43, 27]},
    {"code": 35024, "name": "Don Valley West", "coord": [42, 27]},
    {"code": 35025, "name": "Dufferin-Caledon", "coord": [37, 24]},
    {"code": 35026, "name": "Eglinton-Lawrence", "coord": [41, 27]},
    {"code": 35027, "name": "Elgin-St. Thomas-London South", "coord": [30, 31]},
    {"code": 35028, "name": "Essex", "coord": [28, 33]},
    {"code": 35029, "name": "Etobicoke Centre", "coord": [40, 29]},
    {"code": 35030, "name": "Etobicoke-Lakeshore", "coord": [40, 30]},
    {"code": 35031, "name": "Etobicoke North", "coord": [40, 28]},
    {"code": 35032, "name": "Flamborough-Glanbrook-Brant North", "coord": [34, 32]},
    {"code": 35033, "name": "Guelph", "coord": [35, 26]},
    {"code": 35034, "name": "Haldimand-Norfolk", "coord": [33, 33]},
    {"code": 35035, "name": "Haliburton-Kawartha Lakes", "coord": [46, 24]},
    {"code": 35036, "name": "Hamilton Centre", "coord": [35, 30]},
    {"code": 35037, "name": "Hamilton East-Stoney Creek", "coord": [35, 31]},
    {"code": 35038, "name": "Hamilton Mountain", "coord": [34, 31]},
    {"code": 35039, "name": "Hamilton West-Ancaster-Dundas", "coord": [34, 30]},
    {"code": 35040, "name": "Hastings-Lennox and Addington-Tyendinaga", "coord": [48, 25]},
    {"code": 35041, "name": "Humber River-Black Creek", "coord": [40, 26]},
    {"code": 35042, "name": "Huron-Bruce", "coord": [33, 24]},
    {"code": 35043, "name": "Kanata", "coord": [47, 21]},
    {"code": 35044, "name": "Kapuskasing-Timmins-Mushkegowuk", "coord": [41, 17]},
    {"code": 35045, "name": "Kenora-Kiiwetinoong", "coord": [29, 15]},
    {"code": 35046, "name": "Kingston and the Islands", "coord": [49, 30]},
    {"code": 35047, "name": "King-Vaughan", "coord": [39, 24]},
    {"code": 35048, "name": "Kitchener Centre", "coord": [34, 27]},
    {"code": 35049, "name": "Kitchener-Conestoga", "coord": [33, 28]},
    {"code": 35050, "name": "Kitchener South-Hespeler", "coord": [34, 28]},
    {"code": 35051, "name": "Lanark-Frontenac", "coord": [49, 26]},
    {"code": 35052, "name": "Leeds-Grenville-Thousand Islands-Rideau Lakes", "coord": [49, 28]},
    {"code": 35053, "name": "London Centre", "coord": [31, 30]},
    {"code": 35054, "name": "London-Fanshawe", "coord": [31, 31]},
    {"code": 35055, "name": "London West", "coord": [30, 30]},
    {"code": 35056, "name": "Markham-Stouffville", "coord": [44, 26]},
    {"code": 35057, "name": "Markham-Thornhill", "coord": [43, 25]},
    {"code": 35058, "name": "Markham-Unionville", "coord": [44, 25]},
    {"code": 35059, "name": "Middlesex-London", "coord": [30, 29]},
    {"code": 35060, "name": "Milton East-Halton Hills South", "coord": [37, 27]},
    {"code": 35061, "name": "Mississauga Centre", "coord": [38, 29]},
    {"code": 35062, "name": "Mississauga East-Cooksville", "coord": [39, 29]},
    {"code": 35063, "name": "Mississauga-Erin Mills", "coord": [38, 30]},
    {"code": 35064, "name": "Mississauga-Lakeshore", "coord": [39, 30]},
    {"code": 35065, "name": "Mississauga-Malton", "coord": [39, 28]},
    {"code": 35066, "name": "Mississauga-Streetsville", "coord": [38, 28]},
    {"code": 35067, "name": "Nepean", "coord": [47, 22]},
    {"code": 35068, "name": "Newmarket-Aurora", "coord": [42, 24]},
    {"code": 35069, "name": "New Tecumseth-Gwillimbury", "coord": [40, 23]},
    {"code": 35070, "name": "Niagara Falls-Niagara-on-the-Lake", "coord": [38, 32]},
    {"code": 35071, "name": "Niagara South", "coord": [37, 33]},
    {"code": 35072, "name": "Niagara West", "coord": [35, 33]},
    {"code": 35073, "name": "Nipissing-Timiskaming", "coord": [41, 20]},
    {"code": 35074, "name": "Northumberland-Peterborough South", "coord": [47, 28]},
    {"code": 35075, "name": "Oakville East", "coord": [37, 28]},
    {"code": 35076, "name": "Oakville West", "coord": [37, 29]},
    {"code": 35077, "name": "Orl�ans", "coord": [49, 22]},
    {"code": 35078, "name": "Oshawa", "coord": [45, 27]},
    {"code": 35079, "name": "Ottawa Centre", "coord": [48, 22]},
    {"code": 35080, "name": "Ottawa South", "coord": [48, 23]},
    {"code": 35081, "name": "Ottawa-Vanier", "coord": [49, 21]},
    {"code": 35082, "name": "Ottawa West-Nepean", "coord": [48, 21]},
    {"code": 35083, "name": "Oxford", "coord": [32, 29]},
    {"code": 35084, "name": "Parry Sound-Muskoka", "coord": [36, 20]},
    {"code": 35085, "name": "Perth-Wellington", "coord": [34, 25]},
    {"code": 35086, "name": "Peterborough", "coord": [47, 26]},
    {"code": 35087, "name": "Pickering-Brooklin", "coord": [45, 30]},
    {"code": 35088, "name": "Prescott-Russell-Cumberland", "coord": [49, 23]},
    {"code": 35089, "name": "Richmond Hill South", "coord": [41, 25]},
    {"code": 35090, "name": "Sarnia-Lambton-Bkejwanong", "coord": [29, 28]},
    {"code": 35091, "name": "Sault Ste. Marie", "coord": [33, 19]},
    {"code": 35092, "name": "Scarborough-Agincourt", "coord": [43, 26]},
    {"code": 35093, "name": "Scarborough Centre-Don Valley East", "coord": [43, 28]},
    {"code": 35094, "name": "Scarborough-Guildwood-Rouge Park", "coord": [44, 27]},
    {"code": 35095, "name": "Scarborough North", "coord": [44, 28]},
    {"code": 35096, "name": "Scarborough Southwest", "coord": [44, 30]},
    {"code": 35097, "name": "Scarborough-Woburn", "coord": [44, 29]},
    {"code": 35098, "name": "Simcoe-Grey", "coord": [35, 24]},
    {"code": 35099, "name": "Simcoe North", "coord": [36, 22]},
    {"code": 35100, "name": "Spadina-Harbourfront", "coord": [42, 30]},
    {"code": 35101, "name": "St. Catharines", "coord": [37, 32]},
    {"code": 35102, "name": "Stormont-Dundas-Glengarry", "coord": [50, 29]},
    {"code": 35103, "name": "Sudbury", "coord": [37, 19]},
    {"code": 35104, "name": "Sudbury East-Manitoulin-Nickel Belt", "coord": [38, 18]},
    {"code": 35105, "name": "Taiaiako'n-Parkdale-High Park", "coord": [41, 30]},
    {"code": 35106, "name": "Thornhill", "coord": [40, 25]},
    {"code": 35107, "name": "Thunder Bay-Rainy River", "coord": [30, 17]},
    {"code": 35108, "name": "Thunder Bay-Superior North", "coord": [31, 17]},
    {"code": 35109, "name": "Toronto Centre", "coord": [42, 29]},
    {"code": 35110, "name": "Toronto-Danforth", "coord": [43, 30]},
    {"code": 35111, "name": "Toronto-St. Paul's", "coord": [41, 28]},
    {"code": 35112, "name": "University-Rosedale", "coord": [42, 28]},
    {"code": 35113, "name": "Vaughan-Woodbridge", "coord": [39, 25]},
    {"code": 35114, "name": "Waterloo", "coord": [33, 27]},
    {"code": 35115, "name": "Wellington-Halton Hills North", "coord": [36, 26]},
    {"code": 35116, "name": "Whitby", "coord": [45, 28]},
    {"code": 35117, "name": "Willowdale", "coord": [42, 26]},
    {"code": 35118, "name": "Windsor-Tecumseh-Lakeshore", "coord": [28, 31]},
    {"code": 35119, "name": "Windsor West", "coord": [28, 30]},
    {"code": 35120, "name": "York Centre", "coord": [41, 26]},
    {"code": 35121, "name": "York-Durham", "coord": [45, 25]},
    {"code": 35122, "name": "York South-Weston-Etobicoke", "coord": [40, 27]},

    {"code": 46001, "name": "Brandon-Souris", "coord": [23, 17]},
    {"code": 46002, "name": "Churchill-Keewatinook Aski", "coord": [24, 6]},
    {"code": 46003, "name": "Elmwood-Transcona", "coord": [27, 15]},
    {"code": 46004, "name": "Kildonan-St. Paul", "coord": [27, 14]},
    {"code": 46005, "name": "Portage-Lisgar", "coord": [24, 15]},
    {"code": 46006, "name": "Provencher", "coord": [27, 19]},
    {"code": 46007, "name": "Riding Mountain", "coord": [23, 13]},
    {"code": 46008, "name": "St. Boniface-St. Vital", "coord": [27, 16]},
    {"code": 46009, "name": "Selkirk-Interlake-Eastman", "coord": [25, 14]},
    {"code": 46010, "name": "Winnipeg Centre", "coord": [26, 16]},
    {"code": 46011, "name": "Winnipeg North", "coord": [26, 15]},
    {"code": 46012, "name": "Winnipeg South", "coord": [27, 17]},
    {"code": 46013, "name": "Winnipeg South Centre", "coord": [26, 17]},
    {"code": 46014, "name": "Winnipeg West Centre", "coord": [25, 16]},

    {"code": 47001, "name": "Battlefords-Lloydminster-Meadow Lake", "coord": [19, 9]},
    {"code": 47002, "name": "Carlton Trail-Eagle Creek", "coord": [20, 10]},
    {"code": 47003, "name": "Desneth�-Missinippi-Churchill River", "coord": [21, 6]},
    {"code": 47004, "name": "Moose Jaw-Lake Centre-Lanigan", "coord": [20, 14]},
    {"code": 47005, "name": "Prince Albert", "coord": [21, 8]},
    {"code": 47006, "name": "Regina-Lewvan", "coord": [20, 16]},
    {"code": 47007, "name": "Regina-Qu'Appelle", "coord": [22, 16]},
    {"code": 47008, "name": "Regina-Wascana", "coord": [21, 16]},
    {"code": 47009, "name": "Saskatoon South", "coord": [20, 12]},
    {"code": 47010, "name": "Saskatoon-University", "coord": [21, 12]},
    {"code": 47011, "name": "Saskatoon West", "coord": [19, 12]},
    {"code": 47012, "name": "Souris-Moose Mountain", "coord": [22, 18]},
    {"code": 47013, "name": "Swift Current-Grasslands-Kindersley", "coord": [20, 18]},
    {"code": 47014, "name": "Yorkton-Melville", "coord": [22, 14]},

    {"code": 48001, "name": "Airdrie-Cochrane", "coord": [16, 13]},
    {"code": 48002, "name": "Battle River-Crowfoot", "coord": [18, 10]},
    {"code": 48003, "name": "Bow River", "coord": [18, 15]},
    {"code": 48004, "name": "Calgary Centre", "coord": [16, 15]},
    {"code": 48005, "name": "Calgary Confederation", "coord": [15, 14]},
    {"code": 48006, "name": "Calgary Crowfoot", "coord": [15, 13]},
    {"code": 48007, "name": "Calgary East", "coord": [17, 15]},
    {"code": 48008, "name": "Calgary Heritage", "coord": [15, 16]},
    {"code": 48009, "name": "Calgary McKnight", "coord": [17, 14]},
    {"code": 48010, "name": "Calgary Midnapore", "coord": [16, 16]},
    {"code": 48011, "name": "Calgary Nose Hill", "coord": [16, 14]},
    {"code": 48012, "name": "Calgary Shepard", "coord": [17, 16]},
    {"code": 48013, "name": "Calgary Signal Hill", "coord": [15, 15]},
    {"code": 48014, "name": "Calgary Skyview", "coord": [17, 13]},
    {"code": 48015, "name": "Edmonton Centre", "coord": [16, 8]},
    {"code": 48016, "name": "Edmonton Gateway", "coord": [16, 9]},
    {"code": 48017, "name": "Edmonton Griesbach", "coord": [16, 7]},
    {"code": 48018, "name": "Edmonton Manning", "coord": [17, 7]},
    {"code": 48019, "name": "Edmonton Northwest", "coord": [15, 7]},
    {"code": 48020, "name": "Edmonton Riverbend", "coord": [15, 9]},
    {"code": 48021, "name": "Edmonton Southeast", "coord": [17, 9]},
    {"code": 48022, "name": "Edmonton Strathcona", "coord": [17, 8]},
    {"code": 48023, "name": "Edmonton West", "coord": [15, 8]},
    {"code": 48024, "name": "Foothills", "coord": [15, 18]},
    {"code": 48025, "name": "Fort McMurray-Cold Lake", "coord": [18, 4]},
    {"code": 48026, "name": "Grande Prairie", "coord": [14, 4]},
    {"code": 48027, "name": "Lakeland", "coord": [18, 6]},
    {"code": 48028, "name": "Leduc-Wetaskiwin", "coord": [16, 10]},
    {"code": 48029, "name": "Lethbridge", "coord": [17, 18]},
    {"code": 48030, "name": "Medicine Hat-Cardston-Warner", "coord": [18, 19]},
    {"code": 48031, "name": "Parkland", "coord": [14, 8]},
    {"code": 48032, "name": "Peace River-Westlock", "coord": [16, 4]},
    {"code": 48033, "name": "Ponoka-Didsbury", "coord": [15, 11]},
    {"code": 48034, "name": "Red Deer", "coord": [17, 11]},
    {"code": 48035, "name": "Sherwood Park-Fort Saskatchewan", "coord": [18, 8]},
    {"code": 48036, "name": "St. Albert-Sturgeon River", "coord": [15, 6]},
    {"code": 48037, "name": "Yellowhead", "coord": [14, 10]},

    {"code": 59001, "name": "Abbotsford-South Langley", "coord": [10, 19]},
    {"code": 59002, "name": "Burnaby Central", "coord": [8, 17]},
    {"code": 59003, "name": "Burnaby North-Seymour", "coord": [7, 16]},
    {"code": 59004, "name": "Cariboo-Prince George", "coord": [8, 8]},
    {"code": 59005, "name": "Chilliwack-Hope", "coord": [11, 19]},
    {"code": 59006, "name": "Cloverdale-Langley City", "coord": [10, 18]},
    {"code": 59007, "name": "Columbia-Kootenay-Southern Rockies", "coord": [13, 19]},
    {"code": 59008, "name": "Coquitlam-Port Coquitlam", "coord": [9, 16]},
    {"code": 59009, "name": "Courtenay-Alberni", "coord": [2, 17]},
    {"code": 59010, "name": "Cowichan-Malahat-Langford", "coord": [2, 19]},
    {"code": 59011, "name": "Delta", "coord": [7, 19]},
    {"code": 59012, "name": "Esquimalt-Saanich-Sooke", "coord": [2, 21]},
    {"code": 59013, "name": "Fleetwood-Port Kells", "coord": [9, 17]},
    {"code": 59014, "name": "Kamloops-Shuswap-Central Rockies", "coord": [12, 13]},
    {"code": 59015, "name": "Kamloops-Thompson-Nicola", "coord": [11, 12]},
    {"code": 59016, "name": "Kelowna", "coord": [12, 16]},
    {"code": 59017, "name": "Langley Township-Fraser Heights", "coord": [10, 17]},
    {"code": 59018, "name": "Mission-Matsqui-Abbotsford", "coord": [10, 15]},
    {"code": 59019, "name": "Nanaimo-Ladysmith", "coord": [3, 18]},
    {"code": 59020, "name": "New Westminster-Burnaby-Maillardville", "coord": [8, 18]},
    {"code": 59021, "name": "North Island-Powell River", "coord": [3, 15]},
    {"code": 59022, "name": "North Vancouver-Capilano", "coord": [6, 16]},
    {"code": 59023, "name": "Okanagan Lake West-South Kelowna", "coord": [12, 17]},
    {"code": 59024, "name": "Pitt Meadows-Maple Ridge", "coord": [10, 16]},
    {"code": 59025, "name": "Port Moody-Coquitlam", "coord": [8, 16]},
    {"code": 59026, "name": "Prince George-Peace River-Northern Rockies", "coord": [9, 7]},
    {"code": 59027, "name": "Richmond Centre-Marpole", "coord": [5, 19]},
    {"code": 59028, "name": "Richmond East-Steveston", "coord": [6, 19]},
    {"code": 59029, "name": "Saanich-Gulf Islands", "coord": [3, 20]},
    {"code": 59030, "name": "Similkameen-South Okanagan-West Kootenay", "coord": [12, 18]},
    {"code": 59031, "name": "Skeena-Bulkley Valley", "coord": [7, 6]},
    {"code": 59032, "name": "South Surrey-White Rock", "coord": [9, 19]},
    {"code": 59033, "name": "Surrey Centre", "coord": [9, 18]},
    {"code": 59034, "name": "Surrey Newton", "coord": [8, 19]},
    {"code": 59035, "name": "Vancouver Centre", "coord": [5, 17]},
    {"code": 59036, "name": "Vancouver East", "coord": [6, 17]},
    {"code": 59037, "name": "Vancouver Fraserview-South Burnaby", "coord": [7, 18]},
    {"code": 59038, "name": "Vancouver Granville", "coord": [6, 18]},
    {"code": 59039, "name": "Vancouver Kingsway", "coord": [7, 17]},
    {"code": 59040, "name": "Vancouver Quadra", "coord": [5, 18]},
    {"code": 59041, "name": "Vernon-Lake Country-Monashee", "coord": [12, 15]},
    {"code": 59042, "name": "Victoria", "coord": [3, 21]},
    {"code": 59043, "name": "West Vancouver-Sunshine Coast-Sea to Sky Country", "coord": [5, 16]},

    {"code": 60001, "name": "Yukon", "coord": [8, 2]},
    {"code": 61001, "name": "Northwest Territories", "coord": [16, 2]},
    {"code": 62001, "name": "Nunavut", "coord": [58, 2]},
];
