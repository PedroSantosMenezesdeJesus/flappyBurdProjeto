class obj {
    frame = 0
    timer = 0

    constructor(px,py,lar,alt,imagem){
        this.px = px
        this.py = py
        this.lar = lar
        this.alt = alt
        this.imagem = imagem
    }
    draw(){
        let img = new Image()
        img.src = this.imagem
        canvas.drawImage(img,this.px,this.py,this.lar,this.alt)
        
    }
    animation(speed,limit,nameImage){
        this.timer += 1
        if (this.timer >= speed) {
            this.timer = 0
            this.frame += 1
        }
        if (this.frame > limit) {
            this.frame = 0
        }
        this.imagem = 'img/' + nameImage + this.frame + '.png'
    }
}

class BG extends obj{
    move(velocidade, limite, pos){
        this.px -= velocidade
        if (this.px < -limite) {
            this.px = pos 
        }
    }
}

class GROUND extends BG{

}

class BIRD extends obj{

}