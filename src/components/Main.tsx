import React, { useState } from "react";
import Header from "./Hearder";
import Footer from "./Footer";
import { Table, Container, Button } from 'react-bootstrap';
import data from "../data/Calendar.json";
import { useDispatch, useSelector } from 'react-redux';
import { addCourse, deleteCourse } from "../features/course/CourseSlice";
import type { RootState } from '../app/store'
import { ToastContainer, toast } from 'react-toastify';

export default function Main() {

  const dispatch = useDispatch();
  const courses = useSelector((state: RootState) => state.course.courses)

  const [selectedMatieres, setSelectedMatieres] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);



  const onMatiereClick = (matiere) => {
    
    let updatedMatieres = [...selectedMatieres];
    let updatedTotalPrice = totalPrice;

    const index = updatedMatieres.findIndex(m => m.id === matiere.id);

    if (index !== -1) {
      updatedMatieres.splice(index, 1);
      updatedTotalPrice -= matiere.prix;
    } else {
      updatedMatieres.push(matiere);
      updatedTotalPrice += matiere.prix;
    }

    setSelectedMatieres(updatedMatieres);
    setTotalPrice(updatedTotalPrice);

    if (index === -1) {
      dispatch(addCourse({ id: matiere.id, name: matiere.nom, price: matiere.prix }));
        toast.success(matiere.nom+" course successfully added", {
          position: "top-center",
       
        });
    } else {
      dispatch(deleteCourse(matiere.id));
      toast.info(matiere.nom+" course successfully canceled", {
        position: "top-center",
     
      });
    }
  };

  const matiereIsSelected = (matiere) => {
    return selectedMatieres.some(m => m.id === matiere.id);
  };

  //const totalPrice = useSelector((state: RootState) => state.course.totalPrice);

  return <>
    <Container fluid >
      <ToastContainer/>
      <Header totalPrice={totalPrice} />

      <Table striped bordered hover responsive size="sm" className="my-5">
        <thead style={{ backgroundColor: '#0c2461', color: 'white' }}>
          <tr className="fs-3">
            <th>Horaires</th>
            {data.jours.map((jour) => (
              <th key={jour.nom} className="text-center font-monospace">{jour.nom}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.jours[0].cours.map((cours, index) => (
            <tr key={index}>
              <td>{cours.heure}</td>
              {data.jours.map((jour) => {
                const matieres = jour.cours.find((c) => c.heure === cours.heure)?.matieres;
                return (
                  <td key={jour.nom}>
                    {matieres ? (
                      <div>
                        {matieres.map((matiere) => (
                          <Button
                            key={matiere.id}
                            variant={matiereIsSelected(matiere) ? "danger" : "Light"}
                            onClick={() => onMatiereClick(matiere)}
                            style={{ color: matiereIsSelected(matiere) ? 'white' : '', minWidth: '150px' }}
                          >
                            <span className="fw-semibold ">{matiere.nom}</span> : <span className=" font-monospace text-secondary">{matiere.prix} USD </span>
                          </Button>
                        ))}
                      </div>
                    ) : (
                      <div>&nbsp;</div>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </Table>

      <Footer />
          
      {courses.map(course => (
        <li key={course.id}>
          {course.name} - ${course.price}
        </li>
      ))}



    </Container>


  </>
}
