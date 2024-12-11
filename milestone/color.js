function colorMixer(color1, color2) {
    switch (true) {
        case (color1 === "red" && color2 === "blue") || (color1 === "blue" && color2 === "red"):
            console.log("purple");
            break;
        case (color1 === "red" && color2 === "yellow") || (color1 === "yellow" && color2 === "red"):
            console.log("orange");
            break;
        case (color1 === "blue" && color2 === "yellow") || (color1 === "yellow" && color2 === "blue"):
            console.log("green");
            break;
        default:
            console.log("Invalid color combination");
    }
}

// Example usage
colorMixer("red", "blue");
colorMixer("blue", "yellow");
colorMixer("green", "yellow");
