import { createTheme } from "@mui/material";

export const theme = createTheme({
    canvas: {
        outWrapper: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            paddingTop: "10vh"
        },
        wrapper: {
            display: "inline-grid",
            "justify-content": "center",
            "grid-template-columns": "100%",
            "grid-template-rows": "95% auto",
            "grid-gap": "15px",
            width: "90vw",
            height: "700px"
        },
        wrapperCanvas: {
            "border": "1px solid #1976d2"
        },
        canvas: {
            width: "100%",
            height: "100%"
        },
        buttons: {
            display: "inline-grid",
            "grid-template-columns": "25% 25% 25%",
            "grid-gap": "10px",
        },
        resetButton: {

        },
        shapeButton: {

        },
        colorButton: {

        }
    }
})