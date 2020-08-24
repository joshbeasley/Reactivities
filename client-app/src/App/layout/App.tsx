import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";
import NavBar from "../../Features/nav/NavBar";
import ActivityDashboard from "../../Features/activities/dashboard/ActivityDashboard";
import { observer } from "mobx-react-lite";
import { Route, withRouter, RouteComponentProps } from "react-router-dom";
import { HomePage } from "../../Features/home/HomePage";
import ActivityForm from "../../Features/activities/form/ActivityForm";
import ActivityDetails from "../../Features/activities/details/ActivityDetails";

const App: React.FC<RouteComponentProps> = ({ location }) => {
	return (
		<Fragment>
			<Route exact path="/" component={HomePage} />
			<Route
				path={"/(.+)"}
				render={() => (
					<Fragment>
						<NavBar />
						<Container style={{ marginTop: "7em" }}>
							<Route
								exact
								path="/activities"
								component={ActivityDashboard}
							/>
							<Route
								path="/activities/:id"
								component={ActivityDetails}
							/>
							<Route
								key={location.key}
								path={["/createActivity", "/manage/:id"]}
								component={ActivityForm}
							/>
						</Container>
					</Fragment>
				)}
			/>
		</Fragment>
	);
};

export default withRouter(observer(App));
