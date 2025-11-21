const map = new maplibregl.Map({
    container: 'map', // HTMLの地図を表示する場所
    style: 'https://tile.openstreetmap.jp/styles/hypsometric/style.json',
    center: [137.6625, 36.5658], // [経度, 緯度] を黒部ダム付近に設定
    zoom: 14, // ズームレベルを14に設定
    pitch: 0, // 傾き
    maxPitch: 85, // 最大傾き
    bearing: 0, // 回転角
    maxBounds: [[122.93457, 20.42551], [153.98669, 45.55118]] // 日本の範囲
});

map.addControl(new maplibregl.NavigationControl(), 'top-right');
