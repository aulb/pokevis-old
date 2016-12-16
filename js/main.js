/*
 * Todo: 
 * - Cleanup this code
 * - https://github.com/airbnb/javascript
 *
 */
// https://en.wikipedia.org/wiki/Lab_color_space
// http://stackoverflow.com/questions/398224/how-to-mix-colors-naturally-with-c
// http://stackoverflow.com/questions/14819058/mixing-two-colors-naturally-in-javascript

const DATA = {"1": {"ghost": {"ghost": "", "steel": "", "electric": "", "fire": "", "psychic": "", "ice": "", "dragon": "", "water": "", "dark": "", "fairy": "", "grass": ""}, "steel": {"steel": "", "dark": "", "electric": "", "fire": "", "psychic": "", "ice": "", "dragon": "", "water": "", "fairy": "", "grass": ""}, "ice": {"dark": "", "fairy": "", "ice": "", "dragon": ""}, "electric": {"electric": "101.png", "psychic": "", "ice": "", "dragon": "", "dark": "", "fairy": ""}, "normal": {"ghost": "", "steel": "", "ice": "", "electric": "", "normal": "020.png", "fire": "", "psychic": "", "flying": "016.png", "poison": "", "dragon": "", "water": "", "fighting": "", "rock": "", "dark": "", "fairy": "", "grass": "", "bug": "", "ground": ""}, "fire": {"dark": "", "electric": "", "fire": "038.png", "psychic": "", "ice": "", "dragon": "", "water": "", "fairy": "", "grass": ""}, "psychic": {"dark": "", "psychic": "151.png", "fairy": "", "ice": "124.png", "dragon": ""}, "flying": {"ghost": "", "steel": "", "electric": "145.png", "fire": "006.png", "psychic": "", "flying": "", "poison": "041.png", "dragon": "149.png", "water": "130.png", "ice": "144.png", "rock": "142.png", "dark": "", "fairy": "", "grass": "", "bug": "123.png", "ground": ""}, "poison": {"ghost": "094.png", "steel": "", "electric": "", "fire": "", "psychic": "", "poison": "109.png", "dragon": "", "water": "072.png", "ice": "", "rock": "", "dark": "", "fairy": "", "grass": "001.png", "bug": "015.png", "ground": "031.png"}, "dragon": {"dark": "", "fairy": "", "dragon": "147.png"}, "water": {"dark": "", "electric": "", "psychic": "121.png", "ice": "131.png", "dragon": "", "water": "099.png", "fairy": "", "grass": ""}, "fighting": {"ghost": "", "steel": "", "ice": "", "electric": "", "fire": "", "psychic": "", "flying": "", "poison": "", "dragon": "", "water": "062.png", "fighting": "066.png", "rock": "", "dark": "", "fairy": "", "grass": "", "bug": "", "ground": ""}, "rock": {"ghost": "", "steel": "", "electric": "", "fire": "", "psychic": "", "ice": "", "dragon": "", "water": "141.png", "rock": "", "dark": "", "fairy": "", "grass": "", "bug": ""}, "dark": {"dark": "", "fairy": ""}, "fairy": {"fairy": ""}, "grass": {"electric": "", "psychic": "102.png", "ice": "", "dragon": "", "dark": "", "fairy": "", "grass": "114.png"}, "bug": {"ghost": "", "steel": "", "electric": "", "fire": "", "psychic": "", "ice": "", "dragon": "", "water": "", "dark": "", "fairy": "", "grass": "047.png", "bug": "011.png"}, "ground": {"ghost": "", "steel": "", "electric": "", "fire": "", "psychic": "", "ice": "", "dragon": "", "water": "", "rock": "074.png", "dark": "", "fairy": "", "grass": "", "bug": "", "ground": "028.png"}}, "3": {"ghost": {"ghost": "356.png", "steel": "", "electric": "", "fire": "", "psychic": "", "ice": "", "dragon": "", "water": "", "dark": "302.png", "fairy": "", "grass": ""}, "steel": {"steel": "303.png", "dark": "", "electric": "082.png", "fire": "", "psychic": "376.png", "ice": "", "dragon": "", "water": "", "fairy": "", "grass": ""}, "ice": {"dark": "215.png", "fairy": "", "ice": "351-i.png", "dragon": ""}, "electric": {"electric": "179.png", "psychic": "", "ice": "", "dragon": "", "dark": "", "fairy": ""}, "normal": {"ghost": "", "steel": "", "ice": "", "electric": "", "normal": "234.png", "fire": "", "psychic": "203.png", "flying": "277.png", "poison": "", "dragon": "", "water": "", "fighting": "", "rock": "", "dark": "", "fairy": "", "grass": "", "bug": "", "ground": ""}, "fire": {"dark": "228.png", "electric": "", "fire": "038.png", "psychic": "", "ice": "", "dragon": "", "water": "", "fairy": "", "grass": ""}, "psychic": {"dark": "", "psychic": "065.png", "fairy": "", "ice": "124.png", "dragon": "380.png"}, "flying": {"ghost": "", "steel": "227.png", "electric": "145.png", "fire": "146.png", "psychic": "177.png", "flying": "", "poison": "042.png", "dragon": "149.png", "water": "279.png", "ice": "225.png", "rock": "142.png", "dark": "198.png", "fairy": "", "grass": "187.png", "bug": "166.png", "ground": "207.png"}, "poison": {"ghost": "093.png", "steel": "", "electric": "", "fire": "", "psychic": "", "poison": "030.png", "dragon": "", "water": "073.png", "ice": "", "rock": "", "dark": "", "fairy": "", "grass": "070.png", "bug": "014.png", "ground": "034.png"}, "dragon": {"dark": "", "fairy": "", "dragon": "147.png"}, "water": {"dark": "319.png", "electric": "171.png", "psychic": "080.png", "ice": "364.png", "dragon": "230.png", "water": "351-r.png", "fairy": "", "grass": "272.png"}, "fighting": {"ghost": "", "steel": "", "ice": "", "electric": "", "fire": "256.png", "psychic": "308.png", "flying": "", "poison": "", "dragon": "", "water": "062.png", "fighting": "107.png", "rock": "", "dark": "", "fairy": "", "grass": "286.png", "bug": "214.png", "ground": ""}, "rock": {"ghost": "", "steel": "304.png", "electric": "", "fire": "219.png", "psychic": "338.png", "ice": "", "dragon": "", "water": "140.png", "rock": "185.png", "dark": "248.png", "fairy": "", "grass": "346.png", "bug": "213.png"}, "dark": {"dark": "197.png", "fairy": ""}, "fairy": {"fairy": ""}, "grass": {"electric": "", "psychic": "102.png", "ice": "", "dragon": "", "dark": "332.png", "fairy": "", "grass": "114.png"}, "bug": {"ghost": "292.png", "steel": "205.png", "electric": "", "fire": "", "psychic": "", "ice": "", "dragon": "", "water": "283.png", "dark": "", "fairy": "", "grass": "047.png", "bug": "268.png"}, "ground": {"ghost": "", "steel": "208.png", "electric": "", "fire": "322.png", "psychic": "343.png", "ice": "221.png", "dragon": "329.png", "water": "259.png", "rock": "112.png", "dark": "", "fairy": "", "grass": "", "bug": "290.png", "ground": "232.png"}}, "2": {"ghost": {"ghost": "200.png", "steel": "", "electric": "", "fire": "", "psychic": "", "ice": "", "dragon": "", "water": "", "dark": "", "fairy": "", "grass": ""}, "steel": {"steel": "", "dark": "", "electric": "082.png", "fire": "", "psychic": "", "ice": "", "dragon": "", "water": "", "fairy": "", "grass": ""}, "ice": {"dark": "215.png", "fairy": "", "ice": "", "dragon": ""}, "electric": {"electric": "179.png", "psychic": "", "ice": "", "dragon": "", "dark": "", "fairy": ""}, "normal": {"ghost": "", "steel": "", "ice": "", "electric": "", "normal": "241.png", "fire": "", "psychic": "203.png", "flying": "085.png", "poison": "", "dragon": "", "water": "", "fighting": "", "rock": "", "dark": "", "fairy": "", "grass": "", "bug": "", "ground": ""}, "fire": {"dark": "229.png", "electric": "", "fire": "155.png", "psychic": "", "ice": "", "dragon": "", "water": "", "fairy": "", "grass": ""}, "psychic": {"dark": "", "psychic": "122.png", "fairy": "", "ice": "124.png", "dragon": ""}, "flying": {"ghost": "", "steel": "227.png", "electric": "145.png", "fire": "250.png", "psychic": "178.png", "flying": "", "poison": "042.png", "dragon": "149.png", "water": "130.png", "ice": "225.png", "rock": "142.png", "dark": "198.png", "fairy": "", "grass": "189.png", "bug": "123.png", "ground": "207.png"}, "poison": {"ghost": "093.png", "steel": "", "electric": "", "fire": "", "psychic": "", "poison": "029.png", "dragon": "", "water": "073.png", "ice": "", "rock": "", "dark": "", "fairy": "", "grass": "045.png", "bug": "013.png", "ground": "034.png"}, "dragon": {"dark": "", "fairy": "", "dragon": "147.png"}, "water": {"dark": "", "electric": "171.png", "psychic": "121.png", "ice": "131.png", "dragon": "230.png", "water": "098.png", "fairy": "", "grass": ""}, "fighting": {"ghost": "", "steel": "", "ice": "", "electric": "", "fire": "", "psychic": "", "flying": "", "poison": "", "dragon": "", "water": "062.png", "fighting": "057.png", "rock": "", "dark": "", "fairy": "", "grass": "", "bug": "214.png", "ground": ""}, "rock": {"ghost": "", "steel": "", "electric": "", "fire": "219.png", "psychic": "", "ice": "", "dragon": "", "water": "141.png", "rock": "185.png", "dark": "248.png", "fairy": "", "grass": "", "bug": "213.png"}, "dark": {"dark": "197.png", "fairy": ""}, "fairy": {"fairy": ""}, "grass": {"electric": "", "psychic": "251.png", "ice": "", "dragon": "", "dark": "", "fairy": "", "grass": "153.png"}, "bug": {"ghost": "", "steel": "212.png", "electric": "", "fire": "", "psychic": "", "ice": "", "dragon": "", "water": "", "dark": "", "fairy": "", "grass": "046.png", "bug": "127.png"}, "ground": {"ghost": "", "steel": "208.png", "electric": "", "fire": "", "psychic": "", "ice": "221.png", "dragon": "", "water": "195.png", "rock": "076.png", "dark": "", "fairy": "", "grass": "", "bug": "", "ground": "050.png"}}, "5": {"ghost": {"ghost": "562.png", "steel": "", "electric": "479.png", "fire": "609.png", "psychic": "", "ice": "478.png", "dragon": "487-o.png", "water": "592.png", "dark": "302.png", "fairy": "", "grass": ""}, "steel": {"steel": "493.png", "dark": "625.png", "electric": "081.png", "fire": "485.png", "psychic": "437.png", "ice": "", "dragon": "483.png", "water": "395.png", "fairy": "", "grass": "598.png"}, "ice": {"dark": "461.png", "fairy": "", "ice": "583.png", "dragon": "646-w.png"}, "electric": {"electric": "125.png", "psychic": "", "ice": "479-f.png", "dragon": "644.png", "dark": "", "fairy": ""}, "normal": {"ghost": "", "steel": "", "ice": "", "electric": "", "normal": "217.png", "fire": "", "psychic": "648.png", "flying": "396.png", "poison": "", "dragon": "", "water": "400.png", "fighting": "648-p.png", "rock": "", "dark": "", "fairy": "", "grass": "585.png", "bug": "", "ground": ""}, "fire": {"dark": "228.png", "electric": "479-h.png", "fire": "059.png", "psychic": "494.png", "ice": "", "dragon": "643.png", "water": "", "fairy": "", "grass": ""}, "psychic": {"dark": "", "psychic": "326.png", "fairy": "", "ice": "238.png", "dragon": "381.png"}, "flying": {"ghost": "425.png", "steel": "227.png", "electric": "145.png", "fire": "250.png", "psychic": "177.png", "flying": "641.png", "poison": "169.png", "dragon": "373.png", "water": "580.png", "ice": "144.png", "rock": "142.png", "dark": "629.png", "fairy": "", "grass": "188.png", "bug": "414.png", "ground": "645.png"}, "poison": {"ghost": "093.png", "steel": "", "electric": "", "fire": "", "psychic": "", "poison": "568.png", "dragon": "", "water": "211.png", "ice": "", "rock": "", "dark": "452.png", "fairy": "", "grass": "045.png", "bug": "013.png", "ground": "034.png"}, "dragon": {"dark": "633.png", "fairy": "", "dragon": "621.png"}, "water": {"dark": "342.png", "electric": "170.png", "psychic": "121.png", "ice": "364.png", "dragon": "484.png", "water": "535.png", "fairy": "", "grass": "271.png"}, "fighting": {"ghost": "", "steel": "638.png", "ice": "", "electric": "", "fire": "500.png", "psychic": "475.png", "flying": "", "poison": "454.png", "dragon": "", "water": "062.png", "fighting": "107.png", "rock": "639.png", "dark": "560.png", "fairy": "", "grass": "286.png", "bug": "214.png", "ground": ""}, "rock": {"ghost": "", "steel": "410.png", "electric": "", "fire": "219.png", "psychic": "338.png", "ice": "", "dragon": "", "water": "369.png", "rock": "493.png", "dark": "248.png", "fairy": "", "grass": "346.png", "bug": "213.png"}, "dark": {"dark": "491.png", "fairy": ""}, "fairy": {"fairy": ""}, "grass": {"electric": "479-m.png", "psychic": "251.png", "ice": "459.png", "dragon": "", "dark": "332.png", "fairy": "", "grass": "556.png"}, "bug": {"ghost": "292.png", "steel": "632.png", "electric": "595.png", "fire": "636.png", "psychic": "", "ice": "", "dragon": "", "water": "283.png", "dark": "", "fairy": "", "grass": "542.png", "bug": "011.png"}, "ground": {"ghost": "622.png", "steel": "208.png", "electric": "618.png", "fire": "322.png", "psychic": "344.png", "ice": "473.png", "dragon": "443.png", "water": "195.png", "rock": "247.png", "dark": "553.png", "fairy": "", "grass": "389.png", "bug": "413-s.png", "ground": "328.png"}}, "4": {"ghost": {"ghost": "355.png", "steel": "", "electric": "479-w.png", "fire": "", "psychic": "", "ice": "478.png", "dragon": "487.png", "water": "", "dark": "442.png", "fairy": "", "grass": ""}, "steel": {"steel": "379.png", "dark": "", "electric": "462.png", "fire": "485.png", "psychic": "374.png", "ice": "", "dragon": "483.png", "water": "395.png", "fairy": "", "grass": ""}, "ice": {"dark": "215.png", "fairy": "", "ice": "361.png", "dragon": ""}, "electric": {"electric": "239.png", "psychic": "", "ice": "", "dragon": "", "dark": "", "fairy": ""}, "normal": {"ghost": "", "steel": "", "ice": "", "electric": "", "normal": "161.png", "fire": "", "psychic": "203.png", "flying": "085.png", "poison": "", "dragon": "", "water": "400.png", "fighting": "", "rock": "", "dark": "", "fairy": "", "grass": "", "bug": "", "ground": ""}, "fire": {"dark": "229.png", "electric": "", "fire": "157.png", "psychic": "", "ice": "", "dragon": "", "water": "", "fairy": "", "grass": ""}, "psychic": {"dark": "", "psychic": "433.png", "fairy": "", "ice": "238.png", "dragon": "381.png"}, "flying": {"ghost": "425.png", "steel": "227.png", "electric": "145.png", "fire": "146.png", "psychic": "178.png", "flying": "493.png", "poison": "041.png", "dragon": "334.png", "water": "130.png", "ice": "225.png", "rock": "142.png", "dark": "430.png", "fairy": "", "grass": "187.png", "bug": "291.png", "ground": "207.png"}, "poison": {"ghost": "094.png", "steel": "", "electric": "", "fire": "", "psychic": "", "poison": "316.png", "dragon": "", "water": "073.png", "ice": "", "rock": "", "dark": "435.png", "fairy": "", "grass": "043.png", "bug": "013.png", "ground": "031.png"}, "dragon": {"dark": "", "fairy": "", "dragon": "493.png"}, "water": {"dark": "342.png", "electric": "170.png", "psychic": "199.png", "ice": "363.png", "dragon": "230.png", "water": "224.png", "fairy": "", "grass": "271.png"}, "fighting": {"ghost": "", "steel": "448.png", "ice": "", "electric": "", "fire": "392.png", "psychic": "307.png", "flying": "", "poison": "454.png", "dragon": "", "water": "062.png", "fighting": "237.png", "rock": "", "dark": "", "fairy": "", "grass": "286.png", "bug": "214.png", "ground": ""}, "rock": {"ghost": "", "steel": "476.png", "electric": "", "fire": "219.png", "psychic": "338.png", "ice": "", "dragon": "", "water": "139.png", "rock": "185.png", "dark": "248.png", "fairy": "", "grass": "345.png", "bug": "348.png"}, "dark": {"dark": "359.png", "fairy": ""}, "fairy": {"fairy": ""}, "grass": {"electric": "", "psychic": "251.png", "ice": "459.png", "dragon": "", "dark": "274.png", "fairy": "", "grass": "152.png"}, "bug": {"ghost": "292.png", "steel": "413-t.png", "electric": "", "fire": "", "psychic": "", "ice": "", "dragon": "", "water": "283.png", "dark": "", "fairy": "", "grass": "413.png", "bug": "401.png"}, "ground": {"ghost": "", "steel": "208.png", "electric": "", "fire": "323.png", "psychic": "344.png", "ice": "221.png", "dragon": "445.png", "water": "260.png", "rock": "112.png", "dark": "", "fairy": "", "grass": "389.png", "bug": "413-s.png", "ground": "105.png"}}, "7": {"ghost": {"ghost": "200.png", "steel": "680.png", "electric": "479.png", "fire": "105-a.png", "psychic": "720.png", "ice": "478.png", "dragon": "487-o.png", "water": "593.png", "dark": "302-m.png", "fairy": "778.png", "grass": "710.png"}, "steel": {"steel": "773.png", "dark": "624.png", "electric": "082.png", "fire": "485.png", "psychic": "375.png", "ice": "027-a.png", "dragon": "483.png", "water": "395.png", "fairy": "303.png", "grass": "798.png"}, "ice": {"dark": "461.png", "fairy": "038-a.png", "ice": "378.png", "dragon": "646-b.png"}, "electric": {"electric": "403.png", "psychic": "026-a.png", "ice": "479-f.png", "dragon": "644.png", "dark": "", "fairy": "702.png"}, "normal": {"ghost": "", "steel": "", "ice": "", "electric": "694.png", "normal": "301.png", "fire": "668.png", "psychic": "648.png", "flying": "083.png", "poison": "", "dragon": "780.png", "water": "400.png", "fighting": "428-m.png", "rock": "", "dark": "019-a.png", "fairy": "174.png", "grass": "585.png", "bug": "", "ground": "660.png"}, "fire": {"dark": "228.png", "electric": "479-h.png", "fire": "156.png", "psychic": "494.png", "ice": "", "dragon": "643.png", "water": "721.png", "fairy": "", "grass": ""}, "psychic": {"dark": "687.png", "psychic": "678.png", "fairy": "280.png", "ice": "124.png", "dragon": "381.png"}, "flying": {"ghost": "426.png", "steel": "797.png", "electric": "145.png", "fire": "662.png", "psychic": "561.png", "flying": "641.png", "poison": "169.png", "dragon": "715.png", "water": "130.png", "ice": "225.png", "rock": "142.png", "dark": "198.png", "fairy": "468.png", "grass": "492-s.png", "bug": "291.png", "ground": "645.png"}, "poison": {"ghost": "092.png", "steel": "", "electric": "", "fire": "758.png", "psychic": "", "poison": "110.png", "dragon": "691.png", "water": "211.png", "ice": "", "rock": "793.png", "dark": "089-a.png", "fairy": "", "grass": "590.png", "bug": "167.png", "ground": "034.png"}, "dragon": {"dark": "799.png", "fairy": "334-m.png", "dragon": "147.png"}, "water": {"dark": "130-m.png", "electric": "171.png", "psychic": "199.png", "ice": "087.png", "dragon": "230.png", "water": "009.png", "fairy": "183.png", "grass": "271.png"}, "fighting": {"ghost": "802.png", "steel": "448-m.png", "ice": "740.png", "electric": "", "fire": "256.png", "psychic": "475-m.png", "flying": "701.png", "poison": "454.png", "dragon": "783.png", "water": "647.png", "fighting": "106.png", "rock": "639.png", "dark": "675.png", "fairy": "", "grass": "286.png", "bug": "795.png", "ground": ""}, "rock": {"ghost": "", "steel": "410.png", "electric": "075-a.png", "fire": "219.png", "psychic": "337.png", "ice": "699.png", "dragon": "697.png", "water": "140.png", "rock": "377.png", "dark": "248-m.png", "fairy": "719-m.png", "grass": "346.png", "bug": "557.png"}, "dark": {"dark": "359.png", "fairy": ""}, "fairy": {"fairy": "173.png"}, "grass": {"electric": "479-m.png", "psychic": "251.png", "ice": "460-m.png", "dragon": "254-m.png", "dark": "275.png", "fairy": "547.png", "grass": "388.png"}, "bug": {"ghost": "292.png", "steel": "413-t.png", "electric": "596.png", "fire": "637.png", "psychic": "", "ice": "", "dragon": "", "water": "752.png", "dark": "", "fairy": "742.png", "grass": "540.png", "bug": "736.png"}, "ground": {"ghost": "770.png", "steel": "530.png", "electric": "618.png", "fire": "383-p.png", "psychic": "343.png", "ice": "220.png", "dragon": "718-10.png", "water": "537.png", "rock": "247.png", "dark": "553.png", "fairy": "", "grass": "389.png", "bug": "413-s.png", "ground": "529.png"}}, "6": {"ghost": {"ghost": "356.png", "steel": "679.png", "electric": "479.png", "fire": "608.png", "psychic": "720.png", "ice": "478.png", "dragon": "487-o.png", "water": "592.png", "dark": "302.png", "fairy": "", "grass": "711.png"}, "steel": {"steel": "493.png", "dark": "625.png", "electric": "082.png", "fire": "485.png", "psychic": "436.png", "ice": "", "dragon": "483.png", "water": "395.png", "fairy": "303-m.png", "grass": "598.png"}, "ice": {"dark": "461.png", "fairy": "", "ice": "493.png", "dragon": "646-w.png"}, "electric": {"electric": "404.png", "psychic": "", "ice": "479-f.png", "dragon": "644.png", "dark": "", "fairy": "702.png"}, "normal": {"ghost": "", "steel": "", "ice": "", "electric": "694.png", "normal": "206.png", "fire": "668.png", "psychic": "203.png", "flying": "084.png", "poison": "", "dragon": "", "water": "400.png", "fighting": "648-p.png", "rock": "", "dark": "", "fairy": "298.png", "grass": "586.png", "bug": "", "ground": "660.png"}, "fire": {"dark": "229.png", "electric": "479-h.png", "fire": "554.png", "psychic": "655.png", "ice": "", "dragon": "006-mx.png", "water": "721.png", "fairy": "", "grass": ""}, "psychic": {"dark": "686.png", "psychic": "677.png", "fairy": "280.png", "ice": "238.png", "dragon": "380-m.png"}, "flying": {"ghost": "426.png", "steel": "227.png", "electric": "587.png", "fire": "662.png", "psychic": "178.png", "flying": "641-s.png", "poison": "042.png", "dragon": "373-m.png", "water": "581.png", "ice": "225.png", "rock": "142-m.png", "dark": "717.png", "fairy": "176.png", "grass": "188.png", "bug": "414.png", "ground": "472.png"}, "poison": {"ghost": "093.png", "steel": "", "electric": "", "fire": "", "psychic": "", "poison": "336.png", "dragon": "691.png", "water": "690.png", "ice": "", "rock": "", "dark": "452.png", "fairy": "", "grass": "406.png", "bug": "543.png", "ground": "034.png"}, "dragon": {"dark": "635.png", "fairy": "334-m.png", "dragon": "621.png"}, "water": {"dark": "319.png", "electric": "171.png", "psychic": "079.png", "ice": "091.png", "dragon": "484.png", "water": "489.png", "fairy": "183.png", "grass": "271.png"}, "fighting": {"ghost": "", "steel": "448.png", "ice": "", "electric": "", "fire": "256.png", "psychic": "307.png", "flying": "701.png", "poison": "454.png", "dragon": "", "water": "647.png", "fighting": "237.png", "rock": "639.png", "dark": "675.png", "fairy": "", "grass": "286.png", "bug": "214-m.png", "ground": ""}, "rock": {"ghost": "", "steel": "306.png", "electric": "", "fire": "219.png", "psychic": "338.png", "ice": "698.png", "dragon": "696.png", "water": "139.png", "rock": "299.png", "dark": "248.png", "fairy": "719-m.png", "grass": "345.png", "bug": "558.png"}, "dark": {"dark": "359-m.png", "fairy": ""}, "fairy": {"fairy": "210.png"}, "grass": {"electric": "479-m.png", "psychic": "103.png", "ice": "460-m.png", "dragon": "254-m.png", "dark": "275.png", "fairy": "547.png", "grass": "253.png"}, "bug": {"ghost": "292.png", "steel": "205.png", "electric": "595.png", "fire": "636.png", "psychic": "", "ice": "", "dragon": "", "water": "283.png", "dark": "", "fairy": "", "grass": "047.png", "bug": "266.png"}, "ground": {"ghost": "623.png", "steel": "208-m.png", "electric": "618.png", "fire": "323-m.png", "psychic": "343.png", "ice": "220.png", "dragon": "445-m.png", "water": "260-m.png", "rock": "246.png", "dark": "552.png", "fairy": "", "grass": "389.png", "bug": "413-s.png", "ground": "050.png"}}};
const COLORS = ['#BBBDAF', 
				'#A35449', 
				'#75A4F9', 
				'#AD5CA2', 
				'#F0CA42', 
				'#CDBD72', 
				'#C3D221', 
				'#7673DA', 
				'#C3C1D7', 
				'#F95643', 
				'#53AFFE', 
				'#8ED752', 
				'#F8E64E', 
				'#FB61B4', 
				'#66EBFF', 
				'#8B76FF', 
				'#8E6856', 
				'#F9AEFE'];

