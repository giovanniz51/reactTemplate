import React from "react";
import {Bootstrap, Grid, Row, Col, PageHeader} from 'react-bootstrap';

import GianniSlider from "../Slider/gianniSlider";

const Home = () => {
    return(
        <div>
        <GianniSlider />
        <Grid fluid={false}>        
            <Row>
                <Col xs={12}>
                    <PageHeader>
                        Made with React <small>Template by zito-webdesign</small>
                    </PageHeader>
                </Col>
            </Row>
            <Row style={{marginBottom: "30px"}}>
                <Col xs={12}>
                    <img style={{margin: "0 auto"}} width="200px"
                    src="https://ugross.gallerycdn.vsassets.io/extensions/ugross/vscode-react-snippets/1.3.0/1519481679046/Microsoft.VisualStudio.Services.Icons.Default" 
                    className="img-responsive"
                    />
                </Col>
            </Row>
        </Grid>
        </div>
    )
}

export default Home;