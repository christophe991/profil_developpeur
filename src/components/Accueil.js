function Accueil() {
    return (
        <div>
            <div class=" m-20">
                <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                    <img class=" w-full h-40 m-10 object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="img/photo1.png" alt="" />
                    <div class="p-6 flex flex-col justify-start">
                        <h5 class="text-gray-900 text-xl font-medium mb-2">Développeur full-stack</h5>
                        <p class="text-gray-700 text-base mb-4">
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        </p>
                        <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Accueil