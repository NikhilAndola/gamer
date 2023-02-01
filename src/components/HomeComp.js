import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import BarIcon from "../assets/Icons/Bar";
import RectPIcon from "../assets/Icons/RectP";
import image_placeholder from "../assets/images/image_placeholder.png";
import CardComp from "../controls/CardComp";
import health from '../assets/images/health.png'

export default function HomeComp() {
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Box sx={{ width: "100%", height: 643 }}>
        <Grid container sx={{ height: "100%" }}>
          <Grid
            item
            xs={7}
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box>
              <Typography variant="h2" gutterBottom fontWeight={"bold"}>
                Explore exciting events
              </Typography>
              <Typography variant="h3" mb={5} gutterBottom>
                at 5G speed
              </Typography>
              <Box mb={2}>
                {" "}
                <BarIcon />
              </Box>
              <Box mb={2}>
                {" "}
                <BarIcon />
              </Box>
              <Box>
                {" "}
                <BarIcon />
              </Box>
              <Box mt={5}>
                <Button
                  type="button"
                  size="large"
                  color="neutral"
                  variant="contained"
                >
                  Explore
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={5}
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box sx={{ position: "relative" }}>
              <RectPIcon />
              <Box
                sx={{
                  position: "absolute",
                  display: "flex",
                  top: 50,
                  left: 170,
                }}
              >
                <img alt="placeholder" width="200px" src={image_placeholder} />
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid container mt={10} pl={5} pr={5}>
          <Grid item sx={{ width: "100%" }}>
            <Typography variant="h4" fontWeight={500}>
              Events powered by us
            </Typography>
            <Box
              mt={7}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <CardComp />
              <CardComp />
              <CardComp />
            </Box>
          </Grid>
        </Grid>
        <Grid container mt={5}>
          <Grid
            item
            sx={{ height: "480px", width: "100%", backgroundColor: "#e6e6e6" }}
          >
            <Box ml={3} mt={3}>
              <img alt="logo" src={health} width="100px" />
              <Typography mt={5}>Placeholder Footer</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
