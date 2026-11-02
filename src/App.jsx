// import { useState } from "react";
// import { X } from "lucide-react";

// const App = () => {
//   const [title, setTitle] = useState("");
//   const [details, setDetails] = useState("");

//   const [task, setTask] = useState([]);

//   const submitHandler = (e) => {
//     e.preventDefault();

//     const copyTask = [...task];

//     copyTask.push({ title, details })

//     setTask(copyTask)

//     setTitle("")
//     setDetails("")
//   };

//   const deleteNote = (idx) => {
//     const deleteTask = [...task];

//     deleteTask.splice(idx, 1)
//     setTask(deleteTask)
//   }

//   return (
//     <div className="h-screen bg-black lg:flex text-white">
//       <form
//         onSubmit={submitHandler}
//         className="flex lg:w-1/2 items-start flex-col gap-4 p-10"
//       >
//         <h1 className="text-4xl font-bold">Add Notes</h1>
//         <input
//           type="text"
//           placeholder="Enter Notes Heading"
//           className="px-5 w-full py-2 font-medium border-2 rounded outline-none"
//           value={title}
//           onChange={(e) => {
//             setTitle(e.target.value);
//           }}
//         />
//         <textarea
//           type="text"
//           placeholder="Write Details Here"
//           className="px-5 w-full py-2 h-40 font-medium border-2 rounded outline-none"
//           value={details}
//           onChange={(e) => {
//             setDetails(e.target.value);
//           }}
//         />
//         <button className="bg-white text-black font-medium px-5 py-2 w-full rounded-full hover:bg-gray-500 focus:outline-2  focus:outline-gray-500 active:bg-gray-700">
//           Add Note
//         </button>
//       </form>

//       <div className="lg:w-1/2 lg:border-l-4 lg:border-l-gray-900 p-10">
//         <h1 className="text-4xl font-bold">Recent Notes</h1>
//         <div className="flex flex-wrap items-start justify-start mt-5 gap-5 h-[90%] overflow-auto">
//           {task.map(function (elem, idx) {
//             return (
//               <div
//                 key={idx}
//                 className="relative h-52 w-40 rounded-2xl bg-cover bg-white text-black p-4 bg-[url(https://www.onlygfx.com/wp-content/uploads/2022/03/realistic-notebook-notepage-paper-background-4-cover.jpg)]"
//               >
//                 <h2>
//                   <X onClick={() => {deleteNote(idx)}} className="absolute top-4 right-4 cursor-pointer hover:bg-red-600 active:scale-150 bg-red-400  rounded-full" size={20} strokeWidth={3} />
//                 </h2>
//                 <h3 className="mt-4 leading-tight text-lg font-bold">
//                   {elem.title}
//                 </h3>
//                 <p className="leading-tight text-sm text-gray-500 font-medium mt-3">
//                   {elem.details}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

import { useState } from "react";
import { X } from "lucide-react";

const App = () => {
  // State for note title
  const [title, setTitle] = useState("");

  // State for note details
  const [details, setDetails] = useState("");

  // Stores all notes
  const [task, setTask] = useState([]);

  // Handles form submission
  const submitHandler = (e) => {
    e.preventDefault();

    // Create a copy of the current notes
    const copyTask = [...task];

    // Add the new note to the copy
    copyTask.push({ title, details });

    // Update the notes state
    setTask(copyTask);

    // Clear the input fields
    setTitle("");
    setDetails("");
  };

  // Deletes a note using its index
  const deleteNote = (idx) => {
    // Create a copy of the current notes
    const deleteTask = [...task];

    // Remove one note at the given index
    deleteTask.splice(idx, 1);

    // Update the notes state
    setTask(deleteTask);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col lg:flex-row">
      <form
        onSubmit={submitHandler}
        className="flex lg:w-1/2 items-start flex-col gap-4 p-10"
      >
        <h1 className="text-4xl font-bold">Add Notes</h1>

        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 w-full py-2 font-medium border-2 rounded outline-none"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <textarea
          type="text"
          placeholder="Write Details Here"
          className="px-5 w-full py-2 h-40 font-medium border-2 rounded outline-none"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />

        <button className="bg-white text-black font-medium px-5 py-2 w-full rounded-full hover:bg-gray-500 focus:outline-2 focus:outline-gray-500 active:bg-gray-700">
          Add Note
        </button>
      </form>

      <div className="lg:w-1/2 lg:border-l-4 lg:border-l-gray-900 p-10">
        <h1 className="text-4xl font-bold">Recent Notes</h1>

        <div className="flex flex-wrap items-start justify-start mt-5 gap-5 h-[90%] overflow-auto">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="relative h-52 w-40 rounded-2xl bg-cover bg-white text-black p-4 bg-[url(https://www.onlygfx.com/wp-content/uploads/2022/03/realistic-notebook-notepage-paper-background-4-cover.jpg)]"
              >
                <h2>
                  <X
                    onClick={() => {
                      deleteNote(idx);
                    }}
                    className="absolute top-4 right-4 cursor-pointer hover:bg-red-600 active:scale-150 bg-red-400 rounded-full"
                    size={20}
                    strokeWidth={3}
                  />
                </h2>

                <h3 className="mt-4 leading-tight text-lg font-bold">
                  {elem.title}
                </h3>

                <p className="leading-tight text-sm text-gray-500 font-medium mt-3">
                  {elem.details}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;