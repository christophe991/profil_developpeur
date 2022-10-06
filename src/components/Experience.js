import React from 'react'
import '../styles/Experience.css'
const Experience = () => {
    return (
        <div className='hauteur' >
            <h1 className='mt-10 font-bold'>Experience</h1>
            <p>
                Voici quelque création en projet de groupe
            </p>
            <div class="flex justify-around">
                <div class="rounded-lg shadow-lg bg-white max-w-sm">

                    <div class="p-6">
                        <h5 class="text-gray-900 text-xl mb-2 font-bold">Fouille-o-pot</h5>
                        <hr></hr>
                        <h3 class="text-gray-900 text-xl font-medium mt-5">Application en Java FX</h3>
                        <p class="text-gray-900 text-xl mt-10  mb-2">
                            Une application pour afficher des recettes avec les ingrédients
                            et les ustensiles, possibilité d'ajouter de modifier ou de supprimer
                            avec une gestion de frigo en selectionnant des l'ingrédients la liste de
                            recette s'actualise selon l'ingrédient selectionner.
                        </p>

                    </div>
                </div>
                <div class="rounded-lg shadow-lg bg-white max-w-sm">

                    <div class="p-6">
                        <h5 class="text-gray-900 text-xl mb-2 font-bold">E-commerce</h5>
                        <hr></hr>
                        <h3 class="text-gray-900 text-xl font-medium mt-5">Site web en React et api en nodejs</h3>
                        <p class="text-gray-900 text-xl  mt-10 mb-2">
                            Site web E-commerce, connexion commerçant, client,
                            le commerçant peut ajouter un produit modifier ou supprimer 
                            et gerer les question des clients.
                        </p>

                    </div>
                </div>
                
                    <div class="rounded-lg shadow-lg bg-white max-w-sm">
                        
                        <div class="p-6">
                            <h5 class="text-gray-900 text-xl mb-2 font-bold"> Intranet</h5>
                            <hr></hr>
                            <h3 class="text-gray-900 font-medium mt-5 text-xl">Site web en React et api en CSharp</h3>
                            <p class="text-gray-900 text-xl mt-10  mb-2">
                                Systeme de messagerie pour les entreprise,
                                avec une gestion administrateur pour valider un message,
                                connexion de l'utilisateur et possibilité de repondre au message.
                            </p>

                        </div>
                    </div>
                    <div class="rounded-lg shadow-lg bg-white max-w-sm">
                        
                        <div class="p-6">
                            <h5 class="text-gray-900 text-xl mb-2 font-bold"> Virtual mall</h5>
                            <hr></hr>
                            <h3 class="text-gray-900 font-medium mt-5 text-xl">Site web en Synfony</h3>
                            <p class="text-gray-900 text-xl mt-10  mb-2">
                                Site web pour reunir plusieurs enseigne pour aider l'utilisateur
                                a trouver ce qu'il, une connexion a MYSQL, connexion des commerçants
                                pour ajouter l'enseigne et ajout de produit, connexion d'un administrateur pour verifier
                                les données. Affichage par type d'enseigne.
                            </p>

                        </div>
                    </div>
                
            </div>

        </div>

    )

}
export default Experience