
import ExportToExcel from "./data/ExportToExcel";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import 'boxicons/css/boxicons.min.css';
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
  const tableData = {
    columns ,
    data
  }
  const fileName = "myfile";

  return (
    <>


    <div className="main">
      <ExportToExcel apiData={data} fileName={fileName} />
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





