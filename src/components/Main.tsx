import React, { useEffect, useState } from "react";
import {MainTop,Header }from "./Header";
import {MainEnd,Footer} from "./Footer";
import { Table, Container, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { addCourse, deleteCourse } from "../features/course/CourseSlice";
import type { RootState } from '../app/store'
import { ToastContainer, toast } from 'react-toastify';
import { ThunkDispatch } from 'redux-thunk';
import { fetchCalendarData } from "../features/Calendar/CalendarSlice";
import CustomHr from "./CustomHr";
import Map from "./Map";
import "../assets/css/style.css"

export default function Main() {

 // const [data, setData] = useState(null);
 // const dispatch = useDispatch();
 const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();

  const courses = useSelector((state: RootState) => state.course.courses)
 // const data = useSelector((state: RootState) => state.calendar.data);
  const { data, loading, error } = useSelector((state: RootState) => state.calendar);
  const [selectedMatieres, setSelectedMatieres] = useState({});
  var [totalPrice, setTotalPrice] = useState(0);
  const [show, setShow] = useState(false);



/**
  * Removes a course and displays a success message.
  * @param {Object} matiere - The course to be removed.
  */
  const remove = (matiere) =>{
    dispatch(deleteCourse(matiere.id));
   /* toast.info(matiere.nom+" course successfully canceled.", {
      position: "bottom-left",
   
    });*/
  }

 /**
  * Add course and show success toast.
  * @param {Object} matiere - Course object {id, nom, prix}.
  */
  const add = (matiere) =>{
    dispatch(addCourse({ id: matiere.id, name: matiere.nom, price: matiere.prix }));
   /* toast.success(matiere.nom+" course successfully added.", {
      position: "top-left",
   
    });*/
  }

  /** Check if a subject is selected for a given day and time.
   * @param {Object} matiere - The subject to check
   * @param {string} jour - The day to check (formatted as 'YYYY-MM-DD')
   * @param {string} heure - The time to check (formatted as 'HH:mm')
   * @returns {boolean} - Returns true if the subject is selected, false otherwise
   */
   const matiereIsSelected = (matiere, jour, heure) => {
    const heureKey = `${jour}_${heure}`;
    return (selectedMatieres[heureKey] || []).some(m => m.id === matiere.id);
  };

  /**
   * Updates the selected matieres for a given jour and heure.
   * @param {object} matiere - The selected matiere.
   * @param {string} jour - The selected jour.
   * @param {string} heure - The selected heure.
   * @returns {void}
   */
  const onMatiereClick = (matiere, jour, heure) => {
    const heureKey = `${jour}_${heure}`;
    const updatedMatieres = {...selectedMatieres};
    const selectedMatieresForHeure = selectedMatieres[heureKey] || [];
    const index = selectedMatieresForHeure.findIndex(m => m.id === matiere.id);
    
    if (selectedMatieresForHeure.length > 0 && !selectedMatieresForHeure.some(m => m.id === matiere.id)) {
      toast.error("une autre matière a déjà été sélectionnée pour cette heure.", {position:"bottom-right"})
      return; }
     
      const DEFAULT_PRICE = 50;
      let price = parseInt(matiere.prix);

      if (isNaN(price) || price <= 0) {
        price = DEFAULT_PRICE;
      }
      
    if (index !== -1) {
      selectedMatieresForHeure.splice(index, 1);
      totalPrice -= price;
    } else {
      selectedMatieresForHeure.push(matiere);
      totalPrice += price;
    }

    updatedMatieres[heureKey] = selectedMatieresForHeure;
    setSelectedMatieres(updatedMatieres);
    setTotalPrice(totalPrice);
    index === -1 ? add(matiere) : remove(matiere)
   
  };


  useEffect(() => {
      dispatch(fetchCalendarData());
  }, [dispatch]);

  const parsedData = JSON.parse(data);

  return <>
  {
     parsedData?.jours ?
    <Container fluid className="p-0 " style={{ overflowX: 'auto' }} >
      <ToastContainer/>
      <Header/>
      <p className="text-center text-uppercase text-dark fs-2 pt-5 fw-bold" id="timetable">Calendrier</p>
     
      <MainTop totalPrice={totalPrice} />
      <Table striped bordered hover className="my-5 container table-custom" responsive>
        <thead style={{ backgroundColor: "#0c2461", color: "white" }}>
          <tr className="fs-5">
            <th>Horaires</th>
            {parsedData.jours.map((jour) => (
              <th key={jour.nom} className="text-center font-monospace">
                {jour.nom}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {parsedData.jours[1].cours.map((cours, index) => (
            <tr key={index}>
              <td>{cours.heure}</td>
              {parsedData.jours.map((jour) => {
                const matieres = jour.cours.find((c) => c.heure === cours.heure)?.matieres;
                return (
                  <td key={jour.nom} className="col">
                    {matieres ? (
                      <div>
                        {matieres.map((matiere) => (
                          <Button
                            key={matiere.id}
                            className="my-1 stretched-button"
                            variant={
                              matiereIsSelected(matiere, jour.nom, cours.heure)
                                ? "danger"
                                : "light"
                            }
                            onClick={() =>
                              onMatiereClick(matiere, jour.nom, cours.heure)
                            }
                            style={{
                              color: matiereIsSelected(matiere, jour.nom, cours.heure)
                                ? "white"
                                : "",
                              minWidth: "150px",
                            }}
                          >
                            <span className="font-monospace  fs-7">
                              {matiere.nom}
                            </span>{" "}
                            {" "}
                            <span className=" font-monospace text-secondary fs-10"></span>
                          </Button>
                        ))}
                      </div>
                    ) : (
                      <div className="not"></div>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </Table>

      <p className="text-center text-danger fs-5 pb-5 ">Choisissez les cours et cliquer sur je m'inscris pour procéder à l'inscription</p>
      <MainEnd  />
      <Map/>
      <Footer/>
     
    </Container> : <p>Loading data...</p>
  }
    


  </>
}
