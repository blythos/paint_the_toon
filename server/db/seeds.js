use mural_trail;
db.dropDatabase();

db.trail.insertMany([
  {
    artists: {
      {
        name: "Rogue-One",
      artistBio: "Rogue-one hails from glasgow and has been mastering the art of spraypainting for over 15 years. His work ranges from stencils, pieces, characters, 3D, canvases and to large scale productions. He also working in oils and acrylics and graphic design."},
      {
        name: "Elph",
        artistBio: "Elph is a painter and illustrator living in Edinburgh, Scotland."
      },
      {
        artist: "Fintan Magee",
        artistBio: "Fintan Magee is an Australian street artist known for his murals throughout Australia and the world. Born in Lismore New South Wales he grew up in Brisbane, gaining a reputation as a graffiti writer before obtaining a fine arts degree and relocating to Sydney."
      },
      {
        artist: "Faith 47",
        artistBio: "Faith XLVII is an internationally-acclaimed visual artist from South Africa who is currently based in Los Angeles.",
      },
      {
        artist: "Klingatron",
        artistBio: "Klingatron, aka James Klinge, only releaved his identity when he contributed to the mural trial."
      },
      {
        artist: "SmugOne",
        artistBio: "The Australian-born artist – real name Sam Bates – is originally from Nowra in New South Wales. He has lived in Scotland for 16 years."
      }
    },
    murals:
    {
      {
        name: "Bobby and the Bumble",
        description: "A black Scotty dog looking at a bumble bee.",
        location: {
          longitude: 55.894693,
          latitude: -4.297550,
          area: "Maryhill Road"
          },
        artist: "",
        image: "./client/assets/bobbybumble.jpg"
      },
      {
        name: "Maryhill Community Mural",
        description: "Created with the help of pupils from the East Park School, this mural is colourful and distinctive. It can be found at 1148 Maryhill Road.",
        location: {
          longitude: 55.886394,
          latitude: -4.283713,
          area: "Maryhill"
          },
        artist: "",
        image: "./client/assets/maryhill-community.jpg"
      },
      {
        name: "The Model Boat",
        description: "Magee's hyper-realistic style shows a kneeling woman with her palms out-stretched with a model boat floating about them.",
        location: {
          longitude: 55.870565,
          latitude: -4.305267,
          area: "Partick"
            },
        artist: "",
        image: "./client/assets/modelboat.jpg"
      },
      {
        name: "Yardworks Festivel",
        description: "Each year the festival hosts various graffiti and street artist who contribute to the artwork on the walls of SWG3.",
        location: {
          longitude: 55.864711,
          latitude: -4.299762,
          area: "Yorkhill"
          },
        artist: "",
        image: "./client/assets/Yardworks-2018.jpg"
      },
      {
        name: "Empty Hands",
        description: "The piece depicts a woman looking out with a knecklace interwoven through her fingers like a web, perhaps a hint at the complexity of the notion of identity. ",
        location: {
          longitude: 55.853589,
          latitude: -4.305528,
          area: "Ibrox"
          },
        artist: "",
        image: "./client/assets/empty-hands.jpg"
      },
      {
        name: "Charing Cross Croc",
        description: "The image is designed to work with the environment using a gap in the bricks for the eye slit, and areas of old brickwork amongst the scales. Like a giant crocodile hunting the concrete jungle, the full scale of this animal is only realised from a certain angle, and this wrap around corner effect was the main reason for choosing the cunning beast.",
        location: {
          longitude: 55.866873,
          latitude: -4.272305,
          area: "Charing Cross"
          },
        artist: "",
        image: "./client/assets/crocodile.jpg"
      },
      {
        name: "Shadow Hand Puppets",
        description: "Art Pistol were looking for something with a bit of wow factor to brighten up what was becoming an increasingly dingy, although very well used underpass. The concept was born, like a shadow from a flame, and off went Mr Rogue with the idea, a camera and a will to harass those he met into doing exactly that.",
        location: {
          longitude: 55.868291,
          latitude: -4.260333,
          area: "Cowcaddens"
          },
        artist: "",
        image: "./client/assets/shadowhands.jpg"
      },
      {
        name: "The Swimmer",
        description: "This mural was one of the first commissioned to celebrate the arrival of the Glasgow 2014 Commonwealth Games. You'll find this huge mural down at the Kingston Bridge, cleverly placed to greet stopped cars.",
        location: {
          longitude: 55.856634,
          latitude: -4.270283,
          area: "City Centre"
          },
        artist: "",
        image: "./client/assets/The-Swimmer-Mural.jpg"
      },
      {
        name: "The Gallery",
        description: "Smug's depiction of Da Vinci’s Mona Lisa has already been dubbed “The Mona Lassie” by Glaswegians. It features a woman holding a can of Irn-Bru in front of a background of the Clyde Auditorium and Titan Crane.",
        location: {
          longitude: 55.858759,
          latitude: -4.262486,
          area: "City Centre"
          },
        artist: "",
        image: "./client/assets/thegallery.jpg"
      },
      {
        name: "",
        description: "",
        location: {
          longitude: ,
          latitude: ,
          area: ""
          },
        artist: "",
        image: ""
      },
    }
  }
])
