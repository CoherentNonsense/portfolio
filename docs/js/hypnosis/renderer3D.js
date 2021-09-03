class Renderer3D
{
    constructor(canvas)
    {
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
    }

    startDraw()
    {
        this.context.clearRect(0, 0, canvas.width, canvas.height);
    }

    endDraw()
    {

    }

    drawMesh()
    {

    }
}