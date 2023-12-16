import React, { useCallback, useMemo } from 'react';

const ItemList = () => {
    const items = [
        {
            title: 'One piece is best!',
        },
        {
            title: 'then goes Jujutsu kaisen!',
        },
        {
            title: '3rtd is Naruto!',
        },
        {
            title: 'And Kagurabachi!',
        },
    ];
    const handleItemClick = useCallback((index) => {
        console.log(`Clicked on item with index: ${index}`);
    }, []);

    const filteredItems = useMemo(() => 
    items.filter((item, index) => index % 2 === 0)
    ,[items]);

    return (
        <div>
            <p>Filtered List:</p>
            <ul>
                {filteredItems.map((item, index) => (
                    <li key={index}>
                        <button onClick={() => handleItemClick(index)}>{item.title}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
