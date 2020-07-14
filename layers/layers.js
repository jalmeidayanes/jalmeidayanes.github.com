var wms_layers = [];


        var lyr_GooglecnNormal_0 = new ol.layer.Tile({
            'title': 'Google.cn Normal',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.com/intl/zh-CN_cn/permissions/geoguidelines/attr-guide.html">地图数据 ©2016 Google</a>',
                url: 'http://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_pq_adicora_1 = new ol.format.GeoJSON();
var features_pq_adicora_1 = format_pq_adicora_1.readFeatures(json_pq_adicora_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pq_adicora_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pq_adicora_1.addFeatures(features_pq_adicora_1);
var lyr_pq_adicora_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pq_adicora_1, 
                style: style_pq_adicora_1,
                interactive: true,
                title: '<img src="styles/legend/pq_adicora_1.png" /> pq_adicora'
            });
var format_casos_sociales_julio_2 = new ol.format.GeoJSON();
var features_casos_sociales_julio_2 = format_casos_sociales_julio_2.readFeatures(json_casos_sociales_julio_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_casos_sociales_julio_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_casos_sociales_julio_2.addFeatures(features_casos_sociales_julio_2);
var lyr_casos_sociales_julio_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_casos_sociales_julio_2, 
                style: style_casos_sociales_julio_2,
                interactive: true,
    title: 'casos_sociales_julio<br />\
    <img src="styles/legend/casos_sociales_julio_2_0.png" /> APROBADO<br />\
    <img src="styles/legend/casos_sociales_julio_2_1.png" /> EN PROCESO<br />\
    <img src="styles/legend/casos_sociales_julio_2_2.png" /> EN REVISIÓN<br />\
    <img src="styles/legend/casos_sociales_julio_2_3.png" /> ENTREGADO<br />'
        });

lyr_GooglecnNormal_0.setVisible(true);lyr_pq_adicora_1.setVisible(true);lyr_casos_sociales_julio_2.setVisible(true);
var layersList = [lyr_GooglecnNormal_0,lyr_pq_adicora_1,lyr_casos_sociales_julio_2];
lyr_pq_adicora_1.set('fieldAliases', {'id': 'id', });
lyr_casos_sociales_julio_2.set('fieldAliases', {'nombre': 'nombre', 'apellido': 'apellido', 'cedula': 'cedula', 'producto': 'producto', 'cantidad': 'cantidad', 'estatus_requerimientos': 'estatus_requerimientos', 'familia': 'familia', 'fecha_de_entrega': 'fecha_de_entrega', 'x': 'x', 'y': 'y', 'z': 'z', });
lyr_pq_adicora_1.set('fieldImages', {'id': 'TextEdit', });
lyr_casos_sociales_julio_2.set('fieldImages', {'nombre': 'TextEdit', 'apellido': 'TextEdit', 'cedula': 'TextEdit', 'producto': 'TextEdit', 'cantidad': 'Range', 'estatus_requerimientos': 'TextEdit', 'familia': 'Range', 'fecha_de_entrega': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'z': 'TextEdit', });
lyr_pq_adicora_1.set('fieldLabels', {'id': 'no label', });
lyr_casos_sociales_julio_2.set('fieldLabels', {'nombre': 'inline label', 'apellido': 'inline label', 'cedula': 'inline label', 'producto': 'inline label', 'cantidad': 'no label', 'estatus_requerimientos': 'no label', 'familia': 'no label', 'fecha_de_entrega': 'no label', 'x': 'no label', 'y': 'no label', 'z': 'no label', });
lyr_casos_sociales_julio_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});