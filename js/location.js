
/**
 * 
 * @param {Object} successFunc 获取定位成功回调函数
 * @param {Object} errorFunc 获取定位失败回调
 */
var getLocation = function (successFunc, errorFunc) {
    //首先设置默认城市
    var defCity = {
        id: '000001',
        name: '北京市',
        date: curDateTime()//获取当前时间方法
    };
    //默认城市
    $.cookie('VPIAO_MOBILE_DEFAULTCITY', JSON.stringify(defCity), { expires: 1, path: '/' });
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;
            //var map = new BMap.Map("container");   // 创建Map实例
            var point = new BMap.Point(lon, lat); // 创建点坐标
            var gc = new BMap.Geocoder();
            gc.getLocation(point, function (rs) {
                var addComp = rs.addressComponents;
                var curCity = {
                    id: '',
                    name: addComp.province,
                    date: curDateTime()
                };
                //当前定位城市
                $.cookie('VPIAO_MOBILE_CURRENTCITY', JSON.stringify(curCity), { expires: 7, path: '/' });
                //alert(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street);
                if (successFunc != undefined)
                    successFunc(addComp);
            });
        },
        function (error) {
            switch (error.code) {
                case 1:
                    alert("位置服务被拒绝。");
                    break;
                case 2:
                    alert("暂时获取不到位置信息。");
                    break;
                case 3:
                    alert("获取位置信息超时。");
                    break;
                default:
                    alert("未知错误。");
                    break;
            }
            var curCity = {
                id: '000001',
                name: '北京市',
                date: curDateTime()
            };
            //默认城市
            $.cookie('VPIAO_MOBILE_DEFAULTCITY', JSON.stringify(curCity), { expires: 1, path: '/' });
            if (errorFunc != undefined)
                errorFunc(error);
        }, { timeout: 5000, enableHighAccuracy: true });
    } else {
        alert("你的浏览器不支持获取地理位置信息。");
        if (errorFunc != undefined)
            errorFunc("你的浏览器不支持获取地理位置信息。");
    }
};

var showPosition = function (position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    //var map = new BMap.Map("container");   // 创建Map实例
    var point = new BMap.Point(lon, lat); // 创建点坐标
    var gc = new BMap.Geocoder();
    gc.getLocation(point, function (rs) {
        var addComp = rs.addressComponents;
        var curCity = {
            id: '',
            name: addComp.province,
            date: curDateTime()
        };
        //当前定位城市
        $.cookie('VPIAO_MOBILE_CURRENTCITY', JSON.stringify(curCity), { expires: 7, path: '/' });
        //alert(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street);
    });
};
var showPositionError = function (error) {
    switch (error.code) {
        case 1:
            alert("位置服务被拒绝。");
            break;
        case 2:
            alert("暂时获取不到位置信息。");
            break;
        case 3:
            alert("获取位置信息超时。");
            break;
        default:
            alert("未知错误。");
            break;
    }
    var curCity = {
        id: '000001',
        name: '北京市',
        date: curDateTime()
    };
    //默认城市
    $.cookie('VPIAO_MOBILE_DEFAULTCITY', JSON.stringify(curCity), { expires: 1, path: '/' });
};



function getLocation2(){ 
  if (navigator.geolocation){ 
    navigator.geolocation.getCurrentPosition(showPosition,showError); 
  }else{ 
    alert("浏览器不支持地理定位。"); 
  } 
}

function showError(error){ 
  switch(error.code) { 
    case error.PERMISSION_DENIED: 
      alert("定位失败,用户拒绝请求地理定位"); 
      break; 
    case error.POSITION_UNAVAILABLE: 
      alert("定位失败,位置信息是不可用"); 
      break; 
    case error.TIMEOUT: 
      alert("定位失败,请求获取用户位置超时"); 
      break; 
    case error.UNKNOWN_ERROR: 
      alert("定位失败,定位系统失效"); 
      break; 
  } 
} 

//function showPosition(position){ 
//var lat = position.coords.latitude; //纬度 
//var lag = position.coords.longitude; //经度 
//alert('纬度:'+lat+',经度:'+lag); 
//}

function showPosition(position){ 
  var latlon = position.coords.latitude+','+position.coords.longitude; 
    
  //baidu 
  var url = "http://api.map.baidu.com/geocoder/v2/?ak=C93b5178d7a8ebdb830b9b557abce78b&callback=renderReverse&location="+latlon+"&output=json&pois=0"; 
  $.ajax({ 
    type: "GET", 
    dataType: "jsonp", 
    url: url, 
    beforeSend: function(){ 
      $("#baidu_geo").html('正在定位...'); 
    }, 
    success: function (json) { 
      if(json.status==0){ 
        $("#baidu_geo").html(json.result.formatted_address); 
      } 
    }, 
    error: function (XMLHttpRequest, textStatus, errorThrown) { 
      $("#baidu_geo").html(latlon+"地址位置获取失败"); 
    } 
  }); 
}









