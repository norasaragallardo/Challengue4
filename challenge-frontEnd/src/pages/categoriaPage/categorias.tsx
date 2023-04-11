import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import {useState, useEffect} from 'react';
import axios from 'axios';
import IMostrarUsuarios from 'src/interfaces/ICategoria';



export default function Categoria() {
console.log('-------------------');

  const [rows1, setRows1] = useState([]);

  useEffect(() => {
    const fetchData1 = async () => {
      const response1 = await axios.get('http://localhost:8080/api/categoria')
console.log("hola", response1.data.data);

      setRows1(response1.data.data);
    };
    fetchData1();

    
  }, [])

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }} >

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Categoria</TableCell>
              <TableCell>Descripcion</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell>Ruta</TableCell>
              <TableCell>acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows1.map((row: IMostrarUsuarios) => (
              <TableRow
                key={row.idcategoria}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">{row.descripcion}</TableCell>
                <TableCell>{row.descripcion}</TableCell>
                <TableCell>{row.estado}</TableCell>
                <TableCell>{row.ruta}</TableCell>
                <TableCell>acciones</TableCell>
               
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </Container>
  );
}