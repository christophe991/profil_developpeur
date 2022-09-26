function Accueil() {
    return (
        <div>
            <h1 className="font-bold text-center text-xl mt-20 ">Développeur full-stack</h1>
            <div class=" m-20 drop-shadow-2xl">
                <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                    <img class=" w-full h-60 m-10 object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg mt-10" src="img/photo1.png" alt="" />
                    <div class="p-6 flex flex-col justify-start">
                        <h4 class="text-gray-900 text-xl font-medium mb-2 ">Christophe heddebaut</h4>
                        <div class="flex flex-col md:flex-row">
                            <svg class="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg> <div class="mt-1 ml-1 text-lg">Coordonnée</div>
                        </div>
                        <p class="text-gray-700 text-base ">
                            8/61 rue du Maréchal Juin 59370 Mons en Baroeul
                        </p>
                        <div class="flex flex-col md:flex-row">
                        <svg class="h-8 w-8 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
                        <path stroke="none" d="M0 0h24v24H0z"/>  
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                        </svg> <div class="mt-1 ml-1 text-lg">Téléphone</div>
                        </div>
                        <p class="text-gray-600 text-base">06.03.06.41.46</p>
                        <div class="flex flex-col md:flex-row">
                        <svg class="h-8 w-8 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
                        <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="3" y="5" width="18" height="14" rx="2" />  <polyline points="3 7 12 13 21 7" />
                        </svg> <div class="mt-1 ml-1 text-lg">Email</div>
                        
                        </div>
                        <p class="text-gray-600 text-base">christophe.heddebaut@bbox.fr</p>
                    </div>
                </div>
            </div>
            <div className=" ml-96 mt-20">
                <p className="w-3/5  ">
                Je suis en reconversion professionnel depuis 2 ans, actuellement en formation CDA bac+3/4, 
                je recherche un terrain stage pour être former gratuitement pendant 3 mois du 20 février au 19 mai 2023 et valider mon diplôme.
                </p>
                <p className="w-3/5 mt-10 ">
                Je travaille tous les jours en créant des projets personnels sur divers langage de programmation afin de devenir un développeur confirmé.
                </p>
                <p className="w-3/5 mt-10 ">
                Grace a INSY2S en association avec l’incubateur j’ai travaillé sur un projet e-commerce en méthode agile, 
                un Daily meeting et une review tous les 15 jours pour montrer le travail effectuer, 
                maintenant je cherche une entreprise qui me ferait confiance en mes compétences et mes qualités.
                </p>
            </div>
        </div>
    )

}
export default Accueil