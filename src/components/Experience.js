import React from 'react'
import '../styles/Experience.css'
const Experience = () => {
    return (
        <div className='hauteur' >
            <h1 className='mt-10 font-bold'>Experience</h1>
            <p>
                Voici quelque création en projet de groupe
            </p>
            <div class="flex justify-center">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm">
                        
                        <div class="p-6">
                            <h5 class="text-gray-900 text-xl mb-2 font-bold">Fouille-o-pot</h5>
                            <hr></hr>
                            <p class="text-gray-900 text-xl  mb-2">
                                Une application pour afficher des recettes avec les ingrédients
                                et les ustensiles, possibilité d'ajouter de modifier ou de supprimer
                                avec une gestion de frigo en selectionnant des l'ingrédients la liste de 
                                recette s'actualise selon l'ingrédient selectionner.
                            </p>

                        </div>
                    </div>
                </div>
        </div>
    )

}
export default Experience