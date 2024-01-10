import dataBlogs from '../BlogsSection/data';
import CardsComponent from '../CardsComponent';

const Blogs = () => {
  return (
    <>
      {dataBlogs.map(card => (
        <CardsComponent
          id={card.id}
          key={card.id}
          image={card.image}
          data={card.data}
          title={card.title}
          description={card.description}
        />
      ))}
    </>
  );
};

export default Blogs;
