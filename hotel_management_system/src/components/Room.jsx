import React, { useState, useEffect } from "react";
// import { RoomList } from "./RoomList";

function Room() {
  const [Roomitems, setRoomitems] = useState([{}]);

  useEffect(() => {
    getData();
    async function getData() {
      const response = await fetch(process.env.REACT_APP_API_URL+"/api/rooms");
      const data = await response.json();
      setRoomitems(data["rooms"]);
    }
  }, []);

  return (
    <>
      {Roomitems.map((item) => {
        return (
          <div key={item["_id"]} className="room">
            <div className="room-flex-contain">
              <div className="img-box">
                <img src={item["imgpath"]} alt="" className="room-img" />
              </div>
              <div className="content">
                <h3 className="h4">{item["type"]} room</h3>
                <p className="p">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dicta veniam necessitatibus quia cum iste! Rem similique harum
                  facere. Accusantium, consequatur.
                </p>
                <ul className="detail-box">
                  <li>
                    Room type<span>- </span> {item["type"]}
                  </li>
                  <li>
                    No. of available Rooms <span>-</span> {item["availrooms"]}
                  </li>
                  <li>
                    Price<span>-</span> {item["price"]} Rs. per Day
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Room;
