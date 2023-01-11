import React, { useState, useEffect, useContext } from "react";
import { Button, Card, Container, Spinner } from "react-bootstrap";
import { useRouter } from "next/router";
import Dialogue from "../../components/dialogue";
import { GlobalContext } from "../../context/globalState";

const Details = ({ Detail }) => {
  const [data, setData] = useState(Detail);
  const [openDel, setOpenDel] = useState(false);
  const [openEd, setOpenEd] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const { addSearchTerm } = useContext(GlobalContext);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (confirm) {
      deleteProduct();
    }

    setConfirm(false);
  }, [confirm]);




  const deleteProduct = async () => {
    setLoading(true);
    try {
      const deleted = await fetch(`${process.env.BASE_URL}/api/items/${id}`, {
        method: "Delete",
      });
      addSearchTerm("");
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const confirmDelete = () => {
    setConfirm(true);
  };



  const Edit = (res) => {
    setData(res);
    
  };


  

  if (loading) {
    return (
      <Container className="center" style={{ height: "100vh" }}>
        <Spinner style={{ height: "4rem", width: "4rem" }} animation="border" />
      </Container>
    );
  }
  return (
    <Container style={{  marginTop : '10rem' }}>
      {openDel && (
        <Dialogue
          show={openDel}
          onHide={() => setOpenDel(false)}
          action={{ confirmDelete }}
        />
      )}

      {openEd && (
        <Dialogue
          show={openEd}
          onHide={() => setOpenEd(false)}
          action={{ Edit, data}}
        />
      )}
      <Card>
        <Card.Header
          style={{ justifyContent: "space-between", display: "flex" }}
        >
          <Card.Title>{data?.status}</Card.Title>
          <span>
            <Button
              variant="warning"
              style={{ marginLeft: 10 }}
              onClick={() => setOpenEd(true)}
            >
              Edit
            </Button>{" "}
            <Button variant="danger" onClick={() => setOpenDel(true)}>
              Delete
            </Button>
          </span>
        </Card.Header>
        <Card.Body>
          <Card.Title>{data?.name}</Card.Title>
          <Card.Text style={{ color: "blue" }}>{data?.description}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

Details.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`${process.env.BASE_URL}/api/items/${id}`);
  const { data } = await res.json();

  return { Detail: data };
};

export default Details;
