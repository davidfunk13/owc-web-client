import React from "react";

function Habit({ habit, }:any) {
	return (
		<li>
			{`${habit.description} (${habit.points} points)`}
			<ul>
				{habit.entries &&
          habit.entries.map((entry: { date: string | number | Date; completed: any; id: React.Key | null | undefined; notes: any; }) => {
          	const date = new Date(entry.date).toLocaleDateString();

          	const completed = entry.completed ? "✅" : "😑";
          	
          	return (
          		<li key={entry.id}>{`${date}: ${entry.notes} ${completed}`}</li>
          	);
          })}
			</ul>
		</li>
	);
}

export default Habit;
