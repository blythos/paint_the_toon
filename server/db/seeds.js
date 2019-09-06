use mural_trail;
db.dropDatabase();

gb.trail.insertMany([
  {
    name: "Bobby and the Bumble",
    description: "A black Scotty dog looking at a bumble bee.",
    location: {
      longitude: 55.894693,
      latitude: -4.297550,
      area: "Maryhill Road"
    },
    artist: [
      "Rogue-One",
      "ejek"
    ],
    artistBio: "rogue-one hails from glasgow and has been mastering the art of spraypainting for over 15 years. his work ranges from stencils, pieces, characters, 3D, canvases and to large scale productions. also working in oils and acrylics and graphic design.",
    image: "./client/assets"
  },
])
