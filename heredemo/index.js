const platform = new H.service.Platform({
  app_id: 'he8hRkWDjhBpRCJ58etl',
  app_code: 'V25maFvhPIzrEAI0Xti7Bw'
});

const layers = platform.createDefaultLayers();
const map = new H.Map(document.getElementById('map'),
  layers.normal.map,{
      center: {lat: 40.4406, lng: -79.9958},
      zoom: 4,
});

const events = new H.mapevents.MapEvents(map);
const behavior = new H.mapevents.Behavior(events);
const ui = H.ui.UI.createDefault(map, layers);

let reader = new H.data.kml.Reader("hof-qb.kml");
reader.parse();

kml = reader.getLayer();
map.addLayer(kml);

kml.getProvider().addEventListener('tap', function(ev) {
  let info = ev.target.getData();
  let content = '<b>' + info.name + '</b><br/>';
  content += info.description;

  let bubble =  new H.ui.InfoBubble(ev.target.getPosition(), {
    content: content
  });
  ui.addBubble(bubble);
  console.log(ev.target.getData());
});
