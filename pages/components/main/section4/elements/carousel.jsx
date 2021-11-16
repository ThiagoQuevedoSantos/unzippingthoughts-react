function Carousel() {
    return (
        <div id="carousel_container">
        <figure id="carousel">
          <div className="actions">
            <button id="btn_left" className="ar_btn">
              {/* <svg
                className="arrow ar_left"
                width="11px"
                height="20px"
                viewBox="0 0 11 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g transform="translate(-548.000000, -3434.000000)">
                    <g transform="translate(100.000000, 3378.000000)">
                      <g transform="translate(442.000000, 54.000000)">
                        <g>
                          <polygon
                            id="Path"
                            opacity="0.87"
                            points="0 0 24 0 24 24 0 24"
                          ></polygon>
                          <path
                            d="M16.62,2.99 C16.13,2.5 15.34,2.5 14.85,2.99 L6.54,11.3 C6.15,11.69 6.15,12.32 6.54,12.71 L14.85,21.02 C15.34,21.51 16.13,21.51 16.62,21.02 C17.11,20.53 17.11,19.74 16.62,19.25 L9.38,12 L16.63,4.75 C17.11,4.27 17.11,3.47 16.62,2.99 Z"
                            id="🔹-Icon-Color"
                            fill="#1D1D1D"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg> */}
            </button>
            <button id="btn_right" className="ar_btn">
              {/* <svg
                className="arrow ar_right"
                width="11px"
                height="20px"
                viewBox="0 0 11 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g transform="translate(-548.000000, -3434.000000)">
                    <g transform="translate(100.000000, 3378.000000)">
                      <g transform="translate(442.000000, 54.000000)">
                        <g>
                          <polygon
                            id="Path"
                            opacity="0.87"
                            points="0 0 24 0 24 24 0 24"
                          ></polygon>
                          <path
                            d="M16.62,2.99 C16.13,2.5 15.34,2.5 14.85,2.99 L6.54,11.3 C6.15,11.69 6.15,12.32 6.54,12.71 L14.85,21.02 C15.34,21.51 16.13,21.51 16.62,21.02 C17.11,20.53 17.11,19.74 16.62,19.25 L9.38,12 L16.63,4.75 C17.11,4.27 17.11,3.47 16.62,2.99 Z"
                            id="🔹-Icon-Color"
                            fill="#1D1D1D"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg> */}
            </button>
          </div>
          <div className="img_container left" id="img_c0">
            <img id="img0" src="assets/integrants/angelo.jpg" alt="" />
          </div>
          <div className="img_container center" id="img_c1">
            <img id="img1" src="assets/integrants/guilherme.jpeg" alt="" />
          </div>
          <div className="img_container right" id="img_c2">
            <img id="img2" src="assets/integrants/rayssa.jpeg" alt="" />
          </div>
          <div className="img_container semiright" id="img_c3">
            <img id="img3" src="assets/integrants/vini.jpeg" alt="" />
          </div>
          <div className="img_container semileft" id="img_c4">
            <img id="img4" src="assets/integrants/thiago.jpeg" alt="" />
          </div>
        </figure>
        <div id="colaborator_name">
          <a target="_blank" id="link_field" className="flex_c">
            <h3 id="name_field">Nome</h3>
            <legend className="leg_pretty">ver perfil</legend>
          </a>
        </div>
      </div>
    );
}

export default Carousel;