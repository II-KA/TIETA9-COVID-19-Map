// these used to be fetched from api provided by staff, which is now down.
// using this as a backup until I get around finding a similar api
const countries = [
  {
    name: "Afghanistan",
    alpha2Code: "AF",
    alpha3Code: "AFG",
    capital: "Kabul",
    region: "Asia",
    population: 27657145,
  },
  {
    name: "Åland Islands",
    alpha2Code: "AX",
    alpha3Code: "ALA",
    capital: "Mariehamn",
    region: "Europe",
    population: 28875,
  },
  {
    name: "Albania",
    alpha2Code: "AL",
    alpha3Code: "ALB",
    capital: "Tirana",
    region: "Europe",
    population: 2886026,
  },
  {
    name: "Algeria",
    alpha2Code: "DZ",
    alpha3Code: "DZA",
    capital: "Algiers",
    region: "Africa",
    population: 40400000,
  },
  {
    name: "American Samoa",
    alpha2Code: "AS",
    alpha3Code: "ASM",
    capital: "Pago Pago",
    region: "Oceania",
    population: 57100,
  },
  {
    name: "Andorra",
    alpha2Code: "AD",
    alpha3Code: "AND",
    capital: "Andorra la Vella",
    region: "Europe",
    population: 78014,
  },
  {
    name: "Angola",
    alpha2Code: "AO",
    alpha3Code: "AGO",
    capital: "Luanda",
    region: "Africa",
    population: 25868000,
  },
  {
    name: "Anguilla",
    alpha2Code: "AI",
    alpha3Code: "AIA",
    capital: "The Valley",
    region: "Americas",
    population: 13452,
  },
  {
    name: "Antarctica",
    alpha2Code: "AQ",
    alpha3Code: "ATA",
    capital: "",
    region: "Polar",
    population: 1000,
  },
  {
    name: "Antigua and Barbuda",
    alpha2Code: "AG",
    alpha3Code: "ATG",
    capital: "Saint John's",
    region: "Americas",
    population: 86295,
  },
  {
    name: "Argentina",
    alpha2Code: "AR",
    alpha3Code: "ARG",
    capital: "Buenos Aires",
    region: "Americas",
    population: 43590400,
  },
  {
    name: "Armenia",
    alpha2Code: "AM",
    alpha3Code: "ARM",
    capital: "Yerevan",
    region: "Asia",
    population: 2994400,
  },
  {
    name: "Aruba",
    alpha2Code: "AW",
    alpha3Code: "ABW",
    capital: "Oranjestad",
    region: "Americas",
    population: 107394,
  },
  {
    name: "Australia",
    alpha2Code: "AU",
    alpha3Code: "AUS",
    capital: "Canberra",
    region: "Oceania",
    population: 24117360,
  },
  {
    name: "Austria",
    alpha2Code: "AT",
    alpha3Code: "AUT",
    capital: "Vienna",
    region: "Europe",
    population: 8725931,
  },
  {
    name: "Azerbaijan",
    alpha2Code: "AZ",
    alpha3Code: "AZE",
    capital: "Baku",
    region: "Asia",
    population: 9730500,
  },
  {
    name: "Bahamas",
    alpha2Code: "BS",
    alpha3Code: "BHS",
    capital: "Nassau",
    region: "Americas",
    population: 378040,
  },
  {
    name: "Bahrain",
    alpha2Code: "BH",
    alpha3Code: "BHR",
    capital: "Manama",
    region: "Asia",
    population: 1404900,
  },
  {
    name: "Bangladesh",
    alpha2Code: "BD",
    alpha3Code: "BGD",
    capital: "Dhaka",
    region: "Asia",
    population: 161006790,
  },
  {
    name: "Barbados",
    alpha2Code: "BB",
    alpha3Code: "BRB",
    capital: "Bridgetown",
    region: "Americas",
    population: 285000,
  },
  {
    name: "Belarus",
    alpha2Code: "BY",
    alpha3Code: "BLR",
    capital: "Minsk",
    region: "Europe",
    population: 9498700,
  },
  {
    name: "Belgium",
    alpha2Code: "BE",
    alpha3Code: "BEL",
    capital: "Brussels",
    region: "Europe",
    population: 11319511,
  },
  {
    name: "Belize",
    alpha2Code: "BZ",
    alpha3Code: "BLZ",
    capital: "Belmopan",
    region: "Americas",
    population: 370300,
  },
  {
    name: "Benin",
    alpha2Code: "BJ",
    alpha3Code: "BEN",
    capital: "Porto-Novo",
    region: "Africa",
    population: 10653654,
  },
  {
    name: "Bermuda",
    alpha2Code: "BM",
    alpha3Code: "BMU",
    capital: "Hamilton",
    region: "Americas",
    population: 61954,
  },
  {
    name: "Bhutan",
    alpha2Code: "BT",
    alpha3Code: "BTN",
    capital: "Thimphu",
    region: "Asia",
    population: 775620,
  },
  {
    name: "Bolivia (Plurinational State of)",
    alpha2Code: "BO",
    alpha3Code: "BOL",
    capital: "Sucre",
    region: "Americas",
    population: 10985059,
  },
  {
    name: "Bonaire, Sint Eustatius and Saba",
    alpha2Code: "BQ",
    alpha3Code: "BES",
    capital: "Kralendijk",
    region: "Americas",
    population: 17408,
  },
  {
    name: "Bosnia and Herzegovina",
    alpha2Code: "BA",
    alpha3Code: "BIH",
    capital: "Sarajevo",
    region: "Europe",
    population: 3531159,
  },
  {
    name: "Botswana",
    alpha2Code: "BW",
    alpha3Code: "BWA",
    capital: "Gaborone",
    region: "Africa",
    population: 2141206,
  },
  {
    name: "Bouvet Island",
    alpha2Code: "BV",
    alpha3Code: "BVT",
    capital: "",
    region: "",
    population: 0,
  },
  {
    name: "Brazil",
    alpha2Code: "BR",
    alpha3Code: "BRA",
    capital: "Brasília",
    region: "Americas",
    population: 206135893,
  },
  {
    name: "British Indian Ocean Territory",
    alpha2Code: "IO",
    alpha3Code: "IOT",
    capital: "Diego Garcia",
    region: "Africa",
    population: 3000,
  },
  {
    name: "United States Minor Outlying Islands",
    alpha2Code: "UM",
    alpha3Code: "UMI",
    capital: "",
    region: "Americas",
    population: 300,
  },
  {
    name: "Virgin Islands (British)",
    alpha2Code: "VG",
    alpha3Code: "VGB",
    capital: "Road Town",
    region: "Americas",
    population: 28514,
  },
  {
    name: "Virgin Islands (U.S.)",
    alpha2Code: "VI",
    alpha3Code: "VIR",
    capital: "Charlotte Amalie",
    region: "Americas",
    population: 114743,
  },
  {
    name: "Brunei Darussalam",
    alpha2Code: "BN",
    alpha3Code: "BRN",
    capital: "Bandar Seri Begawan",
    region: "Asia",
    population: 411900,
  },
  {
    name: "Bulgaria",
    alpha2Code: "BG",
    alpha3Code: "BGR",
    capital: "Sofia",
    region: "Europe",
    population: 7153784,
  },
  {
    name: "Burkina Faso",
    alpha2Code: "BF",
    alpha3Code: "BFA",
    capital: "Ouagadougou",
    region: "Africa",
    population: 19034397,
  },
  {
    name: "Burundi",
    alpha2Code: "BI",
    alpha3Code: "BDI",
    capital: "Bujumbura",
    region: "Africa",
    population: 10114505,
  },
  {
    name: "Cambodia",
    alpha2Code: "KH",
    alpha3Code: "KHM",
    capital: "Phnom Penh",
    region: "Asia",
    population: 15626444,
  },
  {
    name: "Cameroon",
    alpha2Code: "CM",
    alpha3Code: "CMR",
    capital: "Yaoundé",
    region: "Africa",
    population: 22709892,
  },
  {
    name: "Canada",
    alpha2Code: "CA",
    alpha3Code: "CAN",
    capital: "Ottawa",
    region: "Americas",
    population: 36155487,
  },
  {
    name: "Cabo Verde",
    alpha2Code: "CV",
    alpha3Code: "CPV",
    capital: "Praia",
    region: "Africa",
    population: 531239,
  },
  {
    name: "Cayman Islands",
    alpha2Code: "KY",
    alpha3Code: "CYM",
    capital: "George Town",
    region: "Americas",
    population: 58238,
  },
  {
    name: "Central African Republic",
    alpha2Code: "CF",
    alpha3Code: "CAF",
    capital: "Bangui",
    region: "Africa",
    population: 4998000,
  },
  {
    name: "Chad",
    alpha2Code: "TD",
    alpha3Code: "TCD",
    capital: "N'Djamena",
    region: "Africa",
    population: 14497000,
  },
  {
    name: "Chile",
    alpha2Code: "CL",
    alpha3Code: "CHL",
    capital: "Santiago",
    region: "Americas",
    population: 18191900,
  },
  {
    name: "China",
    alpha2Code: "CN",
    alpha3Code: "CHN",
    capital: "Beijing",
    region: "Asia",
    population: 1377422166,
  },
  {
    name: "Christmas Island",
    alpha2Code: "CX",
    alpha3Code: "CXR",
    capital: "Flying Fish Cove",
    region: "Oceania",
    population: 2072,
  },
  {
    name: "Cocos (Keeling) Islands",
    alpha2Code: "CC",
    alpha3Code: "CCK",
    capital: "West Island",
    region: "Oceania",
    population: 550,
  },
  {
    name: "Colombia",
    alpha2Code: "CO",
    alpha3Code: "COL",
    capital: "Bogotá",
    region: "Americas",
    population: 48759958,
  },
  {
    name: "Comoros",
    alpha2Code: "KM",
    alpha3Code: "COM",
    capital: "Moroni",
    region: "Africa",
    population: 806153,
  },
  {
    name: "Congo",
    alpha2Code: "CG",
    alpha3Code: "COG",
    capital: "Brazzaville",
    region: "Africa",
    population: 4741000,
  },
  {
    name: "Congo (Democratic Republic of the)",
    alpha2Code: "CD",
    alpha3Code: "COD",
    capital: "Kinshasa",
    region: "Africa",
    population: 85026000,
  },
  {
    name: "Cook Islands",
    alpha2Code: "CK",
    alpha3Code: "COK",
    capital: "Avarua",
    region: "Oceania",
    population: 18100,
  },
  {
    name: "Costa Rica",
    alpha2Code: "CR",
    alpha3Code: "CRI",
    capital: "San José",
    region: "Americas",
    population: 4890379,
  },
  {
    name: "Croatia",
    alpha2Code: "HR",
    alpha3Code: "HRV",
    capital: "Zagreb",
    region: "Europe",
    population: 4190669,
  },
  {
    name: "Cuba",
    alpha2Code: "CU",
    alpha3Code: "CUB",
    capital: "Havana",
    region: "Americas",
    population: 11239004,
  },
  {
    name: "Curaçao",
    alpha2Code: "CW",
    alpha3Code: "CUW",
    capital: "Willemstad",
    region: "Americas",
    population: 154843,
  },
  {
    name: "Cyprus",
    alpha2Code: "CY",
    alpha3Code: "CYP",
    capital: "Nicosia",
    region: "Europe",
    population: 847000,
  },
  {
    name: "Czech Republic",
    alpha2Code: "CZ",
    alpha3Code: "CZE",
    capital: "Prague",
    region: "Europe",
    population: 10558524,
  },
  {
    name: "Denmark",
    alpha2Code: "DK",
    alpha3Code: "DNK",
    capital: "Copenhagen",
    region: "Europe",
    population: 5717014,
  },
  {
    name: "Djibouti",
    alpha2Code: "DJ",
    alpha3Code: "DJI",
    capital: "Djibouti",
    region: "Africa",
    population: 900000,
  },
  {
    name: "Dominica",
    alpha2Code: "DM",
    alpha3Code: "DMA",
    capital: "Roseau",
    region: "Americas",
    population: 71293,
  },
  {
    name: "Dominican Republic",
    alpha2Code: "DO",
    alpha3Code: "DOM",
    capital: "Santo Domingo",
    region: "Americas",
    population: 10075045,
  },
  {
    name: "Ecuador",
    alpha2Code: "EC",
    alpha3Code: "ECU",
    capital: "Quito",
    region: "Americas",
    population: 16545799,
  },
  {
    name: "Egypt",
    alpha2Code: "EG",
    alpha3Code: "EGY",
    capital: "Cairo",
    region: "Africa",
    population: 91290000,
  },
  {
    name: "El Salvador",
    alpha2Code: "SV",
    alpha3Code: "SLV",
    capital: "San Salvador",
    region: "Americas",
    population: 6520675,
  },
  {
    name: "Equatorial Guinea",
    alpha2Code: "GQ",
    alpha3Code: "GNQ",
    capital: "Malabo",
    region: "Africa",
    population: 1222442,
  },
  {
    name: "Eritrea",
    alpha2Code: "ER",
    alpha3Code: "ERI",
    capital: "Asmara",
    region: "Africa",
    population: 5352000,
  },
  {
    name: "Estonia",
    alpha2Code: "EE",
    alpha3Code: "EST",
    capital: "Tallinn",
    region: "Europe",
    population: 1315944,
  },
  {
    name: "Ethiopia",
    alpha2Code: "ET",
    alpha3Code: "ETH",
    capital: "Addis Ababa",
    region: "Africa",
    population: 92206005,
  },
  {
    name: "Falkland Islands (Malvinas)",
    alpha2Code: "FK",
    alpha3Code: "FLK",
    capital: "Stanley",
    region: "Americas",
    population: 2563,
  },
  {
    name: "Faroe Islands",
    alpha2Code: "FO",
    alpha3Code: "FRO",
    capital: "Tórshavn",
    region: "Europe",
    population: 49376,
  },
  {
    name: "Fiji",
    alpha2Code: "FJ",
    alpha3Code: "FJI",
    capital: "Suva",
    region: "Oceania",
    population: 867000,
  },
  {
    name: "Finland",
    alpha2Code: "FI",
    alpha3Code: "FIN",
    capital: "Helsinki",
    region: "Europe",
    population: 5491817,
  },
  {
    name: "France",
    alpha2Code: "FR",
    alpha3Code: "FRA",
    capital: "Paris",
    region: "Europe",
    population: 66710000,
  },
  {
    name: "French Guiana",
    alpha2Code: "GF",
    alpha3Code: "GUF",
    capital: "Cayenne",
    region: "Americas",
    population: 254541,
  },
  {
    name: "French Polynesia",
    alpha2Code: "PF",
    alpha3Code: "PYF",
    capital: "Papeetē",
    region: "Oceania",
    population: 271800,
  },
  {
    name: "French Southern Territories",
    alpha2Code: "TF",
    alpha3Code: "ATF",
    capital: "Port-aux-Français",
    region: "Africa",
    population: 140,
  },
  {
    name: "Gabon",
    alpha2Code: "GA",
    alpha3Code: "GAB",
    capital: "Libreville",
    region: "Africa",
    population: 1802278,
  },
  {
    name: "Gambia",
    alpha2Code: "GM",
    alpha3Code: "GMB",
    capital: "Banjul",
    region: "Africa",
    population: 1882450,
  },
  {
    name: "Georgia",
    alpha2Code: "GE",
    alpha3Code: "GEO",
    capital: "Tbilisi",
    region: "Asia",
    population: 3720400,
  },
  {
    name: "Germany",
    alpha2Code: "DE",
    alpha3Code: "DEU",
    capital: "Berlin",
    region: "Europe",
    population: 81770900,
  },
  {
    name: "Ghana",
    alpha2Code: "GH",
    alpha3Code: "GHA",
    capital: "Accra",
    region: "Africa",
    population: 27670174,
  },
  {
    name: "Gibraltar",
    alpha2Code: "GI",
    alpha3Code: "GIB",
    capital: "Gibraltar",
    region: "Europe",
    population: 33140,
  },
  {
    name: "Greece",
    alpha2Code: "GR",
    alpha3Code: "GRC",
    capital: "Athens",
    region: "Europe",
    population: 10858018,
  },
  {
    name: "Greenland",
    alpha2Code: "GL",
    alpha3Code: "GRL",
    capital: "Nuuk",
    region: "Americas",
    population: 55847,
  },
  {
    name: "Grenada",
    alpha2Code: "GD",
    alpha3Code: "GRD",
    capital: "St. George's",
    region: "Americas",
    population: 103328,
  },
  {
    name: "Guadeloupe",
    alpha2Code: "GP",
    alpha3Code: "GLP",
    capital: "Basse-Terre",
    region: "Americas",
    population: 400132,
  },
  {
    name: "Guam",
    alpha2Code: "GU",
    alpha3Code: "GUM",
    capital: "Hagåtña",
    region: "Oceania",
    population: 184200,
  },
  {
    name: "Guatemala",
    alpha2Code: "GT",
    alpha3Code: "GTM",
    capital: "Guatemala City",
    region: "Americas",
    population: 16176133,
  },
  {
    name: "Guernsey",
    alpha2Code: "GG",
    alpha3Code: "GGY",
    capital: "St. Peter Port",
    region: "Europe",
    population: 62999,
  },
  {
    name: "Guinea",
    alpha2Code: "GN",
    alpha3Code: "GIN",
    capital: "Conakry",
    region: "Africa",
    population: 12947000,
  },
  {
    name: "Guinea-Bissau",
    alpha2Code: "GW",
    alpha3Code: "GNB",
    capital: "Bissau",
    region: "Africa",
    population: 1547777,
  },
  {
    name: "Guyana",
    alpha2Code: "GY",
    alpha3Code: "GUY",
    capital: "Georgetown",
    region: "Americas",
    population: 746900,
  },
  {
    name: "Haiti",
    alpha2Code: "HT",
    alpha3Code: "HTI",
    capital: "Port-au-Prince",
    region: "Americas",
    population: 11078033,
  },
  {
    name: "Heard Island and McDonald Islands",
    alpha2Code: "HM",
    alpha3Code: "HMD",
    capital: "",
    region: "",
    population: 0,
  },
  {
    name: "Holy See",
    alpha2Code: "VA",
    alpha3Code: "VAT",
    capital: "Rome",
    region: "Europe",
    population: 451,
  },
  {
    name: "Honduras",
    alpha2Code: "HN",
    alpha3Code: "HND",
    capital: "Tegucigalpa",
    region: "Americas",
    population: 8576532,
  },
  {
    name: "Hong Kong",
    alpha2Code: "HK",
    alpha3Code: "HKG",
    capital: "City of Victoria",
    region: "Asia",
    population: 7324300,
  },
  {
    name: "Hungary",
    alpha2Code: "HU",
    alpha3Code: "HUN",
    capital: "Budapest",
    region: "Europe",
    population: 9823000,
  },
  {
    name: "Iceland",
    alpha2Code: "IS",
    alpha3Code: "ISL",
    capital: "Reykjavík",
    region: "Europe",
    population: 334300,
  },
  {
    name: "India",
    alpha2Code: "IN",
    alpha3Code: "IND",
    capital: "New Delhi",
    region: "Asia",
    population: 1295210000,
  },
  {
    name: "Indonesia",
    alpha2Code: "ID",
    alpha3Code: "IDN",
    capital: "Jakarta",
    region: "Asia",
    population: 258705000,
  },
  {
    name: "Côte d'Ivoire",
    alpha2Code: "CI",
    alpha3Code: "CIV",
    capital: "Yamoussoukro",
    region: "Africa",
    population: 22671331,
  },
  {
    name: "Iran (Islamic Republic of)",
    alpha2Code: "IR",
    alpha3Code: "IRN",
    capital: "Tehran",
    region: "Asia",
    population: 79369900,
  },
  {
    name: "Iraq",
    alpha2Code: "IQ",
    alpha3Code: "IRQ",
    capital: "Baghdad",
    region: "Asia",
    population: 37883543,
  },
  {
    name: "Ireland",
    alpha2Code: "IE",
    alpha3Code: "IRL",
    capital: "Dublin",
    region: "Europe",
    population: 6378000,
  },
  {
    name: "Isle of Man",
    alpha2Code: "IM",
    alpha3Code: "IMN",
    capital: "Douglas",
    region: "Europe",
    population: 84497,
  },
  {
    name: "Israel",
    alpha2Code: "IL",
    alpha3Code: "ISR",
    capital: "Jerusalem",
    region: "Asia",
    population: 8527400,
  },
  {
    name: "Italy",
    alpha2Code: "IT",
    alpha3Code: "ITA",
    capital: "Rome",
    region: "Europe",
    population: 60665551,
  },
  {
    name: "Jamaica",
    alpha2Code: "JM",
    alpha3Code: "JAM",
    capital: "Kingston",
    region: "Americas",
    population: 2723246,
  },
  {
    name: "Japan",
    alpha2Code: "JP",
    alpha3Code: "JPN",
    capital: "Tokyo",
    region: "Asia",
    population: 126960000,
  },
  {
    name: "Jersey",
    alpha2Code: "JE",
    alpha3Code: "JEY",
    capital: "Saint Helier",
    region: "Europe",
    population: 100800,
  },
  {
    name: "Jordan",
    alpha2Code: "JO",
    alpha3Code: "JOR",
    capital: "Amman",
    region: "Asia",
    population: 9531712,
  },
  {
    name: "Kazakhstan",
    alpha2Code: "KZ",
    alpha3Code: "KAZ",
    capital: "Astana",
    region: "Asia",
    population: 17753200,
  },
  {
    name: "Kenya",
    alpha2Code: "KE",
    alpha3Code: "KEN",
    capital: "Nairobi",
    region: "Africa",
    population: 47251000,
  },
  {
    name: "Kiribati",
    alpha2Code: "KI",
    alpha3Code: "KIR",
    capital: "South Tarawa",
    region: "Oceania",
    population: 113400,
  },
  {
    name: "Kuwait",
    alpha2Code: "KW",
    alpha3Code: "KWT",
    capital: "Kuwait City",
    region: "Asia",
    population: 4183658,
  },
  {
    name: "Kyrgyzstan",
    alpha2Code: "KG",
    alpha3Code: "KGZ",
    capital: "Bishkek",
    region: "Asia",
    population: 6047800,
  },
  {
    name: "Lao People's Democratic Republic",
    alpha2Code: "LA",
    alpha3Code: "LAO",
    capital: "Vientiane",
    region: "Asia",
    population: 6492400,
  },
  {
    name: "Latvia",
    alpha2Code: "LV",
    alpha3Code: "LVA",
    capital: "Riga",
    region: "Europe",
    population: 1961600,
  },
  {
    name: "Lebanon",
    alpha2Code: "LB",
    alpha3Code: "LBN",
    capital: "Beirut",
    region: "Asia",
    population: 5988000,
  },
  {
    name: "Lesotho",
    alpha2Code: "LS",
    alpha3Code: "LSO",
    capital: "Maseru",
    region: "Africa",
    population: 1894194,
  },
  {
    name: "Liberia",
    alpha2Code: "LR",
    alpha3Code: "LBR",
    capital: "Monrovia",
    region: "Africa",
    population: 4615000,
  },
  {
    name: "Libya",
    alpha2Code: "LY",
    alpha3Code: "LBY",
    capital: "Tripoli",
    region: "Africa",
    population: 6385000,
  },
  {
    name: "Liechtenstein",
    alpha2Code: "LI",
    alpha3Code: "LIE",
    capital: "Vaduz",
    region: "Europe",
    population: 37623,
  },
  {
    name: "Lithuania",
    alpha2Code: "LT",
    alpha3Code: "LTU",
    capital: "Vilnius",
    region: "Europe",
    population: 2872294,
  },
  {
    name: "Luxembourg",
    alpha2Code: "LU",
    alpha3Code: "LUX",
    capital: "Luxembourg",
    region: "Europe",
    population: 576200,
  },
  {
    name: "Macao",
    alpha2Code: "MO",
    alpha3Code: "MAC",
    capital: "",
    region: "Asia",
    population: 649100,
  },
  {
    name: "Macedonia (the former Yugoslav Republic of)",
    alpha2Code: "MK",
    alpha3Code: "MKD",
    capital: "Skopje",
    region: "Europe",
    population: 2058539,
  },
  {
    name: "Madagascar",
    alpha2Code: "MG",
    alpha3Code: "MDG",
    capital: "Antananarivo",
    region: "Africa",
    population: 22434363,
  },
  {
    name: "Malawi",
    alpha2Code: "MW",
    alpha3Code: "MWI",
    capital: "Lilongwe",
    region: "Africa",
    population: 16832910,
  },
  {
    name: "Malaysia",
    alpha2Code: "MY",
    alpha3Code: "MYS",
    capital: "Kuala Lumpur",
    region: "Asia",
    population: 31405416,
  },
  {
    name: "Maldives",
    alpha2Code: "MV",
    alpha3Code: "MDV",
    capital: "Malé",
    region: "Asia",
    population: 344023,
  },
  {
    name: "Mali",
    alpha2Code: "ML",
    alpha3Code: "MLI",
    capital: "Bamako",
    region: "Africa",
    population: 18135000,
  },
  {
    name: "Malta",
    alpha2Code: "MT",
    alpha3Code: "MLT",
    capital: "Valletta",
    region: "Europe",
    population: 425384,
  },
  {
    name: "Marshall Islands",
    alpha2Code: "MH",
    alpha3Code: "MHL",
    capital: "Majuro",
    region: "Oceania",
    population: 54880,
  },
  {
    name: "Martinique",
    alpha2Code: "MQ",
    alpha3Code: "MTQ",
    capital: "Fort-de-France",
    region: "Americas",
    population: 378243,
  },
  {
    name: "Mauritania",
    alpha2Code: "MR",
    alpha3Code: "MRT",
    capital: "Nouakchott",
    region: "Africa",
    population: 3718678,
  },
  {
    name: "Mauritius",
    alpha2Code: "MU",
    alpha3Code: "MUS",
    capital: "Port Louis",
    region: "Africa",
    population: 1262879,
  },
  {
    name: "Mayotte",
    alpha2Code: "YT",
    alpha3Code: "MYT",
    capital: "Mamoudzou",
    region: "Africa",
    population: 226915,
  },
  {
    name: "Mexico",
    alpha2Code: "MX",
    alpha3Code: "MEX",
    capital: "Mexico City",
    region: "Americas",
    population: 122273473,
  },
  {
    name: "Micronesia (Federated States of)",
    alpha2Code: "FM",
    alpha3Code: "FSM",
    capital: "Palikir",
    region: "Oceania",
    population: 102800,
  },
  {
    name: "Moldova (Republic of)",
    alpha2Code: "MD",
    alpha3Code: "MDA",
    capital: "Chișinău",
    region: "Europe",
    population: 3553100,
  },
  {
    name: "Monaco",
    alpha2Code: "MC",
    alpha3Code: "MCO",
    capital: "Monaco",
    region: "Europe",
    population: 38400,
  },
  {
    name: "Mongolia",
    alpha2Code: "MN",
    alpha3Code: "MNG",
    capital: "Ulan Bator",
    region: "Asia",
    population: 3093100,
  },
  {
    name: "Montenegro",
    alpha2Code: "ME",
    alpha3Code: "MNE",
    capital: "Podgorica",
    region: "Europe",
    population: 621810,
  },
  {
    name: "Montserrat",
    alpha2Code: "MS",
    alpha3Code: "MSR",
    capital: "Plymouth",
    region: "Americas",
    population: 4922,
  },
  {
    name: "Morocco",
    alpha2Code: "MA",
    alpha3Code: "MAR",
    capital: "Rabat",
    region: "Africa",
    population: 33337529,
  },
  {
    name: "Mozambique",
    alpha2Code: "MZ",
    alpha3Code: "MOZ",
    capital: "Maputo",
    region: "Africa",
    population: 26423700,
  },
  {
    name: "Myanmar",
    alpha2Code: "MM",
    alpha3Code: "MMR",
    capital: "Naypyidaw",
    region: "Asia",
    population: 51419420,
  },
  {
    name: "Namibia",
    alpha2Code: "NA",
    alpha3Code: "NAM",
    capital: "Windhoek",
    region: "Africa",
    population: 2324388,
  },
  {
    name: "Nauru",
    alpha2Code: "NR",
    alpha3Code: "NRU",
    capital: "Yaren",
    region: "Oceania",
    population: 10084,
  },
  {
    name: "Nepal",
    alpha2Code: "NP",
    alpha3Code: "NPL",
    capital: "Kathmandu",
    region: "Asia",
    population: 28431500,
  },
  {
    name: "Netherlands",
    alpha2Code: "NL",
    alpha3Code: "NLD",
    capital: "Amsterdam",
    region: "Europe",
    population: 17019800,
  },
  {
    name: "New Caledonia",
    alpha2Code: "NC",
    alpha3Code: "NCL",
    capital: "Nouméa",
    region: "Oceania",
    population: 268767,
  },
  {
    name: "New Zealand",
    alpha2Code: "NZ",
    alpha3Code: "NZL",
    capital: "Wellington",
    region: "Oceania",
    population: 4697854,
  },
  {
    name: "Nicaragua",
    alpha2Code: "NI",
    alpha3Code: "NIC",
    capital: "Managua",
    region: "Americas",
    population: 6262703,
  },
  {
    name: "Niger",
    alpha2Code: "NE",
    alpha3Code: "NER",
    capital: "Niamey",
    region: "Africa",
    population: 20715000,
  },
  {
    name: "Nigeria",
    alpha2Code: "NG",
    alpha3Code: "NGA",
    capital: "Abuja",
    region: "Africa",
    population: 186988000,
  },
  {
    name: "Niue",
    alpha2Code: "NU",
    alpha3Code: "NIU",
    capital: "Alofi",
    region: "Oceania",
    population: 1470,
  },
  {
    name: "Norfolk Island",
    alpha2Code: "NF",
    alpha3Code: "NFK",
    capital: "Kingston",
    region: "Oceania",
    population: 2302,
  },
  {
    name: "Korea (Democratic People's Republic of)",
    alpha2Code: "KP",
    alpha3Code: "PRK",
    capital: "Pyongyang",
    region: "Asia",
    population: 25281000,
  },
  {
    name: "Northern Mariana Islands",
    alpha2Code: "MP",
    alpha3Code: "MNP",
    capital: "Saipan",
    region: "Oceania",
    population: 56940,
  },
  {
    name: "Norway",
    alpha2Code: "NO",
    alpha3Code: "NOR",
    capital: "Oslo",
    region: "Europe",
    population: 5223256,
  },
  {
    name: "Oman",
    alpha2Code: "OM",
    alpha3Code: "OMN",
    capital: "Muscat",
    region: "Asia",
    population: 4420133,
  },
  {
    name: "Pakistan",
    alpha2Code: "PK",
    alpha3Code: "PAK",
    capital: "Islamabad",
    region: "Asia",
    population: 194125062,
  },
  {
    name: "Palau",
    alpha2Code: "PW",
    alpha3Code: "PLW",
    capital: "Ngerulmud",
    region: "Oceania",
    population: 17950,
  },
  {
    name: "Palestine, State of",
    alpha2Code: "PS",
    alpha3Code: "PSE",
    capital: "Ramallah",
    region: "Asia",
    population: 4682467,
  },
  {
    name: "Panama",
    alpha2Code: "PA",
    alpha3Code: "PAN",
    capital: "Panama City",
    region: "Americas",
    population: 3814672,
  },
  {
    name: "Papua New Guinea",
    alpha2Code: "PG",
    alpha3Code: "PNG",
    capital: "Port Moresby",
    region: "Oceania",
    population: 8083700,
  },
  {
    name: "Paraguay",
    alpha2Code: "PY",
    alpha3Code: "PRY",
    capital: "Asunción",
    region: "Americas",
    population: 6854536,
  },
  {
    name: "Peru",
    alpha2Code: "PE",
    alpha3Code: "PER",
    capital: "Lima",
    region: "Americas",
    population: 31488700,
  },
  {
    name: "Philippines",
    alpha2Code: "PH",
    alpha3Code: "PHL",
    capital: "Manila",
    region: "Asia",
    population: 103279800,
  },
  {
    name: "Pitcairn",
    alpha2Code: "PN",
    alpha3Code: "PCN",
    capital: "Adamstown",
    region: "Oceania",
    population: 56,
  },
  {
    name: "Poland",
    alpha2Code: "PL",
    alpha3Code: "POL",
    capital: "Warsaw",
    region: "Europe",
    population: 38437239,
  },
  {
    name: "Portugal",
    alpha2Code: "PT",
    alpha3Code: "PRT",
    capital: "Lisbon",
    region: "Europe",
    population: 10374822,
  },
  {
    name: "Puerto Rico",
    alpha2Code: "PR",
    alpha3Code: "PRI",
    capital: "San Juan",
    region: "Americas",
    population: 3474182,
  },
  {
    name: "Qatar",
    alpha2Code: "QA",
    alpha3Code: "QAT",
    capital: "Doha",
    region: "Asia",
    population: 2587564,
  },
  {
    name: "Republic of Kosovo",
    alpha2Code: "XK",
    alpha3Code: "KOS",
    capital: "Pristina",
    region: "Europe",
    population: 1733842,
  },
  {
    name: "Réunion",
    alpha2Code: "RE",
    alpha3Code: "REU",
    capital: "Saint-Denis",
    region: "Africa",
    population: 840974,
  },
  {
    name: "Romania",
    alpha2Code: "RO",
    alpha3Code: "ROU",
    capital: "Bucharest",
    region: "Europe",
    population: 19861408,
  },
  {
    name: "Russian Federation",
    alpha2Code: "RU",
    alpha3Code: "RUS",
    capital: "Moscow",
    region: "Europe",
    population: 146599183,
  },
  {
    name: "Rwanda",
    alpha2Code: "RW",
    alpha3Code: "RWA",
    capital: "Kigali",
    region: "Africa",
    population: 11553188,
  },
  {
    name: "Saint Barthélemy",
    alpha2Code: "BL",
    alpha3Code: "BLM",
    capital: "Gustavia",
    region: "Americas",
    population: 9417,
  },
  {
    name: "Saint Helena, Ascension and Tristan da Cunha",
    alpha2Code: "SH",
    alpha3Code: "SHN",
    capital: "Jamestown",
    region: "Africa",
    population: 4255,
  },
  {
    name: "Saint Kitts and Nevis",
    alpha2Code: "KN",
    alpha3Code: "KNA",
    capital: "Basseterre",
    region: "Americas",
    population: 46204,
  },
  {
    name: "Saint Lucia",
    alpha2Code: "LC",
    alpha3Code: "LCA",
    capital: "Castries",
    region: "Americas",
    population: 186000,
  },
  {
    name: "Saint Martin (French part)",
    alpha2Code: "MF",
    alpha3Code: "MAF",
    capital: "Marigot",
    region: "Americas",
    population: 36979,
  },
  {
    name: "Saint Pierre and Miquelon",
    alpha2Code: "PM",
    alpha3Code: "SPM",
    capital: "Saint-Pierre",
    region: "Americas",
    population: 6069,
  },
  {
    name: "Saint Vincent and the Grenadines",
    alpha2Code: "VC",
    alpha3Code: "VCT",
    capital: "Kingstown",
    region: "Americas",
    population: 109991,
  },
  {
    name: "Samoa",
    alpha2Code: "WS",
    alpha3Code: "WSM",
    capital: "Apia",
    region: "Oceania",
    population: 194899,
  },
  {
    name: "San Marino",
    alpha2Code: "SM",
    alpha3Code: "SMR",
    capital: "City of San Marino",
    region: "Europe",
    population: 33005,
  },
  {
    name: "Sao Tome and Principe",
    alpha2Code: "ST",
    alpha3Code: "STP",
    capital: "São Tomé",
    region: "Africa",
    population: 187356,
  },
  {
    name: "Saudi Arabia",
    alpha2Code: "SA",
    alpha3Code: "SAU",
    capital: "Riyadh",
    region: "Asia",
    population: 32248200,
  },
  {
    name: "Senegal",
    alpha2Code: "SN",
    alpha3Code: "SEN",
    capital: "Dakar",
    region: "Africa",
    population: 14799859,
  },
  {
    name: "Serbia",
    alpha2Code: "RS",
    alpha3Code: "SRB",
    capital: "Belgrade",
    region: "Europe",
    population: 7076372,
  },
  {
    name: "Seychelles",
    alpha2Code: "SC",
    alpha3Code: "SYC",
    capital: "Victoria",
    region: "Africa",
    population: 91400,
  },
  {
    name: "Sierra Leone",
    alpha2Code: "SL",
    alpha3Code: "SLE",
    capital: "Freetown",
    region: "Africa",
    population: 7075641,
  },
  {
    name: "Singapore",
    alpha2Code: "SG",
    alpha3Code: "SGP",
    capital: "Singapore",
    region: "Asia",
    population: 5535000,
  },
  {
    name: "Sint Maarten (Dutch part)",
    alpha2Code: "SX",
    alpha3Code: "SXM",
    capital: "Philipsburg",
    region: "Americas",
    population: 38247,
  },
  {
    name: "Slovakia",
    alpha2Code: "SK",
    alpha3Code: "SVK",
    capital: "Bratislava",
    region: "Europe",
    population: 5426252,
  },
  {
    name: "Slovenia",
    alpha2Code: "SI",
    alpha3Code: "SVN",
    capital: "Ljubljana",
    region: "Europe",
    population: 2064188,
  },
  {
    name: "Solomon Islands",
    alpha2Code: "SB",
    alpha3Code: "SLB",
    capital: "Honiara",
    region: "Oceania",
    population: 642000,
  },
  {
    name: "Somalia",
    alpha2Code: "SO",
    alpha3Code: "SOM",
    capital: "Mogadishu",
    region: "Africa",
    population: 11079000,
  },
  {
    name: "South Africa",
    alpha2Code: "ZA",
    alpha3Code: "ZAF",
    capital: "Pretoria",
    region: "Africa",
    population: 55653654,
  },
  {
    name: "South Georgia and the South Sandwich Islands",
    alpha2Code: "GS",
    alpha3Code: "SGS",
    capital: "King Edward Point",
    region: "Americas",
    population: 30,
  },
  {
    name: "Korea (Republic of)",
    alpha2Code: "KR",
    alpha3Code: "KOR",
    capital: "Seoul",
    region: "Asia",
    population: 50801405,
  },
  {
    name: "South Sudan",
    alpha2Code: "SS",
    alpha3Code: "SSD",
    capital: "Juba",
    region: "Africa",
    population: 12131000,
  },
  {
    name: "Spain",
    alpha2Code: "ES",
    alpha3Code: "ESP",
    capital: "Madrid",
    region: "Europe",
    population: 46438422,
  },
  {
    name: "Sri Lanka",
    alpha2Code: "LK",
    alpha3Code: "LKA",
    capital: "Colombo",
    region: "Asia",
    population: 20966000,
  },
  {
    name: "Sudan",
    alpha2Code: "SD",
    alpha3Code: "SDN",
    capital: "Khartoum",
    region: "Africa",
    population: 39598700,
  },
  {
    name: "Suriname",
    alpha2Code: "SR",
    alpha3Code: "SUR",
    capital: "Paramaribo",
    region: "Americas",
    population: 541638,
  },
  {
    name: "Svalbard and Jan Mayen",
    alpha2Code: "SJ",
    alpha3Code: "SJM",
    capital: "Longyearbyen",
    region: "Europe",
    population: 2562,
  },
  {
    name: "Swaziland",
    alpha2Code: "SZ",
    alpha3Code: "SWZ",
    capital: "Lobamba",
    region: "Africa",
    population: 1132657,
  },
  {
    name: "Sweden",
    alpha2Code: "SE",
    alpha3Code: "SWE",
    capital: "Stockholm",
    region: "Europe",
    population: 9894888,
  },
  {
    name: "Switzerland",
    alpha2Code: "CH",
    alpha3Code: "CHE",
    capital: "Bern",
    region: "Europe",
    population: 8341600,
  },
  {
    name: "Syrian Arab Republic",
    alpha2Code: "SY",
    alpha3Code: "SYR",
    capital: "Damascus",
    region: "Asia",
    population: 18564000,
  },
  {
    name: "Taiwan",
    alpha2Code: "TW",
    alpha3Code: "TWN",
    capital: "Taipei",
    region: "Asia",
    population: 23503349,
  },
  {
    name: "Tajikistan",
    alpha2Code: "TJ",
    alpha3Code: "TJK",
    capital: "Dushanbe",
    region: "Asia",
    population: 8593600,
  },
  {
    name: "Tanzania, United Republic of",
    alpha2Code: "TZ",
    alpha3Code: "TZA",
    capital: "Dodoma",
    region: "Africa",
    population: 55155000,
  },
  {
    name: "Thailand",
    alpha2Code: "TH",
    alpha3Code: "THA",
    capital: "Bangkok",
    region: "Asia",
    population: 65327652,
  },
  {
    name: "Timor-Leste",
    alpha2Code: "TL",
    alpha3Code: "TLS",
    capital: "Dili",
    region: "Asia",
    population: 1167242,
  },
  {
    name: "Togo",
    alpha2Code: "TG",
    alpha3Code: "TGO",
    capital: "Lomé",
    region: "Africa",
    population: 7143000,
  },
  {
    name: "Tokelau",
    alpha2Code: "TK",
    alpha3Code: "TKL",
    capital: "Fakaofo",
    region: "Oceania",
    population: 1411,
  },
  {
    name: "Tonga",
    alpha2Code: "TO",
    alpha3Code: "TON",
    capital: "Nuku'alofa",
    region: "Oceania",
    population: 103252,
  },
  {
    name: "Trinidad and Tobago",
    alpha2Code: "TT",
    alpha3Code: "TTO",
    capital: "Port of Spain",
    region: "Americas",
    population: 1349667,
  },
  {
    name: "Tunisia",
    alpha2Code: "TN",
    alpha3Code: "TUN",
    capital: "Tunis",
    region: "Africa",
    population: 11154400,
  },
  {
    name: "Turkey",
    alpha2Code: "TR",
    alpha3Code: "TUR",
    capital: "Ankara",
    region: "Asia",
    population: 78741053,
  },
  {
    name: "Turkmenistan",
    alpha2Code: "TM",
    alpha3Code: "TKM",
    capital: "Ashgabat",
    region: "Asia",
    population: 4751120,
  },
  {
    name: "Turks and Caicos Islands",
    alpha2Code: "TC",
    alpha3Code: "TCA",
    capital: "Cockburn Town",
    region: "Americas",
    population: 31458,
  },
  {
    name: "Tuvalu",
    alpha2Code: "TV",
    alpha3Code: "TUV",
    capital: "Funafuti",
    region: "Oceania",
    population: 10640,
  },
  {
    name: "Uganda",
    alpha2Code: "UG",
    alpha3Code: "UGA",
    capital: "Kampala",
    region: "Africa",
    population: 33860700,
  },
  {
    name: "Ukraine",
    alpha2Code: "UA",
    alpha3Code: "UKR",
    capital: "Kiev",
    region: "Europe",
    population: 42692393,
  },
  {
    name: "United Arab Emirates",
    alpha2Code: "AE",
    alpha3Code: "ARE",
    capital: "Abu Dhabi",
    region: "Asia",
    population: 9856000,
  },
  {
    name: "United Kingdom of Great Britain and Northern Ireland",
    alpha2Code: "GB",
    alpha3Code: "GBR",
    capital: "London",
    region: "Europe",
    population: 65110000,
  },
  {
    name: "United States of America",
    alpha2Code: "US",
    alpha3Code: "USA",
    capital: "Washington, D.C.",
    region: "Americas",
    population: 323947000,
  },
  {
    name: "Uruguay",
    alpha2Code: "UY",
    alpha3Code: "URY",
    capital: "Montevideo",
    region: "Americas",
    population: 3480222,
  },
  {
    name: "Uzbekistan",
    alpha2Code: "UZ",
    alpha3Code: "UZB",
    capital: "Tashkent",
    region: "Asia",
    population: 31576400,
  },
  {
    name: "Vanuatu",
    alpha2Code: "VU",
    alpha3Code: "VUT",
    capital: "Port Vila",
    region: "Oceania",
    population: 277500,
  },
  {
    name: "Venezuela (Bolivarian Republic of)",
    alpha2Code: "VE",
    alpha3Code: "VEN",
    capital: "Caracas",
    region: "Americas",
    population: 31028700,
  },
  {
    name: "Viet Nam",
    alpha2Code: "VN",
    alpha3Code: "VNM",
    capital: "Hanoi",
    region: "Asia",
    population: 92700000,
  },
  {
    name: "Wallis and Futuna",
    alpha2Code: "WF",
    alpha3Code: "WLF",
    capital: "Mata-Utu",
    region: "Oceania",
    population: 11750,
  },
  {
    name: "Western Sahara",
    alpha2Code: "EH",
    alpha3Code: "ESH",
    capital: "El Aaiún",
    region: "Africa",
    population: 510713,
  },
  {
    name: "Yemen",
    alpha2Code: "YE",
    alpha3Code: "YEM",
    capital: "Sana'a",
    region: "Asia",
    population: 27478000,
  },
  {
    name: "Zambia",
    alpha2Code: "ZM",
    alpha3Code: "ZMB",
    capital: "Lusaka",
    region: "Africa",
    population: 15933883,
  },
  {
    name: "Zimbabwe",
    alpha2Code: "ZW",
    alpha3Code: "ZWE",
    capital: "Harare",
    region: "Africa",
    population: 14240168,
  },
];