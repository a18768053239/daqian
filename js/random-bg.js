// 生产随机数
// rand(10); 10
// rand([10, 100]); 10 ~ 100
// rand([50]); 0 ~ 50;
// rand([10,20,30]); 10|20|30
function rand(arr)
{
    if (typeof arr === 'number')
    {
        return arr;
    }
    
    var v = 0;
    if (arr.length == 1)
    {
        v = Math.round(Math.random() * arr[0]);
    }
    else if (arr.length == 2)
    {
        var a = arr[0];
        var b = arr[1];
        
        v = Math.round(a + Math.random() * (b - a));
    }
    else if (arr.length > 2)
    {
        v = arr[Math.round(Math.random() * (arr.length - 1))];
    }
    
    return v;
}

// h 色调 s 饱和度 l 亮度
function randColorHsl(h, s, l)
{
    h = h||[0, 360];
    s = s||50;
    l = l||50;
    
    return "hsl(" + rand(h) + ", " + rand(s) + "%, " + rand(l) + "%)";
}

function randColorRgb(r, g, b)
{
    r = r||[0, 255];
    g = g||[0, 255];
    b = b||[0, 255];
    return "rgb(" + rand(r) + ", " + rand(g) + ", " + rand(b) + ")";
}


var canvas = document.createElement('canvas');

// 像素大小控制图形复杂度
canvas.width = 7;
canvas.height = 3;

var ctx=canvas.getContext('2d');

function randBackground()
{
    for (var x=0; x<canvas.width; x++)
    {
        for (var y=0; y<canvas.height; y++)
        {
            // 随机颜色
            // ctx.fillStyle = randColorHsl();
            // ctx.fillStyle = randColorRgb();
            ctx.fillStyle = randColorHsl(200, 50, [50, 80]);
            ctx.fillRect(x,y,x+1,y+1);
        }
    }
                    
    // 设置背景图
    return canvas.toDataURL();
}