import React from "react";

const Frontend = () => {
    return (
        <div className="skills__content">
            <h3 className="h3 skills__title">Frontend Development</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className='bx bxl-html5' style={{ color: '#f06529', fontSize: '1.5rem' }}></i>
                        <div>
                            <h3 className="skills__name">HTML</h3>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i class='bx bxl-bootstrap' style={{ color:'#59287a', fontSize: '1.5rem' }}></i>
                        <div>
                            <h3 className="skills__name">Bootstrap</h3>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i class='bx bxl-javascript' style={{ color: '#f0db4f', fontSize: '1.5rem' }}></i>
                        <div>
                            <h3 className="skills__name">JavaScript</h3>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i class='bx bxl-react' style={{ color:'#37afe4', fontSize: '1.5rem' }}></i>
                        <div>
                            <h3 className="skills__name">React</h3>
                        </div>
                    </div>
                </div>
                <div className="skills__group">
                   <div className="skills__data">
                        <i class='bx bxl-css3' style={{ color: '#264de4', fontSize: '1.5rem' }}></i>
                        <div>
                            <h3 className="skills__name">CSS</h3>
                        </div>
                    </div> 
                
                    <div className="skills__data">
                        <i class='bx bxl-tailwind-css' style={{ color: '#38B2AC', fontSize: '1.5rem' }}></i>
                        <div>
                            <h3 className="skills__name">Tailwind</h3>
                        </div>
                    </div>
                   
                    <div className="skills__data">
                        <i class='bx bxl-vuejs' style={{ color:'#42b883', fontSize: '1.5rem' }}></i>
                        <div>
                            <h3 className="skills__name">Vue</h3>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i class='bx bxl-angular' style={{ color: '#dd1b16', fontSize: '1.5rem' }}></i>
                        <div>
                            <h3 className="skills__name">Angular</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frontend;
