import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import routes from '../../routes'
import { Container } from '@material-ui/core'
import Navs from '../../Components/Navs'
import Headers from '../../Components/Headers'

export class DefaultLayout extends Component {
  render() {
    return (
      <Fragment>
      	<Headers />
      	<Container>
      		<Switch>
            {routes.map((route, idx) => {
              return route.component ? (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                    <route.component {...props} />
                  )} />
              ) : (null);
            })}
          </Switch>
      	</Container>
        <Navs />
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout)
