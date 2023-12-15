const map = new ol.Map({
    view: new ol.View({
        center: [-68980.2894030371, 4253948.148050834],   
        zoom: 4,
        maxZoom: 18,
        minZoom: 4,
            }),
            
    layers: [new ol.layer.Tile({
            source: new ol.source.OSM(),
            name:'OSM'
          }),
        ],
        target: "js-map",
      });
    
      
    
      // const EUcontriesGeoJSON = new ol.layer.Vector({
      //   source: new ol.source.Vector({
      //     url: './json/lignes.geojson',
      //     format: new ol.format.GeoJSON()
      //   }),
      //   visible: true,
      //   title: 'EUcontriesGeoJSON',
      // });
      // map.addLayer(EUcontriesGeoJSON);
  
      
  
  
      const layerswitcher = new ol.control.LayerSwitcher();
      map.addControl(layerswitcher);
  
  
      const openstreetMapHumanitarian = new ol.layer.Tile({
        source: new ol.source.OSM({
          url: 'https://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
        }),
        visible: false,
        title: 'OMSHumanitarian',
      });
      map.addLayer(openstreetMapHumanitarian);
  
  
      const Mapstreets = new ol.layer.Tile({
        source: new ol.source.TileJSON({
          url: 'https://api.maptiler.com/maps/streets-v2/tiles.json?key=SaAmWTUTX66XgjQewfYt',
        }),
        visible: false,
        title: 'Mapstreets',
      });
      map.addLayer(Mapstreets);
  
      const Mapsatellite = new ol.layer.Tile({
        source: new ol.source.TileJSON({
          url: 'https://api.maptiler.com/maps/satellite/tiles.json?key=SaAmWTUTX66XgjQewfYt',
        }),
        visible: false,
        title: 'Mapsatellite',
      });
      map.addLayer(Mapsatellite);
  
  const input = document.getElementById('file')
  input.addEventListener('change',function(){
    const fl = input.files;
    const flpath = URL.createObjectURL(fl[0])
    console.log(flpath)
    fetch(flpath)
    .then((res) =>{
      console.log(res)
      const layerGeoJSON = new ol.layer.Vector({
        source: new ol.source.Vector({
          url: flpath,
          format: new ol.format.GeoJSON()
        }),
        visible: true,
        title: fl[0].name,
      });
      map.addLayer(layerGeoJSON);
      return res.json();
    })
    .then((data) =>{
      console.log(data)
    })
  })
  
      
      