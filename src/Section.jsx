import data from "./assets/movies.json";
import Film from "./Film";

// import Film from
const Section = () => {
  const images = [];
  return (
    <section>
      <h1>Netflix</h1>
      {data.map((element, index) => {
        return (
          <div className="container">
            <h2>{element.category}</h2>;
            <div className="listmovies">
              {element.images.map((imgelement, index) => {
                return <Film src={imgelement} />;
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};
export default Section;
