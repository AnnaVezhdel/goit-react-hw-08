import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col">
        <h1 className="text-5xl font-bold">Hello there!</h1>
        <p className="py-6 text-4xl">
          Welcome to our site where you can keep your contacts
        </p>
        <NavLink to="/contacts">
          <button className="btn btn-primary text-white">Get Started</button>
        </NavLink>
      </div>
    </div>
  );
};

export default HomePage;
