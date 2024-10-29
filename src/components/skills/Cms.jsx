import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJoomla, faWordpress, faJsSquare } from '@fortawesome/free-brands-svg-icons'; // Ensure correct imports

const Cms = () => {
    return (
        <div className="skills__content">
            <h3 className="h3 skills__title">CMS Development</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <FontAwesomeIcon icon={faJoomla} style={{ color: "#f0662a", fontSize: '2.1rem', marginLeft: '1rem', marginRight: '1.5rem' }} />
                        <h3 className="skills__name">Joomla</h3>
                    </div>
                    <div className="skills__data">
                        <FontAwesomeIcon icon={faWordpress} style={{ color: "#21759b", fontSize: '2.1rem', marginLeft: '1rem', marginRight: '1.5rem' }} />
                        <h3 className="skills__name">WordPress</h3>
                    </div>
                    <div className="skills__data">
                        <FontAwesomeIcon icon={faJsSquare} style={{ color: "#8ed6fb", fontSize: '2.1rem', marginLeft: '1rem', marginRight: '1.5rem' }} />
                        <h3 className="skills__name">Webpack</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cms;
