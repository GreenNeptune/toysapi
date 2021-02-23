let routes_doc = [
  {
    request: "/toys",
    method: "GET",
    status: "200",
    description: "LIST TOYS",
    response: `
    [
      {
          "_id": "602417f46574e511549b2025",
          "name": "rubik's cube",
          "info": "The original rubik's cube since 1970 3x3 yellow orange and green",
          "category": "educational",
          "img_url": "https://images.pexels.com/photos/19677/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=750&w=1260/",
          "price": 40,
          "date_created": "2021-02-10T17:29:24.199Z",
          "user_id": "6024117ba3491432847886a3",
          "__v": 0
      },
      {
          "_id": "60280e6681c5d62dbc94714f",
          "name": "Wooden Jenga",
          "info": "2-4 player game for the entire family",
          "category": "educational",
          "img_url": "https://images.pexels.com/photos/4473569/pexels-photo-4473569.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          "price": 120,
          "date_created": "2021-02-13T17:37:42.347Z",
          "user_id": "6024117ba3491432847886a3",
          "__v": 0
      },
      {
          "_id": "602810a881c5d62dbc947150",
          "name": "alphabet cubes",
          "info": "alphabet wooden letters, colorful!!!",
          "category": "educational",
          "img_url": "https://images.pexels.com/photos/591652/play-fun-blocks-block-591652.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          "price": 110,
          "date_created": "2021-02-13T17:47:20.252Z",
          "user_id": "6024117ba3491432847886a3",
          "__v": 0
      },
      {
          "_id": "6028120481c5d62dbc947151",
          "name": "Numbers Wooden Cubes",
          "info": "wooden numbers, 12 pieces, colorful!!!",
          "category": "educational",
          "img_url": "https://images.pexels.com/photos/311268/pexels-photo-311268.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          "price": 80,
          "date_created": "2021-02-13T17:53:08.513Z",
          "user_id": "6024117ba3491432847886a3",
          "__v": 0
      },
      {
          "_id": "602812a681c5d62dbc947152",
          "name": "slinky",
          "info": "Rainbow slinky",
          "category": "games",
          "img_url": "https://images.unsplash.com/photo-1594352482403-21fa735068ce?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=966&q=80",
          "price": 5,
          "date_created": "2021-02-13T17:55:50.335Z",
          "user_id": "6024117ba3491432847886a3",
          "__v": 0
      },
      {
          "_id": "6028130a81c5d62dbc947153",
          "name": "Frisbee",
          "info": "Frisbee, Green, Limited Edition!",
          "category": "games",
          "img_url": "https://images.unsplash.com/photo-1602848596095-481682701e89?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=801&q=80",
          "price": 200,
          "date_created": "2021-02-13T17:57:30.593Z",
          "user_id": "6024117ba3491432847886a3",
          "__v": 0
      },
      {
          "_id": "6028136b81c5d62dbc947154",
          "name": "Hula Hoop",
          "info": "Hula Hoop, colorful",
          "category": "games",
          "img_url": "https://images.pexels.com/photos/4378488/pexels-photo-4378488.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          "price": 60,
          "date_created": "2021-02-13T17:59:07.495Z",
          "user_id": "6024117ba3491432847886a3",
          "__v": 0
      },
      {
          "_id": "6028140d81c5d62dbc947155",
          "name": "NERF",
          "info": "Nerf, elite, blue white and orange",
          "category": "games",
          "img_url": "https://images.unsplash.com/photo-1594950981383-6eb659d18fbf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1349&q=80",
          "price": 150,
          "date_created": "2021-02-13T18:01:49.321Z",
          "user_id": "6024117ba3491432847886a3",
          "__v": 0
      },
      {
          "_id": "6028154281c5d62dbc947156",
          "name": "playmobil knight",
          "info": "playmobil knight, armor, sword, shield",
          "category": "playmobil",
          "img_url": "https://images.unsplash.com/photo-1546776230-12697ec9e7df?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1191&q=80",
          "price": 45,
          "date_created": "2021-02-13T18:06:58.975Z",
          "user_id": "6024117ba3491432847886a3",
          "__v": 0
      },
      {
          "_id": "6028158a81c5d62dbc947157",
          "name": "playmobil pirate",
          "info": "playmobil pirate, boots, hat, pistol",
          "category": "playmobil",
          "img_url": "https://images.unsplash.com/photo-1475563011407-6bf489b1c361?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          "price": 55,
          "date_created": "2021-02-13T18:08:10.668Z",
          "user_id": "6024117ba3491432847886a3",
          "__v": 0
      }
    ]
  `,
    color: "primary"
  },
  {
    request: "/toys/prices?min=40&max=100",
    method: "GET",
    status: "200",
    description: "LIST TOYS BY PRICE RANGE",
    response: `
    [
      {
          "_id": "602417f46574e511549b2025",
          "name": "rubik's cube",
          "info": "The original rubik's cube since 1970 3x3 yellow orange and green",
          "category": "educational",
          "img_url": "https://images.pexels.com/photos/19677/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=750&w=1260/",
          "price": 40,
          "date_created": "2021-02-10T17:29:24.199Z",
          "user_id": "6024117ba3491432847886a3",
          "__v": 0
      },
      {
          "_id": "6028120481c5d62dbc947151",
          "name": "Numbers Wooden Cubes",
          "info": "wooden numbers, 12 pieces, colorful!!!",
          "category": "educational",
          "img_url": "https://images.pexels.com/photos/311268/pexels-photo-311268.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          "price": 80,
          "date_created": "2021-02-13T17:53:08.513Z",
          "user_id": "6024117ba3491432847886a3",
          "__v": 0
      },
      {
          "_id": "6028136b81c5d62dbc947154",
          "name": "Hula Hoop",
          "info": "Hula Hoop, colorful",
          "category": "games",
          "img_url": "https://images.pexels.com/photos/4378488/pexels-photo-4378488.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          "price": 60,
          "date_created": "2021-02-13T17:59:07.495Z",
          "user_id": "6024117ba3491432847886a3",
          "__v": 0
      },
      {
          "_id": "6028154281c5d62dbc947156",
          "name": "playmobil knight",
          "info": "playmobil knight, armor, sword, shield",
          "category": "playmobil",
          "img_url": "https://images.unsplash.com/photo-1546776230-12697ec9e7df?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1191&q=80",
          "price": 45,
          "date_created": "2021-02-13T18:06:58.975Z",
          "user_id": "6024117ba3491432847886a3",
          "__v": 0
      },
      {
          "_id": "6028158a81c5d62dbc947157",
          "name": "playmobil pirate",
          "info": "playmobil pirate, boots, hat, pistol",
          "category": "playmobil",
          "img_url": "https://images.unsplash.com/photo-1475563011407-6bf489b1c361?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          "price": 55,
          "date_created": "2021-02-13T18:08:10.668Z",
          "user_id": "6024117ba3491432847886a3",
          "__v": 0
      },
      {
          "_id": "6028162581c5d62dbc94715a",
          "name": "playmobil police",
          "info": "playmobil police, green and black",
          "category": "playmobil",
          "img_url": "https://images.unsplash.com/photo-1575025859083-4ab5fc196532?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
          "price": 65,
          "date_created": "2021-02-13T18:10:45.105Z",
          "user_id": "6024117ba3491432847886a3",
          "__v": 0
      },
      {
          "_id": "602816a281c5d62dbc94715b",
          "name": "yellow cab",
          "info": "yellow cab, rio taxi",
          "category": "cars",
          "img_url": "https://images.unsplash.com/photo-1536846511313-4b07b637bff9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          "price": 75,
          "date_created": "2021-02-13T18:12:50.275Z",
          "user_id": "6024117ba3491432847886a3",
          "__v": 0
      },
      {
          "_id": "6028175181c5d62dbc94715d",
          "name": "mini lamborghini",
          "info": "yellow",
          "category": "cars",
          "img_url": "https://images.unsplash.com/photo-1595079755565-df3e37b85214?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          "price": 90,
          "date_created": "2021-02-13T18:15:45.258Z",
          "user_id": "6024117ba3491432847886a3",
          "__v": 0
      },
      {
          "_id": "6028178881c5d62dbc94715e",
          "name": "mini race car",
          "info": "blue, old",
          "category": "cars",
          "img_url": "https://images.unsplash.com/photo-1590692928242-111d76377422?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          "price": 45,
          "date_created": "2021-02-13T18:16:40.198Z",
          "user_id": "6024117ba3491432847886a3",
          "__v": 0
      },
      {
          "_id": "60281b3a81c5d62dbc94715f",
          "name": "dragon plush",
          "info": "green and orange",
          "category": "plush",
          "img_url": "https://images.pexels.com/photos/63637/crocodile-sitting-alligator-animal-63637.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          "price": 75,
          "date_created": "2021-02-13T18:32:26.977Z",
          "user_id": "6024117ba3491432847886a3",
          "__v": 0
      }
    ]
  `,
    color: "primary"
  },
  {
    request: "/toys/?page=2",
    method: "GET",
    status: "200",
    description: "LIST TOYS BY PAGE",
    response: `
    [
      {
          "_id": "60281cb281c5d62dbc947162",
          "name": "dinosaur",
          "info": "green",
          "category": "plush",
          "img_url": "https://images.pexels.com/photos/3662837/pexels-photo-3662837.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "price": 55,
          "date_created": "2021-02-13T18:38:42.637Z",
          "user_id": "6024117ba3491432847886a3",
          "__v": 0
      },
      {
          "_id": "60281d2881c5d62dbc947163",
          "name": "baby deer",
          "info": "scarf,red and brown",
          "category": "plush",
          "img_url": "https://images.pexels.com/photos/246576/pexels-photo-246576.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "price": 85,
          "date_created": "2021-02-13T18:40:40.732Z",
          "user_id": "6024117ba3491432847886a3",
          "__v": 0
      }
  ]
  `,
    color: "primary"
  },
  {
    request: "/toys/?s=green",
    method: "GET",
    status: "200",
    description: "SEARCH TOYS BY NAME OR INFO",
    response: `
    [
      {
          "_id": "602417f46574e511549b2025",
          "name": "rubik's cube",
          "info": "The original rubik's cube since 1970 3x3 yellow orange and green",
          "category": "educational",
          "img_url": "https://images.pexels.com/photos/19677/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=750&w=1260/",
          "price": 40,
          "date_created": "2021-02-10T17:29:24.199Z",
          "user_id": "6024117ba3491432847886a3",
          "__v": 0
      },
      {
          "_id": "60280e6681c5d62dbc94714f",
          "name": "Wooden Jenga",
          "info": "2-4 player game for the entire family",
          "category": "educational",
          "img_url": "https://images.pexels.com/photos/4473569/pexels-photo-4473569.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          "price": 120,
          "date_created": "2021-02-13T17:37:42.347Z",
          "user_id": "6024117ba3491432847886a3",
          "__v": 0
      },
      {
          "_id": "602810a881c5d62dbc947150",
          "name": "alphabet cubes",
          "info": "alphabet wooden letters, colorful!!!",
          "category": "educational",
          "img_url": "https://images.pexels.com/photos/591652/play-fun-blocks-block-591652.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          "price": 110,
          "date_created": "2021-02-13T17:47:20.252Z",
          "user_id": "6024117ba3491432847886a3",
          "__v": 0
      },
      {
          "_id": "6028120481c5d62dbc947151",
          "name": "Numbers Wooden Cubes",
          "info": "wooden numbers, 12 pieces, colorful!!!",
          "category": "educational",
          "img_url": "https://images.pexels.com/photos/311268/pexels-photo-311268.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          "price": 80,
          "date_created": "2021-02-13T17:53:08.513Z",
          "user_id": "6024117ba3491432847886a3",
          "__v": 0
      },
      {
          "_id": "602812a681c5d62dbc947152",
          "name": "slinky",
          "info": "Rainbow slinky",
          "category": "games",
          "img_url": "https://images.unsplash.com/photo-1594352482403-21fa735068ce?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=966&q=80",
          "price": 5,
          "date_created": "2021-02-13T17:55:50.335Z",
          "user_id": "6024117ba3491432847886a3",
          "__v": 0
      },
      {
          "_id": "6028130a81c5d62dbc947153",
          "name": "Green Frisbee",
          "info": "Amazing frisbee, Limited Edition!",
          "category": "games",
          "img_url": "https://images.unsplash.com/photo-1602848596095-481682701e89?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=801&q=80",
          "price": 200,
          "date_created": "2021-02-13T17:57:30.593Z",
          "user_id": "6024117ba3491432847886a3",
          "__v": 0
      },
      {
          "_id": "6028136b81c5d62dbc947154",
          "name": "Hula Hoop",
          "info": "Hula Hoop, colorful",
          "category": "games",
          "img_url": "https://images.pexels.com/photos/4378488/pexels-photo-4378488.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          "price": 60,
          "date_created": "2021-02-13T17:59:07.495Z",
          "user_id": "6024117ba3491432847886a3",
          "__v": 0
      },
      {
          "_id": "6028140d81c5d62dbc947155",
          "name": "NERF",
          "info": "Nerf, elite, blue white and orange",
          "category": "games",
          "img_url": "https://images.unsplash.com/photo-1594950981383-6eb659d18fbf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1349&q=80",
          "price": 150,
          "date_created": "2021-02-13T18:01:49.321Z",
          "user_id": "6024117ba3491432847886a3",
          "__v": 0
      },
      {
          "_id": "6028154281c5d62dbc947156",
          "name": "playmobil knight",
          "info": "playmobil knight, armor, sword, shield",
          "category": "playmobil",
          "img_url": "https://images.unsplash.com/photo-1546776230-12697ec9e7df?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1191&q=80",
          "price": 45,
          "date_created": "2021-02-13T18:06:58.975Z",
          "user_id": "6024117ba3491432847886a3",
          "__v": 0
      },
      {
          "_id": "6028158a81c5d62dbc947157",
          "name": "playmobil pirate",
          "info": "playmobil pirate, boots, hat, pistol",
          "category": "playmobil",
          "img_url": "https://images.unsplash.com/photo-1475563011407-6bf489b1c361?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          "price": 55,
          "date_created": "2021-02-13T18:08:10.668Z",
          "user_id": "6024117ba3491432847886a3",
          "__v": 0
      }
    ]
  `,
    color: "primary"
  },
  {
    request: "/toys/cat/:category",
    method: "GET",
    status: "200",
    description: "LIST TOYS BY CATEGORY",
    response: `
    [
      {
          "_id": "602417f46574e511549b2025",
          "name": "rubik's cube",
          "info": "The original rubik's cube since 1970 3x3 yellow orange and green",
          "category": "educational",
          "img_url": "https://images.pexels.com/photos/19677/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=750&w=1260/",
          "price": 40,
          "date_created": "2021-02-10T17:29:24.199Z",
          "user_id": "6024117ba3491432847886a3",
          "__v": 0
      },
      {
          "_id": "60280e6681c5d62dbc94714f",
          "name": "Wooden Jenga",
          "info": "2-4 player game for the entire family",
          "category": "educational",
          "img_url": "https://images.pexels.com/photos/4473569/pexels-photo-4473569.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          "price": 120,
          "date_created": "2021-02-13T17:37:42.347Z",
          "user_id": "6024117ba3491432847886a3",
          "__v": 0
      },
      {
          "_id": "602810a881c5d62dbc947150",
          "name": "alphabet cubes",
          "info": "alphabet wooden letters, colorful!!!",
          "category": "educational",
          "img_url": "https://images.pexels.com/photos/591652/play-fun-blocks-block-591652.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          "price": 110,
          "date_created": "2021-02-13T17:47:20.252Z",
          "user_id": "6024117ba3491432847886a3",
          "__v": 0
      },
      {
          "_id": "6028120481c5d62dbc947151",
          "name": "Numbers Wooden Cubes",
          "info": "wooden numbers, 12 pieces, colorful!!!",
          "category": "educational",
          "img_url": "https://images.pexels.com/photos/311268/pexels-photo-311268.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          "price": 80,
          "date_created": "2021-02-13T17:53:08.513Z",
          "user_id": "6024117ba3491432847886a3",
          "__v": 0
      }
  ]
  `,
    color: "primary"
  },
  {
    request: "/toys",
    method: "POST",
    status: "201",
    description: "ADD TOY",
    header: {
      name: "auth-token",
      value: "eyJhbGciOiJIUzI1NiIsInRBCCI6IkpXVCJ9.eyJfaWQiOiI2MDI0MTEGGGEzNDkxNDMyODQ3ODg2YTMiLCJpYXQiOjE2MTM1ODA2MjUsImV4cCI6MTYxMzU4NDIyNX0.GFM2C4lvcWinyBTb9LM_feFYzcB9KASDdK1qFZ0jpZk"
    },
    body: `
      {
        "name": "rubik's cube",
        "info": "The original rubik's cube since 1970 3x3 yellow orange and green",
        "category": "educational",
        "img_url": "https://images.pexels.com/photos/19677/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=750&w=1260/",
        "price": 40
      }
    `,
    response: `
    {
        "_id": "602d498d25b8761f24ae9f90",
        "name": "rubik's cube",
        "info": "The original rubik's cube since 1970 3x3 yellow orange and green",
        "category": "educational",
        "img_url": "https://images.pexels.com/photos/19677/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=750&w=1260/",
        "price": 40,
        "date_created": "2021-02-17T16:51:25.766Z",
        "user_id": "6024117ba3491432847886a3",
        "__v": 0
      }
    `,
    color: "success",
  },
  {
    request: "/toys/:id",
    method: "PUT",
    status: "200",
    description: "UPDATE TOY",
    header: {
      name: "auth-token",
      value: "eyJhbGciOiJIUzI1NiIsInRBCCI6IkpXVCJ9.eyJfaWQiOiI2MDI0MTEGGGEzNDkxNDMyODQ3ODg2YTMiLCJpYXQiOjE2MTM1ODA2MjUsImV4cCI6MTYxMzU4NDIyNX0.GFM2C4lvcWinyBTb9LM_feFYzcB9KASDdK1qFZ0jpZk"
    },
    body: `
    {
      "name": "rubik's cube",
      "info": "we update info !!!!!!",
      "category": "educational",
      "img_url": "https://images.pexels.com/photos/19677/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=750&w=1260/",
      "price": 40
    }
    `,
    response: `
    {
      "n": 1,
      "nModified": 1,
      "opTime": {
          "ts": "6930277822015471652",
          "t": 2
      },
      "electionId": "7fffffff0000000000000002",
      "ok": 1,
      "$clusterTime": {
          "clusterTime": "6930277822015471652",
          "signature": {
              "hash": "v53601=94bbv7bSV6Fu32Np/G0o2I=",
              "keyId": "6980485776298068855434"
          }
      },
      "operationTime": "6935857822015471542"
  }
  `,
    color: "warning"
  },
  {
    request: "/toys/:id",
    method: "DELETE",
    status: "200",
    description: "DELETE TOY",
    header: {
      name: "auth-token",
      value: "eyJhbGciOiJIUzI1NiIsInRBCCI6IkpXVCJ9.eyJfaWQiOiI2MDI0LPSGGGEzNDknCaMyODQ3ODg2YTMiLCJpYXQiOjE2MTM1ODA2MjUsImV4cBI9MTYxMzU4NDIyNX0.GFM2C4lvcWinyBTb9LM_feFX21B9KASDdK1qFZ0jpZk"
    },

    response: `
    {
      "n": 1,
      "opTime": {
          "ts": "6930278474850500611",
          "t": 2
      },
      "electionId": "7fffffff0000000000000002",
      "ok": 1,
      "$clusterTime": {
          "clusterTime": "6930278474850500611",
          "signature": {
              "hash": "v53601=94bbv7bSV6Fu32Np/G0o2I=",
              "keyId": "6980485776298068855434"
          }
      },
      "operationTime": "6930278474850500611",
      "deletedCount": 1
  }`,
    color: "danger"
  },
];