const cvs = document.getElementById("bird");

const ctx = cvs.getContext("2d")


let frames = 0;

const sprite = new Image()
sprite.src = "img/sprite.png"

const bg={
    sX:0,
    sY:0,
    w:275,
    h:226,
    x:0,
    y:cvs.height - 226,

    draw: function(){
        
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + this.w, this.y, this.w, this.h);
    }
}

const fg = {
    sX: 276,
    sY: 0,
    w:224,
    h:112,
    x:0,
    y: cvs.height - 112,

    draw :function(){
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + this.w, this.y, this.w, this.h);

    }
}

const bird= {
    animation : [
        {sX: 276, sY : 112},
        {sX: 276, sY : 139},
        {sX: 276, sY : 164},
        {sX: 276, sY : 139}
    ],
    x : 50,
    y : 150,
    w : 34,
    h : 26,

    frame : 0,

    draw : function(){
        let bird = this.animation[this.frame];

        ctx.drawImage(sprite, bird.sX, bird.sY, this.w, this.h,this.x - this.w/2, this.y - this.h/2, this.w, this.h)

}
}

function draw(){
    ctx.fillStyle = '#70c5ce'
    ctx.fillRect(0,0,cvs.width ,cvs.height)

    bg.draw();
    fg.draw();
    bird.draw();
}

function update(){

}

function loop(){
    update()
    draw()
    frames++

    requestAnimationFrame(loop)
}

loop()