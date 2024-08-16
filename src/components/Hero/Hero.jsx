

const Hero = () => {
    return (
  

<div className="hero min-h-screen rounded-xl "
  style={{
    backgroundImage: "url(https://i.ibb.co/pfSS9VY/myles-tan-IWClj-Yv1-TJw-unsplash.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-40 rounded-lg"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-ld">
      <h1 className="mb-5 text-5xl font-bold leading-snug">Recipes and Stories for <br/>Strengthening Bonds</h1>
      <p className="mb-5 text-lg">
      Discover the joy of cooking together with simple, delicious recipes that 
      <br/>strengthen bonds and create lasting memories around the table
      </p>
      <button className="btn btn-success text-white mr-5 ">Explore Now</button>
      <button className="bg-transparent border-2 px-4 py-2 rounded-lg ">Our Feedback</button>
    </div>
  </div>
</div>

    );
};

export default Hero;
