var map = new maplibregl.Map({
    container: 'map',
    // 国土地理院の正しいURL（.geo.jpが入っています）
    style: 'https://gsi-dev.optgeo.geo.jp/mapbox-style/std.json',
    center: [137.6625, 36.5658],
    zoom: 14, 
    
    pitch: 0,
    maxPitch: 85,
    bearing: 0,
    maxBounds: [[122.93457, 20.42551], [153.98669, 45.55118]] 
    
});

map.addControl(new maplibregl.NavigationControl(), 'top-right');
