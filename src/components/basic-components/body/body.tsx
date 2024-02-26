import "./body.scss";
import History from "./history";
import Newsletter from "./newsletter";

const Body : React.FC = () => {

  return (
    <div className="body">

      <div className="history">
        <History/>
      </div>
      <div className="newsletter">
        <Newsletter/>
      </div>

    </div>
  );
};

export default Body;