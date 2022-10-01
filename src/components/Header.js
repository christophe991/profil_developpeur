import React from "react"



const Header = () => {
    return (
        <div>
            <header class="bg-zinc-500 ">

                <section class="p-5 " >
                    <div class="container flex flex-wrap  items-center  bg-zinc-500 ">
                        <p href="../index.php" class="flex  justify-center  ">
                            <img src="img/dev&conp.png" class="mr-3 h-6 sm:h-10" alt=" Logo developpeur" />

                            <span class="self-center text-xl font-semibold whitespace-nowrap text-white">Développeur web</span>
                            <span class="self-center text-xl font-semibold whitespace-nowrap text-white ml-1">&</span>

                            <span class="self-center text-xl font-semibold whitespace-nowrap text-white ml-1">Concepteur d'application</span>
                        </p>

                       
                    </div>
                </section>

            </header>
           

        </div>
    )
}
export default Header