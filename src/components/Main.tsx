import React, { useEffect, useState } from "react";
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

  const [selectedMatieres, setSelectedMatieres] = useState({});
  var [totalPrice, setTotalPrice] = useState(0);
  const [show, setShow] = useState(false);
 
  const remove = (matiere) =>{
    dispatch(deleteCourse(matiere.id));
    toast.info(matiere.nom+" course successfully canceled.", {
      position: "top-center",
   
    });
  }

  const add = (matiere) =>{
    dispatch(addCourse({ id: matiere.id, name: matiere.nom, price: matiere.prix }));
    toast.success(matiere.nom+" course successfully added.", {
      position: "top-center",
   
    });
  }

  const matiereIsSelected = (matiere, jour, heure) => {
    const heureKey = `${jour}_${heure}`;
    return (selectedMatieres[heureKey] || []).some(m => m.id === matiere.id);
  };

  const onMatiereClick = (matiere, jour, heure) => {
    const heureKey = `${jour}_${heure}`;
    const updatedMatieres = {...selectedMatieres};
    const selectedMatieresForHeure = selectedMatieres[heureKey] || [];
    const index = selectedMatieresForHeure.findIndex(m => m.id === matiere.id);
    
    if (selectedMatieresForHeure.length > 0 && !selectedMatieresForHeure.some(m => m.id === matiere.id)) {
      toast.error("une autre matière a déjà été sélectionnée pour cette heure.", {position:"top-center"})
      return; }
     
    if (index !== -1) {
      selectedMatieresForHeure.splice(index, 1);
      totalPrice -= matiere.prix;
    } else {
      selectedMatieresForHeure.push(matiere);
      totalPrice += matiere.prix;
    }

    updatedMatieres[heureKey] = selectedMatieresForHeure;
    setSelectedMatieres(updatedMatieres);
    setTotalPrice(totalPrice);
    index === -1 ? add(matiere) : remove(matiere)
   
  };

  
  
  
  return <>
    <Container fluid >
      <ToastContainer/>
      <Header totalPrice={totalPrice} show={show}/>

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
                        variant={matiereIsSelected(matiere, jour.nom, cours.heure) ? "danger" : "Light"}
                        onClick={() => onMatiereClick(matiere, jour.nom, cours.heure)}
                        style={{ color: matiereIsSelected(matiere, jour.nom, cours.heure) ? 'white' : '', minWidth: '150px' }}
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
