import React, {useCallback, useState} from 'react';
import TypeWriter from '../../images/ic-typewriter.png';
import '../../styles.css';
import {Posts} from '../../types';

const Add: React.FC = () => {
    const [posts, setPosts] = useState<Posts>({
        id: '',
        date: '',
        title: '',
        message: '',
    });

    const inputChange = useCallback((event: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
        const randomId = `${Math.random()}`;
        const date = new Date().toISOString();
        const {name, value} = event.target;
        setPosts((prevState) => ({
            ...prevState,
            id: randomId,
            date: date,
            [name]: value,
        }));
    }, []);


    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (posts.title !== '' && posts.message !== '') {
            setPosts({id: '', title: '', message: '', date: ''});
        } else {
            alert(`Title and message may not be empty. Set value!`);
        }
        console.log(posts);
    };

    return (
        <div className="mt-5 d-flex justify-content-center align-items-center">
            <form onSubmit={onFormSubmit} className="w-25 bg-light p-3 rounded-3">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="w-50 pb-3 mb-5 text-center border-2 border-bottom border-secondary">
                        <img src={TypeWriter} alt="Typywriter icon"/>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="title-input" className="form-label">Add title for your message</label>
                    <input
                        name="title"
                        onChange={inputChange}
                        value={posts.title}
                        type="text"
                        className="form-control"
                        id="title-input"
                        placeholder="Example: Meeting at the business center" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="input-message" className="form-label">Input your message</label>
                    <textarea
                        value={posts.message}
                        name="message"
                        onChange={inputChange}
                        className="form-control"
                        id="input-message"
                        placeholder='Example:"Today I had a productive meeting with our partners from Europe"'/>
                </div>
                <button type="submit" className="btn btn-success">Save</button>
            </form>
        </div>
    );
};

export default Add;