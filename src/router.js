import React from "react"
import { Switch, Route } from "react-router-dom"

import SearchResults from "./components/SearchResults/SearchResults"

export default (
  <Switch>
    <Route exact path="/" component={SearchResults} />
  </Switch>
)