import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
const ENDPOINT = "/";


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function App() {
  const classes = useStyles();
  
  const [temp, settem] = useState("");
  useEffect(() => {
    const socket = io(ENDPOINT);
    socket.on("temperatura", (data) => {
      data.forEach((element) => {
        settem(element);
      });
    });
  }, [settem]);
 console.log(temp)
  return (
    <div className="App">
      <header className="App-header">
      <Card className={classes.root}>
          <CardActionArea>
            <CardContent>
              <Typography
                style={{
                  fontFamily: "Lobster",
                  textAlign: "center",
                  fontSize: "50px",
                }}
              >
                <Box fontWeight="fontWeightBold">
                  {temp.aire?"  Aire ": temp.co2?"   CO2  ":" Gas  "}
                 
                </Box>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" fullWidth color="primary">
            Mq135 Aire  C02  Gas  
            </Button>
          </CardActions>
        </Card>
        &nbsp; &nbsp;
    
        <Card className={classes.root}>
          <CardActionArea>
            <CardContent>
              <Typography
                style={{
                  fontFamily: "Lobster",
                  textAlign: "center",
                  fontSize: "50px",
                }}
              >
                <Box fontWeight="fontWeightBold">
                  {temp.temperatura + " °C "}
                </Box>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" fullWidth color="primary">
              temperatura
            </Button>
          </CardActions>
        </Card>
        &nbsp; &nbsp;
        <Card className={classes.root}>
          <CardActionArea>
            <CardContent>
              <Typography
                style={{
                  fontFamily: "Lobster",
                  textAlign: "center",
                  fontSize: "50px",
                }}
              >
                <Box fontWeight="fontWeightBold">{temp.luminicidad<75?"Encendido":"Apagado"}</Box>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" fullWidth color="primary">
              Luz
            </Button>
          </CardActions>
        </Card>

      </header>
    </div>
  );
}

export default App;
