import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar, Divider, List} from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";
import Link from "next/link";


export const skills = [
  "ReactJs",
  "NextJs",
  "NodeJs",
  "SQL",
  "Firebase",
  "REST API",
  "PostgreSQL",
  "JavaScript",
  "C++",
  "Figma",
  "AdobeXD",
];

export default function Profile() {
  const skillList = (
    <div style={{display:"block"}}>
      <List style={{display:"block",marginBottom:"10px"}}>
        {skills.map((obj, index) => (
          <Box
            component="span"
            sx={{
              display: "inline-block",
              p: 1,
              m: 1,
              bgcolor: (theme) =>
                theme.palette.mode === "dark" ? "#101010" : "#fff",
              color: (theme) =>
                theme.palette.mode === "dark" ? "grey.300" : "grey.800",
              border: "1px solid",
              borderColor: (theme) =>
                theme.palette.mode === "dark" ? "grey.800" : "grey.300",
              borderRadius: 2,
              fontSize: "0.875rem",
              fontWeight: "700",
              backgroundColor: "#fafafa",
            }}
          >
            {obj}
          </Box>
        ))}
      </List>
      <Divider/>
      <h2>Education </h2>
        August 2019 - May 2022 
        <h3>Indian Institute of Information
        Technology, Bhopal</h3>
        B.tech
    </div>
  );

  return (
    <Card sx={{ minWidth: 275 }} style={{ marginLeft:"5%",marginRight:"5%",marginTop:"20px", height: "80vh",position:"fixed" }}>
      <CardContent>
        <Typography sx={{ fontSize: 16 }} color="text.primary" gutterBottom>
          <h4>Turing</h4>
        </Typography>
        <div style={{ float: "left", marginRight: "30px" }}>
          <Avatar>SU</Avatar>
        </div>
        <h2 style={{ paddingTop: "5px" }}>Salik Uddin</h2>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <CardActions>
            <a
              style={{ textDecoration: "none", color: "grey" }}
              href="mailto:salikuddin2000@gmail.com"
            >
              salikuddin2000@gmail.com
            </a>
            <a
              style={{
                textDecoration: "none",
                color: "grey",
                marginLeft: "15%",
              }}
              href="tel:+919754008950"
            >
              9754008950
            </a>
            <br />
            <Link href="https://www.linkedin.com/in/salikuddin">
              <LinkedIn style={{ right: "0", marginLeft: "auto" }} />
            </Link>
            <br />
            <div style={{ marginLeft: "20%", right: "0", marginLeft: "auto" }}>
              <GitHub />
            </div>
          </CardActions>
          <Divider />
          <h2>Skills</h2>
        </Typography>
        {skillList}
      </CardContent>
    </Card>
  );
}
