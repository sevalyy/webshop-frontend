import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Link to="/details"> go to details page</Link>
    </div>
  );
};

export default Homepage;
