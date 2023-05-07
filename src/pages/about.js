import "../pages/pages.css";
import logo from "../img/logo.png";
//ciaooo
function About() {
  return (
    <div className="aboutPage">
      <h2>Pippo</h2>
      <div className=" text flex-column" style={{}}>
        <div className="row flex-wrap">
          <div
            style={{ backgroundColor: "gray", width: "49%" }}
            className="col-sm-6 col-12"
          >
            <img src={logo} alt="Treessue logo"></img>
          </div>
          <div
            className="col-sm-6 col-12"
            style={{ backgroundColor: "orange", width: "49%" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in
            orci nec augue pulvinar iaculis. Sed est dolor, fringilla in
            tincidunt ac, sollicitudin ac arcu.
          </div>
        </div>
        <div className="row flex-wrap">
          <div
            className="col-sm-6 col-12"
            style={{ backgroundColor: "blue", width: "49%" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in
            orci nec augue pulvinar iaculis. Sed est dolor, fringilla in
            tincidunt ac, sollicitudin ac arcu. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Aliquam in orci nec augue pulvinar
            iaculis. Sed est dolor, fringilla in tincidunt ac, sollicitudin ac
            arcu. Integer vitae facilisis nulla. Morbi convallis interdum justo
            non cursus. Sed et rutrum magna, nec feugiat augue. Ut euismod
            sagittis tempor. Integer faucibus massa elit, sed cursus libero
            mollis non. Pellentesque habitant morbi tristique senectus et netus
            et malesuada fames ac turpis egestas.
          </div>
          <img
            className="col-sm-6 col-12"
            style={{ backgroundColor: "yellow", width: "49%" }}
            src={logo}
            alt="nothing..."
          ></img>
        </div>
      </div>
    </div>
  );
}

export { About };
