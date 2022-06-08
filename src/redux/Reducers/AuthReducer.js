
const initState = {
    token: 'mairaj',
    catItems: [
        {
            id: 1,
            title: 'Pizza',
            img: 'https://cdn-icons-png.flaticon.com/512/1404/1404945.png'
        },
        {
            id: 2,
            title: 'Burger',
            img: 'https://cdn5.vectorstock.com/i/1000x1000/90/49/burger-icon-fastfood-isolated-sweet-food-vector-20979049.jpg'
        },
        {
            id: 3,
            title: 'Tacos',
            img: 'https://cdn-icons-png.flaticon.com/512/4062/4062916.png'
        },
        {
            id: 4,
            title: 'Drink',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUpiNnAck-i0itk4eknoAJT-bTHFwrQh1ChA&usqp=CAU'
        },
        {
            id: 5,
            title: 'Fries',
            img: 'https://cdn-icons-png.flaticon.com/512/1057/1057356.png'
        },
        {
            id: 6,
            title: 'Top',
            img: 'https://cdn-icons-png.flaticon.com/512/1404/1404945.png'
        },
        {
            id: 7,
            title: 'Pizza',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUpiNnAck-i0itk4eknoAJT-bTHFwrQh1ChA&usqp=CAU'
        },
        {
            id: 8,
            title: 'Drink',
            img: 'https://cdn-icons-png.flaticon.com/512/4062/4062916.png'
        },
    ]
}

export const authReducer = (state = initState, action) => {
    console.log(action.payload)
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                token: '4567'
            }
        case 'ADD':
            return {
                ...state,
                catItems: [...state.catItems, action.payload]
            }
        default:
            return state;
    }
}