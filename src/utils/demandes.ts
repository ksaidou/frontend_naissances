const DEMANDES = [
  {
    "id": "67db45cccf7a6f7086d3f1bf",
    "status": "REJECTED",
    "registred": "2020-07-19T08:57:19 -00:00",
    "owner": {
      "birthdate": "2014-07-11T08:32:18 -00:00",
      "gender": "female",
      "firstname": "Sallie",
      "lastname": "Hutchinson"
    },
    "demandeur": {
      "gender": "female",
      "firstname": "Clarke",
      "lastname": "Schneider",
      "email": "clarkeschneider@colaire.com",
      "phone": "+1 (916) 482-3655",
      "address": "111 Garnet Street, Sedley, Maine, 4481"
    },
    "comment": "qui culpa nisi deserunt consectetur eiusmod irure tempor voluptate ea"
  },
  {
    "id": "67db45ccedf830f21b18131c",
    "status": "NEW",
    "registred": "2019-05-12T07:50:05 -00:00",
    "owner": {
      "birthdate": "2015-10-27T07:15:59 -00:00",
      "gender": "male",
      "firstname": "Deirdre",
      "lastname": "Flynn"
    },
    "demandeur": {
      "gender": "female",
      "firstname": "Dawn",
      "lastname": "Carroll",
      "email": "dawncarroll@colaire.com",
      "phone": "+1 (944) 526-3699",
      "address": "710 Wallabout Street, Cashtown, Kansas, 958"
    },
    "comment": "eiusmod et non dolore consequat Lorem eu consectetur et ex"
  },
  {
    "id": "67db45ccd830cf12dd92a951",
    "status": "NEW",
    "registred": "2014-02-13T11:35:14 -00:00",
    "owner": {
      "birthdate": "2015-12-17T02:05:00 -00:00",
      "gender": "female",
      "firstname": "Hendricks",
      "lastname": "Sanchez"
    },
    "demandeur": {
      "gender": "male",
      "firstname": "Mcmillan",
      "lastname": "Mueller",
      "email": "mcmillanmueller@colaire.com",
      "phone": "+1 (908) 592-3059",
      "address": "922 Madison Street, Jacumba, South Carolina, 6966"
    },
    "comment": "dolore id pariatur deserunt culpa aute tempor sint est exercitation"
  },
  {
    "id": "67db45cc12c0588c4f120443",
    "status": "ON_GOING",
    "registred": "2021-09-23T07:35:11 -00:00",
    "owner": {
      "birthdate": "2014-08-23T12:53:51 -00:00",
      "gender": "male",
      "firstname": "Edwina",
      "lastname": "Shepherd"
    },
    "demandeur": {
      "gender": "female",
      "firstname": "Allie",
      "lastname": "Lindsey",
      "email": "allielindsey@colaire.com",
      "phone": "+1 (807) 534-3243",
      "address": "434 Hinckley Place, Vallonia, Tennessee, 8104"
    },
    "comment": "velit irure culpa et labore magna sit cillum dolore culpa"
  },
  {
    "id": "67db45cc0e4ccc82d626a6f2",
    "status": "VALIDATED",
    "registred": "2015-04-11T04:08:29 -00:00",
    "owner": {
      "birthdate": "2014-06-11T09:20:05 -00:00",
      "gender": "female",
      "firstname": "Bernadine",
      "lastname": "Chen"
    },
    "demandeur": {
      "gender": "female",
      "firstname": "Park",
      "lastname": "Murphy",
      "email": "parkmurphy@colaire.com",
      "phone": "+1 (989) 469-2498",
      "address": "498 Hubbard Street, Mathews, Colorado, 3668"
    },
    "comment": "proident consequat dolor duis culpa aute officia nulla do culpa"
  },
  {
    "id": "67db45cc9391cf462a670087",
    "status": "NEW",
    "registred": "2024-03-14T01:19:38 -00:00",
    "owner": {
      "birthdate": "2020-11-18T12:29:04 -00:00",
      "gender": "male",
      "firstname": "Araceli",
      "lastname": "Hudson"
    },
    "demandeur": {
      "gender": "female",
      "firstname": "Constance",
      "lastname": "Briggs",
      "email": "constancebriggs@colaire.com",
      "phone": "+1 (868) 439-2474",
      "address": "100 Tilden Avenue, Hessville, Ohio, 7864"
    },
    "comment": "exercitation laboris enim reprehenderit eiusmod ut fugiat exercitation labore exercitation"
  },
  {
    "id": "67db45ccc51181f8557ec076",
    "status": "ON_GOING",
    "registred": "2017-04-22T05:13:08 -00:00",
    "owner": {
      "birthdate": "2014-02-23T07:27:27 -00:00",
      "gender": "female",
      "firstname": "Hickman",
      "lastname": "Fuentes"
    },
    "demandeur": {
      "gender": "male",
      "firstname": "Reid",
      "lastname": "Oconnor",
      "email": "reidoconnor@colaire.com",
      "phone": "+1 (979) 452-3953",
      "address": "962 Huntington Street, Cazadero, Federated States Of Micronesia, 7316"
    },
    "comment": "quis nulla exercitation deserunt reprehenderit aliqua eu do duis laborum"
  },
  {
    "id": "67db45cc2d42b16d9148cc73",
    "status": "ON_GOING",
    "registred": "2018-05-09T06:12:09 -00:00",
    "owner": {
      "birthdate": "2018-06-05T03:30:46 -00:00",
      "gender": "male",
      "firstname": "Marie",
      "lastname": "Hammond"
    },
    "demandeur": {
      "gender": "female",
      "firstname": "Robertson",
      "lastname": "James",
      "email": "robertsonjames@colaire.com",
      "phone": "+1 (885) 535-2523",
      "address": "173 Bush Street, Sunbury, Montana, 2785"
    },
    "comment": "ipsum minim exercitation voluptate esse sint sunt reprehenderit mollit exercitation"
  },
  {
    "id": "67db45cccb5dc726872abbfb",
    "status": "VALIDATED",
    "registred": "2014-02-25T08:08:10 -00:00",
    "owner": {
      "birthdate": "2020-10-08T03:08:39 -00:00",
      "gender": "male",
      "firstname": "Gale",
      "lastname": "Guerrero"
    },
    "demandeur": {
      "gender": "female",
      "firstname": "Helga",
      "lastname": "Grant",
      "email": "helgagrant@colaire.com",
      "phone": "+1 (891) 539-2766",
      "address": "858 Keen Court, Floris, Alaska, 1308"
    },
    "comment": "laboris officia eu sint magna culpa irure ipsum aute nulla"
  },
  {
    "id": "67db45cca07cc27da35ce900",
    "status": "NEW",
    "registred": "2020-01-14T05:03:04 -00:00",
    "owner": {
      "birthdate": "2018-04-15T10:29:50 -00:00",
      "gender": "female",
      "firstname": "Elisabeth",
      "lastname": "Kim"
    },
    "demandeur": {
      "gender": "female",
      "firstname": "Ava",
      "lastname": "Richardson",
      "email": "avarichardson@colaire.com",
      "phone": "+1 (849) 433-2895",
      "address": "515 Lincoln Place, Sanborn, Illinois, 8254"
    },
    "comment": "esse laboris consequat exercitation excepteur velit ut sint nisi excepteur"
  },
  {
    "id": "67db45cc33cdcf2433e287b2",
    "status": "VALIDATED",
    "registred": "2014-12-10T02:14:22 -00:00",
    "owner": {
      "birthdate": "2016-07-10T09:23:24 -00:00",
      "gender": "female",
      "firstname": "Buck",
      "lastname": "Harrington"
    },
    "demandeur": {
      "gender": "male",
      "firstname": "Earline",
      "lastname": "Gilmore",
      "email": "earlinegilmore@colaire.com",
      "phone": "+1 (841) 526-3520",
      "address": "261 Nixon Court, Levant, South Dakota, 6244"
    },
    "comment": "eiusmod ipsum veniam et deserunt aliqua anim veniam ipsum nulla"
  },
  {
    "id": "67db45cc76390232ad631c86",
    "status": "NEW",
    "registred": "2022-01-06T12:36:37 -00:00",
    "owner": {
      "birthdate": "2014-09-25T11:30:46 -00:00",
      "gender": "female",
      "firstname": "Amalia",
      "lastname": "Schwartz"
    },
    "demandeur": {
      "gender": "female",
      "firstname": "Ortega",
      "lastname": "Burton",
      "email": "ortegaburton@colaire.com",
      "phone": "+1 (816) 411-3336",
      "address": "519 Bayard Street, Fannett, District Of Columbia, 6210"
    },
    "comment": "dolor do elit mollit laborum proident labore ex aute proident"
  },
  {
    "id": "67db45cc00c05d626c6a199e",
    "status": "VALIDATED",
    "registred": "2018-10-15T03:06:03 -00:00",
    "owner": {
      "birthdate": "2019-04-07T04:10:06 -00:00",
      "gender": "male",
      "firstname": "Morris",
      "lastname": "Black"
    },
    "demandeur": {
      "gender": "male",
      "firstname": "Frederick",
      "lastname": "Rutledge",
      "email": "frederickrutledge@colaire.com",
      "phone": "+1 (856) 450-3831",
      "address": "277 Seacoast Terrace, Roberts, Louisiana, 5780"
    },
    "comment": "esse nulla officia deserunt magna sunt sunt consequat excepteur esse"
  },
  {
    "id": "67db45cc1b1a2665034be24f",
    "status": "REJECTED",
    "registred": "2024-10-01T04:05:39 -00:00",
    "owner": {
      "birthdate": "2018-10-26T01:03:33 -00:00",
      "gender": "male",
      "firstname": "Suarez",
      "lastname": "Horne"
    },
    "demandeur": {
      "gender": "male",
      "firstname": "Copeland",
      "lastname": "Francis",
      "email": "copelandfrancis@colaire.com",
      "phone": "+1 (869) 442-2579",
      "address": "966 India Street, Gordon, Utah, 7100"
    },
    "comment": "non excepteur id cillum amet magna deserunt ad aliqua culpa"
  },
  {
    "id": "67db45cc70796c5f50269288",
    "status": "NEW",
    "registred": "2025-03-09T05:44:31 -00:00",
    "owner": {
      "birthdate": "2014-07-18T07:08:42 -00:00",
      "gender": "male",
      "firstname": "Head",
      "lastname": "Johnson"
    },
    "demandeur": {
      "gender": "male",
      "firstname": "Jamie",
      "lastname": "Russell",
      "email": "jamierussell@colaire.com",
      "phone": "+1 (978) 501-2055",
      "address": "357 Greene Avenue, Cornfields, New York, 2002"
    },
    "comment": "exercitation cillum officia voluptate incididunt nisi voluptate nostrud aliquip ullamco"
  },
  {
    "id": "67db45cc2330a7b6858a1952",
    "status": "REJECTED",
    "registred": "2022-05-16T04:10:41 -00:00",
    "owner": {
      "birthdate": "2022-02-05T12:00:48 -00:00",
      "gender": "female",
      "firstname": "Marjorie",
      "lastname": "Daniel"
    },
    "demandeur": {
      "gender": "female",
      "firstname": "Sherrie",
      "lastname": "Hobbs",
      "email": "sherriehobbs@colaire.com",
      "phone": "+1 (891) 454-3346",
      "address": "636 Melba Court, Warren, American Samoa, 4819"
    },
    "comment": "sint esse aute Lorem ea laborum veniam magna laborum nulla"
  },
  {
    "id": "67db45ccd3f8b2e143932af5",
    "status": "REJECTED",
    "registred": "2018-03-23T07:50:48 -00:00",
    "owner": {
      "birthdate": "2020-02-25T10:04:55 -00:00",
      "gender": "female",
      "firstname": "Judith",
      "lastname": "Paul"
    },
    "demandeur": {
      "gender": "female",
      "firstname": "Lelia",
      "lastname": "Fields",
      "email": "leliafields@colaire.com",
      "phone": "+1 (836) 435-3319",
      "address": "354 Chase Court, Baker, Kentucky, 1570"
    },
    "comment": "veniam laborum in ullamco officia est ea non laborum deserunt"
  },
  {
    "id": "67db45cc5d6cd301fe204dc8",
    "status": "ON_GOING",
    "registred": "2018-06-05T01:54:36 -00:00",
    "owner": {
      "birthdate": "2022-12-05T12:15:21 -00:00",
      "gender": "female",
      "firstname": "Lauren",
      "lastname": "Kidd"
    },
    "demandeur": {
      "gender": "female",
      "firstname": "Fox",
      "lastname": "Finley",
      "email": "foxfinley@colaire.com",
      "phone": "+1 (967) 551-2930",
      "address": "518 Onderdonk Avenue, Frierson, Palau, 1546"
    },
    "comment": "deserunt qui veniam ipsum est tempor in fugiat excepteur amet"
  },
  {
    "id": "67db45cc66668e5dd68c23bf",
    "status": "ON_GOING",
    "registred": "2018-06-21T06:40:39 -00:00",
    "owner": {
      "birthdate": "2019-01-13T12:42:31 -00:00",
      "gender": "male",
      "firstname": "Gonzales",
      "lastname": "Lowery"
    },
    "demandeur": {
      "gender": "male",
      "firstname": "Sofia",
      "lastname": "Barnett",
      "email": "sofiabarnett@colaire.com",
      "phone": "+1 (966) 491-3313",
      "address": "905 Harman Street, Escondida, Massachusetts, 6446"
    },
    "comment": "amet ad deserunt ut quis excepteur nostrud excepteur do officia"
  },
  {
    "id": "67db45cc3fcb4db5553934ac",
    "status": "NEW",
    "registred": "2014-05-01T04:13:53 -00:00",
    "owner": {
      "birthdate": "2016-11-25T11:33:51 -00:00",
      "gender": "female",
      "firstname": "Geneva",
      "lastname": "Dillon"
    },
    "demandeur": {
      "gender": "female",
      "firstname": "Larsen",
      "lastname": "Lyons",
      "email": "larsenlyons@colaire.com",
      "phone": "+1 (943) 525-3718",
      "address": "864 Sutter Avenue, Wiscon, Michigan, 3200"
    },
    "comment": "tempor voluptate commodo laboris deserunt do culpa commodo in dolor"
  },
  {
    "id": "67db45cc1383127af2a8ad7c",
    "status": "NEW",
    "registred": "2017-09-01T08:35:43 -00:00",
    "owner": {
      "birthdate": "2015-10-07T08:47:47 -00:00",
      "gender": "male",
      "firstname": "Moran",
      "lastname": "Torres"
    },
    "demandeur": {
      "gender": "male",
      "firstname": "Bernard",
      "lastname": "Stein",
      "email": "bernardstein@colaire.com",
      "phone": "+1 (873) 576-3487",
      "address": "943 Perry Terrace, Goodville, Georgia, 9663"
    },
    "comment": "pariatur reprehenderit laboris non sint anim anim nostrud in sunt"
  },
  {
    "id": "67db45ccd8307dbccb5e6ba9",
    "status": "REJECTED",
    "registred": "2021-06-28T06:14:08 -00:00",
    "owner": {
      "birthdate": "2021-08-15T03:45:19 -00:00",
      "gender": "male",
      "firstname": "Aguilar",
      "lastname": "Mccoy"
    },
    "demandeur": {
      "gender": "male",
      "firstname": "Burris",
      "lastname": "Collins",
      "email": "burriscollins@colaire.com",
      "phone": "+1 (898) 566-3486",
      "address": "152 Losee Terrace, Adamstown, Idaho, 2008"
    },
    "comment": "in minim et ullamco amet ea consequat velit aliquip ipsum"
  }
];
export {DEMANDES};