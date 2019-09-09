<template lang="html">
  <div id="map">
  </div>
</template>

<script>
import{eventBus} from '@/main.js';
import L from 'leaflet';
import Service from '@/services/Service.js'
export default {
  name: 'map',
  components: {
    L
  },
  data() {
    return {
      zoom: 13,
      center: [55.865332, -4.258086],
      url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      murals: [],
      addedMarkers: [],
      muralMarker: null
    }
  },
  mounted(){
    Service.getTrails()
    .then(trail => this.murals = trail)
    .then(trail => trail.forEach(mural => this.addMarker([mural.location.longitude, mural.location.latitude], mural.name)))

    this.map = L.map('map');

    this.map.addEventListener('dblclick', (e) => {
      // TO DO: Add new method to capture details from user.
      let coords = [e.latlng.lat, e.latlng.lng]
      this.addMarker(coords, `Lat: ${coords[0]}, Lng: ${coords[1]} `)
    });
    this.map.setView(this.center, this.zoom);
    L.tileLayer(this.url, {attribution: this.attribution}).addTo(this.map);

    this.map.on('popupopen', (e) => {
      this.findMural(e.popup._content);
    })

  },
  methods: {
    addMarker(coords, message){
      L.marker(coords).addTo(this.map)
      .bindPopup(message)
      const addedMarker = {
        coords: coords,
        message: message
      };
      this.addedMarkers.push(addedMarker)
 },
    findMural(name){
      this.muralMarker =
     this.murals.find(mural => mural.name === name);

     eventBus.$emit('mural-selected', this.muralMarker);
  }
}
}
</script>

<style lang="css" scoped>
#map {
	width:49vw;
	height:80vh;
}
@import "~leaflet/dist/leaflet.css";
</style>
