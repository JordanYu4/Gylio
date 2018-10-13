import React from 'react';

const CardIndexItem = (props) => {
  if (!props.card) return null;

  const card = props.card;
  // const labels = card.labels;
  const dueDate = card.due_date ? 
    "no date" : null; 
  const commentIcon = card.commentIds.length == 0 ? 
    null : "comments";

  return(
    <li className="card-index-item js-modal-open js-card-detail-open">
      {/* {labels} */}
      {props.card.title}
      <section className="card-index-item-attributes">
        {dueDate}
        {commentIcon}
      </section>
    </li>
  );
}

export default CardIndexItem;