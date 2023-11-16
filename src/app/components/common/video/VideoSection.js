"use client";

import React, { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import globalData from "../../../data/global.json";
import {
  SectionVideo,
  VideoTitle,
  VideoColumns,
  LeftColumn,
  RightColumn,
  VideoTabList,
  VideoTabItem,
  VideoTabItemInner,
  VideoTabItemContent,
  VideoTabItemContentTitle,
  VideoTabItemContentParagraph,
} from "./VideoSection.styles";

const VideoSection = () => {
  const { title, people } = globalData.testimonials;
  const [selectedVideo, setSelectedVideo] = useState(0);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  const extractDailymotionId = (url) => {
    const match = url.match(/video\/([a-zA-Z0-9]+)/);
    return match ? match[1] : null;
  };

  const videoRefs = useRef([]);
  videoRefs.current = people.map(
    (_, i) => videoRefs.current[i] ?? React.createRef()
  );

  useEffect(() => {
    // Update the iframe src only for the selected video
    const updateVideoSource = (index) => {
      if (videoRefs.current[index]) {
        const videoId = extractDailymotionId(people[index].video);
        videoRefs.current[
          index
        ].current.src = `https://www.dailymotion.com/embed/video/${videoId}?queue-enable=false&ui-start-screen-info=false${
          index === selectedVideo && inView ? "&autoplay=1" : "&autoplay=0"
        }&mute=1&queue-autoplay-next=false&sharing-enable=false&ui-logo=false&subtitles`;
      }
    };

    // Call the function to update the src
    updateVideoSource(selectedVideo);
  }, [selectedVideo, inView]);

  return (
    <SectionVideo>
      <div className="container">
        <VideoTitle>{title}</VideoTitle>
        <VideoColumns>
          <LeftColumn>
            <VideoTabList role="tablist">
              {people.map((person, index) => (
                <VideoTabItem
                  key={index}
                  onClick={() => setSelectedVideo(index)}
                  className={selectedVideo === index ? "active" : ""}
                  role="tab"
                  tabIndex={0}
                >
                  <VideoTabItemInner>
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="20"
                        cy="20"
                        r="19"
                        stroke="white"
                        strokeWidth="2"
                      />
                      <path
                        d="M27 20L16.5 13.9378L16.5 26.0622L27 20Z"
                        fill="white"
                      />
                    </svg>

                    <VideoTabItemContent>
                      <VideoTabItemContentTitle>
                        {person.name}
                      </VideoTabItemContentTitle>
                      <VideoTabItemContentParagraph>
                        {person.role}
                      </VideoTabItemContentParagraph>
                    </VideoTabItemContent>
                  </VideoTabItemInner>
                </VideoTabItem>
              ))}
            </VideoTabList>
          </LeftColumn>
          <RightColumn>
            <ul role="tabpanel">
              {people.map((person, index) => (
                <li
                  key={index}
                  ref={index === selectedVideo ? ref : null}
                  className={`${
                    selectedVideo === index ? "visible" : "hidden"
                  }`}
                  role="tabpanel"
                >
                  <iframe
                    ref={videoRefs.current[index]}
                    frameBorder="0"
                    width="100%"
                    height="480"
                    allow="autoplay"
                    title={`video-${index}`}
                  ></iframe>
                </li>
              ))}
            </ul>
          </RightColumn>
        </VideoColumns>
      </div>
    </SectionVideo>
  );
};

export default VideoSection;
