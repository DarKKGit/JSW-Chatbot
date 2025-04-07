
import {useNavigate} from "react-router-dom";

const HomePage = ()=> {

    const navigate = useNavigate();
  return (
    <div className="appContainer">
      <div className="mascotContainer">
        I AM MASCOT
      </div>
      <div className="outerCircle">
        <div className="middleCircle">
          <div className="newLightCircle">
            <div className="pulseBorder"></div>
            <div className="innerBorderCircle">
              <div className="innermostCircle" onClick={()=>{navigate('./about')}}>HEY!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;