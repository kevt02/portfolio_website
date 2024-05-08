import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";
import * as SiIcons from "react-icons/si";

function Skills() {
    return (
        <div className="skills">
            <h2>Skills</h2>

            <ul>
                <h3>Languages</h3>
                <li><FaIcons.FaJava /></li>
                <li><IoIcons.IoLogoJavascript /></li>
                <li><FaIcons.FaHtml5 /></li>
                <li><FaIcons.FaCss3Alt /></li>
                <li><BsIcons.BsFiletypeSql /></li>
                <li><BsIcons.BsFiletypePhp /></li>
                <li><SiIcons.SiGnubash /></li>
                <h3>Libraries and Frameworks</h3>
                <li><FaIcons.FaReact /></li>
                <li><FaIcons.FaNodeJs /></li>
                <li><SiIcons.SiJunit5 /></li>
                <h3>Developer Tools</h3>
                <li><FaIcons.FaAws /></li>
                <li><FaIcons.FaGoogle /></li>
                <li><FaIcons.FaGithub /></li>
                <li><SiIcons.SiTableau /></li>
                <li><SiIcons.SiMicrosoftaccess /></li>
                <li><SiIcons.SiMariadb /></li>
                <li><FaIcons.FaLinux /></li>

            </ul>
        </div>
    )
}

export default Skills