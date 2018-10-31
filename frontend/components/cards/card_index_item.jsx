import React from 'react';

const CardIndexItem = (props) => {
  if (!props.card) return null;

  const { card, passCardId } = props;
  // const labels = card.labels;
  const dueDate = card.due_date ? 
    "due date" : null; 
  const descriptionIcon = card.description ? 
    "description": null;
  const commentIcon = card.commentIds.length == 0 ? 
    null : "comments"; 
  const openCardDetail = () => {
    passCardId(card.id);
  }; 

  return(
    <li className="card-index-item js-modal-open js-card-detail-open"
      onClick={openCardDetail}
    >
      {/* {labels} */}
      {props.card.title}
      <section className="card-index-item-attributes">
        {dueDate}
        {descriptionIcon}
        {commentIcon}
      </section>
    </li>
  );
}

export default CardIndexItem;