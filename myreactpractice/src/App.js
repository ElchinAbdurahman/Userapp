import React, { Component } from 'react'
import Users from './components/Users'
import Navi from './components/Navbar'
import AddUser from './components/AddUser'
import UpdateUser from './components/UptadeUser'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'
import { Row, Col } from 'reactstrap'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'




library.add(faTrash)



export default class App extends Component {



  render() {


    return (


      <Router>
        <div>

          <Navi />

          <Switch>
            <Route exact path="/" component={Users} />
            <Route exact path="/add" component={AddUser} />
            <Route exact path="/edit/:id" component={UpdateUser} />
            <Route component={NotFound} />
          </Switch>



          <Footer />

        </div>
      </Router>





    )
  }
}




