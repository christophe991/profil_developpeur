import React from 'react'
import "../styles/Competence.css"


const Competence = () => {
    return (
        <div>
            <h1 className="mt-10 text-center font-medium text-2xl">Compétences et outils utilisés</h1>
            <div className="mt-20">
                <p className='m-10 text-justify'>
                    Liste de mes compétences en développement, ayant une bonne maitrise pour le frontend,
                    je m’exerce davantage sur le backend afin de monter en expérience.Ensuite,
                    vous trouverez la liste des outils utilisée en formation et en projet personnelle.

                </p>
            </div>
            <div className="flex flex-col w-96 ml-20 mt-10 wrapper ">
                <div className="flex flex-col w-96 ml-96 col-span-2 one ">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full">
                                    <thead className="border-b">
                                       <h3 className='ml-5 font-medium'>Compétences en programmation</h3>

                                        <tr>


                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left ">
                                                Image
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                Langage
                                            </th>


                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b ">
                                            <img src="img/angular.png" className="h-20 ml-10 " alt="Logo angular " />
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                Angular
                                            </td>


                                        </tr>
                                        <tr className="bg-white border-b">
                                            <img src="img/javascript.png" className="h-20 " alt="Logo javascript " />
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                Javascript
                                            </td>


                                        </tr>
                                        <tr className="bg-white border-b">
                                            <img src="img/synfony.png" className="h-20 ml-3   " alt="Logo synfony " />
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                Synfony
                                            </td>


                                        </tr>
                                        <tr className="bg-white border-b">
                                            <img src="img/node.png" className="h-20 ml-3  " alt="Logo node " />
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                NodeJS
                                            </td>


                                        </tr>
                                        <tr className="bg-white border-b">
                                            <img src="img/javafx.png" className="h-20 ml-3 " alt="Logo javafx " />
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                JavaFX
                                            </td>


                                        </tr>
                                        <tr className="bg-white border-b">
                                            <img src="img/scenebuilder.png" className="h-20 ml-3   " alt="Logo scenebuilder " />
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                SceneBuilder
                                            </td>


                                        </tr>
                                        <tr classNames="bg-white border-b">
                                            <img src="img/react.png" className="h-20 ml-3 taille " alt="Logo react " />
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                React
                                            </td>


                                        </tr>
                                        <tr className="bg-white border-b">
                                            <img src="img/vue.jpg" className="h-20 ml-3 taille " alt="Logo vue " />
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                VueJS
                                            </td>


                                        </tr>
                                        <tr className="bg-white border-b">
                                            <img src="img/php.png" className="h-20 ml-3 taille " alt="Logo php " />
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                PHP
                                            </td>


                                        </tr>
                                        <tr className="bg-white border-b">
                                            <img src="img/bootstrap.png" className="h-40 ml-3 w-40 " alt="Logo bootstrap " />
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                Bootstrap
                                            </td>


                                        </tr>
                                        <tr className="bg-white border-b">
                                            <img src="img/tailwind.png" className="h-40 ml-3 w-40  " alt="Logo tailwind " />
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                Tailwind
                                            </td>


                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-96 ml-96 two ">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full">
                                    <thead className="border-b">
                                    <h3 className='ml-5 font-medium'>Outils utilisés</h3>
                                        <tr>

                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left ">
                                                Image
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                Nom
                                            </th>


                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b ">
                                            <img src="img/eclipse.png" className="h-20 w-40  " alt="Logo eclipse " />
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                Eclipse
                                            </td>


                                        </tr>
                                        <tr className="bg-white border-b">
                                            <img src="img/github.png" className="h-20 " alt="Logo git " />
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                GitHub
                                            </td>


                                        </tr>
                                        <tr className="bg-white border-b">
                                            <img src="img/intellij.png" className="h-20 ml-3  " alt="Logo intellij " />
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                Intellij
                                            </td>


                                        </tr>
                                        <tr className="bg-white border-b">
                                            <img src="img/mongo.png" className="h-20 ml-3  " alt="Logo mongo " />
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                MongoDB
                                            </td>


                                        </tr>
                                        <tr className="bg-white border-b">
                                            <img src="img/mysql.png" className="h-20 w-20 ml-3  " alt="Logo mysql " />
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                MYSQL
                                            </td>


                                        </tr>
                                        <tr className="bg-white border-b">
                                            <img src="img/sourcetree.png" className="h-20 ml-3  " alt="Logo source " />
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                SourceTree
                                            </td>


                                        </tr>
                                        <tr classNames="bg-white border-b">
                                            <img src="img/sqlserver.png" className="h-20 ml-3  " alt="Logo sql " />
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                SqlServer
                                            </td>


                                        </tr>
                                        <tr className="bg-white border-b">
                                            <img src="img/trello.png" className="h-20 ml-3  " alt="Logo trello " />
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                Trello
                                            </td>


                                        </tr>
                                        <tr className="bg-white border-b">
                                            <img src="img/vscode.png" className="h-10 w-20 ml-3  " alt="Logo php " />
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                Visual Studio Code
                                            </td>


                                        </tr>
                                        <tr className="bg-white border-b">
                                            <img src="img/R.png" className="h-20 ml-3  " alt="Logo php " />
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                JMerise
                                            </td>


                                        </tr>
                                        <tr className="bg-white border-b">
                                            <img src="img/talend.png" className="h-20 ml-3  " alt="Logo talend " />
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                Talend
                                            </td>


                                        </tr>
                                       
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Competence