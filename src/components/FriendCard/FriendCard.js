import React from "react";
import "./FriendCard.css";


const FriendCard = props => (
  <div className= " col-sm-3"
  value={props.id} 
  // onClick={props.imgClick}
onClick={() => props.imgClick(props.id)}>
  <div className="card-img">
    <div className="img-container">
      <img className = "click-item" alt={props.name} src={props.image} />
      
    </div>
 </div>
   </div>
);

export default FriendCard;