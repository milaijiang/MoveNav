
/*********导航栏移动js代码***********/

var oDiv = document.getElementById("QmanBox"); 
var x = 100,    //子盒子的left值
    y = 100,    //子盒子的top值
    dx = 0,
    dy = 0,
    lock = false,
    newInnerX = window.innerWidth - 200,
    newInnerY = window.innerHeight - 250;
    
/**********子盒子被点击时********/
oDiv.onmousedown=function(event) {
    changeWH();
    var oEvent = event || window.event;  
    //最初滚动条滚动的距离
    var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    //子盒子距离最初窗口的距离
    var disX = oEvent.clientX + scrollLeft;  
    var disY = oEvent.clientY + scrollTop;

    /********子盒子移动时****/
    document.onmousemove=function (event) { 
        var oEvent = event || window.event; 
        // 移动子盒子时当前已经滚动的距离
        var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        //子盒子距离父盒子的距离
        dx = oEvent.clientX + scrollLeft-disX;
        dy = oEvent.clientY + scrollTop -disY;

        // 边界判断
        if (dx < -x) {
            dx = -x;
        }
        else if(dx > newInnerX - x) {
            dx = newInnerX - x;
        }
        if(dy < -y) {
            dy = -y;
        }
        else if(dy > newInnerY - y) {
            dy = newInnerY - y;
        }
       

        //更改子盒子的位置值
        oDiv.style.left =dx + x+"px";
        oDiv.style.top =dy +y +"px";

        lock = true;	
        return false; 	//清除浏览器默认样式
    }; 
    return false; //清除浏览器默认样式
};


/*************鼠标按键松开时**************/  
document.onmouseup=function()  
{  	
    
    if (lock) {		//防止图片不滑动时，值会重复增加
        x = x + dx;
        y = y + dy; 
        lock = false;
    }
    document.onmousemove = null;    //停止鼠标移动事件	
}; 

//函数：当窗口大小改变时，重新读取视口的大小
function changeWH() {
    window.onresize = function () {
        newInnerX = window.innerWidth - 200;
        newInnerY = window.innerHeight - 250;
    }
}