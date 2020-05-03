var add = function(){
    var title = document.getElementById("title").value;
    var label = document.querySelector('.instructions');

    if( navigator.geolocation )
    {
        navigator.geolocation.getCurrentPosition(

            function( position )
            {
                var location = position.coords ;
                lat = location.latitude ;
                lng = location.longitude ;

                saveData(title,lat,lng);
                addData(title,lat,lng);
            },
            function( error )
            {
                var errorInfo = [
                    "unexpected error" ,
                    "prihibited" ,
                    "signal blocked" ,
                    "timeout"
                ] ;
                var errorNo = error.code ;
                var errorMessage = "[error : " + errorNo + "]\n" + errorInfo[ errorNo ];

                label.innerText = errorMessage;
            } ,
            {
                // ここtrueにすると精度が上がる
                "enableHighAccuracy": true,
                "timeout": 8000,
                "maximumAge": 30000,
            }
        ) ;
    }
    else
    {
        var errorMessage = "Not Compatible with GeoLocation API" ;
        label.innerText = errorMessage;
    }
}; 

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {

        let latitude = place.lat;
        let longitude = place.lng;
        let title = place.title;
        // モデル用の空entityタグを生成
        let model = document.createElement('a-entity');
        // タグに緯度と経度を追加
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        model.setAttribute('name', `${title}`);


        setModel(models[modelIndex], model);

        // オブジェクトに対するクリックイベント
        const clickListener = function (ev) {
            ev.stopPropagation();
            ev.preventDefault();
            window.navigator.vibrate(200);

            let name = ev.target.getAttribute('name');

            const el = ev.detail.intersection && ev.detail.intersection.object.el;

            if (el && el === ev.target) {
                const label = document.querySelector('.instructions');
                label.innerText = name;
            }
        };
        model.addEventListener('click', clickListener);
        scene.appendChild(model);
    });
}