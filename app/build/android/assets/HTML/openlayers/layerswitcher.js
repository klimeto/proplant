!function(){var e=new ol.Map({target:"map",layers:[new ol.layer.Group({title:"Base maps",layers:[new ol.layer.Tile({title:"Water color",type:"base",visible:!1,source:new ol.source.Stamen({layer:"watercolor"})}),new ol.layer.Tile({title:"OSM",type:"base",visible:!0,source:new ol.source.OSM}),new ol.layer.Group({title:"Satellite and roads",type:"base",combine:!0,visible:!1,layers:[new ol.layer.Tile({source:new ol.source.MapQuest({layer:"sat"})}),new ol.layer.Tile({source:new ol.source.MapQuest({layer:"hyb"})})]}),new ol.layer.Tile({title:"Satellite",type:"base",visible:!1,source:new ol.source.MapQuest({layer:"sat"})})]}),new ol.layer.Group({title:"Overlays",layers:[new ol.layer.Tile({title:"Countries",source:new ol.source.TileWMS({url:"http://demo.opengeo.org/geoserver/wms",params:{LAYERS:"ne:ne_10m_admin_1_states_provinces_lines_shp"},serverType:"geoserver"})})]})],view:new ol.View({center:ol.proj.transform([-.92,52.96],"EPSG:4326","EPSG:3857"),zoom:6})}),t=new ol.control.LayerSwitcher({tipLabel:"Légende"});e.addControl(t)}();