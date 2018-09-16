import React from "react";
import "./FriendCard.css";


const FriendCard = props => (
  <div className= "card col-sm-3"
  value={props.id} 
  onClick={props.imgClick}
>
  <div className="card-img text-center">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
      
    </div>
 </div>
   </div>
);

export default FriendCard;