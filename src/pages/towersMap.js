import { useState } from "react";
import towerMapFake from "../img/maps_placeholder.png";

function TowersMap() {
  const [hide, setHide] = useState("hidden");

  function dismissoverlay() {
    //nascondi side e overlay
    console.log("a");
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

  /* $('#sidebarCollapse').on('click', function () {
            // open sidebar
            $('#sidebar').addClass('active');
            // fade in the overlay
            $('.overlay').addClass('active');
            $('.collapse.in').toggleClass('in');
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        });*/

  return (
    <div>
      <div class="wrapper">
        {/*<!-- Sidebar -->*/}
        <nav id="sidebar" style={{ visibility: hide }} className="">
          <button id="dismiss" onClick={dismissoverlay}>
            x
          </button>

          <div class="sidebar-header">
            <h3>Bootstrap Sidebar</h3>
          </div>

          <ul class="list-unstyled components">
            <p>Dummy Heading</p>
          </ul>
        </nav>

        {/*<!-- Dark Overlay element --> se lo metto dopo non copre content*/}
        <div class="overlay" id="overlay" onClick={dismissoverlay}></div>

        {/*<!-- Page Content -->*/}
        <div id="content" style={{ zIndex: 9997 }}>
          <div class="container-fluid">
            <button
              style={{ width: "80%" }}
              type="button"
              id="sidebarCollapse"
              class="btn btn-info"
              onClick={display}
            >
              <span>Toggle Sidebar</span>
            </button>
          </div>
          <img src={towerMapFake} alt="fake map!"></img>
        </div>
      </div>
    </div>
  );
}

export { TowersMap };
