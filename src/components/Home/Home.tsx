import '../../styles.css';


const Home= () => {



  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <div className="d-flex flex-column border border-3 border-success rounded-2 p-3 post-size">
      <span className="mb-3"><b><i>Created on: </i></b> 22.08.23 15:10</span>
        <h4 className="mb-3">Some title post...</h4>
        <button className="btn-read w-25 btn btn-success text-start ps-3">Read more</button>
      </div>
    </div>
  );
};

export default Home;