import React, { useEffect, useState, useContext } from "react";
import { Table, Container, Button } from "react-bootstrap";
import { FaTrash, FaPen } from "react-icons/fa";
import { GlobalContext } from "../context/globalState";
import { useRouter } from "next/router";

const Home = ({ items }) => {
  const [name, setName] = useState("");
  const { searchTerm } = useContext(GlobalContext);
 
  const [foundItems, setFoundItems] = useState(items);

  const router = useRouter();

  useEffect(() => {
    filter();
  }, [searchTerm]);

  // romote filter search term usage

  const filter = () => {
    if (searchTerm !== "") {
      const results = items.filter((item) => {
        return item?.name.toLowerCase().startsWith(searchTerm?.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundItems(results);
    } else {
      setFoundItems(items);

      // If the text field is empty, show all items
    }
  };

  return (
    <>
      <Table striped bordered hover style={{ marginTop: "3.5rem" }}>
        <thead>
          <tr>
            <th>S.NO</th>
            <th width={"40%"} className="name">
              Product
            </th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Status</th>
            {/* <th width = {'5%'} >Action</th> */}
          </tr>
        </thead>
        <tbody>
          {foundItems &&
            foundItems?.map((item, i) => (
              <tr key={i} onClick={() => router.push(`/${item._id}`)}>
                <td>{i + 1}</td>
                <td className="name">{item.name} </td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.status}</td>
                {/* <td style = {{justifyContent: 'space-around', alignItems : 'center', display: 'flex'}}> <Button variant="light" ><FaPen size={10}/></Button><Button variant="light"><FaTrash size={10} color="red"/></Button></td> */}
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

Home.getInitialProps = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/items`);
  const { data } = await res.json();

  return { items: data };
};

export default Home;