const TYPES = ['normal',
			   'fighting',
			   'flying',
			   'poison',
			   'ground',
			   'rock', 
			   'bug', 
			   'ghost', 
			   'steel', 
			   'fire', 
			   'water',
			   'grass', 
			   'electric', 
			   'psychic',
			   'ice', 
			   'dragon', 
			   'dark', 
			   'fairy']; 

var PATH = 'lib/assets/sprites/';
var PATH2 = 'lib/assets/types/';
var uniqueTableDiv = document.getElementById('uniqueTableDiv');


function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        b: parseInt(result[2], 16),
        g: parseInt(result[3], 16)
    } : null;
}


function tipColor(rgbObj1, rgbObj2) {
	if (rgbObj1 == null || rgbObj2 == null) {
		return null;
	}
 	avgR = Math.floor(rgbObj1['r'] * 0.7 + rgbObj2['r'] * 0.3);
	avgG = Math.floor(rgbObj1['b'] * 0.7 + rgbObj2['b'] * 0.3);	
	avgB = Math.floor(rgbObj1['g'] * 0.7 + rgbObj2['g'] * 0.3);
	return {r: avgR, g: avgG, b: avgB}
}


function getPokePath(i, j, gen) {
	first = TYPES[i - 1]; 
	second = TYPES[j - 1]; 
	gen = String(gen);

	current = DATA[gen];
	if (current[first] && current[first][second]) {
		return current[first][second];
	} else if (current[second] && current[second][first]) {
		return current[second][first];
	}
	return '';
}


