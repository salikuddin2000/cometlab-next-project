import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CustomizedProgressBar from "./customizedProgressBar";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProgressCard() {

  return (
    <Card
      sx={{
        width:"95%",
        marginTop:"20px",
        marginLeft:"auto",
        marginRight:"auto",
        borderTopLeftRadius: "7px",
        borderTopRightRadius: "7px",
      }}
    >
      <CardHeader
        style={{
          background: "linear-gradient(to right,#6c7bd4,#56a8f7)",
          color: "white",
        }}
        color="blue"
        title="Welcome to the turing tests"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <h2>Test Progress 50%</h2>
          <CustomizedProgressBar />
          <div
            style={{
              display: "inline-block",
              width: "25%",
              wordWrap: "break-word",
            }}
          >
            <p>Welcome to Turing</p>
          </div>
          <div
            style={{
              display: "inline-block",
              width: "25%",
              wordWrap: "break-word",
              marginLeft:"15%"
            }}
          >
            <p>Take the work experience survey</p>
          </div>
          <div
            style={{
              display: "inline-block",
              width: "25%",
              wordWrap: "break-word",
              marginLeft:"10%",
              textAlign:"right"
            }}
          >
            <p>Pass your 1s test</p>
          </div>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      </CardActions>
    </Card>
  );
}
