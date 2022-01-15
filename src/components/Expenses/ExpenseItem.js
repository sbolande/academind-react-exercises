import {useState} from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);
    const clickHandler = () => {
        setTitle('Updated!');
        console.log(title);
    };

    return (
        <Card className='expense-item'>
            <div className='expense-item__header'>
                <ExpenseDate date={props.date} />
                <div className='expense-item__description'>
                    <h2>{title}</h2>
                    <div className='expense-item__price'>${props.amount}</div>
                </div>
                <button onClick={clickHandler}>Change Title</button>
            </div>
            <div className='expense-item__details'>
                <p>{props.details}</p>
            </div>
        </Card>
    );
}

export default ExpenseItem;