function getTypePath(i) {
	return TYPES[i - 1] + '.gif'
}


function createTable(gen) {
	var i;
	var j;
	
	// We are not appending to body
	// var body = document.getElementsByTagName('body')[0];

	var tbl = document.createElement('table');
	tbl.id = 'uniqueTable';
	var tblBody = document.createElement('tbody');

	// cells creation
	for (i = 0; i < 19; i++) {
		var row = document.createElement('tr');

		for (j = 0; j < 19; j++) {
			var cell = document.createElement('td');
			cell.style.height = '32px';
			cell.style.width = '32px';
			var img = document.createElement('img');

			if (i == 0 && j == 0) {

			} else if (i == 0) {
				img.setAttribute('src', PATH2 + getTypePath(j));
				cell.style.backgroundColor = COLORS[j - 1];
				cell.id = 'type';
			} else if (j == 0) {
				img.setAttribute('src', PATH2 + getTypePath(i));
				cell.style.backgroundColor = COLORS[i - 1];

			} else {
				pokePath = getPokePath(i, j, gen);
				if (pokePath != '') {
					img.setAttribute('src', PATH + pokePath);
				}
				iColor = hexToRgb(COLORS[j - 1]);
				jColor = hexToRgb(COLORS[i - 1]);
				average_color = tipColor(jColor, iColor);
				r = average_color['r'];
				b = average_color['b'];
				g = average_color['g'];

				cell.style.backgroundColor = 'rgba(' + r + ',' + g + ',' + b + ',0.7)';
			}
			cell.appendChild(img);
			row.appendChild(cell);

		}
		tblBody.appendChild(row);
	}

	tbl.appendChild(tblBody);
	uniqueTableDiv.appendChild(tbl);
}

var generationSelect = document.getElementById('generationSelect');
generation = generationSelect.value;
createTable(generation);

generationSelect.addEventListener('change', function() {
	uniqueTableDiv.removeChild(document.getElementById('uniqueTable'));
	generation = generationSelect.value;
	createTable(generation);
});
