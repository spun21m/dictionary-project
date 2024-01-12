import React from "react";
import "./Photos.css";
export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos">
        <section>
          <div className="row">
            {props.photos.photos.map(function (photo, index) {
              if (index < 6) {
                return (
                  <div className="col-4" key={index}>
                    <a
                      href={photo.src.original}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={photo.src.landscape}
                        className="img-fluid"
                        alt={photo.alt}
                      />
                    </a>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </section>
      </div>
    );
  } else {
    return null;
  }
}
