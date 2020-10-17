import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './UserCard.module.css';

function UserCard(props) {
  const handleClick = () => {
    const { handleSelect, id, noClick } = props;
    !noClick && handleSelect(id);
  };

  const {
    name,
    email,
    isSelected,
    picture: { medium: imgSrc },
  } = props;

  const cardStyles = classNames(styles.userCard, {
    [styles.selectedUserCard]: isSelected,
  });

  return (
    <article className={cardStyles}>
      <h1>
        <span>{name.title}</span>
        {name.first} {name.last}
      </h1>
      <img src={imgSrc} alt='user' onClick={handleClick}/>
      <p>{email}</p>
    </article>
  );
}

export default UserCard;
