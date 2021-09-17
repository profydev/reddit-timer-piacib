import React from 'react';
import Table from '../../components/Table/Table';
import Search from '../../components/Search/Search';
import Posts from '../../components/Posts/Posts';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const HomePage = () => (
  <div>
    <Table />
    <Search />
    <Posts />
    <Footer />
    <Header />
  </div>
);

export default HomePage;
