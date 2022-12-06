import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function WidgetSm() {

  const [ newusers, setNewUsers ] = useState([]);

  useEffect( () => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get( "/users?new=true", {
          headers: {
            token: 'Bearer ' + JSON.parse(localStorage.getItem("user")).accessToken
          }
        } );

        setNewUsers( res.data );
      } catch(err) {
        console.log( err );
      }
    };

    getNewUsers();
  }, [] );
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {
          newusers.map( ( user, index ) => (
            <li key={index} className="widgetSmListItem">
              <img
                src={ user.profilePic || "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg" }
                alt=""
                className="widgetSmImg"
              />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">{user.username}</span>
                { /* <span className="widgetSmUserTitle">Software Engineer</span> */ }
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Display
              </button>
            </li>
          ) )
        }
      </ul>
    </div>
  );
}
