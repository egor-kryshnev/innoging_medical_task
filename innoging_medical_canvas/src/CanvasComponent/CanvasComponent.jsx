import React, { useEffect, useRef, useCallback, useState } from "react";
import { getColor, getShape } from "../store/selectors/canvasSelectors/canvasSelectors"
import { useStyles } from "./CanvasComponent.style";
import { useDispatch, useSelector } from "react-redux";
import { fetchColor, fetchShape } from "../store/actions/canvasActions/canvasActionsCreators";
import { Button } from "@mui/material";

const drawRectangle = (context, x, y, width, height) => {
    context.strokeRect(x, y, width, height);
    context.fillRect(x, y, width, height);
}

const drawCircle = (context, x, y, width, height) => {
    context.beginPath();
    context.arc(x, y, Math.abs((width + height) / 2), 0, 2 * Math.PI);
    context.stroke();
    context.fill();
}

const drawTriangle = (context, x, y, width, height) => {
    const z = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(y, x);
    context.lineTo(z, x);
    context.lineTo(x, y);
    context.stroke();
    context.fill(); 
    context.closePath();
}

const drawLine = (context, x, y, width, height, newMouseX, newMouseY) => {
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(newMouseX, newMouseY);
    context.stroke();
    context.closePath();
}

const CanvasComponent = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const reduxColor = useSelector(getColor)
    const reduxShape = useSelector(getShape)
    const canvasRef = useRef(null);
    const contextRef = useRef(null);

    const [isDrawing, setIsDrawing] = useState(false);

    const canvasOffSetX = useRef(null);
    const canvasOffSetY = useRef(null);
    const startX = useRef(null);
    const startY = useRef(null);

   
    const drawShape = useCallback((context, x, y, width, height, newMouseX, newMouseY) => {
        if(reduxShape) {
            switch (reduxShape) {
                case "rectangle":
                    drawRectangle(context, x, y, width, height);
                    break;
                case "circle":
                    drawCircle(context, x, y, width, height);
                    break;
                case "triangle":
                    drawTriangle(context, x, y, width, height);
                    break;
                case "line":
                    drawLine(context, x, y, width, height, newMouseX, newMouseY);
                    break;
                default:
            }
        }
    }, [reduxShape])

    useEffect(() => {
            const canvas = canvasRef.current;
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            const context = canvas.getContext('2d');
            context.lineCap = "round";
            context.strokeStyle = reduxColor;
            context.fillStyle = reduxColor;
            context.lineWidth = 3;
            contextRef.current = context;
    
            const canvasOffSet = canvas.getBoundingClientRect();
            canvasOffSetX.current = canvasOffSet.top;
            canvasOffSetY.current = canvasOffSet.left;
    }, [reduxColor, reduxShape])

    const startDrawing = ({nativeEvent}) => {
        nativeEvent.preventDefault();
        nativeEvent.stopPropagation();

        startX.current = nativeEvent.clientX + canvasOffSetX.current;
        startY.current = nativeEvent.clientY + canvasOffSetY.current;

        setIsDrawing(true);
    }

    const draw = ({nativeEvent}) => {
        if(!isDrawing || !reduxColor || !reduxShape) {
            return;
        }

        nativeEvent.preventDefault();
        nativeEvent.stopPropagation();

        const newMouseX = nativeEvent.clientX - canvasOffSetX.current;
        const newMouseY = nativeEvent.clientY - canvasOffSetY.current;

        const rectWidht = newMouseX - startX.current;
        const rectHeight = newMouseY - startY.current;

        contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

        drawShape(contextRef.current, startX.current, startY.current, rectWidht, rectHeight, newMouseX, newMouseY);

    }

    const stopDrawing = () => {
        setIsDrawing(false);
    }

    const reset = () => {
        contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }

    const changeColor = () => {
        dispatch(fetchColor())
        
    }

    const changeShape = () => {
        dispatch(fetchShape())
    }


    return (
        <>
            <div className={classes.outWrapper}>
                <div className={classes.wrapper}>
                    <div className={classes.wrapperCanvas}>
                        <canvas className={classes.canvas} 
                            ref={canvasRef}
                            onMouseDown={startDrawing}
                            onMouseMove={draw}
                            onMouseUp={stopDrawing}
                        />
                    </div>
                    <div className={classes.buttons}>
                        <Button variant="outlined" className={classes.resetButton} onClick={reset}>Reset</Button>
                        <Button variant="outlined" className={classes.shapeButton} onClick={changeShape}>Choose Random Shape</Button>
                        <Button variant="outlined" className={classes.colorButton} onClick={changeColor}>Choose Random Color</Button>
                    </div>
                </div>
            </div>
        </>
    )
};
export default CanvasComponent;
