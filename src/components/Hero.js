// Hero.js
import myImage from '../myImage.png';

export default function Hero() {
    return (
        <section
            id="hero"
            className="px-10 w-full flex gap-12 flex-col lg:flex-row justify-center items-center align-center mt-40 mb-16 lg:mt-10 max-w-5xl mx-auto lg:gap-0 h-[80vh]"
            style={{ marginTop: "120px" }} // Add inline style for margin-top
        >
            <div className="flex-1">
                <img src={myImage} style={{ width: "350px", height: "470px" }}/>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center gap-5">
                <div>
                    <h2 className="text-center text-6xl font-bold">
                        Welcome to My Portfolio
                    </h2>
                </div>
                <p className="text-center text-2xl font-bold">Learn More About Me</p>
                <h4 className="text-center">
                    My name is Lisa Francis and I am an undergraduate studying Engineering Systems and Design with a focus track in Business Analytics and Operations Research at SUTD. I will be graduating in May 2024. Through my studies, I have developed a passion for problem-solving and technology. This website is a platform to showcase my projects.
                </h4>
            </div>
        </section>
    );
}
