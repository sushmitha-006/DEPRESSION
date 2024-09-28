import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Room = () => {
  const { roomId } = useParams();
  const containerRef = useRef(null);
  const [error, setError] = useState(null);

  const myMeeting = async () => {
    try {
      const appID = 1035341087;
      const serverSecret = "cc34c178a92190955dd63aa9592b4dea";
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomId,
        Date.now().toString(),
        "Sample User"
      );

      const zc = ZegoUIKitPrebuilt.create(kitToken);
      zc.joinRoom({
        container: containerRef.current,
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall,
        },
      });
    } catch (err) {
      console.error("Failed to join the room:", err);
      setError("Failed to join the room. Please try again.");
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      myMeeting();
    }
  }, [roomId]);

  return (
    <div>
      {error && <p>{error}</p>}
      <div ref={containerRef} />
    </div>
  );
};

export default Room;
