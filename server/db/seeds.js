use mural_trail;
db.dropDatabase();

db.trail.insertMany([
    {
      name: "Bobby and the Bumble",
      description: "A black Scotty dog looking at a bumble bee.",
      location: {
        longitude: 55.894693,
        latitude: -4.297550,
        area: "Maryhill Road"
      },
      artist: "Rogue-One",
      image: "./assets/bobbybumble.jpg"
    },
    {
      name: "Maryhill Community Mural",
      description: "Created with the help of pupils from the East Park School, this mural is colourful and distinctive. It can be found at 1148 Maryhill Road.",
      location: {
        longitude: 55.886394,
        latitude: -4.283713,
        area: "Maryhill"
      },
      artist: "Elph",
      image: "./assets/maryhill-community.jpg"
    },
    {
      name: "The Model Boat",
      description: "Magee's hyper-realistic style shows a kneeling woman with her palms out-stretched with a model boat floating about them.",
      location: {
        longitude: 55.870565,
        latitude: -4.305267,
        area: "Partick"
      },
      artist: "Fintan Magee",
      image: "./assets/modelboat.jpg"
    },
    {
      name: "Yardworks Festivel",
      description: "Each year the festival hosts various graffiti and street artist who contribute to the artwork on the walls of SWG3.",
      location: {
        longitude: 55.864711,
        latitude: -4.299762,
        area: "Yorkhill"
      },
      artist: "Various",
      image: "./assets/Yardworks-2018.jpg"
    },
    {
      name: "Empty Hands",
      description: "The piece depicts a woman looking out with a knecklace interwoven through her fingers like a web, perhaps a hint at the complexity of the notion of identity. ",
      location: {
        longitude: 55.853589,
        latitude: -4.305528,
        area: "Ibrox"
      },
      artist: "Faith47",
      image: "./assets/empty-hands.jpg"
    },
    {
      name: "Charing Cross Croc",
      description: "The image is designed to work with the environment using a gap in the bricks for the eye slit, and areas of old brickwork amongst the scales. Like a giant crocodile hunting the concrete jungle, the full scale of this animal is only realised from a certain angle, and this wrap around corner effect was the main reason for choosing the cunning beast.",
      location: {
        longitude: 55.866873,
        latitude: -4.272305,
        area: "Charing Cross"
      },
      artist: "Klingatron",
      image: "./assets/crocodile.jpg"
    },
    {
      name: "Shadow Hand Puppets",
      description: "Art Pistol were looking for something with a bit of wow factor to brighten up what was becoming an increasingly dingy, although very well used underpass. The concept was born, like a shadow from a flame, and off went Mr Rogue with the idea, a camera and a will to harass those he met into doing exactly that.",
      location: {
        longitude: 55.868291,
        latitude: -4.260333,
        area: "Cowcaddens"
      },
      artist: "Rogue-One",
      image: "./assets/shadowhands.jpg"
    },
    {
      name: "The Swimmer",
      description: "This mural was one of the first commissioned to celebrate the arrival of the Glasgow 2014 Commonwealth Games. You'll find this huge mural down at the Kingston Bridge, cleverly placed to greet stopped cars.",
      location: {
        longitude: 55.856634,
        latitude: -4.270283,
        area: "City Centre"
      },
      artist: "SmugOne",
      image: "./assets/The-Swimmer-Mural.jpg"
    },
    {
      name: "The Gallery",
      description: "Smug's depiction of Da Vinci’s Mona Lisa has already been dubbed “The Mona Lassie” by Glaswegians. It features a woman holding a can of Irn-Bru in front of a background of the Clyde Auditorium and Titan Crane.",
      location: {
        longitude: 55.858759,
        latitude: -4.262486,
        area: "City Centre"
      },
      artist: "SmugOne",
      image: "./assets/thegallery.jpg"
    },
    {
      name: "Five Faces",
      description: "This mural presents comical expressions of people playing with yoyos under the Caledonian Railway, Broomielaw.",
      location: {
        longitude: 55.856492,
        latitude: -4.258771,
        area: "City Centre"
      },
      artist: "SmugOne",
      image: "@/assets/fivefaces.jpg"
    },
    {
      name: "Glasgow's Tiger",
      description: "Klingatron has collaborated with Art Pistol to re-imagine the original tiger design previously installed at this location. Incorporating a high level of detail, and occupying the same high profile location adjacent to South Portland Suspension Bridge, this mural is becoming as iconic as its predecessor.",
      location: {
        longitude: 55.855849,
        latitude: -4.255137,
        area: "City Centre"
      },
      artist: "Klingatron",
      image: "@/assets/tiger.jpg"
    },
    {
      name: "A View from the Clyde ",
      description: "This original and somewhat comedic, surreal take on what lurks beneath the River Clyde depicts a variety of things more cheerful than what you would actually find.",
      location: {
        longitude: 55.854902,
        latitude: -4.251434,
        area: ""
      },
      artist: "Rogue-One",
      image: "@/assets/viewofclyde.jpg"
    },
    {
      name: "Clutha Bar",
      description: "The Clutha Bar features a fantastic mural on the outside wall, celebrating many of the famous faces that have been associated with the venue. From Alex Harvey, Frank Zappa, and Woody Guthrie to Billy Connolly, Benny Lynch and Stan Laurel, this piece of art highlights the unique people of the city's history.",
      location: {
        longitude: 55.854456,
        latitude: -4.250408,
        area: "City Centre"
      },
      artist: "Rogue-One and EJEK",
      image: "@/assets/clutha.jpg"
    },
    {
      name: "Big Birds",
      description: "This long mural wraps around a wall on Howard Street and Dunlop Street, adjacent to the St. Enoch shopping center. The mural depicts giant birds escaping captivity—and a hungry cat waiting to pounce.",
      location: {
        longitude: 55.854694,
        latitude: -4.251274,
        area: "City Centre"
      },
      artist: "Rogue-One",
      image: "@/assets/bigbird.jpg"
    },
    {
      name: "Spaceman",
      description: "It has been informed by Pop, graphic novels, graphic design, and Japanese culture which you can see in the slick clean lines, colour choice and geometric patterned backgrounds.",
      location: {
        longitude: 55.857110,
        latitude: -4.247121,
        area: "City Centre"
      },
      artist: "Recoat and Wyllie",
      image: "@/assets/spaceman.jpg"
    },
    {
      name: "Argyle Cafe",
      description: "A refreshed site, Smug’s reinterpretation of his previous installation is a fantastic twist to surprise the viewer.",
      location: {
        longitude: 55.857736,
        latitude: -4.251472,
        area: "City Centre"
      },
      artist: "smug",
      image: "@/assets/argylecafe.jpg"
    },
    {
      name: "The World'd Most Economical Taxi",
      description: "You'll find this fantastical floating taxi on Mitchell Street adjacent to Glasgow's Buchanan Street, capturing the attention of all who walk past.",
      location: {
        longitude: 55.857513,
        latitude: -4.256755,
        area: "City Centre"
      },
      artist: "Rogue-One",
      image: "@/assets/taxi.jpg"
    },
    {
      name: "Honey I Shrunk The Kids",
      description: "Another mural from the prolific Smug, Honey I Shrunk the Kids is on Mitchell Street but is a familiar sight when spotted from busy Argyle Street.",
      location: {
        longitude: 55.858605,
        latitude: -4.255980,
        area: "City Centre"
      },
      artist: "SmugOne",
      image: "@/assets/shrunkkids.jpg"
    },
    {
      name: "Wind Power",
      description: "Another imaginative image from Rogue-One and Art Pistol, this mural was originally conceived as a live installation as part of the Doors Open Day 2014 event and celebrates the diversity of sustainable energy production within the Glasgow area and Scotland nationally.",
      location: {
        longitude: 55.859649,
        latitude: -4.255532,
        area: "City Centre"
      },
      artist: "Rogue-One",
      image: "@/assets/windpower.jpg"
    },
    {
      name: "Panda",
      description: "This Giant Panda is at home in one of the city’s most interesting lanes, beside the bamboo gates of Gordon Lane.",
      location: {
        longitude: 55.859775,
        latitude: -4.255050,
        area: "City Centre"
      },
      artist: "Klingatron",
      image: "@/assets/panda.jpg"
    },
    {
      name: "Badminton Player",
      description: "Installed as part of the promotional campaign for 2014 Commonwealth Games, this mural is part of a series depicting various sports. Completed by the same artist, the other murals were installed adjacent to Partick Train Station and represent hockey, netball and rugby. The Badminton mural includes action shots of Scotland player Kieran Merrilees and conveys the speed of the game, as well as the athleticism required to succeed in such a competitive sport.",
      location: {
        longitude: 55.858448,
        latitude: -4.247427,
        area: "City Centre"
      },
      artist: "Guido Van Helten",
      image: "@/assets/badminton.jpg"
    },
    {
      name: "Fellow Glasgow Residents",
      description: "Before the gable end wall overlooking Ingram Street car park featured peeling paint and graffiti. Now thanks to the imagination of Smug it shows all types of animals found in Glasgow’s parks and green space appearing through what looks like holes in the wall.",
      location: {
        longitude: 55.859235,
        latitude: -4.243895,
        area: "City Centre"
      },
      artist: "SmugOne",
      image: "@/assets/residents.jpg"
    },
    {
      name: "Puppet Master",
      description: "The Hip-Hop Marionettes were made by Rogue-One, aided by Art Pistol, influenced by a Beastie Boys cover and a Run DMC picture.",
      location: {
        longitude: 55.861263,
        latitude: -4.247516,
        area: "City Centre"
      },
      artist: "Rogue-One",
      image: "@/assets/puppets.jpg"
    },
    {
      name: "Strathclyde University Wonderwall",
      description: "Covering more than 1,000 square metres and several stories, Strathclyde University's Wonderwall was commissioned to celebrate the 50th anniversary of the Royal Charter which conferred the University's status and also the 2014 Commonwealth Games.",
      location: {
        longitude: 55.861200,
        latitude: -4.242625,
        area: "City Centre"
      },
      artist: "Rogue-one and Ejek",
      image: "@/assets/lecture.jpg"
    },
    {
      name: "In Common",
      description: "This striking mural graces the six-story façade of the Townhead Campus building, part of the City of Glasgow college. The abstract, mirrored profiles of model and journalist Leilani Momoisea can’t be missed while driving along Cathedral Street. “In Common” was painted by her friend, a New Zealand artist named Askew, during the Festival 2014.",
      location: {
        longitude: 55.863461,
        latitude: -4.246257,
        area: "City Centre"
      },
      artist: "ASKEW",
      image: "@/assets/incommon.jpg"
    },
    {
      name: "Barras Mural",
      description: "The mural on the extreme left is 'Bees' by Ejek. King of the Barras in the centre is by Conzo and Globel, otherwise known as Conzo Throb and Ciaran Globel. It features the late 'Teddy Tunnocks' aka King of the Barras. A Weightlifter, bareknuckle champion and heir to the Tunnocks Teacake dynasty. An interesting but not so well known 1930s Glasgow legend. 'Two Faces' is by Mark Worst. The snake is by ASONE.",
      location: {
        longitude: 55.855079,
        latitude: -4.238415,
        area: "East End"
      },
      image: "@/assets/kingbarras.jpg"
    },
    {
      name: "Pirate Girl",
      description: "Fearsome, and complete with pirate monkey companion. This mural was spray-painted for the BaAd back garden opening party and Art Pistol street art event in 2017. It's situated alongside the Barras Mural.",
      location: {
        longitude: 55.855079,
        latitude: -4.238415,
        area: "East End"
      },
      artist: "Rogue-One",
      image: "@/assets/pirategirl.jpg"
    },
    {
      name: "In:Common",
      description: "Created as part of the Recoat's In Common project for the 2014 Commonwealth Games.",
      location: {
        longitude: 55.854619,
        latitude: -4.236961,
        area: "East End"
      },
      artist: "Best|Ever",
      image: "@/assets/bigwoman.jpg"
    },
    {
      name: "St Luke's and the Bull",
      description: "Created for the St Luke's music venue.",
      location: {
        longitude: 55.854778,
        latitude: -4.234693,
        area: "East End"
      },
      artist: "SmugOne",
      image: "@/assets/stluke.jpg"
    },
    {
      name: "St Enoch and Child",
      description: "Smug has created another fantastic piece of work to complement the mature image of a modern day St Mungo on High St. The mural is a contemporary interpretation of the city's founding story; St Thenue/Enoch cradling her beloved St Kentigern/Mungo.",
      location: {
        longitude: 55.860499,
        latitude: -4.240084,
        area: "City Centre"
      },
      artist: "SmugOne",
      image: "@/assets/enoch.jpg"
    },
    {
      name: "St Mungo",
      description: "Although officially untitled, it acquired its name during a period of massive social media interest when an image of this installation was shared approximately 1.5 million times within the first week.",
      location: {
        longitude: 55.860947,
        latitude: -4.238382,
        area: "City Centre"
      },
      artist: "SmugOne",
      image: "@/assets/mungo.jpg"
    },
    {
      name: "The Musician",
      description: "Another Rogue-One collaboration with Art Pistol Projects, drawing upon the influences of the local live music scene, and helping add some colour and creativity to the city’s resurgent lanes.",
      location: {
        longitude: 55.864414,
        latitude: -4.257857,
        area: "City Centre"
      },
      artist: "Rogue-One",
      image: "@/assets/musician.jpg"
    },
    {
      name: "The Lost Giant",
      description: "Australian artist Stormie Mills has long been renowned for his distinctive body of work, none more so than his famous 'Lost Giant' series which he has installed in various major towns and cities all over the world. Now Glasgow has one of its very own, specially decorated with a scarf made from the Glaswegian tartan. Standing sentinel over the entrance to Sauchiehall Lane, this atmospheric character is already becoming another local landmark.",
      location: {
        longitude: 55.865594,
        latitude: -4.267983,
        area: "City Centre"
      },
      artist: "Stormie Mills",
      image: "@/assets/lostgiant.jpg"
    },
    {
      name: "Dr Connelly I Presume?",
      description: "This is the second of the two commemorative Billy Connolly murals installed by Rogue One. It is a reproduction of the Jack Vettriano painting from the comedian’s World Tour of Scotland series in 1994 titled “Dr Connolly I Presume” and features a windblown Billy on a storm-lashed coast near John O’Groats. A reproduction of the third portrait commissioned by BBC Scotland as part of the project, a Rachel Maclean digital print of Billy in a specially created outfit, has been installed in the Gallowgate via a vinyl transfer.",
      location: {
        longitude: 55.856710,
        latitude: -4.255416,
        area: "City Centre"
      },
      artist: "Rogue-One",
      image: "@/assets/drbilly.jpg"
    },
    {
      name: "Billy Connelly",
      description: "In commemoration of Billy Connolly’s 75th birthday BBC Scotland commissioned three portraits of the comedian by top Scottish artists. In conjunction with Glasgow City Council representations of these original works were then installed around the city centre. Two of these works have been depicted as murals by Rogue One. This particular installation is based on John Byrne’s “Billy Connolly”. All three portraits were showcased, across the country, in a special BBC Scotland programme Billy Connolly: Portrait of a Lifetime and are now on display in the People’s Palace.",
      location: {
        longitude: 55.856428,
        latitude: -4.248632,
        area: "City Centre"
      },
      artist: "Rogue-One",
      image: "@/assets/billyconnelly.jpg"
    },
    {
      name: "A Study of a Woman in Black",
      description: "Now working under his own name, James Klinge (aka “Klingatron”) continues his collaboration with Art Pistol whilst demonstrating the same attention to detail through his distinctive use of intricate stencil technique. However, the artist has chosen to progress his subject matter towards portraiture, a trend which has been showcased in a number of exhibitions around the world.",
      location: {
        longitude: 55.854742,
        latitude: -4.245376,
        area: "City Centre"
      },
      artist: "Klingatron",
      image: "@/assets/womaninblack.jpg"
    },
    {
      name: "Charing Cross Birds",
      description: "Art Pistol and Little Book Transfers found the perfect location to continue LBT’s ‘STALK’ series depicting birds, foliage and fruit together. The graphic style and detailed illustration provides something a little different for Glasgow’s walls.",
      location: {
        longitude: 55.866873,
        latitude: -4.272305,
        area: "City Centre"
      },
      artist: "Little Book Transfers",
      image: "@/assets/charingbirds.jpg"
    }
]);

