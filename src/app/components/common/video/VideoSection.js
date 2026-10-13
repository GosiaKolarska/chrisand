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

  const videoRefs = useRef([]);

  // Play the selected testimonial (muted) while the section is on screen and pause the rest
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === selectedVideo && inView) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
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
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={`/assets/testimonials/${person.video}#t=0.1`}
                    muted
                    playsInline
                    controls
                    loop
                    preload={index === selectedVideo ? "metadata" : "none"}
                    aria-label={`${person.name}, ${person.role}, talks about working with Chris`}
                  />
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
