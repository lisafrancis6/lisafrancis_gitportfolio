// Projects.js
export default function Projects() {
    return (
        <section id="projects"
                 className="my-20 w-full flex flex-col gap-10 align-center max-w-5xl mx-auto">
            <h2 className="text-5xl font-bold text-center mt-10">
                My Projects
            </h2>
            <p className="text-center">
                During my time at SUTD, I worked on several projects as part of my curriculum. <br />
                Click on the project title for a demonstration.
            </p>
            <div className="grid grid-cols-2 gap-5">
                <div className="p-10 bg-white flex flex-col justify-center items-center rounded shadow transition hover:shadow-xl hover:scale-[102%]">
                    <a 
                        className="w-80 h-55" href="/#">
                    </a>
                    <div className="flex flex-col align-center gap-4 justify-center flex-1 mt-4">
                        <h2 className="font-bold text-3xl text-center">
                            <a className="hover:underline" href="https://capstoneshowcase.sutd.edu.sg/2024/project/proj-16-skh_ai-predictor-for-ot-assets/" target="_blank" rel="noopener noreferrer">
                                SurgiBot
                            </a>
                        </h2>
                        <p>
                        This is a web application built for Sengkang General Hospital (SKH) to recommend Operating Theatre (OT) assets for surgeries. Python was utilized for data manipulation and machine learning. The web application was built using React and Express.
                        </p>
                    </div>
                </div>

            <div className="p-10 bg-white flex flex-col justify-center items-center rounded shadow transition hover:shadow-xl hover:scale-[102%]">
                    <a 
                        className="w-80 h-55" href="/#">
                    </a>
                    <div className="flex flex-col align-center gap-4 justify-center flex-1 mt-4">
                        <h2 className="font-bold text-3xl text-center">
                            <a className="hover:underline" href="https://www.figma.com/proto/YA2b3hWQe0WoZm9tnVP4I5/Empathy-BPD-Game-Project?page-id=969%3A2855&type=design&node-id=969-2862&viewport=388%2C484%2C0.05&t=myw9K3murIYUXcOs-1&scaling=scale-down-width" target="_blank" rel="noopener noreferrer">
                                In the Mind's Eye: Living with BPD
                            </a>
                        </h2>
                        <p>
                        This is an interactive game designed using Figma. It immerses users into the
experiences of individuals living with Borderline Personality Disorder (BPD).
The aim is to provide a
firsthand perspective of the challenges faced by
individuals with BPD, thereby fostering empathy and awareness.
                        </p>
                    </div>
                </div>

                <div className="p-10 bg-white flex flex-col justify-center items-center rounded shadow transition hover:shadow-xl hover:scale-[102%]">
                    <a 
                        className="w-80 h-55" href="/#">
                    </a>
                    <div className="flex flex-col align-center gap-4 justify-center flex-1 mt-4">
                        <h2 className="font-bold text-3xl text-center">
                            <a className="hover:underline" href="https://www.youtube.com/watch?v=2NnWUAK-cP4" target="_blank" rel="noopener noreferrer">
                                Santa's Apparel
                            </a>
                        </h2>
                        <p>
                        The simulation focuses on a retail store, emphasizing customer satisfaction and inventory management. Inventory control is vital to meet demand effectively, minimize costs and ensure customer needs are fulfilled without surplus or shortage of goods.
                        </p>
                    </div>
                </div>

                <div className="p-10 bg-white flex flex-col justify-center items-center rounded shadow transition hover:shadow-xl hover:scale-[102%]">

                    <div className="flex flex-col align-center gap-4 justify-center flex-1 mt-4">
                        <h2 className="font-bold text-3xl text-center">
                            <a className="hover:underline" href="https://ab541fe6-e02d-43c6-8f30-989ea0dd0146.filesusr.com/ugd/d85cd2_718d1193e54d4815b36950a3ad9b6c85.pdf" target="_blank" rel="noopener noreferrer">
                                Fashion Trend Analysis
                            </a>
                        </h2>
                        <p>
                        In my course on Data and Business Analytics, I worked on a project that involved analyzing data for a retail company and providing insights to improve their sales. Tools such as Tableau, SQLite, Excel and R were used to generate the insights.
                        </p>
                    </div>
                </div>

                <div className="p-10 bg-white flex flex-col justify-center items-center rounded shadow transition hover:shadow-xl hover:scale-[102%]">
                    {/* Insert your link and image here */}
                    <div className="flex flex-col align-center gap-4 justify-center flex-1 mt-4">
                        <h2 className="font-bold text-3xl text-center">
                            <a className="hover:underline" href="https://www.youtube.com/watch?v=DMzu6fjB4Xw" target="_blank" rel="noopener noreferrer">
                                COVID-19 Prediction Model
                            </a>
                        </h2>
                        <p>
                        The project involved utilizing Excel and Python to develop predictive models for COVID-19 outcomes. Regression was used to forecast the total number of COVID-19 deaths and the likelihood of patients requiring ICU treatment upon triage based on various parameters.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
