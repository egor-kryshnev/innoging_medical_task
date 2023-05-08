import { Router } from "express";

const shapes = {
    rectangle: "rectangle",
    circle: "circle",
    triangle: "triangle",
    line: "line"
}

const colors = {
    red: "red",
    orange: "orange",
    yellow: "yellow",
    green: "green",
    blue: "blue",
    indigo: "indigo",
    violet: "violet"
}

const ApiRouter = Router();

ApiRouter.get("/color", (req, res) => {
    try {
        const color = colors[Object.keys(colors)[Math.floor(Math.random() * Object.keys(colors).length)]];
        res.status(200).send(color);
    } catch (error) {
        console.error("/color", error);
        res.status(500);
    }
});

ApiRouter.get("/shape", (req, res) => {
    try {
        const shape = shapes[Object.keys(shapes)[Math.floor(Math.random() * Object.keys(shapes).length)]];
        res.status(200).send(shape);
    } catch (error) {
        console.error("/shape", error);
        res.status(500);
    }
});

export default ApiRouter;