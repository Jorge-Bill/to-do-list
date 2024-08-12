"use client";

import { removeTodo, toggleTodo } from '@/app/store/slices/todo.slice';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/20/solid';

import { useDispatch } from "react-redux";

export default function Item({id, title, description, completed, ...props}) {
    const dispatch = useDispatch()
    
    return (
        <li key={id} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow p-2" {...props}>
            <div className="flex w-full items-center justify-between space-x-6 p-6">
                <div className="flex-1 truncate">
                <div className="flex items-center space-x-3">
                    <h3 className="truncate text-sm font-medium text-gray-900">{title}</h3>
                </div>
                <p className="mt-1 truncate text-sm text-gray-500">{description}</p>
                </div>
            </div>
            <div>
                <div className="-mt-px flex divide-x divide-gray-200">
                <div className="flex w-0 flex-1">
                    <button
                    onClick={() => dispatch(removeTodo(id))}
                    className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                    >
                    <XCircleIcon aria-hidden="true" className="h-5 w-5 text-red-400" />
                    Delete
                    </button>
                </div>
                {!completed && <div className="-ml-px flex w-0 flex-1">
                        <button
                        onClick={() => dispatch(toggleTodo(id))}
                        className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                        >
                        <CheckCircleIcon aria-hidden="true" className="h-5 w-5 text-green-400" />
                        Complete
                        </button>
                    </div>}
                </div>
            </div>
        </li>
    )
}