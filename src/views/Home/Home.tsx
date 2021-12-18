import AddHabit from "../../gettingShitTogether/AddHabit";
import AppLoading from "../AppLoading/AppLoading";
import Error from "../../gettingShitTogether/Error";
import Habit from "../../gettingShitTogether/Habit";
import HabitModel from "../../models/Habit";
import { useAuth0, } from "@auth0/auth0-react";
import React, { FC, } from "react";
import { gql, useQuery, } from "@apollo/client";

export const HABITS_QUERY = gql`
  query HABITS_QUERY {
    habits {
      id
      description
      points
      entries {
        id
        notes
        date
        completed
      }
    }
  }
`;

const Home: FC = () => {
	const {
		isLoading: authLoading,
		isAuthenticated,
		loginWithRedirect,
		logout,
		user,
	} = useAuth0();

	const { data, loading, error, } = useQuery(HABITS_QUERY);

	if (loading || authLoading) {
		return <AppLoading />;
	}

	if (error) {
		return <Error error={error} />;
	}

	return (
	
		<div>
			<div>
				<h2 style={{ marginBottom: "10px", }}>
							Habit Tracker{" "}
					<span role={"img"} aria-label={"muscle emoji"}>
								💪
					</span>
				</h2>
	
			</div>
			<ul style={{
				margin:             "10px",
				paddingInlineStart: "15px",
			}}>
				{data.habits.map((habit: HabitModel) => {
					return <Habit key={habit.id} habit={habit} />;
				})}
			</ul>
		</div>
	);
};

export default Home;
