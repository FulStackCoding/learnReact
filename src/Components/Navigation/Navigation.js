import * as React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './Navigation.css';

export default function Navigation() {
    let navigate = useNavigate();
    return (
        <>
            <h1> Navigation In React </h1>
            <div className='container'>
                <div className='item'>
                    <h5> Navigation using React Router </h5>
                    <p> Steps to be followed </p>
                    <ol className='steps'>
                        <li>
                            <code> npm install react-router-dom </code>
                        </li>
                        <li>
                            <code>Open src/index.js and add BrowserRouter <br></br>
                                import `{` BrowserRouter `}` from 'react-router-dom'; <br></br>
                                &lt;BrowserRouter&gt; <br></br>
                                &lt;App /&gt; <br></br>
                                &lt;/BrowserRouter&gt; <br></br>
                            </code>
                        </li>
                        <li>
                            <code> Register all your routes in App.js <br></br>
                            &lt;Routes&gt; <br></br>
                            &lt;Route path="/" element=&lt;{`Home `}/&gt; /&gt; <br></br>
                            &lt;Route path="about" element=&lt;{`Navigation `} /&gt; /&gt; <br></br>
                            &lt;/Routes&gt; <br></br>
                            </code>
                        </li>
                    </ol>
                </div>
                <div className='item'>
                    <h5> Navigation using &lt;Link&gt; component </h5>
                    <code>
                        &lt;Link to="/"&gt; LinkToRedirect &lt;/Link&gt;
                    </code>
                    <br></br>
                    <br></br>
                    <Link to="/">Home </Link>
                </div>
                <div className='item'>
                    <h5> Navigation using useNavigate hook </h5>
                    <code>
                        import {useNavigate} from "react-router-dom"; <br></br>
                        let navigate = useNavigate(); <br></br>
                        &lt;button onClick={`() => navigate('/')`}&gt; <br></br>
                        &nbsp; &nbsp; BtnName <br></br>
                        &lt;/button&gt;<br></br>
                    </code>
                    <br></br>
                    <button onClick={() => navigate('/')}>Click to go back to Home </button>
                </div>
            </div>
        </>
    );
}