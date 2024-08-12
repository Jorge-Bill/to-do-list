"use client";
import { updateState } from '@/app/store/slices/modal.slice';
import { useDispatch, useSelector } from "react-redux";
import Add from './components/add';
import Divider from './components/divider';
import List from "./components/list";


export default function Home() {
  const dispatch = useDispatch()
  const { todo } = useSelector((state) => state)

  return (
    <>
      <Add />
      <main className="bg-gray-50 px-6 py-24 sm:py-32 lg:px-8 min-h-screen w-full">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">To Do List</h2>
          <button 
            className="rounded-md mt-4 bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => dispatch(updateState({ open: true }))}>
              Add Task
          </button>
        </div> 

       {todo.length > 0 && 
        <div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <Divider title={'To Do Tasks'} />
            <List todo={todo} status={false} />
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <Divider title={'Completed Tasks'} />
            <List todo={todo} status={true} />
          </div>
        </div>}
      </main>
    </>
  );
}
