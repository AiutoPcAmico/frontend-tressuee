import { useState } from "react";
import { LeafletMap } from "../components/LeafletMap";

function TowersMap() {
  const [hide, setHide] = useState("hidden");

  const positions = [
    {
      latitude: 45.94574,
      longitude: 10.280165,
      description: "Una torre di piccole dimensioni...",
    },
    {
      latitude: 45.936309,
      longitude: 10.257162,
      description: "Una torre di medie dimensioni...",
    },
    {
      latitude: 45.690854,
      longitude: 9.807038,
      description: "La nostra sede!",
    },
  ];

  function dismissoverlay() {
    //nascondi side e overlay
    var element = document.getElementById("sidebar");
    element.classList.remove("active");
    var element2 = document.getElementById("overlay");
    element2.classList.remove("active");
    setHide("hidden");
  }
  function display() {
    //vedi side overlay
    var element = document.getElementById("sidebar");
    element.classList.add("active");

    var element2 = document.getElementById("overlay");
    element2.classList.add("active");
    setHide("visible");

    //element.classList.toggle("in");
  }

  return (
    <div>
      <div className="wrapper">
        {/*<!-- Sidebar -->*/}
        <nav id="sidebar" style={{ visibility: hide }} className="">
          <button id="dismiss" onClick={dismissoverlay}>
            x
          </button>

          <div className="sidebar-header">
            <h3>Bootstrap Sidebar</h3>
          </div>

          <ul className="list-unstyled components">
            <p>Dummy Heading</p>
          </ul>
        </nav>

        {/*<!-- Dark Overlay element --> se lo metto dopo non copre content*/}
        <div className="overlay" id="overlay" onClick={dismissoverlay}></div>

        {/*<!-- Page Content -->*/}
        <div id="content" style={{ zIndex: 9997 }}>
          <div className="container-fluid">
            <button
              style={{ width: "80%" }}
              type="button"
              id="sidebarCollapse"
              className="btn btn-info"
              onClick={display}
            >
              <span>Toggle Sidebar</span>
            </button>
          </div>

          {/*qui va tutta la pagina in rendering!*/}
          <LeafletMap positions={positions}></LeafletMap>
        </div>
      </div>
    </div>
  );
}

export { TowersMap };
