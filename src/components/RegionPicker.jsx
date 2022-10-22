import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "../App.css";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AfricaImage from '../assets/africa.png';
import AmericaImage from  '../assets/americas.png';
import AsiaImage from '../assets/asia.png';
import EuropeImage from '../assets/europe.png';
const RegionPicker = ({onRegionPickHandler}) =>
{
    return (
      <div>
      <CssBaseline />
      <Container fixed>
        <Box
          sx={{
            bgcolor: "#fffff",
            minHeight: "90vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            margin: "10px 0",
          }}
        >
          <Grid container spacing={1} columns={12}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <div
                className="region-parent"
                onClick={() => onRegionPickHandler("africa")}
              >
                <div className="region-image">
                  <img src={AfricaImage} alt="#" />
                </div>
                <div className="region-heading">
                  <Typography variant="h3" className="legend">
                    Africa
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <div
                className="region-parent"
                onClick={() => onRegionPickHandler("europe")}
              >
                <div className="region-image">
                  <img src={EuropeImage} alt="#" />
                </div>
                <div className="region-heading">
                  <Typography variant="h3">Europe</Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <div
                className="region-parent"
                onClick={() => onRegionPickHandler("asia")}
              >
                <div className="region-image">
                  <img src={AsiaImage} alt="#" />
                </div>
                <div className="region-heading">
                  <Typography variant="h3">Asia</Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <div
                className="region-parent"
                onClick={() => onRegionPickHandler("americas")}
              >
                <div className="region-image">
                  <img src={AmericaImage} alt="#" />
                </div>
                <div className="region-heading">
                  <Typography variant="h3">Americas</Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};
export default RegionPicker;