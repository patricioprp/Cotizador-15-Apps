import React, {Fragment} from 'react';
import styled from "@emotion/styled";

const ContenedorResumen = styled.div`
padding: 1rem;
text-
`;

const Resumen = ({datos}) => {
    // extraer datos 
    const {marca,year,plan} = datos;

    if(marca === ''|| year ==='' || plan === '') return null

    return ( 
        <Fragment>
            <h2>Resumen de Cotizacion</h2>
            <ul>
                <li>Marca: {marca}</li>
                <li>Plan: {plan}</li>
                <li>Año: {year}</li>
            </ul>
        </Fragment>
     );
}
 
export default Resumen;