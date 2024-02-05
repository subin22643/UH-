import UserVideo from "../../pages/RoomId/UserVideo";
import personImage from "../../asset/image/person.png";

const Person = (props) => {
  const streamManagers = props.publisher
    ? [props.publisher, ...props.subscribers]
    : props.subscribers;

  // streamManagers 배열의 각 항목에 대해 배경색을 결정하는 로직
  const gridItems = Array(8)
    .fill(null)
    .map((_, index) => {
      const streamManager = streamManagers && streamManagers[index];

      // streamManager가 존재할 때만 팀 확인
      if (streamManager) {
        const connectionId = streamManager.stream.connection.connectionId;
        const isTeamA = props.teamA.includes(connectionId);
        const isTeamB = props.teamB.includes(connectionId);
        const backgroundClass = isTeamA ? "bg-mc1" : isTeamB ? "bg-mc7" : "formBG";

        return (
          <div
            key={index}
            onClick={() => streamManager && props.handleMainVideoStream(streamManager)}
          >
            <div className={`${backgroundClass} grid rounded-3xl m-1 pb-2`}>
              <UserVideo
                streamManager={streamManager}
                session={props.session}
                isHost={props.isHost}
                isReady={props.isReady}
              />
            </div>
          </div>
        );
      } else {
        // streamManager가 없는 경우, 대기 이미지 표시
        return (
          <div key={index} className="m-1">
            <img src={personImage} alt="대기중" className="rounded-3xl h-40 w-72" />
          </div>
        );
      }
    });

  return <div className="grid grid-rows-2 grid-cols-4 w-full h-full">{gridItems}</div>;
};

export default Person;