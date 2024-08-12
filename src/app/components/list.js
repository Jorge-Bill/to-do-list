"use client";
import Item from '@/app/components/item';
import { AnimatePresence } from "framer-motion";

const List = ({ todo = [], status = false, ...props }) => {
    return (
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" {...props}>
            {todo
            .filter((item) => item.completed === status)
            .map(({id, title, description, completed}) => (
                <AnimatePresence key={id}>
                    <Item id={id} title={title} description={description} completed={completed} />
                </AnimatePresence>
            ))}
        </ul>
    )
}

export default List