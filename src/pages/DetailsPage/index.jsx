import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const DetailsPage = () => {
  return (
    <div>
      <h1>Details Page</h1>
      <Link to="/"> go to homepage</Link>
    </div>
  );
};

export default DetailsPage;
