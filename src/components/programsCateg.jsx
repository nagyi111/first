import React from 'react';
import { TagGroup, Tag } from '@heroui/react';
import { programs } from './data';
import { getCategories, getPrograms } from './utils';

export const ProgramsCateg = ({ setSelectedPrograms }) => {

    const categories = getCategories(programs);

    return (
        <div className="flex flex-col items-center">

            <h3>Kategóriák</h3>

            <TagGroup aria-label="Tags" selectionMode="single">
                <TagGroup.List>

                    {categories.map((item, index) =>
                        <Tag
                            id={item}
                            key={index}
                            onClick={() => setSelectedPrograms(getPrograms(item))}
                        >
                            {item}
                        </Tag>
                    )}

                </TagGroup.List>
            </TagGroup>

        </div>
    );
};

export default ProgramsCateg;