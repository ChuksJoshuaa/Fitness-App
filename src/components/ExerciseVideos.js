import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import { Loader } from "./index";

const ExerciseVideos = ({ exerciseVideo, name }) => {
  if (exerciseVideo.length < 1) {
    return (
      <div>
        <h3
          style={{ color: "crimson", textAlign: "center", fontSize: "1.5em" }}
        >
          Exercise Video Loading...
        </h3>
        <Loader />
      </div>
    );
  }

  return (
    <Box sx={{ marginTop: { lg: "100px", xs: "20px" } }} p="20px">
      <Typography
        sx={{ fontSize: { lg: "45px", xs: "25px" } }}
        fontWeight={500}
        color="#000"
        mb="33px"
      >
        Watch{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "110px", xs: "20px", sm: "40px" },
          marginBottom: { lg: "5em" },
        }}
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
      >
        {exerciseVideo?.contents?.slice(0, 3)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
              className="exercise-video"
            />
            <Box>
              <Typography
                sx={{ fontSize: { lg: "28px", xs: "18px" } }}
                fontWeight={300}
                color="#000"
              >
                {item.video.title}
              </Typography>
              <Typography fontSize="14px" color="#000" mb={3}>
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
