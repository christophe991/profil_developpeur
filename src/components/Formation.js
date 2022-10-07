import React from 'react'
import '../styles/Formation.css'
const Formation = () => {
    return (
        <div className='hauteur' >
            <h1 className='mt-10 font-medium text-center text-2xl'>Formations</h1>
            <div className='grid grid-rows-4 grid-flow-col gap-4 mt-20'>
                <div>
                    Mai 2022 à Mai 2023
                </div>
                <div>
                    Septembre 2021 à Janvier 2022
                </div>
                <div>
                    Décembre 2020 à Avril 2021
                </div>
                <div>
                    Juin 2020 à Aout 2020
                </div>

                <div>
                    Concepteur développeur d'application Afpa
                </div>
                <div>
                    M2I Formation DOTNET
                </div>
                <div>
                    Développeur web et web mobile Webforce3
                </div>
                <div>
                    Decouverte des métier du numérique Afpa
                </div>

            </div>
            <div className='grid grid-rows-4 grid-flow-col gap-4 mt-20'>
                <div>
                    Octobre 2009 à Septembre 2010
                </div>
                <div>
                    Janvier 2009 à Mai 2009
                </div>
                <div></div>
                <div></div>
                <div className=''>
                    BAC PRO Technicien d'assistance en informatique Cirften
                </div>
                <div className=''>
                   Preparation contrat PRO Technicien d'assistance en informatique Cirften
                </div>
            </div>
        </div>
    )
}

export default Formation