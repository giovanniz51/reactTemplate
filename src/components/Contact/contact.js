import React from "react";
import {Bootstrap, Grid, Row, Col, PageHeader} from 'react-bootstrap';

const Contact = () => {
    return(
        <div>
        <Grid fluid={false}>        
            <Row>
                <Col xs={12}>
                    <PageHeader>
                        Contact
                    </PageHeader>;
                </Col>
            </Row>
        </Grid>
        </div>
    )
}

export default Contact;