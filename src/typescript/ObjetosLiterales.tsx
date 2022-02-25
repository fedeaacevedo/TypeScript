interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion;

}

interface Direccion{
    pais:string,
    ciudad:string
}



const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Federico',
        edad: 27,
        direccion:{
            pais:'Argentina',
            ciudad:'La Plata'
        }
    }

  return (
    <>
        <h3>Objetos Literales</h3>
        <code>
            <pre>
                { JSON.stringify ( persona, null, 2)}
            </pre>
        </code>
    </>
  )
}

export default ObjetosLiterales