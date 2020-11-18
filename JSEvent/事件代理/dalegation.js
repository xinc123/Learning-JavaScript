window.onload = function () {
    var myUl = document.getElementById("my_ul");

    // 事件代理
    myUl.addEventListener('click', function(e) {
        if(e.target.tagName.toLowerCase() === 'li') {
            console.log("处理子节点")
        }
    })
}