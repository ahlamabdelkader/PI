
import ExportToExcel from "./data/ExportToExcel";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import 'boxicons/css/boxicons.min.css';



import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const columns = [
  {
    name: "Titre",
    selector: row => row.titre,
    cellExport:row => row.titre,
    sortable: true
  },
  {
    name: "Code",
    selector: row => row.code,
    cellExport:row => row.code,
    sortable: true
  },
  {
    name: "Date Enonce",
    selector: row => row.date_enonce,
    cellExport:row => row.date_enonce,
    sortable: true,
    
  },
  {
    name: "Date Depot",
    selector: row => row.date_depot,
    cellExport:row => row.date_depot,
    sortable: true
  },
  {
    name: "Date Limite",
    selector: row => row.date_limite,
    cellExport:row => row.date_limite,
    sortable: true
  },
  {
    name: "Client",
    selector: row => row.client,
    cellExport:row => row.client,
    sortable: true
  },
  {
    name: "Status",
    selector: row => row.status,
    cellExport:row => row.status,
    sortable: true
  },
  {
    name: "Zone",
    selector: row => row.zone,
    cellExport:row => row.zone,
    sortable: true
  },
  {
    name: "Action",
    selector: row => row.action,
    cellExport:row => row.zone,
    sortable: false
  }
];







export default function Offres(props) {  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const mystyle = {
    backgroundcolor: "white",
    color: "black",
    border: "1px solid Black", /* Green */
    float : "right",
    padding : "2px"
   
  };
  const data = props.data.map(oneData=>{
    oneData.action = "<><i className='bx bx-show'></i><i className='bx bx-edit-alt'></i></>"
    return oneData
  })

// const data = [
//     {
//       id: 1,
//       titre: "Beetlejuice",
//       Zone: "1988",
//       Status: "92",
//       genres: ["Comedy", "Fantasy"],
//       client: "Tim Burton",
//       actors: "Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page",
//       plot:
//         'A couple of recently deceased ghosts contract the services of a "bio-exorcist" in order to remove the obnoxious new owners of their house.',
//       posterUrl:
//         "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODE3MDE0MV5BMl5BanBnXkFtZTgwNTk1MjI4MzE@._V1_SX300.jpg"
//     }]

// const modalStyle = {
//   position : "fixed"
  
// };

  const tableData = {
    columns ,
    data
  }
  const fileName = "myfile";

  return (
    <>


    <div className="main">
    
      <ExportToExcel apiData={data} fileName={fileName} />
      
      <Button style={mystyle} variant="" onClick={handleShow}>
         Ajouter une offre 
       </Button>
      

      <Modal  show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nouvelle offre</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


      <DataTableExtensions {...tableData} export={false}>
        <DataTable
          columns={columns}
          data={data}
          noHeader
          defaultSortField="id"
          defaultSortAsc={false}
          pagination
          highlightOnHover

        />
      </DataTableExtensions>
    </div></>
  );
}





