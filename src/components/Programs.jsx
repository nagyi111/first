import React, { useState } from 'react';
import { programs } from './data';
import { Card } from '@heroui/react';
import { ProgramsCateg } from './programsCateg';

export const Programs = () => {

    const [selectedPrograms, setSelectedPrograms] = useState(programs);

    return (
        <div
            className="
                max-w-6xl
                mx-auto
                mt-6
                p-6
                border
                border-gray-400
                rounded-xl
            "
        >

            <h2 className="text-2xl font-bold text-center mb-6">
                Programs
            </h2>

            <ProgramsCateg setSelectedPrograms={setSelectedPrograms} />

            <div className="flex flex-wrap justify-center gap-4">

                {selectedPrograms.map(({
                    id,
                    title,
                    category,
                    price,
                    participants,
                    capacity,
                    indoor
                }) => (

                    <Card
                        key={id}
                        className="w-[320px] border border-gray-300 rounded-xl"
                        variant="default"
                    >

                        <Card.Header>

                            <Card.Title>
                                {title}
                            </Card.Title>

                            <Card.Description>
                                {category}
                            </Card.Description>

                        </Card.Header>

                        <Card.Content>

                            <p>
                                Ár: {price} Ft
                            </p>

                            <p>
                                Résztvevők: {participants}/{capacity}
                            </p>

                            <p>
                                {indoor ? 'Beltéri' : 'Kültéri'}
                            </p>

                        </Card.Content>

                    </Card>

                ))}

            </div>

        </div>
    );
};