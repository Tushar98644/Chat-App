'use client'
import axios from 'axios';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
    const router = useRouter();

    const loginwithgoogle = () => {
        router.push('http://localhost:8000/auth/google');
    }

    return ( 
        <div className="">
              <button onClick={loginwithgoogle}>login</button>
        </div>
     );
}
 
export default LoginPage;