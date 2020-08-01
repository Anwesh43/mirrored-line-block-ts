const w : number = window.innerWidth 
const h : number = window.innerHeight 
const parts : number = 2 
const scGap : number = 0.02 / parts 
const strokeFactor : number = 90
const sizeFactor : number = 2.9 
const delay : number = 20
const colors : Array<string> = ["#4CAF50", "#F44336", "#03A9F4", "#FFEB3B", "#03A9F4"] 
const backColor : string = "#BDBDBD"

class Stage {

    canvas : HTMLCanvasElement = document.createElement('canvas')
    context : CanvasRenderingContext2D 

    initCanvas() {
        this.canvas.width = w 
        this.canvas.height = h 
        this.context = this.canvas.getContext('2d')
        document.body.appendChild(this.canvas)
    }

    render() {
        this.context.fillStyle = backColor
        this.context.fillRect(0, 0, w, h)
    }

    handleTap() {
        this.canvas.onmousedown = () => {

        }
    }

    static init() {
        const stage : Stage = new Stage()
        stage.initCanvas()
        stage.render()
        stage.handleTap()
    }
}