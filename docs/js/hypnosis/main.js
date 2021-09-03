function main()
{
    const canvas = document.getElementById("canvas");
    const renderer = new Renderer2D(canvas);

    

    const rangeX = 1200 / 32;
    for (let i = 0; i < 32; ++i)
    {
        const color = (i == 16) ? "#fff" : "#00111a";
        const width = (i == 16) ? 2 : 2;
        renderer.drawLine(vector(rangeX * i, 0), vector(rangeX * i, 600), width, color);
    }

    const rangeY = 600 / 16;
    for (let i = 0; i < 16; ++i)
    {
        const color = (i == 8) ? "#fff" : "#00111a";
        const width = (i == 8) ? 2 : 2;
        renderer.drawLine(vector(0, rangeY * i), vector(1200, rangeY * i), width, color);
    }

    for (let i = 0; i < 32; ++i)
    {
        const color = (i == 16) ? "#fff" : "#fff";
        const width = (i == 16) ? 2 : 2;
        (i == 16) ?
            renderer.drawLine(vector(rangeX * i, 0), vector(rangeX * i, 600), width, color) :
            renderer.drawLine(vector(rangeX * i, 290), vector(rangeX * i, 310), width, color);
    }

    for (let i = 0; i < 16; ++i)
    {
        const color = (i == 8) ? "#fff" : "#fff";
        const width = (i == 8) ? 2 : 2;
        (i == 8) ?
            renderer.drawLine(vector(0, rangeY * i), vector(1200, rangeY * i), width, color) :
            renderer.drawLine(vector(590, rangeY * i), vector(610, rangeY * i), width, color);
    }

    renderer.drawArrow({x: 600, y: 300}, {x: 675, y: 150}, "#ff0");
    renderer.drawArrow({x: 675, y: 150}, {x: 750, y: 187.5}, "#f7f");
    renderer.drawArrow({x: 600, y: 300}, {x: 750, y: 185.5}, "#f22");
}

function vector(x, y)
{
    return { x, y };
}

main();