import React from "react"

import { BrowserRouter as Router, Routes, Route,Link }
    from 'react-router-dom';
import Accueil from "./Accueil";
import Creation from "./Creation";

const Header = () => {
    return (
        <Router>
            <header class="bg-zinc-500">

                <nav class="p-5" >
                    <div class="container flex flex-wrap  items-center  bg-zinc-500">
                        <p href="../index.php" class="flex items-center">
                            <img src="img/dev&conp.png" class="mr-3 h-6 sm:h-10" alt="videotheque Logo" />

                            <span class="self-center text-xl font-semibold whitespace-nowrap text-white">Développeur web</span>
                            <span class="self-center text-xl font-semibold whitespace-nowrap text-white ml-1">&</span>

                            <span class="self-center text-xl font-semibold whitespace-nowrap text-white ml-1">Concepteur d'application</span>
                        </p>

                       
                    </div>
                </nav>

            </header>
           

        </Router>
    )
}
export default Header