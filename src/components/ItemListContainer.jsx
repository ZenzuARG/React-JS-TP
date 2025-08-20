import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <section style={{ padding: '3rem', textAlign: 'center', fontSize: '1.5rem' }}>
      <h2>{greeting}</h2>
      <p>Pronto vas a poder ver nuestros mejores productos aca</p>
    </section>
  );
};


export default ItemListContainer;
