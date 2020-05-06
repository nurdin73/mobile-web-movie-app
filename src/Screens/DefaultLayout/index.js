import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import routes from '../../routes'
// import Navs from '../../Components/Navs'
// import Headers from '../../Components/Headers'

export class DefaultLayout extends Component {
  render() {
    return (
      <Fragment>
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
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout)
