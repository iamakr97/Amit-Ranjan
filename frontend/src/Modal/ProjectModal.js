import React from 'react';
import './ProjectModal.css';
import ReactDOM from 'react-dom';
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { clearProjectModalData } from '../redux/ProjectModalSlice';
import { RxDotFilled } from "react-icons/rx";

function ProjectModal({ projectModal, setProjectModal }) {
    const { project } = useSelector(store => store.projectModal);
    const dispatch = useDispatch();
    if (projectModal === false) return null;
    function projectModalCrossHandler() {
        dispatch(clearProjectModalData());
        setProjectModal(false);
    }
    return ReactDOM.createPortal(
        <div className='project-modal'>
            <div className='modal-container'>
                <div className="modal-heading">
                    <h2 className="modal-heading">{project.title}</h2>
                    <button onClick={projectModalCrossHandler}><RxCross2 /></button>
                </div>
                <div className="modal-project-desc">
                    {
                        project.modalDescription.map((desc) => {
                            return <div className='modal-project-point'>
                                <span><RxDotFilled /></span>
                                <p>{desc}</p>
                            </div>
                        })
                    }
                </div>
                {project.loginInfo &&
                    <div className="login-info">
                        <h4>Use Below ID and Password for a Better User Experience</h4>
                        <table id='modal-table'>
                            <tr>
                                <td>Username : </td>
                                <td>{project.loginInfo.username}</td>
                            </tr>
                            <tr>
                                <td>Password : </td>
                                <td>{project.loginInfo.password}</td>
                            </tr>
                        </table>
                    </div>
                }
                <div className='project-btn-container'>
                    <a href={project.Live_Link} target='_blank'>
                        <button className='project-btn live-btn'>View Live App</button>
                    </a>
                    <a href={project.github} target='_blank'>
                        <button className='project-btn git-btn'>View Code </button>
                    </a>
                </div>
            </div>
        </div>
        ,
        document.getElementById('modal')
    );
}

export default ProjectModal;