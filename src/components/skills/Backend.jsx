import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaravel, faPhp, faJava, faPython } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faFileCode } from '@fortawesome/free-regular-svg-icons';

const Backend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Backend Development</h3>
            <div className="skills__box">
                <div className="skills__group">
                <div className="skills__data" style={{ marginRight: '1rem'}}>
                        <FontAwesomeIcon icon={faPhp} style={{ color: "#494a99", fontSize: '1.5rem' }} />
                        <div>
                            <h3 className="skills__name">PHP</h3>
                        </div>
                    </div>
                    <div className="skills__data">
                        <FontAwesomeIcon icon={faFileCode} style={{ color: "#EF4223", fontSize: '1.5rem' }} />
                        <div>
                            <h3 className="skills__name">CodeIgniter</h3>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className='bx bxl-nodejs' style={{ color: '#42b883', fontSize: '1.5rem' }}></i>
                        <div>
                            <h3 className="skills__name">Node</h3>
                        </div>
                    </div>
                    <div className="skills__data">
                        <FontAwesomeIcon icon={faJava} style={{ color: "#f89820", fontSize: '1.5rem' }} />
                        <div>
                            <h3 className="skills__name">Java</h3>
                        </div>
                    </div>
                </div>
                <div className="skills__group">
                  <div className="skills__data" style={{ marginLeft: '0.5rem' }}>
                        <FontAwesomeIcon icon={faFileCode} style={{ color: "#ed703c", fontSize: '1.8rem'}} />
                        <h3 className="skills__name">XML</h3>
                    </div>
               
                    <div className="skills__data">
                        <FontAwesomeIcon icon={faLaravel} style={{ color: "#e7570a", fontSize: '1.5rem' }} />
                        <div>
                            <h3 className="skills__name">Laravel</h3>
                        </div>
                    </div>
                    <div className="skills__data">
                        <FontAwesomeIcon icon={faDatabase} style={{ color: "#494a99", fontSize: '1.5rem' }} />
                        <div>
                            <h3 className="skills__name" style={{ marginLeft: '0.2rem' }}>MySQL</h3>
                        </div>
                    </div>
                    <div className="skills__data">
                        <FontAwesomeIcon icon={faPython} style={{ color: "#3776ab", fontSize: '1.5rem' }} />
                        <div>
                            <h3 className="skills__name">Python</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Backend;
