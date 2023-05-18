import { useState } from "react";
import { LeafletMap } from "../components/LeafletMap";
import { CardMappa } from "../components/cardMappa";
import { DarkModeContext } from "../theme/DarkModeContext";
import { useContext } from "react";

function TowersMap() {
  const [hide, setHide] = useState("hidden");
  const [selected, setSelected] = useState({ latitude: 0.0, longitude: 0.0 });
  //console.log(selected);
  const { darkMode } = useContext(DarkModeContext);

  const positions = [
    {
      latitude: 45.94574,
      location: "Via delle gallerie 2, Cividate Camuno (BS)",
      longitude: 10.280165,
      description: "Una torre di piccole dimensioni...",
      title: "Torre di Ricarica",
      tissuenumber: 10,
    },
    {
      latitude: 45.936309,
      longitude: 10.257162,
      location: "Via dei Pascoli SNC, Cividate Camuno (BS)",
      description: "Una torre di medie dimensioni...",
      title: "Torre di Ricarica",
      tissuenumber: 20,
    },
    {
      latitude: 45.690854,
      longitude: 9.807038,
      location: "Via del Convento 1, San Paolo D'Argon (BG)",
      description: "Una torre di medie dimensioni...",
      title: "Sede Aziendale",
      tissuenumber: 30,
    },
    {
      latitude: 45.896468,
      longitude: 10.20007,
      location: "Via del monticolo 33, Darfo Boario Terme (BS)",
      description: "Una torre di piccole dimensioni...",
      title: "Torre di Ricarica",
      tissuenumber: 5,
    },
    {
      latitude: 45.879757,
      longitude: 10.150549,
      location: "Lago Moro 0, Darfo Boario Terme (BS)",
      description: "Una torre di medie dimensioni...",
      title: "Torre di Ricarica",
      tissuenumber: 100,
    },
    {
      latitude: 45.697537,
      longitude: 9.793209,
      location: "Via dei boschi, Paese Sconosciuto (BG)",
      description: "La nostra seconda sede!",
      title: "Sede nei boschi",
      tissuenumber: 50,
    },
  ];

  function dismissoverlay() {
    //nascondi side e overlay
    var element = document.getElementById("sidebar");
    element.classList.remove("active");

    var element1 = document.getElementById("sidebarCollapse");
    element1.classList.remove("active");

    var element3 = document.getElementById("mapwrapper");
    element3.classList.remove("wrapper-map");

    var element2 = document.getElementById("overlay");
    element2.classList.remove("active");
    setHide("hidden");
  }
  function display() {
    //hide === "hidden"
    if (hide === "hidden") {
      //vedi side overlay
      var element = document.getElementById("sidebar");
      element.classList.add("active");

      var element1 = document.getElementById("sidebarCollapse");
      element1.classList.add("active");

      var element3 = document.getElementById("mapwrapper");
      element3.classList.add("wrapper-map");

      var element2 = document.getElementById("overlay");
      element2.classList.add("active");
      setHide("visible");

      //element.classList.toggle("in");
    } else {
      dismissoverlay();
    }
  }

  return (
    <div>
      <div id="mapwrapper">
        {/*<!-- Sidebar -->*/}
        <nav id="sidebar" style={{ visibility: hide }} className="">
          <div className={"sidebar-header "}>
            <h3>{"    Le nostre torri"}</h3>
          </div>
          <div
            className="bg-light border-right min-vh-100"
            id="sidebar-wrapper"
          >
            <div
              className="list-group list-group-flush overflow-auto"
              style={{ height: "78.3vh", backgroundColor: "#77ae59" }}
            >
              {positions.map((singlePosition) => {
                return (
                  <CardMappa
                    posizione={singlePosition}
                    set={setSelected}
                  ></CardMappa>
                );
              })}
            </div>
          </div>
        </nav>

        {/*<!-- Dark Overlay element --> se lo metto dopo non copre content*/}
        <div className="overlay" id="overlay" onClick={dismissoverlay}></div>

        {/*<!-- Page Content -->*/}
        <div id="content" style={{ zIndex: 9999 }}>
          <div className="container-fluid">
            <button
              type="button"
              id="sidebarCollapse"
              className={"btn btn-info "}
              onClick={display}
            >
              <div
                style={darkMode ? { color: "#244e23" } : { color: "#f1f4dc" }}
              >
                {hide === "hidden" ? ">" : "x"}
              </div>
            </button>
          </div>

          {/*qui va tutta la pagina in rendering!*/}
          <div style={{ height: "3em" }}></div>
          <LeafletMap
            positions={positions}
            isFixed={hide}
            positionSelected={selected}
          ></LeafletMap>
        </div>
      </div>
    </div>
  );
}

export { TowersMap };
