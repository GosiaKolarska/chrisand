"use client";

import React, { useState } from "react";
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
  VideoTabItemHr,
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

  return (
    <SectionVideo>
      <div className="container">
        <VideoTitle>{title}</VideoTitle>
        <VideoColumns>
          <LeftColumn>
            <VideoTabList>
              {people.map((person, index) => (
                <VideoTabItem
                  key={index}
                  onClick={() => setSelectedVideo(index)}
                  className={selectedVideo === index ? "active" : ""}
                  role="tab"
                  tabIndex={0}
                >
                  <VideoTabItemInner className="flex items-center">
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
                  <VideoTabItemHr />
                </VideoTabItem>
              ))}
            </VideoTabList>
          </LeftColumn>
          <RightColumn>
            <ul>
              {people.map((person, index) => {
                const videoId = extractDailymotionId(person.video);
                return (
                  <li
                    key={index}
                    ref={index === selectedVideo ? ref : null}
                    className={`${
                      selectedVideo === index ? "visible" : "hidden"
                    }`}
                  >
                    {videoId && (
                      <iframe
                        src={`https://www.dailymotion.com/embed/video/${videoId}?queue-enable=false&ui-start-screen-info=false${
                          inView ? "&autoplay=1" : ""
                        }&mute=1&queue-autoplay-next=false&sharing-enable=false&ui-logo=false&subtitles=1`}
                        frameBorder="0"
                        width="100%"
                        height="480"
                        allow="autoplay"
                        title={`video-${index}`}
                      ></iframe>
                    )}
                  </li>
                );
              })}
            </ul>
          </RightColumn>
        </VideoColumns>
      </div>
    </SectionVideo>
  );
};

export default VideoSection;
