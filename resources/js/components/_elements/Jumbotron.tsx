import React from 'react';
type JumbotronProps = {
  title: string;
  description: string;
};
const Jumbotron = ({ title, description }: JumbotronProps) => {
  return (
    <section className='text-default'>
      <h1>{title}</h1>
      {description && (
        <p className='items-center justify-center py-7 text-lg'>
          {description}
        </p>
      )}
    </section>
  );
};

export default Jumbotron;
