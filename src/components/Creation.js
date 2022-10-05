import React from 'react'

const Creation = () => {
    return (
        <div>
            <h1>Création</h1>
            <p>
                Voici mes créations effectuer pendant mon loisir,
                d'autre projet seront ajouter par la suite.

            </p>
            <h2>Mini jeux et horloge en javascript</h2>
            <div className='flex flex-nowrap mt-20 justify-around'>
                <div class="flex justify-center">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm">
                        <a href="#!">
                            <img class="rounded-t-lg " src="img/memoire.png" alt="jeu de memoire" />
                        </a>
                        <div class="p-6">
                            <h5 class="text-gray-900 text-xl mb-2 font-bold">Jeu de memoire</h5>
                            <p class="text-gray-900 text-xl  mb-2">
                                Retourner les cartes pour trouver une pair, quand c'est bon une
                                alerte demande de recommencer, quand la pair est trouver une alertes'affiche aussi
                                et enleve les deux bonne cartes avec un score evolutif.
                            </p>

                        </div>
                    </div>
                </div>
                <div class="flex justify-center">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm">
                        <a href="#!">
                            <img class="rounded-t-lg " src="img/space.png" alt="space inveders" />
                        </a>
                        <div class="p-6">
                            <h5 class="text-gray-900 text-xl  mb-2 font-bold">Space inveders</h5>
                            <p class="text-gray-900 text-xl  mb-2">
                                Les ronds noir descende a une  vitesse régler par defaut,
                                en appuyant sur la flache du haut on tire un carré
                            </p>


                        </div>
                    </div>
                </div>
                <div class="flex justify-center">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm">
                        <a href="#!">
                            <img class="rounded-t-lg " src="img/horloge.png" alt="horloge" />
                        </a>
                        <div class="p-6">
                            <h5 class="text-gray-900 text-xl  mb-2 font-bold">Horloge</h5>
                            <p class="text-gray-900 text-xl  mb-2">
                                Background color noir au centre et des background pour les ailluigues
                                de differente couleur et de taille (rouge pour les secondes, noir pour les minutes et heures)

                            </p>


                        </div>
                    </div>
                </div>
                <div class="flex justify-center">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm">
                        <a href="#!">
                            <img class="rounded-t-lg w-80 h-80" src="img/image1.png" alt="horloge" />
                        </a>
                        <div class="p-6">
                            <h5 class="text-gray-900 text-xl  mb-2 font-bold">Horloge</h5>
                            <p class="text-gray-900 text-xl  mb-2">
                                Sur la page d'accueil j'ai effectué un affichage par categorie avec
                                une limite de 4, ensuite j'ai afficher tout les jeux, films et série et 
                                pour terminer j'ai filtré par console avec un where pour les jeux et un like
                                pour les films et les série.

                            </p>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Creation