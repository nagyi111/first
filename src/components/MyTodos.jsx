import { useEffect, useState } from 'react';
import { FaRegTrashAlt } from "react-icons/fa";
import { Button } from '@heroui/react';
import { todosData } from './data';


export const MyTodos = () => {

    const [todos, setTodos] = useState(todosData);
    const [remaining, setRemaining] = useState(0);

    useEffect(() => {
        const count = todos.filter(({ done }) => !done).length;
        setRemaining(count);
    }, [todos]);


    const handleDelete = (id) => {
        setTodos(prev =>
            prev.filter(obj => obj.id !== id)
        );
    };


    const handleDone = (id) => {
        setTodos(prev =>
            prev.map(obj =>
                obj.id === id
                    ? {
                        ...obj,
                        done: !obj.done
                    }
                    : obj
            )
        );
    };


    const handleAdd = (descr) => {
        const newTodo = {
            id: Date.now(),
            descr,
            done: false
        };

        setTodos(prev => [...prev, newTodo]);
    };


    return (
        <div
            className="
                flex
                flex-col
                items-center
                bg-white
                p-6
                max-w-3xl
                mx-auto
                rounded-xl
                border
                shadow-lg
            "
        >

            <h2 className="text-2xl font-bold mb-5">
                My Todos
            </h2>


            <ul className="w-full space-y-3">

                {todos.map(({ id, descr, done }) => (

                    <li
                        key={id}
                        className="
                            flex
                            items-center
                            justify-between
                            bg-gray-100
                            p-3
                            rounded-lg
                        "
                    >

                        <div className="flex items-center gap-3">

                            <input
                                type="checkbox"
                                checked={done}
                                onChange={() => handleDone(id)}
                            />

                            <span
                                className={
                                    done
                                        ? "line-through text-gray-400"
                                        : ""
                                }
                            >
                                {descr}
                            </span>

                        </div>


                        <Button
                            isIconOnly
                            aria-label="Delete"
                            variant="danger"
                            onPress={() => handleDelete(id)}
                        >
                            <FaRegTrashAlt />
                        </Button>

                    </li>

                ))}

            </ul>

            <div>
                {remaining === 0
                    ? "Minden feladat elvégezve"
                    : `Elvégzetlen feladatok: ${remaining}`
                }
            </div>

        </div>
    );
};