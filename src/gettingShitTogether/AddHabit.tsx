
import { HABITS_QUERY, } from "../views/Home/Home";
import React, { useRef, useState, } from "react";
import { gql, useMutation, } from "@apollo/client";

const ADD_HABIT_MUTATION = gql`
  mutation ADD_HABIT_MUTATION($input: NewHabitInput) {
    createHabit(input: $input) {
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

function AddHabit() {
	const [ description, setDescription, ] = useState<string | null>(null);

	const [ createHabit, { error: mutationError, loading, }, ] = useMutation(
		ADD_HABIT_MUTATION,
		{
			// I'm using refetchQueries here since it's a protected mutation,
			// but I'm open to suggestions here.
			refetchQueries: [ { query: HABITS_QUERY, }, ],
			// Here's how you'd do it by updating the cache:
			// update(cache, { data: { createHabit } }) {
			//   const { habits } = cache.readQuery({ query: HABITS_QUERY });
			//   cache.writeQuery({
			//     query: HABITS_QUERY,
			//     data: { habits: habits.concat([createHabit]) },
			//   });
			// },
		}
	);

	const descriptionInput = useRef<HTMLInputElement>(null);

	const handleChange = () => {
		if (descriptionInput.current && descriptionInput.current){
			setDescription( descriptionInput.current.value);
		}
	};

	const onEnterPress = (e: { keyCode: number; }) => {
		if (e.keyCode === 13 && description) {
			addHabit(e);
		}
	};

	const addHabit = (e: { keyCode?: number; preventDefault?: any; }) => {
		e.preventDefault();

		createHabit({ variables: { input: { description, }, }, });

		if (descriptionInput.current && descriptionInput.current){
			descriptionInput.current.value = "";
		}
    
		setDescription("");
	};
	
	return (
		<>
			{mutationError && <p>Error! {mutationError.message}</p>}
			<input
				type={"text"}
				placeholder={"What are you gonna do?"}
				name={"description"}
				ref={descriptionInput}
				onChange={handleChange}
				onKeyDown={onEnterPress}
			/>
			<button
				type={"button"}
				disabled={!description || loading}
				onClick={addHabit}
			>
        Add{loading ? "ing..." : ""}
			</button>
		</>
	);
}

export default AddHabit;
