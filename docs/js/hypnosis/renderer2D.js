class Renderer2D
{
    constructor(canvas)
    {
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        canvas.width = 1200;
        canvas.height = 600;
        this.startDraw();
    }

    startDraw()
    {
        this.context.fillStyle = '#000103';
        this.context.fillRect(0, 0, canvas.width, canvas.height);
    }

    endDraw()
    {

    }

    drawSprite(position, scale, uv)
    {

    }

    drawLine(start, end, width = 2, color)
    {
        this.context.strokeStyle = color;
        this.context.lineWidth = width;
        this.context.beginPath();
        this.context.moveTo(start.x + 0.5, start.y + 0.5);
        this.context.lineTo(end.x, end.y);
        this.context.stroke();
    }

    drawArrow(start, end, color)
    {
        let x, y;
        let angle;
        angle = Math.atan2(end.y - start.y, end.x - start.x)

        x = -10 * Math.cos(angle) + end.x;
        y = -10 * Math.sin(angle) + end.y;

        this.drawLine(start, {x, y}, 3, color);

        // Arrow Head
        this.context.fillStyle = color;
        this.context.beginPath();

        this.context.moveTo(end.x, end.y);

        angle += (1.25/3) * (2 * Math.PI)
        x = 25 * Math.cos(angle) + end.x;
        y = 25 * Math.sin(angle) + end.y;

        this.context.lineTo(x, y);

        angle += (0.5/3) * (2 * Math.PI)
        x = 25 * Math.cos(angle) + end.x;
        y = 25 * Math.sin(angle) + end.y;

        this.context.lineTo(x, y);

        this.context.closePath();

        this.context.fill();
    }
}