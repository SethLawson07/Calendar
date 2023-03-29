import React from "react";
import Header from "./Hearder";
import Footer from "./Footer";
import {Table ,Container}from 'react-bootstrap';
export default function Main(){

    return <>
    
    <Container fluid >
    <Header/>

    <Table striped bordered hover responsive size="sm" className="my-5">
    <thead style={{ backgroundColor: '#0c2461',color:'white' }}>
        <tr className="fs-3">
        <th>Horaires</th>
        <th>Lundi</th>
        <th>Mardi</th>
        <th>Mercredi</th>
        <th>Jeudi</th>
        <th>Vendredi</th>
        <th>Samedi</th>
        <th>Dimanche</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td>14:00</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>oklm</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
        </tr>
    </tbody>
    </Table>

    <Footer/>
    </Container>
   

    </>

}