import React, {Component} from 'react';
import Hosting from "./Hosting";

class Hostings extends Component {
    render() {
        return (
            <div className="container-fluid" data-aos="flip-right">
                <div className="container">
                    <div className="row">
                        <Hosting icongoi="fa-paper-plane" tengoi="Basic" giahost="59000" bt="15GB" db="1" email="5" uptime="90%" hotro="fa-times-circle"/>
                        <Hosting icongoi="fa-rocket" tengoi="Pro" giahost="359000" bt="Không giới hạn" db="Không giới hạn" email="Không giới hạn" uptime="99%" hotro="fa-check-circle"/>
                        <Hosting icongoi="fa-plane-departure" tengoi="Medium" giahost="159000" bt="Không giới hạn" db="3" email="20" uptime="99%" hotro="fa-check-circle"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hostings;