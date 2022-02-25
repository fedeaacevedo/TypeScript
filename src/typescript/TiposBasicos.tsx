import React from 'react'

const TiposBasicos = () => {

    let nombre: string = "Federico";
    const edad: number = 27;
    const estaActivo: boolean = true;

    // const poderes = ['velocidad', 'volar', 'Respirar en el agua']
        const poderes: string[] = [];

        poderes.push('Manzana')
        poderes.push('Banana')

  return (
    <>
        <h3>Tipos basicos</h3>
        {nombre}, {edad}, {(estaActivo) ? 'Esta activo' : 'No esta activo'}
        <br />
        { poderes.join(', ')}
    </>
  )
}

export default TiposBasicos