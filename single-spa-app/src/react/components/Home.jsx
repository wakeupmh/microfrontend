import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
// import Chart from "components/Chart.jsx"
import Card from "components/Card.jsx"
export default class App extends React.Component {
    render() {
        return (
            <>
                <CssBaseline/>
                <Container>
                    <Typography variant="h4" align="center">
                        Hello from React 🤘
                    </Typography>
                    <Card/>
                    {/* <Chart/>  */}
                </Container>
                <CssBaseline/>
            </>
            
        );
    }
}