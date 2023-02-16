import React from "react";
import "./css/card.css";

function SingleCard(props) {
  return (
    <>
      <div class="col">
        <div class="card">
          <img src={props.picture} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="text-muted">{props.author}</p>
            <p>
              <span class="rating">{props.rating}</span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="text-muted">{props.Numberenrolled}</span>
            </p>
            <p>
              <i class="fa-solid fa-indian-rupee-sign"></i>
              {props.amnt} <span> </span>
              <span class="text-muted text-decoration-line-through">
                <i class="fa-solid fa-indian-rupee-sign"></i>
                {props.Actualamnt}
              </span>
            </p>
            <span class="badge bg-warning text-dark">BestSeller</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleCard;
