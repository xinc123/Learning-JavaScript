window.onload = function () {
    var phases = {
        1: 'capture',
        2: 'target',
        3: 'bubble'
    };

    var myUl = document.getElementById("my_ul");
    var myLi = document.getElementById("my_li");

    // 事件传播
    // addEventListener第三个参数定义监听函数绑定阶段不同，默认为false
    myUl.addEventListener('click', callback, true); //  true绑定给捕获阶段
    myUl.addEventListener('click', callback, false);    //  false绑定给冒泡阶段
    myLi.addEventListener('click', callback, true);
    myLi.addEventListener('click', callback, false);

    function callback(event) {
        var curTag = event.currentTarget.tagName.toLowerCase();   //  事件触发对象
        var clickTag = event.target.tagName.toLowerCase();    //  点击对象
        var phase = phases[event.eventPhase];
        console.log("currentTarget: '" + curTag + "'. clickTarget: '" + clickTag + "'" + "'. EventPhase: '" + phase + "'");
    }

}