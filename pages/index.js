import React, { useEffect, useSate } from "react";

import { Table, Container } from "react-bootstrap";

const Home = ({ items }) => {
  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th width={"5%"}>S.NO</th>
            <th width={"50%"}>Product</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items && items?.map((item, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.status}</td>
              <td>actions</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

Home.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/items");
  const { data } = await res.json();

  return { items: data };
};

export default Home;
