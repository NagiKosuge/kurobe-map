var map = new maplibregl.Map({
    container: 'map',
    // ここから地図設定（全ての設定はここで完結します）
    style: 'https://gsi-dev.optgeo.net/mapbox-style/std.json',
    center: [137.6625, 36.5658],
    zoom: 14, // ★重要: 最後の要素以外にはコンマが必要です
    
    // ここからが、本来設定したかった詳細なオプションです
    pitch: 0,
    maxPitch: 85,
    bearing: 0,
    maxBounds: [[122.93457, 20.42551], [153.98669, 45.55118]] // ★重要: ここは最後の要素なのでコンマは不要
    
}); // ★閉じ括弧はここで一度だけ！

map.addControl(new maplibregl.NavigationControl(), 'top-right');
