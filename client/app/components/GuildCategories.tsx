'use client';

import React from 'react';

import ErrorComponent from './ErrorComponent';
import FormTypes from './FormTypes';

import { useGuildCateoriesManager } from '@discord-dashboard/react/dist/GuildCategoriesManager';

const GuildsCategories: React.FC = () => {
    const categories = useGuildCateoriesManager();

    if (categories.loading) return <>loading</>;

    if (categories.error) return <ErrorComponent error={categories.error} />;

    return (
        <>
            <div>
                <ul className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8">
                    {categories.data?.map((category) => (
                        <li
                            key={category.id}
                            className="bg-gray-50 col-span-1 flex flex-col divide-y divide-gray-500 rounded-lg bg-white text-center shadow h-200 hover:bg-gray-200"
                        >
                            <a
                                href={`/dashboard/guild/${categories.guildId}/${category.id}`}
                            >
                                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-xl p-32">
                                    {category.id} category
                                </h1>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default GuildsCategories;
