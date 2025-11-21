var map = new maplibregl.Map({
    container: 'map',
    // ここから地図設定
    style: 'https://gsi-dev.optgeo.net/mapbox-style/std.json', // ← この行が入っているか
    center: [137.6625, 36.5658],
    zoom: 14
});
    pitch: 0, // 傾き
    maxPitch: 85, // 最大傾き
    bearing: 0, // 回転角
    maxBounds: [[122.93457, 20.42551], [153.98669, 45.55118]] // 日本の範囲
});

map.addControl(new maplibregl.NavigationControl(), 'top-right');
