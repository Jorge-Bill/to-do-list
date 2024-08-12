'use client'
import { updateState } from '@/app/store/slices/modal.slice';
import { AddTodo } from '@/app/store/slices/todo.slice';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

export default function Add() {
    const dispatch = useDispatch()
    const { open } = useSelector((state) => state.modal)
    const [title, setTitle] = useState('')
    const [description, setDesc] = useState('')

    const handleTask = () => {
        if (title !== '') {
            dispatch(
                AddTodo({
                    id: Math.floor(Math.random() * 1000),
                    title: title,
                    description: description,
                    completed: false,
                })
            )
            dispatch(updateState({ open: false }))
            setTitle('')
            setDesc('')
        }
    }

    return (
        <Dialog open={open} onClose={() => dispatch(updateState({ open: false }))} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <DialogPanel
                    transition
                    className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-sm sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                >
                    <div>
                    <div className="mt-3 text-center sm:mt-5">
                        <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        Add new task
                        </DialogTitle>
                        <div className="mt-2">

                        <div>
                            <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                                Title
                            </label>
                            <div className="mt-2">
                                <input
                                    id="title"
                                    name="title"
                                    type="text"
                                    defaultValue={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    required
                                />
                            </div>
                            <div className="mt-2">
                                <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                                    Description
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        id="description"
                                        name="description"
                                        defaultValue={description}
                                        onChange={(e) => setDesc(e.target.value)}
                                        rows={4}
                                        className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>

                        </div>
                    </div>
                    </div>
                    <div className="mt-5 sm:mt-6">
                    <button
                        type="button"
                        onClick={handleTask}
                        className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Confirm
                    </button>
                    </div>
                </DialogPanel>
            </div>
        </div>
        </Dialog>
    )
}