db.artists.insertMany([
  {
    name: "Rogue-One",
    artistBio: "Rogue-one hails from glasgow and has been mastering the art of spraypainting for over 15 years. His work ranges from stencils, pieces, characters, 3D, canvases and to large scale productions. He also working in oils and acrylics and graphic design.",
    website: "https://www.facebook.com/R0GUE0NER/"
  },
  {
    name: "Elph",
    artistBio: "Elph is a painter and illustrator living in Edinburgh, Scotland.",
    website: "http://akaelph.com/"
  },
  {
    artist: "Fintan Magee",
    artistBio: "Fintan Magee is an Australian street artist known for his murals throughout Australia and the world. Born in Lismore New South Wales he grew up in Brisbane, gaining a reputation as a graffiti writer before obtaining a fine arts degree and relocating to Sydney.",
    website: "http://fintanmagee.com/"
  },
  {
    artist: "Faith 47",
    artistBio: "Faith XLVII is an internationally-acclaimed visual artist from South Africa who is currently based in Los Angeles.",
    website: "https://faith47.com/"
  },
  {
    artist: "Klingatron",
    artistBio: "James Klinge was born in Glasgow, Scotland where he continues to live and work. </br>Whilst his paintings can range from small canvas works to large scale murals, his foundation is made from intricate and detailed hand cut stencil. His paintings show a complimentary blend of high detail and expressive free hand marks that add a near abstract element to his subject matter, which is primararily figurative studies.",
    website: "https://jamesklinge.bigcartel.com/"
  },
  {
    artist: "SmugOne",
    artistBio: "The Australian-born artist – real name Sam Bates – is originally from Nowra in New South Wales. He has lived in Scotland for 16 years.",
    website: "https://www.facebook.com/smuggraffiti/"
  },
  {
    artist: "Recoat",
    artistBio: "Founded in 2007 by Amy Whiten and Alistair Wyllie, Recoat started out as a unique gallery space in Glasgow, providing a platform for Contemporary Urban Art and Design in Scotland.",
    website: "http://recoatdesign.com/"
  },
  {
    artist: "Stormie Mills",
    artistBio: "His creative journey began in the forgotten corners of our cities, the abandoned buildings and broken back lanes provided a canvas.",
    website: "https://www.stormiemills.com/"
  },
  {
    artist: "Guido Van Helten",
    artistBio: "Guido van Helten is an Australian artist, known for his photorealistic murals. Van Helten was raised in Brisbane and was a graffiti artist in his youth. He moved to Lismore, New South Wales to study visual arts at Southern Cross University, majoring in printmaking.",
    website: "http://www.guidovanhelten.com/"
  },
  {
    artist: "ASKEW",
    artistBio: "Askew One/Elliot O’Donnell is a self-taught multi-disciplinary artist hailing from the capital of the South Pacific, Auckland, New Zealand. From his roots in his city’s graffiti scene during the early 90’s, he became one of the key figures known internationally from the region.",
    website: "https://www.askew1.com/"
  },
  {
    artist: "Best|Ever",
    artistBio: "BEST | EVER are two like-minded painters from South London by way of the south coast. Since meeting in late 2008, the pair have developed a style that combines traditional painterly techniques with intricate aerosol realism. Influenced as much by Schiele and Klimt as by their combined experience as graffiti writers, BEST | EVER execute sensitive subject matters such as death, disease and mental illness with soul and wisdom that belies their youth.",
    website: "https://cargocollective.com/churchofbestever"
  },
  {
    artist: "Little Book Transfers",
    artistBio: "Mural and illustration collective based in Glasgow.",
    website: "https://www.facebook.com/littlebooktransfersglasgow/"
  },
  {
    artist: "Conzo Throb",
    artistBio: "UK (Glasgow) Based Illustrator / Graffiti Dabbler / Designer / Visual Mischief Coordinator",
    website: "http://www.conzo.co.uk/"
  }
]);

db.user.insertMany([
  {
    name: "test1"
  },
  {
    name: "test2"
  }
])
