import React from "react";

const Tablero = ({ turno }) => {
  return (
    <div className="container">
     

      <div className="row">
        <div className="col-12 h-100">
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner h-100">
              <div className="carousel-item active">
                <img
                  src="https://blog.desafiolatam.com/wp-content/uploads/2019/04/react-galaxia.png"
                  className=" d-block w-100 figure-img  rounded "
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://blog.desafiolatam.com/wp-content/uploads/2019/04/react-galaxia.png"
                  className=" d-block w-100 figure-img  rounded"
                  alt="..."
                />
              </div>
              
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <h1 className="my-4">Atendiendo</h1>
        <hr />
       
      </div>
    </div>
  );
};

export default Tablero;
